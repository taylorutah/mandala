"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* === Logo === */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures Logo"
            width={160}
            height={48}
            priority
            className="logo-image object-contain block select-none"
            style={{
              backgroundColor: "#ffffff", // Ensures transparent PNG blends cleanly
              transform: "translateZ(0)", // Prevents subpixel shadow line
              imageRendering: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* === Navigation === */}
        <nav className="flex items-center space-x-8 text-gray-700 text-sm font-medium">
          <Link
            href="/trips"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Trips
          </Link>
          <Link
            href="/destinations"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}