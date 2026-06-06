import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { localAreas } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06345f] text-white">
      <div className="absolute inset-x-0 top-0 grid h-2 grid-cols-4">
        <span className="bg-[#0077b6]" />
        <span className="bg-[#0891c8]" />
        <span className="bg-[#22b45a]" />
        <span className="bg-[#ffd23f]" />
      </div>
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-4xl font-bold leading-tight text-balance md:text-5xl">Build a digital presence your customers can trust.</p>
            <div className="mt-8"><Button href="/contact" variant="light">Book a Strategy Call</Button></div>
          </div>
          <form className="rounded-lg border border-white/10 bg-white/10 p-6">
            <p className="font-display text-2xl font-bold">Digital insights for growth teams.</p>
            <p className="mt-2 text-white/70">Monthly notes on design, SEO and practical automation.</p>
            <div className="mt-6 flex gap-2 rounded-md bg-white p-2">
              <input aria-label="Email address" placeholder="you@company.com" className="min-w-0 flex-1 rounded-md px-4 text-sm text-[#06345f] outline-none" />
              <button aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-md bg-[#0077b6]"><Send className="h-4 w-4" /></button>
            </div>
          </form>
        </div>
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/creativtechie-logo.png" alt="CreativTechie" width={320} height={160} className="h-12 w-auto rounded-xl bg-white object-contain px-2" />
            <p className="mt-4 leading-7 text-white/70">Premium web design, digital marketing, branding and AI automation agency based in Puducherry, India.</p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => <span key={i} className="grid h-10 w-10 place-items-center rounded-md bg-white/10"><Icon className="h-4 w-4" /></span>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Quick links</p>
            <div className="mt-4 grid gap-3 text-white/70">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="hover:text-[#ffd23f]">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <div className="mt-4 grid gap-3 text-white/70">
              <Link href="/services" className="hover:text-[#ffd23f]">All Services</Link>
              {services.slice(0, 8).map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-[#ffd23f]">{service.title}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <div className="mt-4 grid gap-4 text-white/70">
              <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-[#ffd23f]" /> Puducherry, India. Serving Pondicherry, Tamil Nadu and global teams.</p>
              <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 text-[#22b45a]" /> creativtechie@gmail.com</p>
              <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 text-[#22b45a]" /> +91 7418120053 / 9385870053</p>
              <div className="grid gap-2">
                <Link href="/locations" className="font-bold text-white hover:text-[#ffd23f]">Service Areas</Link>
                {localAreas.map((area) => (
                  <Link key={area.slug} href={`/locations/${area.slug}`} className="hover:text-[#ffd23f]">{area.name}</Link>
                ))}
              </div>
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
