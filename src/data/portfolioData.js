// Authentic Editorial & Technical Data for Madheshwaran T

export const PROFILE = {
  name: "MADHESHWARAN",
  fullName: "Madheshwaran T",
  shortName: "MT",
  tagline: "Freelance Full Stack Developer",
  role: "Full Stack Developer",
  education: "B.Sc. Computer Science",
  college: "G.T.N. Arts College, Dindigul, Tamil Nadu",
  passion: "Building Digital Experiences",
  location: "Tamil Nadu, India · Available Worldwide",
  status: "AVAILABLE FOR SELECT PROJECTS",
  
  heroHeading: "MADHESHWARAN",
  heroSubtitle: "Freelance Full Stack Developer.",
  heroScrollText: "SCROLL TO ENTER ↓",

  introStatement: "I craft high-performance digital architectures where precision engineering meets cinematic visual design. With deep expertise across the JavaScript ecosystem and MERN stack, I transform bold concepts into resilient, scalable web solutions.",

  email: "madheshwarant2006@gmail.com",
  phone: "+91 9345724023",
  phoneFormatted: "+91 93457 24023",
  whatsappUrl: "https://wa.me/919345724023?text=Hi%20Madheshwaran,%20I'd%20like%20to%20discuss%20a%20project.",
  githubUrl: "https://github.com/madheshwarant-fullstack-dev",
  linkedinUrl: "https://www.linkedin.com/in/madheshwaran556",
  avatarUrl: "/madheshwaran.png",
  resumeUrl: "/Madheshwaran_T_Resume.pdf",
};

