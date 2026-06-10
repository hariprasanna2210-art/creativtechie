import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { clients, portfolio, services, stats, testimonials } from "@/lib/data";
import { absoluteUrl, breadcrumbSchema, faqSchema, site } from "@/lib/seo";

const pageUrl = "/website-design-pondicherry/";
const pageTitle = "Website Design Pondicherry | Web Design Company in Pondicherry";
const pageDescription =
  "CreativTechie offers professional website design in Pondicherry for businesses, startups, shops, hotels and institutions. SEO-friendly, mobile responsive and fast websites.";
const whatsappUrl =
  "https://wa.me/917418120053?text=Hi%20CreativTechie%2C%20I%20need%20a%20website%20design%20for%20my%20business";
const callUrl = "tel:+917418120053";

const faqs = [
  {
    q: "Which is the best website design company in Pondicherry?",
    a: "CreativTechie is a professional website design company in Pondicherry offering mobile responsive, SEO-friendly and business-focused websites for startups, shops, hotels, clinics, institutions and local businesses."
  },
  {
    q: "How much does website design cost in Pondicherry?",
    a: "Website design cost in Pondicherry depends on the number of pages, design style, features, ecommerce requirements, forms, payment gateway integration and SEO setup."
  },
  {
    q: "Do you create WordPress websites?",
    a: "Yes, CreativTechie creates WordPress websites for businesses, institutions, shops, hotels, clinics and service providers in Pondicherry."
  },
  {
    q: "Do you create ecommerce websites?",
    a: "Yes, CreativTechie creates ecommerce websites with product pages, cart, checkout, payment gateway options and order enquiry features."
  },
  {
    q: "Can you help with SEO after website development?",
    a: "Yes, CreativTechie helps with SEO setup, local SEO, Google Search Console, sitemap submission, Google Business Profile support and digital marketing."
  },
  {
    q: "Do you provide mobile responsive website design?",
    a: "Yes, all websites are designed to work properly on mobile, tablet and desktop devices."
  },
  {
    q: "How long does it take to complete a website?",
    a: "A basic website can be completed within a few days, while larger websites depend on the number of pages, content, design requirements and custom features."
  }
];

const serviceLinks = [
  { label: "SEO services page", href: "/services/seo-services" },
  { label: "Digital marketing page", href: "/services/digital-marketing" },
  { label: "Ecommerce development page", href: "/services/e-commerce-development" },
  { label: "Mobile app development page", href: "/services/mobile-app-development" },
  { label: "Portfolio page", href: "/portfolio" },
  { label: "Contact page", href: "/contact" }
];

const features = [
  "SEO-friendly website structure",
  "Mobile responsive design",
  "Fast loading pages",
  "Modern UI/UX",
  "WordPress and custom development",
  "Ecommerce support",
  "Local SEO setup",
  "WhatsApp and enquiry integration",
  "Ongoing support"
];

const comparison = [
  ["SEO-friendly structure", "Included from page planning", "Often added later"],
  ["Mobile responsive design", "Designed for phone, tablet and desktop", "Basic resizing"],
  ["Fast loading optimization", "Image, layout and Core Web Vitals care", "Limited checks"],
  ["Local SEO setup", "Pondicherry and Puducherry search signals", "Usually missing"],
  ["Google Business Profile support", "Available with local SEO setup", "Not included"],
  ["WhatsApp/call integration", "Clear CTA links and tracking classes", "Generic contact link"],
  ["Portfolio-focused design", "Built around trust and enquiries", "Template-first layout"],
  ["Ongoing support", "Launch support and improvement help", "Handoff only"]
];

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "website design pondicherry",
    "website design company in Pondicherry",
    "web design company in Pondicherry",
    "website designer in Pondicherry",
    "web development company in Pondicherry",
    "website development company in Pondicherry",
    "WordPress website design Pondicherry",
    "ecommerce website design Pondicherry",
    "business website design Pondicherry",
    "SEO friendly website design Pondicherry"
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: "website design company in Pondicherry"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [site.image]
  }
};

