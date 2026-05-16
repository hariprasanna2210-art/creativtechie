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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container flex items-center justify-between rounded-full px-5 py-2 transition ${scrolled ? "glass" : "bg-white/20 backdrop-blur-sm"}`}>
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src="/creativtechie-logo.png"
            alt="CreativTechie"
            width={460}
            height={180}
            priority
            className="h-20 w-auto max-w-[330px] object-contain sm:max-w-[390px] lg:h-24 lg:max-w-[450px]"
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold xl:flex 2xl:gap-7">
          <Link href="/" className="hover:text-[#006df2]">Home</Link>
          <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} className="relative">
            <button className="flex items-center gap-1 hover:text-[#006df2]">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-1/2 top-9 max-h-[calc(100vh-9rem)] w-[calc(100vw-2rem)] max-w-[980px] -translate-x-1/2 overflow-y-auto rounded-[28px] border border-[#061632]/10 bg-white p-4 shadow-[0_30px_90px_rgba(6,22,50,0.16)]"
                >
                  <div className="grid grid-cols-3 gap-2 xl:grid-cols-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl p-3 transition hover:bg-[#fff7df]">
                          <Icon className="mb-2 h-5 w-5 text-[#006df2]" />
                          <p className="font-display text-sm font-bold leading-5">{service.title}</p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#625e6f]">{service.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.slice(1, 5).map((link) => <Link key={link.href} href={link.href} className="hover:text-[#006df2]">{link.label}</Link>)}
        </nav>
        <div className="hidden xl:block"><Button href="/contact">Start a Project</Button></div>
        <button onClick={() => setMobile(true)} className="grid h-11 w-11 place-items-center rounded-full bg-[#061632] text-white xl:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#061632]/45 p-4 backdrop-blur-sm xl:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="ml-auto h-full max-w-sm overflow-auto rounded-[30px] bg-white p-6">
              <div className="mb-8 flex items-center justify-between">
                <Image src="/creativtechie-logo.png" alt="CreativTechie" width={260} height={130} className="h-10 w-auto object-contain" />
                <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-full bg-[#f4f0e8]" aria-label="Close menu"><X className="h-5 w-5" /></button>
              </div>
              <div className="grid gap-3">
                {navLinks.map((link) => <Link onClick={() => setMobile(false)} key={link.href} href={link.href} className="rounded-2xl bg-[#fff7df] px-4 py-3 font-bold">{link.label}</Link>)}
                <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-[#625e6f]">Services</p>
                {services.map((service) => <Link onClick={() => setMobile(false)} key={service.slug} href={`/services/${service.slug}`} className="border-b border-[#061632]/10 py-3 font-display font-bold">{service.title}</Link>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
