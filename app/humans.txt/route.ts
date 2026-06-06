import { site } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const content = [
    "/* TEAM */",
    `Agency: ${site.name}`,
    `Site: ${site.url}`,
    `Contact: ${site.email}`,
    "Location: Puducherry, India",
    "",
    "/* SERVICES */",
    "Web design, SEO, digital marketing, branding, AI automation, software development, app development and website maintenance.",
    "",
    "/* SITE */",
    "Built with Next.js, React, TypeScript and Tailwind CSS.",
    ""
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
