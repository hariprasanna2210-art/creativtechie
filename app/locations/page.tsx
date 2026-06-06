import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { absoluteUrl, breadcrumbSchema, localAreas, site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development & Digital Marketing Company in Tamil Nadu",
  description:
    "CreativTechie serves Puducherry, Pondicherry and Tamil Nadu businesses with website design, web development, SEO, local SEO, digital marketing, WordPress, ecommerce, branding and AI automation.",
  alternates: { canonical: "/locations" }
};

export default function LocationsPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Locations", url: absoluteUrl("/locations") }
  ]);

  return (
    <>
      <Script id="locations-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Locations" }]} />
      <section className="mesh-bg py-10">
        <div className="container pb-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Locations</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
            Website development and digital marketing company for Pondicherry and Tamil Nadu.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#34495e]">
            We help local business owners improve search visibility, trust, enquiry quality and digital operations with clear websites, SEO systems, local SEO, ecommerce, WordPress development and AI-ready content.
          </p>
        </div>
      </section>
      <section className="container py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {localAreas.map((area) => (
            <Link key={area.slug} href={`/locations/${area.slug}`} className="group rounded-xl border border-[#06345f]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <MapPin className="mb-8 h-8 w-8 text-[#0077b6]" />
              <h2 className="font-display text-3xl font-black">{area.name}</h2>
              <p className="mt-4 leading-7 text-[#52616f]">{area.description}</p>
              <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#0077b6]">
                View location page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-14 rounded-xl bg-[#06345f] p-8 text-white md:p-12">
          <h2 className="font-display text-4xl font-black md:text-5xl">Need a stronger local search footprint?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Start with a technical SEO audit, local content map, service page plan, schema review and Google Business Profile recommendations.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="light">Request Local SEO Audit</Button>
          </div>
        </div>
      </section>
    </>
  );
}
