import { services } from "@/lib/data";

export const site = {
  name: "CreativTechie",
  legalName: "CreativTechie",
  url: "https://creativtechie.com",
  logo: "https://creativtechie.com/creativtechie-logo.png",
  image: "https://creativtechie.com/opengraph-image",
  email: "creativtechie@gmail.com",
  telephone: "+91 7418120053",
  alternateTelephone: "+91 9385870053",
  foundingLocation: "Puducherry, India",
  description:
    "CreativTechie is a Puducherry digital agency for web design, SEO, branding, digital marketing, apps and AI automation.",
  sameAs: [
    "https://www.instagram.com/creativtechie",
    "https://www.linkedin.com/company/creativtechie"
  ]
};

export const localAreas = [
  {
    slug: "puducherry",
    name: "Puducherry",
    alternateName: "Pondicherry",
    region: "Puducherry",
    title: "Web Design, SEO & Digital Marketing Agency in Puducherry",
    description:
      "CreativTechie helps Puducherry business owners build faster websites, improve local SEO, run digital campaigns and adopt practical AI automation.",
    intro:
      "For Puducherry founders, clinics, hotels, restaurants, education brands, shops and service businesses, we build a digital presence that feels credible, loads fast and turns local searches into enquiries."
  },
  {
    slug: "pondicherry",
    name: "Pondicherry",
    alternateName: "Puducherry",
    region: "Puducherry",
    title: "Website Design & SEO Services in Pondicherry",
    description:
      "CreativTechie serves Pondicherry businesses with website design, local SEO, branding, marketing, e-commerce and AI-ready content systems.",
    intro:
      "People still search both Pondicherry and Puducherry. We support local businesses across both search patterns with clear service pages, structured data, fast pages and content that answers real customer questions."
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    alternateName: "TN",
    region: "Tamil Nadu",
    title: "Digital Agency for Tamil Nadu Businesses",
    description:
      "CreativTechie helps Tamil Nadu businesses grow online with web design, SEO, digital marketing, branding, software and AI automation.",
    intro:
      "For Tamil Nadu companies that need sharper online visibility, we combine strategy, design, engineering and search content into one practical growth system."
  }
];

export const localKeywords = [
  "web design Puducherry",
  "website development Pondicherry",
  "SEO services Puducherry",
  "digital marketing agency Pondicherry",
  "branding agency Tamil Nadu",
  "AI automation agency India",
  "e-commerce website Puducherry",
  "local SEO Tamil Nadu"
];

export function absoluteUrl(path = "") {
  if (!path) return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: site.image,
    logo: site.logo,
    description: site.description,
    email: site.email,
    telephone: site.telephone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressRegion: "Puducherry",
      addressCountry: "IN"
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Puducherry" },
      { "@type": "City", name: "Pondicherry" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" }
    ],
    knowsAbout: [
      "Web design",
      "SEO",
      "Local SEO",
      "Digital marketing",
      "Branding",
      "UI/UX design",
      "AI automation",
      "LLM visibility",
      "Entity-first optimization",
      "Zero-click search optimization",
      "Technical SEO"
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
        description: service.description
      }
    })),
    sameAs: site.sameAs
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    alternateName: ["Creativ Techie", "CreativTechie Digital Agency"],
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-IN"
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    serviceType: service.title,
    description: service.longDescription,
    image: service.image,
    provider: { "@id": `${site.url}/#business` },
    areaServed: localAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area.name,
      alternateName: area.alternateName
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: feature }
      }))
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}
