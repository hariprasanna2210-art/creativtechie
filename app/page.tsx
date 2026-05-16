import Script from "next/script";
import { GSAPProvider } from "@/components/home/gsap-provider";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HomeSections } from "@/components/home/home-sections";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CreativTechie",
    image: "https://creativtechie.com/og.jpg",
    address: { "@type": "PostalAddress", addressLocality: "Puducherry", addressRegion: "Puducherry", addressCountry: "IN" },
    areaServed: ["Puducherry", "Pondicherry", "Tamil Nadu", "India"],
    url: "https://creativtechie.com",
    telephone: "+91 7418120053",
    sameAs: ["https://www.instagram.com/creativtechie", "https://www.linkedin.com/company/creativtechie"]
  };

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GSAPProvider />
      <HeroCarousel />
      <HomeSections />
    </>
  );
}
