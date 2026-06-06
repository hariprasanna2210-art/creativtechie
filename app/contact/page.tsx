import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact CreativTechie in Puducherry",
  description: "Contact CreativTechie for web design, SEO, branding, apps, digital marketing and AI automation in Puducherry, Pondicherry and Tamil Nadu.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="container grid gap-12 pb-20 pt-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">Let&apos;s build the next version of your brand.</h1>
          <div className="mt-8 grid gap-4">
            <p className="flex gap-3 rounded-lg bg-[#fff7dc] p-5 font-bold"><MapPin className="h-5 w-5 text-[#d9a441]" /> Puducherry, India</p>
            <p className="flex gap-3 rounded-lg bg-[#eaf6ff] p-5 font-bold"><Mail className="h-5 w-5 text-[#0077b6]" /> creativtechie@gmail.com</p>
            <p className="flex gap-3 rounded-lg bg-[#e7f7ed] p-5 font-bold"><Phone className="h-5 w-5 text-[#22b45a]" /> +91 7418120053 / 9385870053</p>
          </div>
          <div className="mt-6"><Button href="https://wa.me/917418120053" variant="ghost">Chat on WhatsApp</Button></div>
        </div>
        <ContactForm />
      </section>
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-xl bg-[#eef8fc] p-6">
          <iframe title="CreativTechie Puducherry map" src="https://www.google.com/maps?q=Puducherry%20India&output=embed" className="h-[420px] w-full rounded-lg border-0" loading="lazy" />
        </div>
      </section>
      <a href="https://wa.me/917418120053" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-md bg-[#22b45a] text-white shadow-md" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
