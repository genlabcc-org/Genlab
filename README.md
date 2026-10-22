# React + Vite

## Contact form email delivery

The contact form sends submissions through the Vercel serverless function at `api/contact.js`. Configure these environment variables in the Vercel project settings for each deployment environment:

- `BREVO_API_KEY`: Brevo API key. Keep it server-side; do not prefix it with `VITE_`.
- `BREVO_SENDER_EMAIL`: Sender address verified in Brevo.
- `COMPANY_EMAIL`: Inbox that receives contact form submissions.

Set the same variables in the ignored local `.env` file when running locally with `vercel dev`. Never commit `.env` or expose the API key in client-side code.

The form reports when Brevo accepts a message for processing. This synchronous response does not confirm delivery to the recipient's inbox; use Brevo's transactional email logs to confirm delivered, bounced, or blocked status.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
