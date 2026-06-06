import type { Metadata } from "next";
import { BriefcaseBusiness, HeartHandshake, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join CreativTechie, a digital agency in Puducherry hiring designers, developers, SEO strategists and writers.",
  alternates: { canonical: "/careers" }
};

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <section className="container pb-20 pt-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Careers</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">Do careful work with colorful people.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-[#34495e]">We are always interested in designers, developers, SEO strategists and writers who care about craft and outcomes.</p>
      </section>
      <section className="bg-[#eef8fc] py-20">
        <div className="container grid gap-5 md:grid-cols-3">
          {[{ title: "Hybrid friendly", icon: BriefcaseBusiness }, { title: "Senior mentorship", icon: HeartHandshake }, { title: "Original projects", icon: Sparkles }].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="rounded-xl bg-white p-7"><Icon className="mb-8 h-8 w-8 text-[#0077b6]" /><h2 className="font-display text-3xl font-black">{item.title}</h2><p className="mt-4 leading-7 text-[#52616f]">A calm, ambitious culture for people who like ownership and thoughtful collaboration.</p></div>;
          })}
        </div>
      </section>
      <section className="container py-24">
        <h2 className="font-display text-5xl font-black">Open roles</h2>
        <div className="mt-8 grid gap-4">
          {["Senior UI Designer", "Next.js Developer", "SEO Content Strategist"].map((role) => <div key={role} className="flex flex-col gap-4 rounded-lg border border-[#06345f]/10 bg-white p-6 md:flex-row md:items-center md:justify-between"><div><h3 className="font-display text-2xl font-black">{role}</h3><p className="mt-2 text-[#52616f]">Puducherry / Remote-friendly</p></div><Button href="/contact" variant="ghost">Apply</Button></div>)}
        </div>
      </section>
    </>
  );
}
