import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "CreativTechie terms and conditions."
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <section className="container max-w-4xl pb-24 pt-10">
        <h1 className="font-display text-6xl font-black">Terms & Conditions</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-[#4b4658]">
          <p>Project scope, timelines, deliverables and payment terms are confirmed in written proposals before work begins.</p>
          <p>Client feedback, approvals, assets and access credentials must be provided on time to maintain agreed schedules.</p>
          <p>Unless otherwise agreed, CreativTechie may showcase completed work in portfolios, proposals and marketing material.</p>
        </div>
      </section>
    </>
  );
}
