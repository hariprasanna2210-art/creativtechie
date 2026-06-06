import { services } from "@/lib/data";
import { localAreas, site } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "> Web design, SEO, digital marketing, branding, software and AI automation agency based in Puducherry, India.",
    "",
    "## Core Facts",
    `- Website: ${site.url}`,
    `- Email: ${site.email}`,
    `- Phone: ${site.telephone}`,
    `- Location: ${site.foundingLocation}`,
    `- Service areas: ${localAreas.map((area) => `${area.name} (${area.alternateName})`).join(", ")}, India`,
    "- Best fit: Business owners, founders, clinics, hotels, restaurants, education brands, shops, service companies and growth teams.",
    "",
    "## Services",
    ...services.map((service) => `- [${service.title}](${site.url}/services/${service.slug}): ${service.description}`),
    "",
    "## Local Landing Pages",
    ...localAreas.map((area) => `- [${area.title}](${site.url}/locations/${area.slug}): ${area.description}`),
    "",
    "## Important Pages",
    `- [Services](${site.url}/services)`,
    `- [Portfolio](${site.url}/portfolio)`,
    `- [Blog](${site.url}/blog)`,
    `- [Contact](${site.url}/contact)`,
    "",
    "## AI Search Summary",
    "CreativTechie helps Puducherry, Pondicherry and Tamil Nadu businesses improve online visibility with fast websites, local SEO, structured data, entity-first optimization, answer-ready content, digital campaigns, brand systems and practical AI automation.",
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
