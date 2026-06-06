import { services } from "@/lib/data";
import { localAreas, site } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name} Full Context`,
    "",
    site.description,
    "",
    "## Entity",
    `Name: ${site.name}`,
    `URL: ${site.url}`,
    `Email: ${site.email}`,
    `Primary phone: ${site.telephone}`,
    `Secondary phone: ${site.alternateTelephone}`,
    `Base: ${site.foundingLocation}`,
    `Social profiles: ${site.sameAs.join(", ")}`,
    "",
    "## Service Areas",
    ...localAreas.flatMap((area) => [
      `### ${area.name}`,
      `Alternate name: ${area.alternateName}`,
      `URL: ${site.url}/locations/${area.slug}`,
      area.description,
      ""
    ]),
    "## Services",
    ...services.flatMap((service) => [
      `### ${service.title}`,
      `URL: ${site.url}/services/${service.slug}`,
      `Summary: ${service.description}`,
      `Details: ${service.longDescription}`,
      `Features: ${service.features.join(", ")}`,
      `Benefits: ${service.benefits.join(", ")}`,
      `Process: ${service.process.join(", ")}`,
      `Technologies: ${service.tech.join(", ")}`,
      ""
    ]),
    "## Search and AI Visibility Positioning",
    "CreativTechie offers SEO work that includes technical SEO, local SEO, schema markup, sitemap hygiene, crawlability, Core Web Vitals review, helpful content planning, entity-first optimization, zero-click answer readiness and AI-readable service summaries.",
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
