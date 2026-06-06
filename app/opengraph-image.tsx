import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CreativTechie - Web Design, SEO and Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#eef8fc",
          color: "#06345f",
          padding: 72,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 72, height: 72, borderRadius: 12, background: "#0077b6" }} />
          <div style={{ fontSize: 52, fontWeight: 800 }}>CreativTechie</div>
        </div>
        <div>
          <div style={{ color: "#0077b6", fontSize: 28, fontWeight: 800, textTransform: "uppercase" }}>
            Puducherry | Pondicherry | Tamil Nadu
          </div>
          <div style={{ marginTop: 24, maxWidth: 940, fontSize: 76, lineHeight: 1.02, fontWeight: 900 }}>
            Web Design, SEO & AI-Ready Digital Growth
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 28, fontWeight: 700 }}>
          <span>Websites</span>
          <span>SEO</span>
          <span>Branding</span>
          <span>Marketing</span>
          <span>AI Automation</span>
        </div>
      </div>
    ),
    size
  );
}
