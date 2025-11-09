"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures Logo"
            width={180}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="flex space-x-8 text-sm font-medium text-gray-700">
          <Link href="/trips" className="hover:text-emerald-600 transition">
            Trips
          </Link>
          <Link href="/destinations" className="hover:text-emerald-600 transition">
            Destinations
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}