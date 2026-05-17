"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="grain mesh-bg relative min-h-[760px] overflow-hidden pt-24 sm:pt-28 lg:min-h-[680px] lg:pt-24 xl:min-h-[760px]">
      <AnimatePresence mode="wait">
        <motion.div key={slide.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
          <Image src={slide.image} alt="" fill priority className="object-cover opacity-[0.18]" sizes="100vw" />
        </motion.div>
      </AnimatePresence>
      <div className="container relative z-10 grid min-h-[620px] items-center gap-8 py-10 lg:min-h-[560px] lg:grid-cols-[1.05fr_0.95fr] lg:py-8 xl:min-h-[640px] xl:py-12">
        <div>
          <div className="mb-5 inline-flex rounded-lg bg-white/85 p-1 shadow-sm backdrop-blur">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`rounded-md px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition sm:px-4 ${active === index ? "bg-[#06345f] text-white" : "text-[#52616f] hover:text-[#0077b6]"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={slide.title} initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.55 }}>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#0077b6]">{slide.kicker}</p>
              <h1 className="font-display text-4xl font-black leading-[1.02] text-balance sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-6xl">
                {slide.title}
                <span className="block text-accent">with clarity.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#34495e] md:text-lg xl:text-xl">{slide.description} Based in Puducherry, built for brands that want sharper digital momentum.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href="/contact">Plan Your Project</Button>
                <Button href={slide.href} variant="ghost">Explore Service</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div className="relative hidden min-h-[500px] lg:block xl:min-h-[600px]" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
          <div className={`absolute left-8 top-8 h-64 w-64 rounded-md ${slide.color} opacity-15`} />
          <div className="absolute right-0 top-12 h-[400px] w-[330px] overflow-hidden rounded-xl border border-white shadow-lg xl:top-16 xl:h-[460px] xl:w-[380px]">
            <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="(min-width: 1280px) 380px, 330px" />
          </div>
          <div className="glass absolute bottom-12 left-0 max-w-xs rounded-lg p-5 xl:bottom-20 xl:p-6">
            <p className="font-display text-3xl font-black xl:text-4xl">{slide.metric.value}</p>
            <p className="mt-2 font-bold">{slide.metric.label}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
