import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

const baseUrl = "https://creativtechie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/portfolio", "/blog", "/contact", "/careers", "/privacy-policy", "/terms-conditions"];
  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.75
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
