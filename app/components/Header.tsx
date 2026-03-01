"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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

const mainLinks = [
  { label: "Trips", href: "/trips" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [desktopDrop, setDesktopDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) setTimeout(() => setMobilePanel(null), 300);
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ─── Header bar ─── */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100" style={{ zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={close}>
            <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={148} height={44} priority className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/trips" className="hover:text-orange-700 transition-colors">Trips</Link>

            {[
              { key: "destinations", label: "Destinations", items: destinations, href: "/destinations" },
              { key: "essentials", label: "Essentials", items: essentials, href: "/essentials" },
            ].map(({ key, label, items, href }) => (
              <div key={key} className="relative"
                onMouseEnter={() => setDesktopDrop(key)}
                onMouseLeave={() => setDesktopDrop(null)}>
                <Link href={href} className="flex items-center gap-1 py-2 hover:text-orange-700 transition-colors">
                  {label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDrop === key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {desktopDrop === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 w-52" style={{ zIndex: 50 }}>
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                        {items.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors">
                            {item.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link href={href} className="block px-4 py-2.5 text-sm font-semibold text-orange-700 hover:bg-orange-50 transition-colors">
                            View All →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/about" className="hover:text-orange-700 transition-colors">About</Link>
            <Link href="/contact" className="bg-orange-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-orange-800 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            style={{ zIndex: 9999 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.span className="block w-6 h-0.5 bg-gray-800 rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
            <motion.span className="block w-6 h-0.5 bg-gray-800 rounded-full"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="block w-6 h-0.5 bg-gray-800 rounded-full origin-center"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          </button>

        </div>
      </header>

      {/* ─── Mobile drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="md:hidden fixed inset-0"
              style={{ zIndex: 9000, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(3px)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="md:hidden fixed top-0 right-0 bottom-0 bg-white flex flex-col"
              style={{ width: "80vw", maxWidth: 340, zIndex: 9001 }}
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
                <Link href="/" onClick={close}>
                  <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={110} height={34} className="object-contain" />
                </Link>
                <button onClick={close} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" aria-label="Close">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait" initial={false}>

                  {/* Sub-panel: Destinations */}
                  {mobilePanel === "destinations" && (
                    <motion.div key="dest-panel" className="flex flex-col"
                      initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <button onClick={() => setMobilePanel(null)}
                        className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-orange-700 border-b border-gray-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Destinations
                      </button>
                      {destinations.map((d) => (
                        <Link key={d.href} href={d.href} onClick={close}
                          className="flex items-center justify-between px-5 py-4 text-base font-medium text-gray-800 border-b border-gray-50 hover:text-orange-700 hover:bg-orange-50 transition-colors">
                          {d.name}
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* Sub-panel: Essentials */}
                  {mobilePanel === "essentials" && (
                    <motion.div key="ess-panel" className="flex flex-col"
                      initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <button onClick={() => setMobilePanel(null)}
                        className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-orange-700 border-b border-gray-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Essentials
                      </button>
                      {essentials.map((e) => (
                        <Link key={e.href} href={e.href} onClick={close}
                          className="flex items-center justify-between px-5 py-4 text-base font-medium text-gray-800 border-b border-gray-50 hover:text-orange-700 hover:bg-orange-50 transition-colors">
                          {e.name}
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* Main panel */}
                  {!mobilePanel && (
                    <motion.div key="main-panel" className="flex flex-col"
                      initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <Link href="/trips" onClick={close}
                        className="flex items-center justify-between px-5 py-5 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 hover:bg-gray-50 transition-colors">
                        Trips
                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <button onClick={() => setMobilePanel("destinations")}
                        className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 hover:bg-gray-50 transition-colors text-left">
                        Destinations
                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button onClick={() => setMobilePanel("essentials")}
                        className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 hover:bg-gray-50 transition-colors text-left">
                        Essentials
                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <Link href="/about" onClick={close}
                        className="flex items-center justify-between px-5 py-5 text-xl font-semibold text-gray-900 border-b border-gray-100 hover:text-orange-700 hover:bg-gray-50 transition-colors">
                        About
                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* CTA */}
              {!mobilePanel && (
                <div className="px-5 py-5 border-t border-gray-100 shrink-0">
                  <Link href="/contact" onClick={close}
                    className="block w-full bg-orange-700 text-white text-center py-4 rounded-xl text-lg font-bold hover:bg-orange-800 transition-colors shadow-lg shadow-orange-700/20">
                    Plan Your Trip
                  </Link>
                  <p className="text-center text-sm text-gray-400 mt-3">(801) 823-1551</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
