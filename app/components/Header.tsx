"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { name: "Nepal", href: "/destinations/nepal" },
  { name: "Everest", href: "/destinations/everest" },
  { name: "India", href: "/destinations/india" },
  { name: "Bhutan", href: "/destinations/bhutan" },
  { name: "Tibet", href: "/destinations/tibet" },
  { name: "Mongolia", href: "/destinations/mongolia" },
  { name: "China", href: "/destinations/china" },
  { name: "Cambodia", href: "/destinations/cambodia" },
  { name: "Southeast Asia", href: "/destinations/southeast-asia" },
];

const essentials = [
  { name: "Frequently Asked Questions", href: "/essentials/faq" },
  { name: "Trip Difficulty Ratings", href: "/essentials/trip-ratings" },
  { name: "Gear & Clothing", href: "/essentials/gear" },
  { name: "Traveler's Health", href: "/essentials/health" },
  { name: "Reservations & Booking", href: "/essentials/booking" },
  { name: "Visa Information", href: "/essentials/visa" },
];

export default function Header() {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isEssentialsOpen, setIsEssentialsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileSection(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const close = () => setIsMobileOpen(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center">
            <Image
              src="/images/mandala-logo.png"
              alt="Mandala Adventures"
              width={160}
              height={48}
              priority
              className="object-contain block select-none"
              style={{ backgroundColor: "#fff", display: "block" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
            <Link href="/trips" className="hover:text-orange-800 transition-colors">Trips</Link>

            <div className="relative" onMouseEnter={() => setIsDestinationsOpen(true)} onMouseLeave={() => setIsDestinationsOpen(false)}>
              <Link href="/destinations" className="hover:text-orange-800 transition-colors flex items-center gap-1 py-2">
                Destinations
                <svg className={`w-4 h-4 transition-transform ${isDestinationsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isDestinationsOpen && (
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    {destinations.map((d) => (
                      <Link key={d.href} href={d.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors">{d.name}</Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link href="/destinations" className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50">View All →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIsEssentialsOpen(true)} onMouseLeave={() => setIsEssentialsOpen(false)}>
              <Link href="/essentials" className="hover:text-orange-800 transition-colors flex items-center gap-1 py-2">
                Essentials
                <svg className={`w-4 h-4 transition-transform ${isEssentialsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {isEssentialsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    {essentials.map((e) => (
                      <Link key={e.href} href={e.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors">{e.name}</Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link href="/essentials" className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50">View All →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-orange-800 transition-colors">About</Link>
            <Link href="/contact" className="bg-orange-700 text-white px-5 py-2 rounded-lg hover:bg-orange-800 transition-colors">Contact</Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] p-2 -mr-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isMobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 origin-center ${isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ top: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

        {/* Drawer — slides in from right */}
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white flex flex-col transition-transform duration-300 ease-out ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link href="/" onClick={close}>
              <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={120} height={36} className="object-contain" />
            </Link>
            <button onClick={close} className="p-2 -mr-2 text-gray-500 hover:text-gray-800" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">

            {/* Sub-page view for Destinations */}
            {mobileSection === "destinations" ? (
              <>
                <button onClick={() => setMobileSection(null)} className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Destinations</p>
                {destinations.map((d) => (
                  <Link key={d.href} href={d.href} onClick={close}
                    className="flex items-center justify-between py-3 text-lg font-medium text-gray-800 border-b border-gray-50 hover:text-orange-700 transition-colors">
                    {d.name}
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
                <Link href="/destinations" onClick={close} className="block mt-4 text-sm text-orange-700 font-semibold hover:text-orange-800">
                  View All Destinations →
                </Link>
              </>
            ) : mobileSection === "essentials" ? (
              <>
                <button onClick={() => setMobileSection(null)} className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Essentials</p>
                {essentials.map((e) => (
                  <Link key={e.href} href={e.href} onClick={close}
                    className="flex items-center justify-between py-3 text-lg font-medium text-gray-800 border-b border-gray-50 hover:text-orange-700 transition-colors">
                    {e.name}
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
                <Link href="/essentials" onClick={close} className="block mt-4 text-sm text-orange-700 font-semibold hover:text-orange-800">
                  View All Essentials →
                </Link>
              </>
            ) : (
              <>
                <Link href="/trips" onClick={close}
                  className="flex items-center justify-between py-4 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 transition-colors">
                  Trips
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <button onClick={() => setMobileSection("destinations")}
                  className="w-full flex items-center justify-between py-4 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 transition-colors">
                  Destinations
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button onClick={() => setMobileSection("essentials")}
                  className="w-full flex items-center justify-between py-4 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 transition-colors">
                  Essentials
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <Link href="/about" onClick={close}
                  className="flex items-center justify-between py-4 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 transition-colors">
                  About
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </>
            )}
          </nav>

          {/* Bottom CTA */}
          {!mobileSection && (
            <div className="px-6 py-6 border-t border-gray-100">
              <Link href="/contact" onClick={close}
                className="block w-full bg-orange-700 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-orange-800 transition-colors">
                Plan Your Trip
              </Link>
              <p className="text-center text-sm text-gray-400 mt-3">(801) 823-1551</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
