import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Loader } from "@/components/ui/loader";
import { PageTransition } from "@/components/ui/page-transition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://creativtechie.com"),
  title: {
    default: "CreativTechie | Premium Web Design & Digital Agency in Puducherry",
    template: "%s | CreativTechie"
  },
  description: "CreativTechie is a premium web design, SEO, branding, AI and digital marketing agency based in Puducherry, India.",
  keywords: ["CreativTechie", "web design Puducherry", "SEO Pondicherry", "digital agency Tamil Nadu", "branding agency India"],
  openGraph: {
    title: "CreativTechie - Premium Digital Agency in Puducherry",
    description: "Websites, apps, SEO, branding and automation for ambitious Indian and global brands.",
    url: "https://creativtechie.com",
    siteName: "CreativTechie",
    locale: "en_IN",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${poppins.variable} ${space.variable}`}>
        <Loader />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
