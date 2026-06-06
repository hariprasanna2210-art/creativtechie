import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Loader } from "@/components/ui/loader";
import { PageTransition } from "@/components/ui/page-transition";
import { localKeywords, site } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Digital Agency",
  title: {
    default: "CreativTechie | Web Design, SEO & Digital Agency in Puducherry",
    template: "%s | CreativTechie"
  },
  description: "CreativTechie helps Puducherry, Pondicherry and Tamil Nadu businesses grow with web design, SEO, branding, digital marketing, apps and AI automation.",
  keywords: ["CreativTechie", ...localKeywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "CreativTechie - Web Design, SEO & AI-Ready Digital Agency",
    description: "Websites, SEO, branding, marketing and AI automation for Puducherry, Pondicherry and Tamil Nadu businesses.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CreativTechie digital agency" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativTechie - Web Design, SEO & Digital Agency",
    description: "Local SEO, fast websites, branding, marketing and AI automation for Puducherry and Tamil Nadu businesses.",
    images: ["/opengraph-image"]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${poppins.variable} ${space.variable}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YR7F2TKVH1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YR7F2TKVH1');
          `}
        </Script>
        <Loader />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
