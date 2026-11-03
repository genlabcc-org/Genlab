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
  alternateName: ['GenLab AI', 'GenLabcc', 'GenLab India'],
  slogan: 'Agentic AI Platform Built by Gen Z',
  url: 'https://genlab.cc',
  logo: {
    '@type': 'ImageObject',
    url: 'https://genlab.cc/genlab/logo-white.svg',
  },
  description:
    'GenLab is an agentic AI platform built by Gen Z that helps businesses with AI-powered product research and branding.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Nagercoil, Tamil Nadu, India',
  },
  knowsAbout: [
    'Custom Software Development',
    'Billing & POS Software',
    'ERP & Inventory Management Systems',
    'Artificial Intelligence',
    'Agentic AI',
    'Autonomous Multi-Agent Systems',
    'Large Language Models',
    'Retrieval-Augmented Generation (RAG)',
    'Full-Stack Web Development',
    'Mobile Application Engineering',
    'Cloud Systems & DevOps',
    'Digital Brand Strategy',
  ],
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
    title: 'GenLab – AI & Software Development Company in Nagercoil, Kanyakumari',
    description:
      'GenLab is a premier software development and agentic AI platform in Nagercoil, Kanyakumari and Bengaluru. We build custom software, billing & POS systems, web & mobile apps, and autonomous AI agents.',
    keywords:
      'Software Development Company in Nagercoil, Billing Software Nagercoil, POS Billing Software Kanyakumari, AI Company in Nagercoil, Custom Software Tamil Nadu, Web Development Company Nagercoil, Mobile App Developers Kanyakumari, Agentic AI, GenLab',
    canonical: 'https://genlab.cc/',
    content: `
      <header class="sr-only"><h1>GenLab – Software Development &amp; Agentic AI Platform</h1></header>
      <main>
        <section>
          <h2>Custom Software Development, Billing Systems &amp; Agentic AI</h2>
          <p>GenLab is a premier software development company and agentic AI platform built by Gen Z. We build custom enterprise software, GST billing &amp; POS systems, mobile apps, web applications, and autonomous AI agents. Based in Nagercoil (Kanyakumari district, Tamil Nadu) and Bengaluru, Karnataka, India.</p>
          <p>Phone: +91 9994535120 | Email: info@genlab.cc</p>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>What does GenLab do?</dt>
            <dd>GenLab is a software development and AI company based in Nagercoil and Bengaluru, India. We build custom enterprise software, billing &amp; POS systems, custom web and mobile apps, AI and agentic solutions, cloud infrastructure, and product designs for startups and enterprises.</dd>
            <dt>Do you build billing software and POS systems?</dt>
            <dd>Yes. We build custom GST-compliant billing software, point-of-sale (POS) systems, barcode inventory tracking, and accounting platforms for retail shops, supermarkets, and wholesale businesses across Nagercoil and Tamil Nadu.</dd>
            <dt>Why work with a Gen Z-led team?</dt>
            <dd>We're native to the tools and habits shaping modern products: AI-assisted development, fast iteration and mobile-first design. Combined with disciplined engineering practices, that means shorter timelines without cutting corners.</dd>
            <dt>How long does it take to build custom software or an MVP?</dt>
            <dd>Timelines depend on scope. Most custom billing setups, web apps, and AI MVPs are delivered in 2 to 4 weeks. After a short discovery call, we'll provide a clear plan and timeline.</dd>
            <dt>Do you work with international clients?</dt>
            <dd>Yes. We work across time zones, with overlap hours, async updates and weekly demos as standard.</dd>
            <dt>What technologies do you use?</dt>
            <dd>React, Next.js, Node.js, Python, Flutter, React Native, AWS, GCP, Azure, PostgreSQL, MongoDB, and modern LLM platforms.</dd>
          </dl>
        </section>
      </main>
    `,
  },
  {
    path: '/ai-company-nagercoil',
    title: 'Software Development & AI Company in Nagercoil, Kanyakumari | GenLab',
    description:
      'Looking for a software development company or billing software in Nagercoil, Kanyakumari? GenLab delivers custom software, billing & POS systems, web & mobile apps, and agentic AI.',
    keywords:
      'Software Development Company in Nagercoil, Billing Software Nagercoil, POS Billing Software Kanyakumari, AI Company in Nagercoil, Custom Software Tamil Nadu, Web Development Company Nagercoil, Mobile App Developers Kanyakumari, ERP Software Nagercoil, Agentic AI, GenLab',
    canonical: 'https://genlab.cc/ai-company-nagercoil',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        sharedOrganization,
        {
          '@type': 'WebPage',
          '@id': 'https://genlab.cc/ai-company-nagercoil#webpage',
          url: 'https://genlab.cc/ai-company-nagercoil',
          name: 'Software Development & AI Company in Nagercoil, Kanyakumari | GenLab',
          description:
            'GenLab is the premier software development and AI company in Nagercoil & Kanyakumari district, Tamil Nadu. Engineering custom software, billing & POS systems, web & mobile apps, and agentic AI.',
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
                name: 'Software Development & AI Company in Nagercoil',
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
          name: 'GenLab – Software Development & AI Company in Nagercoil',
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
            'Custom Software Development',
            'Billing & POS Software',
            'ERP & Inventory Management Systems',
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
          '@id': 'https://genlab.cc/ai-company-nagercoil#service-software',
          name: 'Custom Software & Billing Systems Development',
          provider: {
            '@id': 'https://genlab.cc/#localbusiness',
          },
          serviceType: 'Software Development and Billing Systems',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Kanyakumari District',
          },
          description:
            'Custom business software, GST billing & POS systems, ERP software, and mobile applications developed in Nagercoil, Tamil Nadu.',
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
              name: 'Does GenLab develop billing software and POS systems in Nagercoil?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. GenLab builds custom, modern GST billing software and Point-of-Sale (POS) systems tailored for supermarkets, retail clothing stores, hardware shops, electronics stores, pharmacies, restaurants, and wholesale distributors in Nagercoil and Kanyakumari district. Our billing software includes barcode scanning, thermal receipt printing, stock alerts, GST reporting, and cloud or offline support.',
              },
            },
            {
              '@type': 'Question',
              name: 'What types of custom software development does GenLab provide?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide complete software engineering including custom enterprise ERP & CRM systems, hospital & school management platforms, custom booking engines, cloud dashboards, web applications, and iOS/Android mobile apps, along with cutting-edge agentic AI solutions.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why choose GenLab for software development in Nagercoil and Kanyakumari?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'GenLab is an AI-first software company established directly in Nagercoil, combining modern engineering speed with disciplined craft. Our Gen Z engineering team builds fast, cloud-connected, secure systems using modern stacks (React, Python, Node, Flutter) and AI-assisted workflows, providing superior user experiences with local support right here in Nagercoil.',
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
              name: 'How fast can GenLab develop custom software or billing systems?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Depending on the scope, we develop functional software prototypes, custom billing setups, and production-ready MVPs in as little as 2 to 4 weeks. Following a discovery call, we outline clear milestone deliverables and delivery timelines.',
              },
            },
          ],
        },
      ],
    },
    content: `
      <main class="works-section">
        <header class="works-intro">
          <p class="works-intro-tag">Southern Tamil Nadu · Software &amp; AI Engineering Hub</p>
          <h1 class="works-intro-title">Software Development, Billing Systems &amp; AI Company in Nagercoil | GenLab</h1>
          <p class="works-intro-desc">
            GenLab is a full-cycle software development company and agentic AI platform based in Nagercoil, Kanyakumari district, Tamil Nadu and Bengaluru, Karnataka. We engineer custom enterprise software, GST billing &amp; POS systems, mobile apps, web applications, and autonomous AI agents for ambitious businesses and startups.
          </p>
        </header>

        <section>
          <h2>Custom Software Development &amp; Billing Systems in Nagercoil</h2>
          <ul>
            <li><strong>Custom Billing &amp; POS Software:</strong> GST-compliant retail invoicing, barcode scanning, stock tracking, and multi-counter POS systems.</li>
            <li><strong>Custom Enterprise ERP &amp; CRM:</strong> Tailored business management systems, hospital/school software, and operational dashboards.</li>
            <li><strong>Agentic AI &amp; Autonomous Workflows:</strong> Multi-agent autonomous workflows and intelligent decision loops.</li>
            <li><strong>Full-Stack Web &amp; Mobile App Development:</strong> Production-ready web portals and iOS/Android mobile apps built with React, Node.js, Python, and Flutter.</li>
            <li><strong>Enterprise LLM &amp; Private RAG Pipelines:</strong> Fine-tuned language models and private vector retrieval engines.</li>
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
            <dt>Does GenLab develop billing software and POS systems in Nagercoil?</dt>
            <dd>Yes. GenLab builds custom, modern GST billing software and Point-of-Sale (POS) systems tailored for supermarkets, retail clothing stores, hardware shops, electronics stores, pharmacies, restaurants, and wholesale distributors in Nagercoil and Kanyakumari district.</dd>

            <dt>What types of custom software development does GenLab provide?</dt>
            <dd>We provide complete software engineering including custom enterprise ERP &amp; CRM systems, hospital &amp; school management platforms, custom booking engines, cloud dashboards, web applications, and iOS/Android mobile apps, along with cutting-edge agentic AI solutions.</dd>

            <dt>Why choose GenLab for software development in Nagercoil and Kanyakumari?</dt>
            <dd>GenLab is an AI-first software company established directly in Nagercoil, combining Silicon-caliber technical expertise with deep local roots. Our Gen Z engineering team is native to modern tools and rapid deployment frameworks, ensuring world-class results without agency overhead.</dd>

            <dt>Where is GenLab’s Nagercoil office located?</dt>
            <dd>Our physical office is located at 121/C, Chetti Kulam, Simon Nagar / Kottar-Parvathipuram Road, Nagercoil, Tamil Nadu 629001, India. You are welcome to schedule a visit or reach out directly at +91 9994535120.</dd>

            <dt>Do you work with local businesses as well as international clients?</dt>
            <dd>Yes. We actively empower local enterprises, retail brands, healthcare providers, and educational institutions in Kanyakumari district and Tamil Nadu, while also serving high-growth startups and enterprises in Bengaluru, the US, Europe, and the Middle East.</dd>

            <dt>How fast can GenLab develop custom software or billing systems?</dt>
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
