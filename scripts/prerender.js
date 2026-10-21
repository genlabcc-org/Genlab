import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const routes = [
  {
    path: '/',
    title: 'GenLab – AI Company in Nagercoil, Kanyakumari | Agentic AI',
    description: 'GenLab is an agentic AI platform built by Gen Z in Nagercoil, Kanyakumari and Bengaluru. We help businesses with AI-powered product research and branding.',
    canonical: 'https://genlab.cc/',
    content: `
      <header class="sr-only"><h1>GenLab – Agentic AI Platform Built by Gen Z</h1></header>
      <main>
        <section>
          <h2>AI-First Software & Agentic AI Platform</h2>
          <p>GenLab is an agentic AI platform built by Gen Z that helps businesses with AI-powered product research and branding. Based in Nagercoil (Kanyakumari district, Tamil Nadu) and Bengaluru, Karnataka, India.</p>
          <p>Phone: +91 9994535120</p>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>What does GenLab do?</dt>
            <dd>GenLab is a software development and AI company based in Nagercoil and Bengaluru, India. We build custom web and mobile apps, AI and agentic solutions, cloud infrastructure and product designs for startups and enterprises.</dd>
            <dt>Why work with a Gen Z-led team?</dt>
            <dd>We're native to the tools and habits shaping modern products: AI-assisted development, fast iteration and mobile-first design. Combined with disciplined engineering practices, that means shorter timelines without cutting corners.</dd>
            <dt>How long does it take to build an MVP?</dt>
            <dd>MVP timelines depend on scope. After a short discovery call, we'll provide a clear plan and timeline.</dd>
            <dt>Do you work with international clients?</dt>
            <dd>Yes. We work across time zones, with overlap hours, async updates and weekly demos as standard.</dd>
            <dt>What technologies do you use?</dt>
            <dd>React, Next.js, Node.js, Python, Flutter, React Native, AWS, GCP, Azure and modern LLM platforms. We pick the stack that fits your product, not the one we prefer.</dd>
            <dt>Can you take over an existing codebase?</dt>
            <dd>Yes. We start with a code and architecture review, then stabilize, document and extend what you have.</dd>
          </dl>
        </section>
      </main>
    `,
  },
  {
    path: '/ai-company-nagercoil',
    title: 'AI Company in Nagercoil, Kanyakumari | GenLab Agentic AI',
    description: 'Looking for a premier AI company in Nagercoil, Kanyakumari? GenLab delivers agentic AI platforms, autonomous workflows, and modern digital branding across Tamil Nadu.',
    canonical: 'https://genlab.cc/ai-company-nagercoil',
    content: `
      <main class="works-section">
        <header class="works-intro">
          <p class="works-intro-tag">Local AI & Branding Agency</p>
          <h1 class="works-intro-title">AI Company in Nagercoil & Kanyakumari District</h1>
          <p class="works-intro-desc">
            GenLab is an agentic AI platform built by Gen Z with active operations in Nagercoil, Kanyakumari district, Tamil Nadu and Bengaluru, Karnataka. We engineer autonomous AI agents, machine learning workflows, modern web platforms, and digital product branding for forward-thinking startups and regional enterprises.
          </p>
        </header>
        <section>
          <h2>Our Core Capabilities</h2>
          <ul>
            <li><strong>Agentic AI Solutions:</strong> Custom multi-agent systems and intelligent automation.</li>
            <li><strong>AI-Powered Product Research:</strong> Data discovery and competitive market intelligence.</li>
            <li><strong>Modern Web & App Engineering:</strong> High-speed platforms built with React, Node, and Python.</li>
            <li><strong>Brand Strategy & Identity:</strong> Creative direction and UI/UX design tailored for modern markets.</li>
          </ul>
        </section>
        <section>
          <h2>Contact GenLab Nagercoil Office</h2>
          <p>Address: 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India.</p>
          <p>Phone: +91 9994535120</p>
          <p>Area Served: Nagercoil, Kanyakumari, Kanyakumari District, Bengaluru, and across India.</p>
        </section>
      </main>
    `,
  },
  {
    path: '/work',
    title: 'Our Work & Case Studies | GenLab – AI & Software Agency',
    description: 'Explore client projects, case studies, and digital products engineered by GenLab. From autonomous agentic workflows to enterprise platforms and creative branding.',
    canonical: 'https://genlab.cc/work',
    content: `
      <main class="work-page">
        <header>
          <h1>Selected Work & Case Studies</h1>
          <p>Explore software, AI implementations, and branding systems engineered by GenLab.</p>
        </header>
      </main>
    `,
  },
  {
    path: '/launchpad',
    title: 'GenLab Launchpad – AI Career Accelerator & Student Incubation',
    description: 'GenLab Launchpad connects ambitious learners with hands-on AI training, industry mentorship, hackathons, and career placement across premier colleges in India.',
    canonical: 'https://genlab.cc/launchpad',
    content: `
      <main class="launchpad-view-page">
        <header>
          <h1>GenLab Launchpad</h1>
          <p>Your First Day to Your First Offer. AI career acceleration, campus bootcamps, and early-stage student startup incubation.</p>
        </header>
        <section>
          <h2>College Partners & National Events</h2>
          <p>Partnering with premier universities across Tamil Nadu and India for AI summits, hackathons, and corporate mentorship.</p>
        </section>
      </main>
    `,
  },
  {
    path: '/upskilling',
    title: 'GenLab Upskilling – Industry-Grade AI & Developer Programs',
    description: 'Learn modern engineering, machine learning, and AI agent architectures through practical, project-first courses designed by industry practitioners.',
    canonical: 'https://genlab.cc/upskilling',
    content: `
      <main class="upskilling-view-page">
        <header>
          <h1>GenLab Upskilling Programs</h1>
          <p>Learn real engineering. Master AI systems, full-stack development, and agentic workflows through hands-on industry curricula.</p>
        </header>
      </main>
    `,
  },
  {
    path: '/team',
    title: 'Meet the Team | GenLab – Gen Z AI Builders & Engineers',
    description: 'Meet the team behind GenLab. Gen Z software engineers, AI developers, and designers building the future of autonomous agentic platforms from India.',
    canonical: 'https://genlab.cc/team',
    content: `
      <main>
        <header>
          <h1>Meet the Team Behind GenLab</h1>
          <p>Engineers, researchers, and creators building agentic AI and transformative software from Nagercoil and Bengaluru.</p>
        </header>
      </main>
    `,
  },
];

routes.forEach((route) => {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace OG URL, Title, Description
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/s,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace Twitter URL, Title, Description
  html = html.replace(
    /<meta name="twitter:url" content=".*?" \/>/s,
    `<meta name="twitter:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/s,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Inject content inside root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${route.content.trim()}</div>`
  );

  if (route.path === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log(`Prerendered: / -> dist/index.html`);
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
    console.log(`Prerendered: ${route.path} -> dist${route.path}/index.html`);
  }
});

console.log('Pre-rendering completed successfully.');
