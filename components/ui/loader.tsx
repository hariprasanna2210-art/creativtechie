"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#f8fbfd]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-8 rounded-md bg-[#dff4ef]"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />
            <div className="relative rounded-md bg-[#06345f] px-7 py-4 font-display text-xl font-bold text-white">CreativTechie</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
