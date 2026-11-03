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

const sharedOrganization = {
  '@type': 'Organization',
  '@id': 'https://genlab.cc/#organization',
  name: 'GenLab',
  url: 'https://genlab.cc',
  logo: {
    '@type': 'ImageObject',
    url: 'https://genlab.cc/genlab/logo-white.svg',
  },
  description:
    'GenLab is an agentic AI platform built by Gen Z that helps businesses with AI-powered product research and branding.',
  sameAs: [
    'https://www.instagram.com/genlab.cc/',
    'https://www.linkedin.com/company/genlabcc',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91 9994535120',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil'],
    },
  ],
};

const routes = [
  {
    path: '/',
    title: 'GenLab – AI Company in Nagercoil, Kanyakumari | Agentic AI',
    description:
      'GenLab is an agentic AI platform built by Gen Z in Nagercoil, Kanyakumari and Bengaluru. We help businesses with AI-powered product research and branding.',
    keywords:
      'AI Company in Nagercoil, AI Company Kanyakumari, Agentic AI, Artificial Intelligence Nagercoil, Software Development Company Nagercoil, AI Startup Tamil Nadu, LLM Development India, GenLab',
    canonical: 'https://genlab.cc/',
    content: `
      <header class="sr-only"><h1>GenLab – Agentic AI Platform Built by Gen Z</h1></header>
      <main>
        <section>
          <h2>AI-First Software & Agentic AI Platform</h2>
          <p>GenLab is an agentic AI platform built by Gen Z that helps businesses with AI-powered product research and branding. Based in Nagercoil (Kanyakumari district, Tamil Nadu) and Bengaluru, Karnataka, India.</p>
          <p>Phone: +91 9994535120 | Email: info@genlab.cc</p>
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
    description:
      'Looking for a premier AI company in Nagercoil, Kanyakumari? GenLab delivers agentic AI platforms, autonomous workflows, and modern digital branding across Tamil Nadu.',
    keywords:
      'AI Company in Nagercoil, AI Company Kanyakumari, AI software development Nagercoil, Agentic AI platform, GenLab Nagercoil, software company Kanyakumari, Tamil Nadu AI company, best AI startup Nagercoil',
    canonical: 'https://genlab.cc/ai-company-nagercoil',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/ai-company-nagercoil#webpage',
          url: 'https://genlab.cc/ai-company-nagercoil',
          name: 'AI Company in Nagercoil, Kanyakumari | GenLab Agentic AI',
          description:
            'GenLab is the premier AI company in Nagercoil & Kanyakumari district, Tamil Nadu. Engineering agentic AI systems, modern software, and digital branding.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genlab.cc/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'AI Company in Nagercoil',
                item: 'https://genlab.cc/ai-company-nagercoil',
              },
            ],
          },
          isPartOf: {
            '@id': 'https://genlab.cc/#website',
          },
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://genlab.cc/#localbusiness',
          name: 'GenLab – AI Company in Nagercoil',
          url: 'https://genlab.cc/ai-company-nagercoil',
          image: 'https://genlab.cc/og-image.png',
          telephone: '+91 9994535120',
          email: 'info@genlab.cc',
          priceRange: '$$',
          parentOrganization: {
            '@id': 'https://genlab.cc/#organization',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road',
            addressLocality: 'Nagercoil',
            addressRegion: 'Tamil Nadu',
            postalCode: '629001',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 8.1833,
            longitude: 77.4119,
          },
          hasMap: 'https://maps.google.com/?q=8.1833,77.4119',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:00',
            },
          ],
          areaServed: [
            { '@type': 'City', name: 'Nagercoil' },
            { '@type': 'AdministrativeArea', name: 'Kanyakumari' },
            { '@type': 'AdministrativeArea', name: 'Kanyakumari district' },
            { '@type': 'City', name: 'Marthandam' },
            { '@type': 'City', name: 'Thuckalay' },
            { '@type': 'City', name: 'Colachel' },
            { '@type': 'City', name: 'Tirunelveli' },
            { '@type': 'City', name: 'Bengaluru' },
          ],
          knowsAbout: [
            'Agentic AI Solutions',
            'Artificial Intelligence Development',
            'Autonomous Multi-Agent Systems',
            'Custom LLM Integration',
            'Full-Stack Web Engineering',
            'Mobile App Development',
            'Digital Brand Strategy',
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://genlab.cc/ai-company-nagercoil#service',
          name: 'Artificial Intelligence & Agentic Software Development',
          provider: {
            '@id': 'https://genlab.cc/#localbusiness',
          },
          serviceType: 'AI and Software Engineering',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Kanyakumari District',
          },
          description:
            'Full-lifecycle artificial intelligence development, custom LLM solutions, multi-agent systems, and enterprise web applications based in Nagercoil, Tamil Nadu.',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://genlab.cc/ai-company-nagercoil#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Why choose GenLab as your AI company in Nagercoil and Kanyakumari?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'GenLab is an AI-first software company established directly in Nagercoil, combining Silicon-caliber technical expertise with deep local roots. Our Gen Z engineering team is native to modern AI tools, agentic architectures, and rapid deployment frameworks, ensuring world-class results without agency overhead.',
              },
            },
            {
              '@type': 'Question',
              name: 'What types of AI and software solutions does GenLab build?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We engineer autonomous AI agents, enterprise LLM integrations, custom RAG search pipelines, full-stack web platforms (React, Next.js, Node, Python), mobile applications (Flutter, React Native), and comprehensive digital branding systems.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where is GenLab’s Nagercoil office located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our physical office is located at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India. You are welcome to schedule a visit or reach out directly at +91 9994535120.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do you work with local businesses as well as international clients?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We actively empower local enterprises, retail brands, healthcare providers, and educational institutions in Kanyakumari district and Tamil Nadu, while also serving high-growth startups and enterprises in Bengaluru, the US, Europe, and the Middle East.',
              },
            },
            {
              '@type': 'Question',
              name: 'How fast can GenLab develop and deploy an AI solution or MVP?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Depending on the scope, we develop functional proof-of-concept AI agents and production-ready MVPs in as little as 2 to 4 weeks. Following a discovery call, we outline clear milestone deliverables and delivery timelines.',
              },
            },
          ],
        },
      ],
    },
    content: `
      <main class="works-section">
        <header class="works-intro">
          <p class="works-intro-tag">Southern Tamil Nadu · Premier AI Hub</p>
          <h1 class="works-intro-title">AI Company in Nagercoil &amp; Kanyakumari District | GenLab</h1>
          <p class="works-intro-desc">
            GenLab is an agentic AI platform and full-stack software company built by Gen Z with active operations in Nagercoil, Kanyakumari district, Tamil Nadu and Bengaluru, Karnataka. We engineer autonomous AI agents, machine learning workflows, modern web platforms, and digital product branding for forward-thinking startups and regional enterprises.
          </p>
        </header>

        <section>
          <h2>Comprehensive AI &amp; Software Capabilities</h2>
          <ul>
            <li><strong>Agentic AI &amp; Autonomous Systems:</strong> Custom multi-agent workflows and autonomous decision loops.</li>
            <li><strong>AI Product Research:</strong> Deep semantic data extraction, market intelligence, and competitor synthesis.</li>
            <li><strong>Modern Web &amp; Mobile Engineering:</strong> High-speed platforms built with React, Node.js, Python, and Flutter.</li>
            <li><strong>Enterprise LLM &amp; Private RAG Pipelines:</strong> Fine-tuned language models and private vector retrieval engines.</li>
            <li><strong>Rapid AI MVP Development:</strong> Validated, production-ready proof-of-concept software delivered in weeks.</li>
            <li><strong>Digital Branding &amp; UI/UX Design:</strong> High-conversion design systems, storefronts, and brand identity.</li>
          </ul>
        </section>

        <section>
          <h2>Serving Nagercoil, Kanyakumari District &amp; Beyond</h2>
          <p>
            We actively support organizations across Nagercoil (Simon Nagar, Chetti Kulam, Kottar, Vadasery, Asaripallam, Parvathipuram), Marthandam, Thuckalay, Colachel, Kanyakumari, Tirunelveli, and Bengaluru.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>Why choose GenLab as your AI company in Nagercoil and Kanyakumari?</dt>
            <dd>GenLab is an AI-first software company established directly in Nagercoil, combining Silicon-caliber technical expertise with deep local roots. Our Gen Z engineering team is native to modern AI tools, agentic architectures, and rapid deployment frameworks, ensuring world-class results without agency overhead.</dd>

            <dt>What types of AI and software solutions does GenLab build?</dt>
            <dd>We engineer autonomous AI agents, enterprise LLM integrations, custom RAG search pipelines, full-stack web platforms (React, Next.js, Node, Python), mobile applications (Flutter, React Native), and comprehensive digital branding systems.</dd>

            <dt>Where is GenLab’s Nagercoil office located?</dt>
            <dd>Our physical office is located at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India. You are welcome to schedule a visit or reach out directly at +91 9994535120.</dd>

            <dt>Do you work with local businesses as well as international clients?</dt>
            <dd>Yes. We actively empower local enterprises, retail brands, healthcare providers, and educational institutions in Kanyakumari district and Tamil Nadu, while also serving high-growth startups and enterprises in Bengaluru, the US, Europe, and the Middle East.</dd>

            <dt>How fast can GenLab develop and deploy an AI solution or MVP?</dt>
            <dd>Depending on the scope, we develop functional proof-of-concept AI agents and production-ready MVPs in as little as 2 to 4 weeks. Following a discovery call, we outline clear milestone deliverables and delivery timelines.</dd>
          </dl>
        </section>

        <section>
          <h2>Contact GenLab Nagercoil Office</h2>
          <p>Address: 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India.</p>
          <p>Phone / WhatsApp: +91 9994535120</p>
          <p>Email: info@genlab.cc</p>
          <p>Hours: Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
        </section>
      </main>
    `,
  },
  {
    path: '/work',
    title: 'Our Work & Case Studies | GenLab – AI & Software Agency',
    description:
      'Explore client projects, case studies, and digital products engineered by GenLab. From autonomous agentic workflows to enterprise platforms and creative branding.',
    keywords:
      'GenLab case studies, AI client projects, software agency portfolio, agentic AI examples, web development case studies',
    canonical: 'https://genlab.cc/work',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/work#webpage',
          url: 'https://genlab.cc/work',
          name: 'Our Work & Case Studies | GenLab',
          description:
            'Explore client projects, case studies, and digital products engineered by GenLab.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genlab.cc/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Work',
                item: 'https://genlab.cc/work',
              },
            ],
          },
        },
      ],
    },
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
    description:
      'GenLab Launchpad connects ambitious learners with hands-on AI training, industry mentorship, hackathons, and career placement across premier colleges in India.',
    keywords:
      'AI Launchpad, AI career accelerator, student startup incubation, tech mentorship Tamil Nadu, GenLab hackathon',
    canonical: 'https://genlab.cc/launchpad',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/launchpad#webpage',
          url: 'https://genlab.cc/launchpad',
          name: 'GenLab Launchpad – AI Career Accelerator & Student Incubation',
          description:
            'GenLab Launchpad connects ambitious learners with hands-on AI training, industry mentorship, hackathons, and career placement.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genlab.cc/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Launchpad',
                item: 'https://genlab.cc/launchpad',
              },
            ],
          },
        },
      ],
    },
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
    description:
      'Learn modern engineering, machine learning, and AI agent architectures through practical, project-first courses designed by industry practitioners.',
    keywords:
      'AI upskilling courses, machine learning curriculum, software engineering bootcamp, agentic AI course India',
    canonical: 'https://genlab.cc/upskilling',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/upskilling#webpage',
          url: 'https://genlab.cc/upskilling',
          name: 'GenLab Upskilling – Industry-Grade AI & Developer Programs',
          description:
            'Learn modern engineering, machine learning, and AI agent architectures through practical courses.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genlab.cc/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Upskilling',
                item: 'https://genlab.cc/upskilling',
              },
            ],
          },
        },
      ],
    },
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
    description:
      'Meet the team behind GenLab. Gen Z software engineers, AI developers, and designers building the future of autonomous agentic platforms from India.',
    keywords:
      'GenLab team, AI founders India, Gen Z developers, AI engineers Nagercoil, Bengaluru software team',
    canonical: 'https://genlab.cc/team',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/team#webpage',
          url: 'https://genlab.cc/team',
          name: 'Meet the Team | GenLab',
          description:
            'Meet the team behind GenLab. Gen Z software engineers, AI developers, and designers.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genlab.cc/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Team',
                item: 'https://genlab.cc/team',
              },
            ],
          },
        },
      ],
    },
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

  // Replace Keywords if available
  if (route.keywords) {
    html = html.replace(
      /<meta name="keywords" content=".*?" \/>/s,
      `<meta name="keywords" content="${route.keywords}" />`
    );
  }

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

  // Replace JSON-LD schema if route-specific schema provided
  if (route.schema) {
    html = html.replace(
      /<script type="application\/ld\+json">.*?<\/script>/s,
      `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n    </script>`
    );
  }

  // Inject content inside root wrapped with SEO accessibility container
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><div class="prerender-seo-content">${route.content.trim()}</div></div>`
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
