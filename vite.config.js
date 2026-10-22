import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import contactHandler from './api/contact.js';

function localContactApi(localEnv) {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      for (const key of ['BREVO_API_KEY', 'BREVO_SENDER_EMAIL', 'COMPANY_EMAIL']) {
        if (!process.env[key] && localEnv[key]) {
          process.env[key] = localEnv[key];
        }
      }

      server.middlewares.use('/api/contact', async (request, response) => {
        const apiResponse = {
          status(code) {
            response.statusCode = code;
            return this;
          },
          setHeader(name, value) {
            response.setHeader(name, value);
          },
          json(body) {
            response.setHeader('Content-Type', 'application/json; charset=utf-8');
            response.end(JSON.stringify(body));
            return this;
          },
        };

        try {
          let body;
          if (request.method === 'POST') {
            const chunks = [];
            let bodyBytes = 0;
            for await (const chunk of request) {
              bodyBytes += chunk.length;
              if (bodyBytes > 10_000) {
                apiResponse.status(413).json({ error: 'The form submission is too large.' });
                return;
              }
              chunks.push(chunk);
            }

            try {
              body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            } catch {
              apiResponse.status(400).json({ error: 'Please submit the form using valid JSON.' });
              return;
            }
          }

          await contactHandler({
            method: request.method,
            headers: request.headers,
            body,
          }, apiResponse);
        } catch (error) {
          console.error('Local contact API failed.', error);
          if (!response.headersSent) {
            apiResponse.status(500).json({ error: 'The contact service encountered an unexpected error.' });
          }
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const localEnv = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), localContactApi(localEnv)],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three')) {
                return 'vendor-three';
              }
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
            }
          },
        },
      },
    },
  };
});
