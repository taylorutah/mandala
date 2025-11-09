"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures Logo"
            width={200}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8 text-gray-700 text-sm font-medium">
          <Link href="/trips" className="hover:text-emerald-600 transition-colors">
            Trips
          </Link>
          <Link href="/destinations" className="hover:text-emerald-600 transition-colors">
            Destinations
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}