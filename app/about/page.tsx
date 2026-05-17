import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Lightbulb, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { stats } from "@/lib/data";
import { Counter } from "@/components/home/counter";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet CreativTechie, a premium digital agency based in Puducherry, India."
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <section className="container grid gap-12 pb-20 pt-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Our story</p>
          <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">A strategic digital partner from Puducherry.</h1>
          <p className="mt-6 text-xl leading-9 text-[#34495e]">CreativTechie was started for businesses that wanted more than a vendor. We bring strategy, taste, engineering and growth thinking into one practical team.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-xl">
          <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=82" alt="Creative team meeting" fill className="object-cover" />
        </div>
      </section>
      <section className="bg-[#fff7dc] py-20">
        <div className="container grid gap-5 md:grid-cols-4">
          {stats.map((stat) => <div key={stat.label} className="rounded-lg bg-white p-6"><p className="font-display text-5xl font-black"><Counter value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 font-bold text-[#52616f]">{stat.label}</p></div>)}
        </div>
      </section>
      <section className="container py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Mission", text: "Help ambitious teams look credible, communicate clearly and move faster online.", icon: Lightbulb },
            { title: "Vision", text: "Build a South Indian digital studio known for original design and dependable execution.", icon: Award },
            { title: "Culture", text: "Curious, accountable and craft-led. We value clear systems, transparent communication and dependable delivery.", icon: HeartHandshake }
          ].map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className="rounded-xl border border-[#06345f]/10 bg-white p-7"><Icon className="mb-8 h-8 w-8 text-[#ffd23f]" /><h2 className="font-display text-3xl font-black">{item.title}</h2><p className="mt-4 leading-7 text-[#52616f]">{item.text}</p></div>;
          })}
        </div>
      </section>
      <section className="container pb-24">
        <h2 className="font-display text-4xl font-black md:text-5xl">How our team supports you</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Strategy & SEO", "Design & Brand", "Engineering & Automation"].map((role, index) => <div key={role} className={`rounded-xl p-7 ${index === 0 ? "bg-[#eaf6ff]" : index === 1 ? "bg-[#e7f7ed]" : "bg-[#fff7dc]"}`}><MapPin className="mb-8 h-7 w-7 text-[#0077b6]" /><p className="font-display text-3xl font-black">{role}</p><p className="mt-4 leading-7 text-[#52616f]">A senior-led pod focused on clear priorities, reliable execution and measurable outcomes.</p></div>)}
        </div>
      </section>
    </>
  );
}
