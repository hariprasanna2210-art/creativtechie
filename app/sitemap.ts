import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { localAreas } from "@/lib/seo";

const baseUrl = "https://creativtechie.com";
const lastModified = new Date("2026-06-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/locations", "/portfolio", "/blog", "/contact", "/careers", "/privacy-policy", "/terms-conditions"];
  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/services" || path === "/locations" ? 0.9 : 0.75
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...localAreas.map((area) => ({
      url: `${baseUrl}/locations/${area.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.88
    }))
  ];
}
