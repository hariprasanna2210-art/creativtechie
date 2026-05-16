import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CreativTechie privacy policy."
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="container max-w-4xl pb-24 pt-10">
        <h1 className="font-display text-6xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-[#4b4658]">
          <p>CreativTechie collects only the information needed to respond to enquiries, prepare proposals, deliver services and improve our website experience.</p>
          <p>We do not sell personal data. Information submitted through forms may include your name, email, phone number, company and project notes.</p>
          <p>We may use analytics tools to understand page performance and visitor behavior in aggregate. You can contact hello@creativtechie.com for privacy questions.</p>
        </div>
      </section>
    </>
  );
}
