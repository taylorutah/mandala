"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Identification", href: "/pump-identification" },
    { name: "Engineering", href: "/engineering" },
    { name: "Materials", href: "/materials" },
    { name: "Industries", href: "/industries" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/90 backdrop-blur-sm shadow-sm"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ✅ NAPCO Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/napco-logo.png"
            alt="NAPCO Logo"
            width={140}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* ✅ Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-red-600 ${
                pathname === link.href
                  ? "text-red-600 dark:text-red-500"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ✅ Request Quote Button */}
        <Link
          href="/contact"
          className="ml-6 bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md font-medium transition"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}