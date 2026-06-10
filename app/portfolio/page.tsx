import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio of Websites, Branding, Apps & Marketing",
  description: "Explore CreativTechie projects across web design, apps, branding, e-commerce, SEO and digital marketing for business growth.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portfolio" }]} />
      <section className="mesh-bg py-10">
        <div className="container pb-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Portfolio</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">Selected work with measurable results.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#34495e]">A sample of web, product, commerce, brand and campaign work shaped for real business movement.</p>
          <div className="mt-8">
            <Button href="/website-design-pondicherry/" variant="ghost">Website Designer in Pondicherry</Button>
          </div>
        </div>
      </section>
      <section className="bg-[#eaf6ff] py-20">
        <div className="container"><PortfolioGallery /></div>
      </section>
    </>
  );
}
