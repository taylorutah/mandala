"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures"
            width={120}
            height={40}
            className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-white/80 text-sm font-medium uppercase tracking-widest">
          <li>
            <a href="#home" className="hover:text-emerald-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#explore" className="hover:text-emerald-400 transition-colors">
              Explore
            </a>
          </li>
          <li>
            <a href="#stories" className="hover:text-emerald-400 transition-colors">
              Stories
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col items-end space-y-1 cursor-pointer group">
          <span className="w-6 h-[2px] bg-white rounded-full group-hover:bg-emerald-400 transition-all" />
          <span className="w-5 h-[2px] bg-white rounded-full group-hover:bg-emerald-400 transition-all" />
          <span className="w-4 h-[2px] bg-white rounded-full group-hover:bg-emerald-400 transition-all" />
        </div>
      </nav>
    </header>
  );
}