import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";

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
      <body className="antialiased selection:bg-emerald-200 selection:text-emerald-800 bg-white">
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 bg-white">{children}</main>
        <footer className="border-t border-gray-200 bg-white mt-16 py-10 text-center text-sm text-gray-600">
          <p className="mb-1">© {new Date().getFullYear()} Mandala Adventures</p>
          <p className="mb-3">Exploring culture through story and place.</p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}