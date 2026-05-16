import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061632] text-white">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#006df2] via-[#00a9f4] via-[#21c653] via-[#ffb000] via-[#ff2638] to-[#ec006f]" />
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-5xl font-bold leading-tight text-balance md:text-7xl">Let your digital presence feel impossible to ignore.</p>
            <div className="mt-8"><Button href="/contact" variant="light">Book a Strategy Call</Button></div>
          </div>
          <form className="rounded-[28px] border border-white/10 bg-white/10 p-6">
            <p className="font-display text-2xl font-bold">Fresh ideas, quietly useful.</p>
            <p className="mt-2 text-white/70">Monthly notes on design, SEO and practical automation.</p>
            <div className="mt-6 flex gap-2 rounded-full bg-white p-2">
              <input aria-label="Email address" placeholder="you@company.com" className="min-w-0 flex-1 rounded-full px-4 text-sm text-[#061632] outline-none" />
              <button aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-full bg-[#006df2]"><Send className="h-4 w-4" /></button>
            </div>
          </form>
        </div>
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/creativtechie-logo.png" alt="CreativTechie" width={320} height={160} className="h-12 w-auto rounded-xl bg-white object-contain px-2" />
            <p className="mt-4 leading-7 text-white/70">Premium web design, digital marketing, branding and AI automation agency based in Puducherry, India.</p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => <span key={i} className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Icon className="h-4 w-4" /></span>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Quick links</p>
            <div className="mt-4 grid gap-3 text-white/70">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="hover:text-[#ffb000]">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <div className="mt-4 grid gap-3 text-white/70">
              {services.slice(0, 8).map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-[#ffb000]">{service.title}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <div className="mt-4 grid gap-4 text-white/70">
              <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-[#ffb000]" /> Puducherry, India. Serving Pondicherry, Tamil Nadu and global teams.</p>
              <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 text-[#ff2638]" /> hello@creativtechie.com</p>
              <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 text-[#21c653]" /> +91 7418120053 / 9385870053</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 CreativTechie. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