export const EDITOR_FILES = [
  {
    id: "about",
    filename: "ABOUT.jsx",
    tabTitle: "ABOUT.jsx",
    extension: "jsx",
    type: "react",
    path: "src/components/About.jsx",
    description: "Personal Dossier, Academic Degree & Background",
    codeLines: [
      { text: "// 01 // ABOUT THE DEVELOPER", type: "comment" },
      { text: "import React from 'react';", type: "import" },
      { text: "import { ProfileAvatar, CredentialBadge } from '@/components/ui';", type: "import" },
      { text: "", type: "empty" },
      { text: "export const About = () => {", type: "keyword" },
      { text: "  const developer = {", type: "keyword" },
      { text: '    name: "Madheshwaran T",', type: "string" },
      { text: '    education: "B.Sc. Computer Science",', type: "string" },
      { text: '    college: "G.T.N. Arts College, Dindigul",', type: "string" },
      { text: '    role: "Full Stack Developer",', type: "string" },
      { text: '    passion: "Building Digital Experiences",', type: "string" },
      { text: '    location: "Tamil Nadu, India · Worldwide"', type: "string" },
      { text: "  };", type: "plain" },
      { text: "", type: "empty" },
      { text: "  return (", type: "keyword" },
      { text: '    <section className="about-editorial-dossier">', type: "tag" },
      { text: '      <h2 className="headline">', type: "tag" },
      { text: "        Building with purpose. Designing with intention.", type: "text" },
      { text: "      </h2>", type: "tag" },
      { text: '      <p className="narrative">', type: "tag" },
      { text: "        Engineering robust, component-driven client interfaces", type: "text" },
      { text: "        harmonized with resilient Node.js backends and secure databases.", type: "text" },
      { text: "      </p>", type: "tag" },
      { text: '      <div className="credentials-grid">', type: "tag" },
      { text: "        <CredentialBadge title={developer.education} verified />", type: "tag" },
      { text: '        <CredentialBadge title="Best Intern Award Winner" />', type: "tag" },
      { text: "      </div>", type: "tag" },
      { text: "    </section>", type: "tag" },
      { text: "  );", type: "plain" },
      { text: "};", type: "keyword" },
      { text: "", type: "empty" },
      { text: "export default About;", type: "keyword" },
    ]
  },
  {
    id: "skills",
    filename: "SKILLS.js",
    tabTitle: "SKILLS.js",
    extension: "js",
    type: "js",
    path: "src/data/skills.js",
    description: "Core Stack: Frontend, Backend, Database & Tools",
    codeLines: [
      { text: "// 02 // TECHNICAL ECOSYSTEM", type: "comment" },
      { text: "export const techStack = {", type: "keyword" },
      { text: "  frontend: [", type: "key" },
      { text: '    "HTML", "CSS", "JavaScript",', type: "string" },
      { text: '    "React.js", "Bootstrap"', type: "string" },
      { text: "  ],", type: "plain" },
      { text: "  backend: [", type: "key" },
      { text: '    "Node.js", "Express.js", "REST APIs"', type: "string" },
      { text: "  ],", type: "plain" },
      { text: "  database: [", type: "key" },
      { text: '    "MongoDB", "Mongoose", "MySQL"', type: "string" },
      { text: "  ],", type: "plain" },
      { text: "  tools: [", type: "key" },
      { text: '    "Git", "GitHub", "VS Code", "Postman"', type: "string" },
      { text: "  ]", type: "plain" },
      { text: "};", type: "plain" },
      { text: "", type: "empty" },
      { text: "// Architectural Quality Standards", type: "comment" },
      { text: "export const engineeringPrinciples = {", type: "keyword" },
      { text: '  cleanArchitecture: "Modular React hooks & clean controller separation",', type: "string" },
      { text: '  security: "JWT authentication, bcryptjs password hashing, role gates",', type: "string" },
      { text: '  performance: "Optimized queries, responsive layouts, 60fps animations",', type: "string" },
      { text: '  proficiencyMetrics: "Zero invented percentages; verified production builds"', type: "string" },
      { text: "};", type: "plain" },
      { text: "", type: "empty" },
      { text: "export const isReadyForProduction = () => true;", type: "keyword" },
    ]
  },
  {
    id: "services",
    filename: "SERVICES.jsx",
    tabTitle: "SERVICES.jsx",
    extension: "jsx",
    type: "react",
    path: "src/components/Services.jsx",
    description: "01 to 06 Commercial Web Solutions",
    codeLines: [
      { text: "// 03 // PROFESSIONAL SERVICE CAPABILITIES", type: "comment" },
      { text: "import React from 'react';", type: "import" },
      { text: "import { ServiceCard } from '@/components/services';", type: "import" },
      { text: "", type: "empty" },
      { text: "export const SERVICES = [", type: "keyword" },
      { text: '  { id: "01", title: "Business Website Development", lead: "Authority & qualified leads" },', type: "string" },
      { text: '  { id: "02", title: "Portfolio Website Development", lead: "Bespoke editorial storytelling" },', type: "string" },
      { text: '  { id: "03", title: "Full Stack Web Applications", lead: "Robust MERN platforms & APIs" },', type: "string" },
      { text: '  { id: "04", title: "E-commerce Website Development", lead: "Smooth cart & checkout flows" },', type: "string" },
      { text: '  { id: "05", title: "Website Redesign", lead: "Modernizing UI & performance recovery" },', type: "string" },
      { text: '  { id: "06", title: "Responsive Website Development", lead: "Pixel-perfect mobile to ultra-wide" }', type: "string" },
      { text: "];", type: "plain" },
      { text: "", type: "empty" },
      { text: "export default function Services({ onSelectService }) {", type: "keyword" },
      { text: "  return (", type: "keyword" },
      { text: '    <div className="services-editorial-grid">', type: "tag" },
      { text: "      {SERVICES.map((service) => (", type: "keyword" },
      { text: '        <ServiceCard key={service.id} service={service} onDiscuss={onSelectService} />', type: "tag" },
      { text: "      ))}", type: "keyword" },
      { text: "    </div>", type: "tag" },
      { text: "  );", type: "plain" },
      { text: "}", type: "keyword" },
    ]
  },
  {
    id: "projects",
    filename: "PROJECTS.jsx",
    tabTitle: "PROJECTS.jsx",
    extension: "jsx",
    type: "react",
    path: "src/components/Projects.jsx",
    description: "Featured Platform: Maha Creative Photography",
    codeLines: [
      { text: "// 04 // FEATURED PRODUCTION WORK", type: "comment" },
      { text: "import React from 'react';", type: "import" },
      { text: "import { BrowserMockup, GalleryViewer } from '@/components/project';", type: "import" },
      { text: "", type: "empty" },
      { text: "export const FeaturedProject = {", type: "keyword" },
      { text: '  title: "MAHA CREATIVE PHOTOGRAPHY",', type: "string" },
      { text: '  category: "Full Stack MERN Commercial Platform",', type: "string" },
      { text: '  description: "A full-stack photography business website with client authentication,', type: "string" },
      { text: '    separate admin authentication, role-based access, gallery management,', type: "string" },
      { text: '    photography packages, booking management and an admin dashboard.",', type: "string" },
      { text: "  technology: [", type: "key" },
      { text: '    "React.js", "Bootstrap", "Node.js", "Express.js",', type: "string" },
      { text: '    "MongoDB", "Mongoose", "JWT", "bcryptjs"', type: "string" },
      { text: "  ],", type: "plain" },
      { text: "  features: [", type: "key" },
      { text: '    "Client signup and login", "Admin authentication",', type: "string" },
      { text: '    "Role-based authorization", "Protected routes",', type: "string" },
      { text: '    "Gallery management", "Package management",', type: "string" },
      { text: '    "Booking management", "Admin dashboard", "Contact messages"', type: "string" },
      { text: "  ],", type: "plain" },
      { text: '  liveDemo: "https://maha-creative-photography-website.vercel.app/",', type: "string" },
      { text: '  sourceCode: "https://github.com/madheshwarant-fullstack-dev/maha-creative-photography-website"', type: "string" },
      { text: "};", type: "plain" },
      { text: "", type: "empty" },
      { text: "export default function Projects() {", type: "keyword" },
      { text: "  return <BrowserMockup project={FeaturedProject} />;", type: "tag" },
      { text: "}", type: "keyword" },
    ]
  },
  {
    id: "experience",
    filename: "EXPERIENCE.jsx",
    tabTitle: "EXPERIENCE.jsx",
    extension: "jsx",
    type: "react",
    path: "src/components/Experience.jsx",
    description: "Tamil Info Tech & Elysium Technologies Timeline",
    codeLines: [
      { text: "// 05 // PROFESSIONAL INTERNSHIP TRACK RECORD", type: "comment" },
      { text: "import React from 'react';", type: "import" },
      { text: "import { TimelineNode, CertificateViewer } from '@/components/experience';", type: "import" },
      { text: "", type: "empty" },
      { text: "export const EXPERIENCE_TIMELINE = [", type: "keyword" },
      { text: "  {", type: "plain" },
      { text: '    company: "Tamil Info Technology",', type: "string" },
      { text: '    role: "Frontend Developer Intern",', type: "string" },
      { text: '    period: "Dec 2025 — Jan 2026",', type: "string" },
      { text: '    location: "Dindigul, Tamil Nadu",', type: "string" },
      { text: '    recognition: "Best Intern Award Winner",', type: "string" },
      { text: '    certificate: "/certificates/tit-certificate.pdf"', type: "string" },
      { text: "  },", type: "plain" },
      { text: "  {", type: "plain" },
      { text: '    company: "Elysium Technologies Private Limited",', type: "string" },
      { text: '    role: "Web Development Intern",', type: "string" },
      { text: '    period: "May 2025 — Jun 2025",', type: "string" },
      { text: '    location: "Madurai, Tamil Nadu",', type: "string" },
      { text: '    certificate: "/certificates/elysium-certificate.pdf"', type: "string" },
      { text: "  }", type: "plain" },
      { text: "];", type: "plain" },
      { text: "", type: "empty" },
      { text: "export default function Experience() {", type: "keyword" },
      { text: "  return <TimelineNode records={EXPERIENCE_TIMELINE} />;", type: "tag" },
      { text: "}", type: "keyword" },
    ]
  },
  {
    id: "contact",
    filename: "CONTACT.jsx",
    tabTitle: "CONTACT.jsx",
    extension: "jsx",
    type: "react",
    path: "src/components/Contact.jsx",
    description: "Collaboration Hub, Direct Channels & Enquiry Form",
    codeLines: [
      { text: "// 06 // CLIENT CONVERSION & ENQUIRY HUB", type: "comment" },
      { text: "import React, { useState } from 'react';", type: "import" },
      { text: "import { transmitEnquiry } from '@/services/contact';", type: "import" },
      { text: "", type: "empty" },
      { text: "export const ContactCollaboration = () => {", type: "keyword" },
      { text: '  const headline = "LET\'S BUILD SOMETHING AMAZING TOGETHER.";', type: "string" },
      { text: '  const subtext = "Have a business idea or need a professional website? Let\'s turn your vision into reality.";', type: "string" },
      { text: "", type: "empty" },
      { text: "  const directChannels = {", type: "keyword" },
      { text: '    whatsapp: "https://wa.me/919345724023",', type: "string" },
      { text: '    email: "madheshwarant2006@gmail.com",', type: "string" },
      { text: '    phone: "+91 93457 24023"', type: "string" },
      { text: "  };", type: "plain" },
      { text: "", type: "empty" },
      { text: "  const actions = ['HIRE ME', 'START A PROJECT', 'WHATSAPP', 'EMAIL ME'];", type: "keyword" },
      { text: "", type: "empty" },
      { text: "  return (", type: "keyword" },
      { text: '    <EnquiryPortal headline={headline} channels={directChannels} actions={actions}>', type: "tag" },
      { text: '      <ProjectEnquiryForm fields={["Name", "Email", "Project Type", "Budget", "Description"]} />', type: "tag" },
      { text: "    </EnquiryPortal>", type: "tag" },
      { text: "  );", type: "plain" },
      { text: "};", type: "keyword" },
    ]
  }
];