export default function WebsiteDesignPondicherryPage() {
  const webDesign = services.find((service) => service.slug === "web-design-development") ?? services[0];
  const schema = [
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/website-design-pondicherry/#localbusiness`,
      name: site.name,
      url: site.url,
      image: site.image,
      logo: site.logo,
      email: site.email,
      telephone: site.telephone,
      description: "CreativTechie is a web design company and ProfessionalService based in Puducherry serving Pondicherry businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puducherry",
        addressRegion: "Puducherry",
        addressCountry: "IN"
      },
      areaServed: [
        { "@type": "City", name: "Pondicherry" },
        { "@type": "City", name: "Puducherry" },
        { "@type": "AdministrativeArea", name: "Tamil Nadu" }
      ],
      makesOffer: [
        "Website Design",
        "Web Development",
        "WordPress Development",
        "Ecommerce Website Development",
        "SEO Services",
        "Digital Marketing",
        "Google Business Profile Optimization"
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name }
      })),
      mainEntityOfPage: absoluteUrl(pageUrl),
      sameAs: site.sameAs
    },
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: absoluteUrl("/services") },
      { name: "Website Design Pondicherry", url: absoluteUrl(pageUrl) }
    ])
  ];

  return (
    <>
      <Script id="website-design-pondicherry-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Website Design Pondicherry" }]} />

      <section className="mesh-bg py-10">
        <div className="container grid gap-10 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Web design services Pondicherry</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-balance md:text-6xl">Website Design Pondicherry</h1>
            <p className="mt-6 text-xl leading-9 text-[#34495e]">
              CreativTechie provides professional website design in Pondicherry for startups, small businesses, shops, schools, colleges, hotels, clinics and service-based companies. We create mobile responsive, SEO-friendly and fast-loading websites that help your business build trust and generate enquiries online.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#52616f]">
              As a website design company in Pondicherry, we offer complete website solutions including UI design, WordPress development, ecommerce website development, landing pages, SEO setup, Google Business Profile support and digital marketing integration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={whatsappUrl} className="whatsapp-click focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#22b45a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#178c43]">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={callUrl} className="call-click focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#06345f] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b6]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Button href="/portfolio" variant="ghost" className="portfolio-click">View Portfolio</Button>
              <Button href="/contact">Get Free Quote</Button>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-[#06345f]/10 bg-white shadow-sm">
            <Image
              src={webDesign.image}
              alt="website design company in Pondicherry"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#06345f]/92 p-7 text-white">
              <p className="font-display text-3xl font-black">Fast, responsive and enquiry-focused websites for Pondy businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#06345f]/10 bg-white py-7">
        <div className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {clients.map((client) => <p key={client} className="font-display text-xl font-bold text-[#06345f]/55">{client}</p>)}
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Website Design Company in Pondicherry</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Website Design Company in Pondicherry (Puducherry)</h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#34495e]">
            <p>
              A business website should do more than look modern. It should explain what you do, load quickly on mobile, guide visitors to call or enquire, and give Google clear signals about your services and location. CreativTechie works as a web design company in Pondicherry for companies that want a polished site with practical search visibility.
            </p>
            <p>
              Our team plans page structure, copy flow, conversion points, responsive layouts and technical foundations together. That means your new site can support local SEO services in Pondicherry, Google Business Profile optimization Pondicherry, social media marketing Pondicherry and paid campaign traffic without needing a rebuild later.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6ff] py-24">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Professional Website Designers in Puducherry", "Work with a professional website designer Pondicherry businesses can rely on for clean UI, clear content hierarchy, fast pages and a brand experience that feels trustworthy from the first screen."],
            ["Business Website Design Services", "We provide business website design Pondicherry companies can use for service pages, landing page design, contact form integration, call button integration, WhatsApp integration and domain and hosting support."],
            ["WordPress Website Design Pondicherry", "Need an editable site? Our WordPress developer Pondicherry support covers WordPress website design Pondicherry, plugin choices, speed checks, SEO setup and simple admin workflows."],
            ["Ecommerce Website Design Pondicherry", "For retail and catalogue businesses, our ecommerce website company Pondicherry services include product pages, cart, checkout, order enquiry features and payment gateway integration if needed."],
            ["SEO-Friendly Website Development", "Our website development company in Pondicherry approach includes metadata, internal links, clean headings, schema, sitemap readiness, responsive website design Pondicherry and fast loading website design."],
            ["Website Design for Local Businesses", "We build affordable website design in Pondicherry for small businesses, shops, hotels, schools and colleges, clinics and startups, plus website redesign services Pondicherry teams can use when an older site no longer converts."]
          ].map(([title, text], index) => (
            <article key={title} className="rounded-xl border border-[#06345f]/10 bg-white p-6 shadow-sm">
              <div className={`mb-7 grid h-12 w-12 place-items-center rounded-lg ${index % 3 === 0 ? "bg-[#0077b6]" : index % 3 === 1 ? "bg-[#22b45a]" : "bg-[#ffd23f] text-[#06345f]"} text-white`}>
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[#52616f]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Why Choose CreativTechie?</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Why Choose CreativTechie?</h2>
            <p className="mt-5 text-lg leading-8 text-[#34495e]">
              Many providers can launch a basic website. CreativTechie focuses on the details that help a Pondicherry business look credible and convert: content clarity, search structure, responsive UI, technical speed and easy enquiry paths.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#34495e]">
              If you are comparing the best website design company in Pondicherry options, look for more than a template. Our custom website development Pondicherry work connects design, development, SEO company in Pondicherry support and digital marketing company in Pondicherry services around one practical growth plan.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[#06345f]/10 bg-[#fff7dc] p-5">
                  <p className="font-display text-4xl font-black">{stat.value}{stat.suffix}</p>
                  <p className="mt-2 font-bold text-[#52616f]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {features.map((feature) => (
              <p key={feature} className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold shadow-sm">
                <Star className="h-5 w-5 text-[#ffd23f]" /> {feature}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06345f] py-24 text-white">
        <div className="container">
          <h2 className="font-display text-4xl font-black md:text-5xl">Why Choose CreativTechie for Website Design in Pondicherry?</h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[720px] border-collapse bg-white text-left text-[#06345f]">
              <thead className="bg-[#eaf6ff]">
                <tr>
                  <th className="p-5 font-display text-lg">Feature</th>
                  <th className="p-5 font-display text-lg">CreativTechie</th>
                  <th className="p-5 font-display text-lg">Basic Website Provider</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, us, basic]) => (
                  <tr key={feature} className="border-t border-[#06345f]/10">
                    <td className="p-5 font-bold">{feature}</td>
                    <td className="p-5 text-[#34495e]">{us}</td>
                    <td className="p-5 text-[#52616f]">{basic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Website Design Portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Website Design Portfolio</h2>
          </div>
          <Button href="/portfolio" variant="ghost" className="portfolio-click">View Portfolio</Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {portfolio.slice(0, 3).map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-[#06345f]/10 bg-white shadow-sm">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={index === 0 ? "website design Pondicherry" : index === 1 ? "responsive web design Pondicherry" : "web development company in Pondicherry"}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0077b6]">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{project.title}</h3>
                <p className="mt-2 font-bold text-[#52616f]">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff7dc] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Trusted by local and growth-focused teams.</h2>
          </div>
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-xl border border-[#06345f]/10 bg-white p-7 shadow-sm">
                <p className="text-xl font-semibold leading-8">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 font-display font-bold">{item.name}<span className="block text-sm font-normal text-[#52616f]">{item.role}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Related services</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Plan the full digital growth system.</h2>
            <p className="mt-5 text-lg leading-8 text-[#34495e]">
              A strong website works better when it connects to SEO, digital marketing, ecommerce, mobile app development and a clear contact path.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-lg bg-white p-5 font-display text-xl font-black shadow-sm">
                {item.label}
                <ArrowRight className="mt-5 h-5 w-5 text-[#0077b6] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef8fc] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Website Design FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Website Design FAQ</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-lg border border-[#06345f]/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-display text-xl font-black">{item.q}</summary>
                <p className="mt-4 leading-7 text-[#52616f]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="rounded-xl bg-[#0077b6] p-8 text-white md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd23f]">Get Free Quote</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Ready to Build Your Website?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Get a professional, SEO-friendly website for your business in Pondicherry.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappUrl} className="whatsapp-click focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#06345f] shadow-sm transition hover:text-[#0077b6]">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href={callUrl} className="call-click focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#06345f] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22b45a]">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Button href="/portfolio" variant="light" className="portfolio-click">View Portfolio</Button>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-2 md:hidden">
        <a href={whatsappUrl} className="whatsapp-click flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#22b45a] px-3 text-sm font-bold text-white shadow-lg">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href={callUrl} className="call-click flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#06345f] px-3 text-sm font-bold text-white shadow-lg">
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link href="/contact" className="quote-form-submit flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffd23f] px-3 text-sm font-bold text-[#06345f] shadow-lg">
          <Send className="h-4 w-4" /> Enquiry
        </Link>
      </div>
    </>
  );
}
