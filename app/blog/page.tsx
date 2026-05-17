import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "CreativTechie articles on web design, SEO, branding, digital marketing and AI automation."
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="container pb-20 pt-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#22b45a]">Studio notes</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">Practical insights for digital growth.</h1>
      </section>
      <section className="bg-[#fff7dc] py-20">
        <div className="container"><BlogList /></div>
      </section>
    </>
  );
}
