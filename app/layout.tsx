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
    default: "CreativTechie | Website Design Company in Pondicherry",
    template: "%s | CreativTechie"
  },
  description: "CreativTechie is a website design company in Pondicherry offering web development, SEO, local SEO, digital marketing, WordPress, ecommerce websites and AI automation for Pondicherry, Puducherry and Tamil Nadu businesses.",
  keywords: ["CreativTechie", ...localKeywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
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
    title: "CreativTechie - Website Design Company in Pondicherry",
    description: "Website design, SEO, digital marketing, WordPress and ecommerce websites for Pondicherry and Tamil Nadu businesses.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: site.image,
        secureUrl: site.image,
        width: 1200,
        height: 630,
        alt: "CreativTechie website design, SEO and digital marketing agency in Pondicherry",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativTechie - Website Design Company in Pondicherry",
    description: "Website design, SEO, WordPress, ecommerce and digital marketing for Pondicherry and Tamil Nadu businesses.",
    images: [site.image]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${poppins.variable} ${space.variable}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y4KXMWFNFP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y4KXMWFNFP');
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