export const SERVICES = [
  {
    num: "01",
    title: "Business Website Development",
    shortDesc: "High-performance, authoritative corporate platforms engineered to turn organic traffic into qualified business clients.",
    deliverables: ["Custom Brand Architecture", "Speed & Core Web Vitals Optimization", "Lead Generation Pipelines", "Responsive Viewport Adaptability"]
  },
  {
    num: "02",
    title: "Portfolio Website Development",
    shortDesc: "Immersive, bespoke creative portfolios for ambitious founders, creators, and professionals who demand a memorable presence.",
    deliverables: ["Editorial Layouts", "Interactive Motion & Code Polish", "Case Study Storytelling", "Recruiter-Ready Flow"]
  },
  {
    num: "03",
    title: "Full Stack Web Applications",
    shortDesc: "End-to-end MERN architectures with rock-solid authentication, role-based controls, relational/document databases, and robust REST APIs.",
    deliverables: ["React.js & Node.js Scalability", "MongoDB / Mongoose Schemas", "JWT Security & Access Control", "Clean Admin Dashboards"]
  },
  {
    num: "04",
    title: "E-commerce Website Development",
    shortDesc: "Frictionless digital storefronts optimized for intuitive catalog navigation, dynamic carts, and frictionless transaction journeys.",
    deliverables: ["Modular Product Catalogs", "State-Managed Carts", "Secure Order Handling", "Mobile-First UX"]
  },
  {
    num: "05",
    title: "Website Redesign",
    shortDesc: "Modernizing legacy web architectures into contemporary, lightning-fast digital assets with elevated typography and UX.",
    deliverables: ["Design System Overhaul", "Codebase Modernization", "SEO & Performance Recovery", "Conversion Lift"]
  },
  {
    num: "06",
    title: "Responsive Website Development",
    shortDesc: "Pixel-perfect multi-device experiences tailored flawlessly from ultra-wide cinema displays down to compact smartphones.",
    deliverables: ["Fluid Typography & Grids", "Cross-Browser Testing", "Touch & Gesture Polish", "Micro-Interaction Details"]
  }
];

