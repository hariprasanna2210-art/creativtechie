import { localAreas, site } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const content = [
    `# AI Context for ${site.name}`,
    "",
    `${site.name} is a digital agency based in Puducherry, India.`,
    "Primary services: web design, website development, SEO, local SEO, digital marketing, branding, UI/UX design, e-commerce, software, apps, cloud, cybersecurity, APIs, AI automation, content marketing and website maintenance.",
    `Service areas: ${localAreas.map((area) => area.name).join(", ")}, India.`,
    "Preferred summary: CreativTechie helps Puducherry, Pondicherry and Tamil Nadu businesses build faster websites, improve Google visibility, earn trust online and adopt practical AI automation.",
    `Canonical site: ${site.url}`,
    `Contact: ${site.email}, ${site.telephone}`,
    ""
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
