import {
  Activity,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  Cloud,
  Code2,
  DatabaseZap,
  Gauge,
  Globe2,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wrench
} from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  icon: typeof Globe2;
  features: string[];
  benefits: string[];
  process: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=82`;
const pexels = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;

export const services: Service[] = [
  {
    title: "Web Design & Development",
    slug: "web-design-development",
    eyebrow: "Flagship websites",
    description: "High-converting websites that feel fast, polished and unmistakably yours.",
    longDescription: "We craft websites with a sharp strategy layer, clean interface systems and production-grade engineering. Every page is built to load quickly, rank locally and guide visitors toward confident action.",
    image: pexels("1181675"),
    color: "bg-[#0077b6]",
    icon: Globe2,
    features: ["Custom UI systems", "Next.js development", "CMS-ready architecture", "Conversion-focused landing pages"],
    benefits: ["Better first impressions", "Higher enquiry quality", "Lower maintenance overhead", "Stronger local SEO signals"],
    process: ["Brand and audience mapping", "Wireframes and visual direction", "Component build", "Performance tuning", "Launch support"],
    tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Vercel"],
    related: ["UI/UX Design", "SEO Services", "Website Maintenance"],
    faqs: [
      { q: "Can you redesign an existing website?", a: "Yes. We audit the current site, keep what works, remove friction and rebuild the experience with cleaner content and stronger performance." },
      { q: "Do you build responsive websites?", a: "Every build is designed and tested across mobile, tablet and desktop from the first wireframe." }
    ]
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    eyebrow: "Search growth",
    description: "Local and national SEO that earns visibility without gimmicks.",
    longDescription: "Our SEO work blends technical fixes, useful content and local search signals for Puducherry, Pondicherry, Tamil Nadu and broader India-focused searches.",
    image: pexels("265087"),
    color: "bg-[#22b45a]",
    icon: Search,
    features: ["Technical audits", "Local SEO", "On-page optimization", "Search content planning"],
    benefits: ["More qualified organic leads", "Cleaner site structure", "Better map visibility", "Compounding traffic"],
    process: ["Search audit", "Keyword mapping", "Technical cleanup", "Content rollout", "Monthly reporting"],
    tech: ["Google Search Console", "GA4", "Schema", "Semrush", "PageSpeed"],
    related: ["Content Marketing", "Web Design & Development", "Digital Marketing"],
    faqs: [
      { q: "Do you handle Google Business Profile?", a: "Yes. We optimize categories, services, posts, photos and review workflows for stronger local discovery." },
      { q: "How soon does SEO work?", a: "Technical wins can appear quickly, while durable rankings usually build over three to six months." }
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    eyebrow: "Demand engine",
    description: "Campaigns, funnels and creative systems that turn attention into revenue.",
    longDescription: "We connect paid media, landing pages, analytics and creative testing into one coherent growth loop. The aim is simple: clearer messaging, smarter spend and better follow-up.",
    image: pexels("3184465"),
    color: "bg-[#f4b942]",
    icon: Megaphone,
    features: ["Campaign strategy", "Paid ads", "Landing pages", "Analytics dashboards"],
    benefits: ["Sharper positioning", "More measurable campaigns", "Faster creative learning", "Improved lead flow"],
    process: ["Offer strategy", "Channel planning", "Creative production", "Campaign launch", "Optimization sprints"],
    tech: ["Meta Ads", "Google Ads", "GA4", "Hotjar", "Looker Studio"],
    related: ["Social Media Marketing", "SEO Services", "Content Marketing"],
    faqs: [
      { q: "Can you manage ads and landing pages together?", a: "Yes. That is usually where campaigns perform best because message, creative and page experience stay aligned." },
      { q: "Do you provide reports?", a: "We send concise reports focused on spend, leads, conversion rate and next actions." }
    ]
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    eyebrow: "Social momentum",
    description: "Content calendars and creative campaigns that make your brand easier to remember.",
    longDescription: "We turn your expertise, offers and culture into a consistent social presence across Instagram, LinkedIn, Facebook and emerging formats.",
    image: pexels("267350"),
    color: "bg-[#0891c8]",
    icon: Activity,
    features: ["Content calendars", "Reels concepts", "Community prompts", "Performance reviews"],
    benefits: ["Consistent publishing", "More memorable brand voice", "Better campaign rhythm", "Reusable content assets"],
    process: ["Brand voice capture", "Pillar planning", "Creative production", "Publishing", "Monthly iteration"],
    tech: ["Instagram", "LinkedIn", "Meta Business", "Canva", "Buffer"],
    related: ["Branding & Identity", "Digital Marketing", "Content Marketing"],
    faqs: [
      { q: "Do you write captions?", a: "Yes. We write captions in a natural brand voice with clear hooks and calls to action." },
      { q: "Can you create Tamil-English content?", a: "We can plan bilingual or region-aware content when it fits your audience." }
    ]
  },
  {
    title: "Branding & Identity",
    slug: "branding-identity",
    eyebrow: "Memorable systems",
    description: "Identity design that gives your company a clear visual and verbal signature.",
    longDescription: "From logo direction to color, typography, messaging and launch assets, we build brand systems that remain flexible as your business grows.",
    image: pexels("196644"),
    color: "bg-[#6aa84f]",
    icon: Palette,
    features: ["Logo suites", "Color systems", "Brand voice", "Launch templates"],
    benefits: ["Clearer recognition", "Faster content creation", "Stronger market confidence", "Consistent touchpoints"],
    process: ["Discovery workshop", "Moodboards", "Identity routes", "Refinement", "Brand kit delivery"],
    tech: ["Figma", "Illustrator", "Photoshop", "Notion", "Canva"],
    related: ["UI/UX Design", "Social Media Marketing", "Web Design & Development"],
    faqs: [
      { q: "Do you create brand guidelines?", a: "Yes. We deliver practical guidelines your team can actually use day to day." },
      { q: "Can you refresh our existing logo?", a: "Yes. We can modernize without losing the equity your customers already recognize." }
    ]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    eyebrow: "Product clarity",
    description: "Interfaces that make complex products feel calm, useful and easy to trust.",
    longDescription: "We design dashboards, SaaS products, mobile flows and web experiences with research-backed structure and polished interaction detail.",
    image: pexels("326503"),
    color: "bg-[#3f7cac]",
    icon: PenTool,
    features: ["User flows", "Wireframes", "Design systems", "Clickable prototypes"],
    benefits: ["Lower user confusion", "Faster development handoff", "Better product adoption", "Clearer feature priorities"],
    process: ["Experience audit", "Flow mapping", "Prototype design", "Usability review", "Developer handoff"],
    tech: ["Figma", "FigJam", "Maze", "Framer", "Storybook"],
    related: ["Web Design & Development", "Mobile App Development", "Custom Software Development"],
    faqs: [
      { q: "Can you work with our developers?", a: "Yes. We document components, states and responsive behavior so handoff is smooth." },
      { q: "Do you test designs?", a: "We can run lightweight usability reviews before production to catch friction early." }
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    eyebrow: "Pocket products",
    description: "Mobile apps with crisp UX, reliable architecture and launch-ready polish.",
    longDescription: "We build app experiences for startups, service teams and commerce brands, with careful attention to onboarding, retention and maintainable code.",
    image: image("photo-1512941937669-90a1b58e7e9c"),
    color: "bg-[#8bbf9f]",
    icon: Smartphone,
    features: ["iOS and Android apps", "App prototypes", "API integration", "Push notifications"],
    benefits: ["Stronger customer access", "Better retention loops", "Streamlined operations", "Scalable app foundation"],
    process: ["Product scope", "UX prototype", "App build", "QA testing", "Store release"],
    tech: ["React Native", "Expo", "Firebase", "Node.js", "Stripe"],
    related: ["API Development", "UI/UX Design", "Cloud Solutions"],
    faqs: [
      { q: "Do you publish to app stores?", a: "Yes. We help prepare store listings, assets and release steps." },
      { q: "Can apps connect to existing software?", a: "Yes. We integrate with CRMs, ERPs, payment gateways and custom APIs." }
    ]
  },
  {
    title: "E-Commerce Development",
    slug: "e-commerce-development",
    eyebrow: "Shops that sell",
    description: "Online stores designed for discovery, trust and smooth checkout.",
    longDescription: "We create commerce experiences for catalog brands, D2C launches and service-led sellers with product storytelling, performance and analytics baked in.",
    image: image("photo-1556742049-0cfed4f6a45d"),
    color: "bg-[#d9a441]",
    icon: ShoppingBag,
    features: ["Storefront design", "Payment setup", "Product architecture", "Conversion optimization"],
    benefits: ["Higher checkout confidence", "Cleaner product management", "Faster campaigns", "Better repeat buying"],
    process: ["Catalog planning", "UX design", "Store build", "Payment and shipping", "Launch analytics"],
    tech: ["Shopify", "WooCommerce", "Next.js", "Razorpay", "Stripe"],
    related: ["Digital Marketing", "SEO Services", "Website Maintenance"],
    faqs: [
      { q: "Can you migrate products?", a: "Yes. We can help clean and migrate product data from existing stores or spreadsheets." },
      { q: "Do you support Indian payments?", a: "Yes. We commonly work with Razorpay, UPI flows and card payments." }
    ]
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    eyebrow: "Operational software",
    description: "Internal tools and platforms shaped around the way your team actually works.",
    longDescription: "We build tailored dashboards, workflow tools, portals and business systems that remove spreadsheet chaos and improve daily operations.",
    image: image("photo-1515879218367-8466d910aaa4"),
    color: "bg-[#5aa9a8]",
    icon: Code2,
    features: ["Admin portals", "Workflow automation", "Role-based access", "Reporting dashboards"],
    benefits: ["Less manual work", "Better data visibility", "Fewer operational leaks", "Software that fits your team"],
    process: ["Process mapping", "System design", "MVP build", "Team testing", "Iterative rollout"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS"],
    related: ["API Development", "Cloud Solutions", "AI & Automation"],
    faqs: [
      { q: "Do you start with an MVP?", a: "Usually, yes. A focused MVP helps teams validate workflows before scaling the system." },
      { q: "Can you maintain custom software?", a: "Yes. We offer support, monitoring and improvement retainers." }
    ]
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    eyebrow: "Reliable infrastructure",
    description: "Cloud architecture and deployment support for fast, stable digital products.",
    longDescription: "We help teams deploy, secure and scale websites, apps and APIs with sensible cloud architecture and monitoring.",
    image: image("photo-1451187580459-43490279c0fa"),
    color: "bg-[#2f6690]",
    icon: Cloud,
    features: ["Cloud migration", "CI/CD setup", "Monitoring", "Backup strategy"],
    benefits: ["More reliable releases", "Better uptime", "Lower infrastructure confusion", "Room to scale"],
    process: ["Architecture review", "Cloud plan", "Deployment pipeline", "Monitoring setup", "Optimization"],
    tech: ["AWS", "Vercel", "Docker", "Cloudflare", "GitHub Actions"],
    related: ["Cybersecurity Services", "Custom Software Development", "Website Maintenance"],
    faqs: [
      { q: "Can you improve an existing deployment?", a: "Yes. We review hosting, DNS, pipelines, logs and bottlenecks before recommending changes." },
      { q: "Do you handle backups?", a: "We can set up practical backup and recovery plans for databases and critical assets." }
    ]
  },
  {
    title: "Cybersecurity Services",
    slug: "cybersecurity-services",
    eyebrow: "Digital trust",
    description: "Security checks and hardening for websites, apps and business systems.",
    longDescription: "We identify practical security risks, improve configurations and help teams adopt safer release and access practices without slowing work down.",
    image: image("photo-1563986768494-4dee2763ff3f"),
    color: "bg-[#76b041]",
    icon: ShieldCheck,
    features: ["Website security audits", "Access reviews", "Hardening", "Monitoring recommendations"],
    benefits: ["Reduced risk exposure", "More trustworthy systems", "Cleaner admin access", "Better recovery readiness"],
    process: ["Risk scan", "Access review", "Patch plan", "Hardening", "Follow-up checks"],
    tech: ["Cloudflare", "OWASP", "SSL", "WAF", "Sentry"],
    related: ["Cloud Solutions", "Website Maintenance", "API Development"],
    faqs: [
      { q: "Do you do penetration testing?", a: "We provide practical web security audits and can coordinate deeper specialized testing when needed." },
      { q: "Can you secure WordPress sites?", a: "Yes. We harden themes, plugins, admin access, backups and hosting settings." }
    ]
  },
  {
    title: "API Development",
    slug: "api-development",
    eyebrow: "Connected systems",
    description: "APIs that connect products, data and teams without brittle workarounds.",
    longDescription: "We design and build secure APIs for web apps, mobile apps, automation workflows, dashboards and third-party integrations.",
    image: image("photo-1558494949-ef010cbdcc31"),
    color: "bg-[#4f8fc0]",
    icon: DatabaseZap,
    features: ["REST APIs", "Webhooks", "Auth flows", "Third-party integrations"],
    benefits: ["Cleaner data flow", "Faster product features", "Reduced manual syncing", "More reliable automations"],
    process: ["Integration mapping", "Schema design", "Endpoint build", "Testing", "Documentation"],
    tech: ["Node.js", "Next.js", "PostgreSQL", "Prisma", "Swagger"],
    related: ["Mobile App Development", "Custom Software Development", "AI & Automation"],
    faqs: [
      { q: "Do you document APIs?", a: "Yes. We provide clear endpoint documentation and examples for future teams." },
      { q: "Can you integrate payment APIs?", a: "Yes. We integrate Razorpay, Stripe and other business-critical services." }
    ]
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    eyebrow: "Smarter workflows",
    description: "AI assistants and automations that save time without making your brand feel generic.",
    longDescription: "We design practical AI workflows for support, content, lead qualification, internal search and repetitive operations with thoughtful human checkpoints.",
    image: image("photo-1677442136019-21780ecad995"),
    color: "bg-[#7abf85]",
    icon: BrainCircuit,
    features: ["AI chat workflows", "Lead automation", "Content systems", "Internal knowledge tools"],
    benefits: ["Less repetitive work", "Faster customer responses", "Better team leverage", "Safer AI adoption"],
    process: ["Workflow audit", "Use-case scoring", "Prototype", "Guardrails", "Team rollout"],
    tech: ["OpenAI", "LangChain", "Zapier", "Make", "Vector DBs"],
    related: ["Custom Software Development", "API Development", "Content Marketing"],
    faqs: [
      { q: "Can AI match our brand voice?", a: "Yes. We create prompts, examples and review flows so outputs stay useful and on-brand." },
      { q: "Do you automate CRM tasks?", a: "Yes. We can connect forms, CRMs, email, sheets and custom tools." }
    ]
  },
  {
    title: "Website Maintenance",
    slug: "website-maintenance",
    eyebrow: "Always cared for",
    description: "Ongoing support that keeps your website fresh, fast and secure.",
    longDescription: "We handle updates, fixes, performance checks, content changes and improvement ideas so your site stays healthy after launch.",
    image: image("photo-1504384308090-c894fdcc538d"),
    color: "bg-[#cfa64a]",
    icon: Wrench,
    features: ["Monthly updates", "Bug fixes", "Speed checks", "Security reviews"],
    benefits: ["Fewer surprises", "Fresh content", "Better uptime", "Longer website life"],
    process: ["Site health audit", "Priority board", "Monthly care", "Performance review", "Growth ideas"],
    tech: ["Next.js", "WordPress", "Cloudflare", "Analytics", "Search Console"],
    related: ["Web Design & Development", "Cybersecurity Services", "SEO Services"],
    faqs: [
      { q: "Can you maintain sites you did not build?", a: "Yes, after a quick audit to understand the stack and risk level." },
      { q: "Do you offer emergency fixes?", a: "We can include priority support in maintenance retainers." }
    ]
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    eyebrow: "Useful attention",
    description: "Content that teaches, earns trust and supports search growth.",
    longDescription: "We plan and create blogs, landing page copy, lead magnets and social content that sound like a real brand with a real point of view.",
    image: image("photo-1499750310107-5fef28a66643"),
    color: "bg-[#509e9a]",
    icon: Brush,
    features: ["Content strategy", "Blog writing", "Landing copy", "Lead magnets"],
    benefits: ["More search entry points", "Clearer expertise", "Reusable campaign assets", "Warmer leads"],
    process: ["Audience research", "Topic planning", "Drafting", "Optimization", "Repurposing"],
    tech: ["Surfer SEO", "Notion", "GA4", "Search Console", "Canva"],
    related: ["SEO Services", "Social Media Marketing", "Digital Marketing"],
    faqs: [
      { q: "Do you write SEO blogs?", a: "Yes. We write for search intent first, then polish for a natural human reading experience." },
      { q: "Can you repurpose one idea into many formats?", a: "Yes. We often turn blog themes into posts, newsletters and landing page sections." }
    ]
  }
];

export const heroSlides = services.slice(0, 6).map((service, index) => {
  const metrics = [
    { value: "94", label: "Average launch performance score across recent website builds." },
    { value: "3.2x", label: "Increase in qualified organic visibility after technical SEO fixes." },
    { value: "68%", label: "Lower lead acquisition cost after campaign and landing page alignment." },
    { value: "45%", label: "Higher monthly engagement from consistent social content systems." },
    { value: "30d", label: "Typical timeline for a practical brand kit and launch asset rollout." },
    { value: "28%", label: "Fewer form and onboarding drop-offs after UX flow improvements." }
  ];

  return {
    title: service.title.replace(" & Development", ""),
    kicker: service.eyebrow,
    description: service.description,
    image: service.image,
    href: `/services/${service.slug}`,
    color: service.color,
    metric: metrics[index]
  };
});

export const clients = ["Auro Labs", "Bayline Studio", "Tamil Cloud", "Maison Pondy", "Nila Foods", "Kala Collective"];

export const stats = [
  { label: "Projects shipped", value: 180, suffix: "+" },
  { label: "Average speed score", value: 94, suffix: "/100" },
  { label: "Industries served", value: 22, suffix: "+" },
  { label: "Support response", value: 24, suffix: "h" }
];

export const process = [
  { title: "Discovery", text: "We listen, map the business context and find the sharpest opportunity.", icon: BriefcaseBusiness },
  { title: "Design", text: "We shape mood, structure, copy and interface details into a usable direction.", icon: PenTool },
  { title: "Development", text: "We build clean components, fast pages and reliable integrations.", icon: Code2 },
  { title: "Testing", text: "We test devices, flows, performance, accessibility and launch details.", icon: BadgeCheck },
  { title: "Launch", text: "We publish with analytics, SEO checks and a calm release plan.", icon: Sparkles },
  { title: "Support", text: "We keep improving after launch with care, data and fresh ideas.", icon: Gauge }
];

export const portfolio = [
  { title: "Pondy Heritage Stays", category: "Web", image: image("photo-1500530855697-b586d89ba3ee"), result: "42% more booking enquiries" },
  { title: "Auro Health App", category: "App", image: image("photo-1576091160550-2173dba999ef"), result: "Patient onboarding rebuilt" },
  { title: "Nila Foods Store", category: "Commerce", image: image("photo-1542838132-92c53300491e"), result: "2.3x checkout conversion" },
  { title: "Kala Brand System", category: "Branding", image: image("photo-1518005020951-eccb494ad742"), result: "Complete identity refresh" },
  { title: "Tamil Cloud Portal", category: "Software", image: image("photo-1551288049-bebda4e38f71"), result: "Ops dashboard for 9 teams" },
  { title: "Bayline Growth Sprint", category: "Marketing", image: image("photo-1533750516457-a7f992034fec"), result: "68% lower lead cost" }
];

export const testimonials = [
  { quote: "CreativTechie took our scattered ideas and turned them into a brand and website that finally feels like us.", name: "Meera Krishnan", role: "Founder, Maison Pondy" },
  { quote: "They are rare: design taste, technical depth and the patience to explain decisions without jargon.", name: "Arun Prakash", role: "COO, Tamil Cloud" },
  { quote: "Our SEO and campaign pages started producing cleaner leads within the first quarter.", name: "Sofia Martin", role: "Marketing Lead, Auro Labs" }
];

export const blogPosts = [
  { title: "What a premium website needs before a single pixel is designed", category: "Strategy", date: "May 08, 2026", image: image("photo-1497366811353-6870744d04b2") },
  { title: "Local SEO moves that matter for Puducherry businesses", category: "SEO", date: "Apr 24, 2026", image: image("photo-1486406146926-c627a92ad1ab") },
  { title: "How AI automation can help service teams without losing warmth", category: "AI", date: "Apr 12, 2026", image: image("photo-1674027444485-cec3da58eef4") }
];

export const faqs = [
  { q: "Where is CreativTechie based?", a: "We are based in Puducherry, India, and work with clients across Pondicherry, Tamil Nadu and beyond." },
  { q: "Do you work with startups and established companies?", a: "Yes. We support early-stage founders, growing local businesses and established teams that need sharper digital execution." },
  { q: "Can you handle design, development and marketing together?", a: "Yes. That is our strength: strategy, creative, engineering and growth stay connected from the start." }
];

export const tech = ["Next.js", "React", "TypeScript", "Tailwind", "GSAP", "Three.js", "Framer", "Shopify", "AWS", "OpenAI", "Figma", "Node.js"];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];
