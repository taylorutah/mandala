import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import Header from "./components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mandala | Dive Deep Into Cultures",
    template: "%s | Mandala",
  },
  description:
    "Mandala explores culture, connection, and discovery — through storytelling, travel, and shared experience.",
  openGraph: {
    title: "Mandala – Adventure. Culture. Connection.",
    description:
      "Dive deep into untouched terrains. Explore culture, travel, and discovery through immersive storytelling.",
    url: baseUrl,
    siteName: "Mandala",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/mountains.jpg",
        width: 1200,
        height: 630,
        alt: "Mandala Mountain Adventure",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-white bg-black scroll-smooth antialiased",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* ✅ Load Google model-viewer globally (kept for any 3D components) */}
        <Script
          id="model-viewer-cdn"
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className="selection:bg-emerald-400/30 selection:text-emerald-800">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-16 py-10 text-center text-sm text-white/70">
          <p className="mb-1">© {new Date().getFullYear()} Mandala</p>
          <p className="mb-3">Exploring culture through story and place.</p>
          <p>
            <a
              href="https://mandala-beryl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              mandala-beryl.vercel.app
            </a>
          </p>
        </footer>

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}