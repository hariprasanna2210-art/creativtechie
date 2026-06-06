"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Filter, Quote, Sparkles } from "lucide-react";
import { blogPosts, clients, faqs, portfolio, process, services, stats, tech, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { Counter } from "@/components/home/counter";

export function HomeSections() {
  const [filter, setFilter] = useState("All");
  const cats = useMemo(() => ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))], []);
  const filtered = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <section className="border-y border-[#06345f]/10 bg-white py-7">
        <div className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {clients.map((client) => <p key={client} className="font-display text-xl font-bold text-[#06345f]/55">{client}</p>)}
        </div>
      </section>

      <section className="container py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">About CreativTechie</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-tight text-balance md:text-6xl">A Puducherry studio with startup speed and agency craft.</h2>
          </div>
          <div data-reveal className="grid gap-7">
            <p className="text-xl leading-9 text-[#34495e]">We build websites, campaigns, brand systems and automation that help businesses look credible, move faster and sell with more confidence. Our work blends coastal calm with bright, decisive execution.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[#06345f]/10 bg-[#fff7dc] p-6">
                  <p className="font-display text-5xl font-black"><Counter value={stat.value} suffix={stat.suffix} /></p>
                  <p className="mt-2 font-bold text-[#52616f]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6ff] py-24">
        <div className="container">
          <div data-reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">Services</p>
              <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Built around growth.</h2>
            </div>
            <Button href="/contact" variant="ghost">Get a Proposal</Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} data-reveal whileHover={{ y: -4 }} className="group rounded-xl border border-[#06345f]/10 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className={`mb-8 grid h-14 w-14 place-items-center rounded-lg ${service.color} text-white`}><Icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-2xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#52616f]">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#0077b6]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Why choose us</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Built for measurable business outcomes.</h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {["Strategy before screens", "Original art direction", "Fast technical delivery", "Honest growth reporting"].map((item, i) => (
            <div key={item} data-reveal className={`rounded-xl p-7 ${i % 2 ? "bg-[#06345f] text-white" : "bg-[#e7f7ed]"}`}>
              <Sparkles className="mb-8 h-7 w-7 text-[#ffd23f]" />
              <p className="font-display text-3xl font-black">{item}</p>
              <p className={`mt-4 leading-7 ${i % 2 ? "text-white/70" : "text-[#52616f]"}`}>We obsess over the practical details visitors feel but rarely name: pace, clarity, trust and momentum.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef8fc] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">SEO and AI visibility</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Built for Google, local search and AI answers.</h2>
            <p className="mt-5 text-lg leading-8 text-[#34495e]">
              We help Puducherry, Pondicherry and Tamil Nadu businesses become easier to discover with entity-first SEO, structured data, zero-click content, performance checks and AI-readable service pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services" variant="ghost">Explore SEO Services</Button>
              <Button href="/locations" variant="ghost">View Service Areas</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Entity-first optimization for your business, services, locations and proof points.",
              "AI and LLM visibility with clear summaries, schema and crawlable service facts.",
              "Zero-click readiness through concise answers, FAQ structure and helpful local content.",
              "Performance metrics covering page speed, index health, rich previews and enquiry quality."
            ].map((item) => (
              <div key={item} data-reveal className="rounded-lg bg-white p-6 shadow-sm">
                <Check className="mb-5 h-6 w-6 text-[#22b45a]" />
                <p className="font-display text-xl font-black leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06345f] py-24 text-white">
        <div className="container">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd23f]">Process</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">No mystery. Just momentum.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} data-reveal className="rounded-xl border border-white/10 bg-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[#ffd23f]" />
                    <span className="font-display text-5xl font-black text-white/15">{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div data-reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Selected client outcomes.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold ${filter === cat ? "bg-[#06345f] text-white" : "bg-[#edf5f8]"}`}><Filter className="h-3 w-3" />{cat}</button>)}
          </div>
        </div>
        <motion.div layout className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {filtered.map((project, i) => (
            <motion.div layout key={project.title} className="group mb-5 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm">
              <div className={`relative ${i % 2 ? "h-96" : "h-72"}`}>
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0077b6]">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{project.title}</h3>
                <p className="mt-2 font-bold text-[#52616f]">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#fff7dc] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Clients feel the difference.</h2>
          </div>
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <div key={item.name} data-reveal className="glass rounded-xl p-7">
                <Quote className="mb-5 h-7 w-7 text-[#0077b6]" />
                <p className="text-xl font-semibold leading-8">{item.quote}</p>
                <p className="mt-5 font-display font-bold">{item.name}</p>
                <p className="text-sm text-[#52616f]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div data-reveal className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Technologies</p>
          <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Modern stack. Human taste.</h2>
        </div>
        <div className="mt-12 flex overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 24, ease: "linear" }} className="flex min-w-max gap-4">
            {[...tech, ...tech].map((item, i) => <span key={`${item}-${i}`} className="rounded-md border border-[#06345f]/10 bg-white px-7 py-4 font-display text-xl font-bold shadow-sm">{item}</span>)}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eef8fc] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0077b6]">FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Clear answers before we begin.</h2>
          </div>
          <div data-reveal><FAQ items={faqs} /></div>
        </div>
      </section>

      <section className="container py-24">
        <div data-reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Blog</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Notes from the studio.</h2>
          </div>
          <Button href="/blog" variant="ghost">Read the Blog</Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} data-reveal className="overflow-hidden rounded-xl border border-[#06345f]/10 bg-white">
              <div className="relative h-60"><Image src={post.image} alt={post.title} fill className="object-cover" sizes="33vw" /></div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#22b45a]">{post.category} / {post.date}</p>
                <h3 className="mt-3 font-display text-2xl font-black leading-tight">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div data-reveal className="relative overflow-hidden rounded-xl bg-[#0077b6] p-8 text-white md:p-14">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#ffd23f]" />
          <div className="relative max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-sm font-bold"><Check className="h-4 w-4" /> Strategy, design, build and growth in one room.</p>
            <h2 className="mt-6 font-display text-4xl font-black leading-tight md:text-5xl">Ready for a website that works as hard as you do?</h2>
            <div className="mt-8"><Button href="/contact" variant="light">Start With CreativTechie</Button></div>
          </div>
        </div>
      </section>
    </>
  );
}
