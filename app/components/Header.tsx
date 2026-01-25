"use client";

import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/mandala-logo.png"
            alt="Mandala Adventures Logo"
            width={160}
            height={48}
            priority
            className="logo-image object-contain block select-none"
            style={{
              backgroundColor: "#ffffff",
              transform: "translateZ(0)",
              imageRendering: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
          <Link
            href="/trips"
            className="hover:text-orange-800 transition-colors duration-200"
          >
            Trips
          </Link>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDestinationsOpen(true)}
            onMouseLeave={() => setIsDestinationsOpen(false)}
          >
            <Link
              href="/destinations"
              className="hover:text-orange-800 transition-colors duration-200 flex items-center gap-1 py-2"
            >
              Destinations
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDestinationsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {isDestinationsOpen && (
              <div className="absolute top-full left-0 pt-2 w-52">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.href}
                      href={dest.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors"
                    >
                      {dest.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/destinations"
                      className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50"
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Essentials Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsEssentialsOpen(true)}
            onMouseLeave={() => setIsEssentialsOpen(false)}
          >
            <Link
              href="/essentials"
              className="hover:text-orange-800 transition-colors duration-200 flex items-center gap-1 py-2"
            >
              Essentials
              <svg
                className={`w-4 h-4 transition-transform ${
                  isEssentialsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {isEssentialsOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {essentials.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/essentials"
                      className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50"
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-orange-800 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="bg-orange-700 text-white px-5 py-2 rounded-lg hover:bg-orange-800 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-6 py-4 space-y-3">
            <Link
              href="/trips"
              className="block text-gray-700 hover:text-orange-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trips
            </Link>
            <Link
              href="/destinations"
              className="block text-gray-700 hover:text-orange-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <div className="pl-4 space-y-2 border-l-2 border-gray-100">
              {destinations.map((dest) => (
                <Link
                  key={dest.href}
                  href={dest.href}
                  className="block text-sm text-gray-500 hover:text-orange-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dest.name}
                </Link>
              ))}
            </div>
            <Link
              href="/essentials"
              className="block text-gray-700 hover:text-orange-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Essentials
            </Link>
            <div className="pl-4 space-y-2 border-l-2 border-gray-100">
              {essentials.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-gray-500 hover:text-orange-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-orange-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block bg-orange-700 text-white text-center px-4 py-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
