import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import Footer from "./components/Footer"; // ✅ Moved here (correct place)

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
      <body className="antialiased bg-white selection:bg-emerald-200 selection:text-emerald-800">
        {/* --- Header --- */}
        <Header />

        {/* --- Main Content --- */}
        <main className="max-w-none bg-white">{children}</main>

        {/* --- Global Footer --- */}
        <Footer />

        {/* --- Analytics --- */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}