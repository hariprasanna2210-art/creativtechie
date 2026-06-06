import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, MapPin, Search, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { absoluteUrl, breadcrumbSchema, localAreas, localBusinessSchema, site } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return localAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = localAreas.find((item) => item.slug === params.slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/locations/${area.slug}` },
    openGraph: {
      title: `${area.title} | CreativTechie`,
      description: area.description,
      url: `/locations/${area.slug}`
    }
  };
}

export default function LocationPage({ params }: Props) {
  const area = localAreas.find((item) => item.slug === params.slug);
  if (!area) notFound();

  const schema = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Locations", url: absoluteUrl("/locations") },
      { name: area.name, url: absoluteUrl(`/locations/${area.slug}`) }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": absoluteUrl(`/locations/${area.slug}#webpage`),
      url: absoluteUrl(`/locations/${area.slug}`),
      name: area.title,
      description: area.description,
      about: { "@id": `${site.url}/#business` },
      spatialCoverage: {
        "@type": "Place",
        name: area.name,
        alternateName: area.alternateName,
        address: {
          "@type": "PostalAddress",
          addressRegion: area.region,
          addressCountry: "IN"
        }
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: services.slice(0, 10).map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            url: absoluteUrl(`/services/${service.slug}`)
          }
        }))
      }
    }
  ];

  return (
    <>
      <Script id="location-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Locations" }, { label: area.name }]} />
      <section className="mesh-bg py-10">
        <div className="container grid gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">
              <MapPin className="h-5 w-5" />
              {area.name}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">{area.title}</h1>
            <p className="mt-6 text-xl leading-9 text-[#34495e]">{area.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get Local SEO Plan</Button>
              <Button href="/services" variant="ghost">Explore Services</Button>
            </div>
          </div>
          <div className="rounded-xl border border-[#06345f]/10 bg-white p-7 shadow-sm">
            <Search className="mb-6 h-9 w-9 text-[#0077b6]" />
            <h2 className="font-display text-3xl font-black">What we optimize for</h2>
            <div className="mt-7 grid gap-4">
              {[
                "Business-owner searches like website designer, SEO agency, digital marketing company and branding studio.",
                "High-intent local searches across Puducherry, Pondicherry and nearby Tamil Nadu markets.",
                "AI answer visibility through clear facts, schema, service definitions and concise page summaries.",
                "Conversion signals: trust, speed, contact clarity, WhatsApp access and proof-led service pages."
              ].map((item) => (
                <p key={item} className="flex gap-3 rounded-lg bg-[#eaf6ff] p-4 font-bold leading-7">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#22b45a]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Core services</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Digital work that supports local growth.</h2>
          </div>
          <Button href="/portfolio" variant="ghost">See Work</Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-xl border border-[#06345f]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className={`mb-7 grid h-14 w-14 place-items-center rounded-lg ${service.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#52616f]">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#0077b6]">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#06345f] py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd23f]">AI and search readiness</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Clear enough for people. Structured enough for machines.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Local entity signals: business name, service area, contact details, service categories and canonical URLs.",
              "Answer-ready content for zero-click searches, AI Overviews and voice-style questions.",
              "Performance checks for Core Web Vitals, index coverage, sitemap health and rich preview quality.",
              "Content planning around local proof, FAQs, industries served and conversion-focused service pages."
            ].map((item) => (
              <p key={item} className="rounded-lg bg-white/10 p-5 font-bold leading-7">
                <Sparkles className="mb-4 h-6 w-6 text-[#ffd23f]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
