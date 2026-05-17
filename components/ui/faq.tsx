"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-[#06345f]/10 rounded-lg border border-[#06345f]/10 bg-white">
      {items.map((item, index) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-bold"
          >
            {item.q}
            <Plus className={`h-5 w-5 shrink-0 transition ${open === index ? "rotate-45 text-[#22b45a]" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-[#52616f]">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
