import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore selected CreativTechie projects across web, apps, branding, commerce and marketing."
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portfolio" }]} />
      <section className="mesh-bg py-10">
        <div className="container pb-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-600">Portfolio</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl font-black leading-tight md:text-8xl">Selected work with measurable bite.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#4b4658]">A sample of web, product, commerce, brand and campaign work shaped for real business movement.</p>
        </div>
      </section>
      <section className="bg-[#f4f0e8] py-20">
        <div className="container"><PortfolioGallery /></div>
      </section>
    </>
  );
}
