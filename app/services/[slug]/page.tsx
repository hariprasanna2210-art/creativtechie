import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { absoluteUrl, breadcrumbSchema, faqSchema, serviceSchema, site } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Puducherry`,
    description: `${service.description} CreativTechie serves Puducherry, Pondicherry, Tamil Nadu and India.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in Puducherry, Pondicherry & Tamil Nadu | CreativTechie`,
      description: service.description,
      images: [service.image],
      url: `/services/${service.slug}`
    }
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services.filter((item) => service.related.includes(item.title));
  const schema = [
    serviceSchema(service.slug),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: absoluteUrl("/services") },
      { name: service.title, url: absoluteUrl(`/services/${service.slug}`) }
    ])
  ].filter(Boolean);

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
      <section className="container grid gap-12 pb-20 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">{service.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight text-balance md:text-6xl">{service.title}</h1>
          <p className="mt-6 text-xl leading-9 text-[#34495e]">{service.longDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Talk to the Studio</Button>
            <Button href="/portfolio" variant="ghost">See Work</Button>
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-xl">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="50vw" />
          <div className={`absolute inset-x-0 bottom-0 ${service.color} p-8 text-white`}>
            <Icon className="mb-4 h-10 w-10" />
            <p className="font-display text-3xl font-black">Designed for speed, trust and growth.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6ff] py-20">
        <div className="container grid gap-8 md:grid-cols-3">
          {service.features.map((feature) => (
            <div key={feature} className="rounded-lg bg-white p-6 shadow-sm">
              <CheckCircle2 className="mb-6 h-7 w-7 text-[#22b45a]" />
              <h2 className="font-display text-2xl font-black">{feature}</h2>
              <p className="mt-3 leading-7 text-[#52616f]">Built with a practical balance of creative direction, technical care and measurable business intent.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Benefits</p>
          <h2 className="mt-4 font-display text-4xl font-black">What your team gains.</h2>
          <div className="mt-8 grid gap-4">
            {service.benefits.map((benefit) => <p key={benefit} className="rounded-lg border border-[#06345f]/10 bg-white p-5 font-bold">{benefit}</p>)}
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Process</p>
          <h2 className="mt-4 font-display text-4xl font-black">How we make it real.</h2>
          <div className="mt-8 grid gap-4">
            {service.process.map((step, index) => <p key={step} className="rounded-lg bg-[#fff7dc] p-5 font-bold"><span className="mr-4 text-[#0077b6]">{index + 1}.</span>{step}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-[#06345f] py-20 text-white">
        <div className="container">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd23f]">Technologies used</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.tech.map((item) => <span key={item} className="rounded-md bg-white/10 px-6 py-3 font-display text-xl font-bold">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-black">Before we begin.</h2>
        </div>
        <FAQ items={service.faqs} />
      </section>

      <section className="container pb-24">
        <div className="rounded-xl bg-[#e7f7ed] p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Related services</p>
              <h2 className="mt-4 font-display text-4xl font-black">Often paired with {service.title}.</h2>
            </div>
            <Button href="/contact">Request a Quote</Button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="group rounded-lg bg-white p-6 font-display text-2xl font-black">{item.title}<ArrowRight className="mt-6 h-5 w-5 text-[#0077b6] transition group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