export const TECH_CATEGORIES = [
  {
    category: "Frontend",
    description: "Component-driven client architecture, fluid animation pipelines, and modern responsive interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    category: "Backend",
    description: "Resilient server-side runtimes, microservices, secure authentication, and structured REST APIs.",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database",
    description: "High-throughput document stores and relational schemas built for reliability and scale.",
    skills: ["MongoDB", "Mongoose", "MySQL"]
  },
  {
    category: "Tools",
    description: "Professional version control, continuous development workflows, and API testing suites.",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export const FEATURED_PROJECT = {
  id: "maha-creative-photography",
  name: "MAHA CREATIVE PHOTOGRAPHY",
  badge: "FEATURED FULL STACK PLATFORM",
  tagline: "Commercial Photography Business & Booking Management Suite",
  description: "A full-stack photography business website with client authentication, separate admin authentication, role-based access, gallery management, photography packages, booking management and an admin dashboard.",
  technology: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
  features: [
    "Client signup and login",
    "Admin authentication",
    "Role-based authorization",
    "Protected routes",
    "Gallery management",
    "Package management",
    "Booking management",
    "Admin dashboard",
    "Contact messages"
  ],
  liveUrl: "https://maha-creative-photography-website.vercel.app/",
  githubUrl: "https://github.com/madheshwarant-fullstack-dev/maha-creative-photography-website",
  mainScreenshot: "/projects/maha-photography/hero.jpeg",
  gallery: [
    { url: "/projects/maha-photography/hero.jpeg", title: "Hero & Studio Identity" },
    { url: "/projects/maha-photography/gallery/Wedding.jpeg", title: "Wedding Photography Portfolio" },
    { url: "/projects/maha-photography/gallery/Wedding2.jpeg", title: "Ceremony & Reception Shoots" },
    { url: "/projects/maha-photography/gallery/birthday.jpeg", title: "Celebration & Portrait Shoots" },
    { url: "/projects/maha-photography/gallery/baby shower.jpeg", title: "Maternity & Family Shoots" },
    { url: "/projects/maha-photography/packages/smart.png", title: "Tiered Pricing & Package System" }
  ]
};

export const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "Tamil Info Technology",
    period: "Dec 2025 — Jan 2026",
    location: "Dindigul, Tamil Nadu",
    honor: "Best Intern Award Winner",
    summary: "Engineered responsive frontend interfaces with React.js and modern CSS; ensured cross-device fidelity and received the prestigious Best Intern Award.",
    certificate: "/certificates/tit-certificate.pdf"
  },
  {
    role: "Internship",
    company: "Elysium Technologies Private Limited",
    period: "May 2025 — Jun 2025",
    location: "Madurai, Tamil Nadu",
    honor: null,
    summary: "Hands-on web development internship developing full-stack components, connecting REST APIs to frontend views, and managing Git version control workflows.",
    certificate: "/certificates/elysium-certificate.pdf"
  }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    phase: "DISCOVER",
    headline: "Understand business requirements.",
    detail: "Establishing project goals, target audience personas, functional requirements, and architecture milestones before laying down a single line of code."
  },
  {
    num: "02",
    phase: "PLAN",
    headline: "Prepare website structure and design.",
    detail: "Defining wireframes, component design hierarchies, database schemas, and state flows for an uncompromising user journey."
  },
  {
    num: "03",
    phase: "DEVELOP",
    headline: "Build frontend, backend and database functionality.",
    detail: "Implementing modular React views, secure Node.js/Express REST APIs, and optimized MongoDB data models with robust testing."
  },
  {
    num: "04",
    phase: "DEPLOY",
    headline: "Test, optimize and launch the website.",
    detail: "Comprehensive cross-browser stress testing, SEO configuration, Core Web Vitals optimization, and continuous deployment."
  }
];

export const CERTIFICATES = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    date: "October 2026",
    file: "/Madheshwaran_T_Resume.pdf"
  },
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Vinsup Skill Academy",
    date: "17/08/2026",
    file: "/certificates/vinsup-certificate.pdf"
  },
  {
    title: "Best Intern Award & Frontend Internship",
    issuer: "Tamil Info Technology",
    date: "Jan 2026",
    file: "/certificates/tit-certificate.pdf"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Aug 06, 2025",
    file: "/certificates/ai-fundamentals.pdf"
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    date: "Aug 20, 2025",
    file: "/certificates/mongodb-basics.pdf"
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "Certified 2025",
    file: "/Madheshwaran_T_Resume.pdf"
  },
  {
    title: "Web Development Internship",
    issuer: "Elysium Technologies",
    date: "Jun 2025",
    file: "/certificates/elysium-certificate.pdf"
  }
];
