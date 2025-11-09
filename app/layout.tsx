import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import Header from "./components/Header";
import Script from "next/script"; // ✅ Add this

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "NAPCO | North American Pump Company",
    template: "%s | NAPCO",
  },
  description:
    "NAPCO manufactures precision rotary gear pumps and factory-matched service kits for demanding industrial transfer applications.",
  openGraph: {
    title: "NAPCO Rotary Gear Pumps & Repair Kits",
    description:
      "Precision rotary gear pumps in 2″ and 3″ port sizes, stainless or ductile iron, self-priming and fully serviceable.",
    url: baseUrl,
    siteName: "NAPCO",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        "text-black bg-white dark:text-white dark:bg-black scroll-smooth",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* ✅ Load model-viewer globally via Google CDN */}
        <Script
  id="model-viewer-cdn"
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
  strategy="beforeInteractive"  // ✅ must be beforeInteractive
/>
      </head>

      <body className="antialiased selection:bg-red-600/20 selection:text-red-700">
        <Header />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-200 dark:border-white/10 mt-16 py-10 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-1">
            © {new Date().getFullYear()} NAPCO – North American Pump Company
            L.L.C.
          </p>
          <p className="mb-3">8744 S Sandy Parkway, Unit E | Sandy, UT 84070</p>
          <p>
            <a
              href="https://napcopumps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 transition"
            >
              www.napcopumps.com
            </a>
          </p>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}