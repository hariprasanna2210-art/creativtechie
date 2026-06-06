"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`container flex items-center justify-between rounded-xl border border-[#06345f]/10 px-5 py-2 transition ${scrolled ? "glass" : "bg-white/85 backdrop-blur-sm"}`}>
        <Link href="/" className="flex min-w-0 items-center overflow-visible">
          <Image
            src="/creativtechie-logo.png"
            alt="CreativTechie"
            width={519}
            height={144}
            priority
            className="h-12 w-auto max-w-[260px] object-contain sm:h-14 sm:max-w-[320px] lg:h-16 lg:max-w-[380px]"
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold xl:flex 2xl:gap-7">
          <Link href="/" className="hover:text-[#0077b6]">Home</Link>
          <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} className="relative">
            <Link href="/services" className="flex items-center gap-1 hover:text-[#0077b6]">
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-1/2 top-9 max-h-[calc(100vh-9rem)] w-[calc(100vw-2rem)] max-w-[980px] -translate-x-1/2 overflow-y-auto rounded-lg border border-[#06345f]/10 bg-white p-4 shadow-lg"
                >
                  <div className="grid grid-cols-3 gap-2 xl:grid-cols-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-lg p-3 transition hover:bg-[#eaf6ff]">
                          <Icon className="mb-2 h-5 w-5 text-[#0077b6]" />
                          <p className="font-display text-sm font-bold leading-5">{service.title}</p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#52616f]">{service.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.slice(1, 5).map((link) => <Link key={link.href} href={link.href} className="hover:text-[#0077b6]">{link.label}</Link>)}
        </nav>
        <div className="hidden xl:block"><Button href="/contact">Start a Project</Button></div>
        <button onClick={() => setMobile(true)} className="grid h-11 w-11 place-items-center rounded-md bg-[#06345f] text-white xl:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#06345f]/45 p-4 backdrop-blur-sm xl:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="ml-auto h-full max-w-sm overflow-auto rounded-xl bg-white p-6">
              <div className="mb-8 flex items-center justify-between">
                <Image src="/creativtechie-logo.png" alt="CreativTechie" width={519} height={144} className="h-12 w-auto object-contain" />
                <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-md bg-[#edf5f8]" aria-label="Close menu"><X className="h-5 w-5" /></button>
              </div>
              <div className="grid gap-3">
                <Link onClick={() => setMobile(false)} href="/services" className="rounded-md bg-[#eaf6ff] px-4 py-3 font-bold">Services</Link>
                <Link onClick={() => setMobile(false)} href="/locations" className="rounded-md bg-[#e7f7ed] px-4 py-3 font-bold">Locations</Link>
                {navLinks.map((link) => <Link onClick={() => setMobile(false)} key={link.href} href={link.href} className="rounded-md bg-[#eaf6ff] px-4 py-3 font-bold">{link.label}</Link>)}
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-[#52616f]">Services</p>
                {services.map((service) => <Link onClick={() => setMobile(false)} key={service.slug} href={`/services/${service.slug}`} className="border-b border-[#06345f]/10 py-3 font-display font-bold">{service.title}</Link>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
