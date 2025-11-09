"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures Logo"
            width={150}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-emerald-600 transition">
            Home
          </Link>
          <Link href="/explore" className="hover:text-emerald-600 transition">
            Explore
          </Link>
          <Link href="/stories" className="hover:text-emerald-600 transition">
            Stories
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}