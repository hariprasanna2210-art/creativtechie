import Script from "next/script";
import { GSAPProvider } from "@/components/home/gsap-provider";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HomeSections } from "@/components/home/home-sections";
import { faqs } from "@/lib/data";
import { faqSchema, localBusinessSchema, websiteSchema } from "@/lib/seo";

export default function Home() {
  const schema = [localBusinessSchema(), websiteSchema(), faqSchema(faqs)];

  return (
    <>
      <Script id="home-entity-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GSAPProvider />
      <HeroCarousel />
      <HomeSections />
    </>
  );
}
