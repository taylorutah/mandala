import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Mandala Adventures",
    template: "%s | Mandala Adventures",
  },
  description:
    "Mandala Adventures curates extraordinary journeys into culture, connection, and remote places around the world.",
  openGraph: {
    title: "Mandala Adventures",
    description:
      "Travel deeper — guided expeditions and cultural immersion around the world.",
    url: "https://mandala-beryl.vercel.app",
    siteName: "Mandala Adventures",
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
        "text-gray-800 bg-white scroll-smooth",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <Script
          id="model-viewer-cdn"
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className="antialiased selection:bg-emerald-200 selection:text-emerald-800">
        <Header />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>

        <footer className="border-t border-gray-200 mt-16 py-10 text-center text-sm text-gray-600">
          <p className="mb-1">
            © {new Date().getFullYear()} Mandala Adventures
          </p>
          <p className="mb-3">Exploring culture through story and place.</p>
          <p>
            <a
              href="https://mandala-beryl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 transition"
            >
              mandala-beryl.vercel.app
            </a>
          </p>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}