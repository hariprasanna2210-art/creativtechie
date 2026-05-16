"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { portfolio } from "@/lib/data";

export function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof portfolio)[number] | null>(null);
  const cats = useMemo(() => ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))], []);
  const items = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {cats.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full px-5 py-3 text-sm font-bold ${filter === cat ? "bg-[#061632] text-white" : "bg-white"}`}>{cat}</button>)}
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <motion.button layout key={project.title} onClick={() => setActive(project)} className="group overflow-hidden rounded-[32px] bg-white text-left shadow-sm">
            <div className="relative h-80"><Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" /></div>
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#006df2]">{project.category}</p>
              <h2 className="mt-2 font-display text-3xl font-black">{project.title}</h2>
              <p className="mt-2 font-bold text-[#625e6f]">{project.result}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-[#061632]/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="relative max-w-3xl overflow-hidden rounded-[36px] bg-white">
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white"><X className="h-5 w-5" /></button>
              <div className="relative h-80"><Image src={active.image} alt={active.title} fill className="object-cover" sizes="768px" /></div>
              <div className="p-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-red-500">{active.category}</p>
                <h3 className="mt-3 font-display text-5xl font-black">{active.title}</h3>
                <p className="mt-4 text-xl font-bold text-[#006df2]">{active.result}</p>
                <p className="mt-4 leading-8 text-[#625e6f]">A focused sprint covering strategy, interface direction, content structure and launch support. The result is a digital experience with clearer positioning and a cleaner path to enquiry.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
