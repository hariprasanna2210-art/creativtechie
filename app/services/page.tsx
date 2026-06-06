import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, MapPin, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { absoluteUrl, breadcrumbSchema, localAreas, localKeywords, site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services for Web Design, SEO, Marketing & AI Automation",
  description:
    "Explore CreativTechie services for Puducherry, Pondicherry and Tamil Nadu businesses: web design, SEO, digital marketing, branding, apps, software and AI automation.",
  keywords: localKeywords,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "CreativTechie Services",
    description: "Web design, SEO, branding, marketing, software and AI automation for South Indian businesses.",
    url: "/services"
  }
};

export default function ServicesPage() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: absoluteUrl("/services") }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": absoluteUrl("/services#collection"),
      name: "CreativTechie Services",
      description: metadata.description,
      url: absoluteUrl("/services"),
      isPartOf: { "@id": `${site.url}/#website` },
      about: services.map((service) => ({
        "@type": "Service",
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
        description: service.description
      }))
    }
  ];

  return (
    <>
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <section className="mesh-bg py-10">
        <div className="container grid gap-10 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Services</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
              Digital growth services for Puducherry, Pondicherry and Tamil Nadu businesses.
            </h1>
          </div>
          <div className="rounded-xl border border-[#06345f]/10 bg-white p-7 shadow-sm">
            <Search className="mb-6 h-8 w-8 text-[#0077b6]" />
            <p className="text-xl leading-9 text-[#34495e]">
              We build search-ready websites, local SEO systems, AI-friendly content, brand identities, marketing campaigns and software that help business owners earn trust before a customer calls.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {localAreas.map((area) => (
                <Link key={area.slug} href={`/locations/${area.slug}`} className="inline-flex items-center gap-2 rounded-md bg-[#eaf6ff] px-4 py-3 text-sm font-bold text-[#06345f]">
                  <MapPin className="h-4 w-4 text-[#0077b6]" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-xl border border-[#06345f]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className={`mb-7 grid h-14 w-14 place-items-center rounded-lg ${service.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-black">{service.title}</h2>
                <p className="mt-3 leading-7 text-[#52616f]">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#0077b6]">
                  View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#fff7dc] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Search visibility</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Built for Google, AI answers and human decisions.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Entity-first optimization with clear business, service and location signals.",
              "AI and LLM visibility through structured facts, summaries and crawlable service explanations.",
              "Zero-click search readiness with concise answers, FAQ content and schema-supported entities.",
              "New performance metrics focus: speed, crawl health, rich previews, local intent coverage and enquiry quality."
            ].map((item) => (
              <p key={item} className="rounded-lg bg-white p-5 font-bold leading-7">
                <CheckCircle2 className="mb-4 h-6 w-6 text-[#22b45a]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="rounded-xl bg-[#06345f] p-8 text-white md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd23f]">Start local</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black md:text-5xl">Want your business to be easier to find in local search?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            We can audit your website, Google Business Profile, content gaps, page speed, schema and enquiry path before recommending the next move.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="light">Request SEO Audit</Button>
          </div>
        </div>
      </section>
    </>
  );
}
