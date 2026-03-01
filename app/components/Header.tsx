"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

/* ───────────────────────────── Data ───────────────────────────── */

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

/* ──────────────────────── Spring configs ──────────────────────── */

const drawerSpring = { type: "spring" as const, damping: 30, stiffness: 300 };
const panelSpring  = { type: "spring" as const, damping: 26, stiffness: 260 };

/* ────────────────────────── Component ─────────────────────────── */

export default function Header() {
  const [desktopDrop, setDesktopDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<string | null>(null);

  const close = useCallback(() => setMobileOpen(false), []);

  /* Body scroll lock */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setMobilePanel(null), 300);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close on escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const subPanelItems = mobilePanel === "destinations" ? destinations : essentials;
  const subPanelLabel = mobilePanel === "destinations" ? "Destinations" : "Essentials";

  return (
    <>
      {/* ─── Header bar ─── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={close}>
            <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={148} height={44} priority className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/trips" className="hover:text-gray-900 transition-colors">Trips</Link>

            {[
              { key: "destinations", label: "Destinations", items: destinations, href: "/destinations" },
              { key: "essentials", label: "Essentials", items: essentials, href: "/essentials" },
            ].map(({ key, label, items, href }) => (
              <div key={key} className="relative"
                onMouseEnter={() => setDesktopDrop(key)}
                onMouseLeave={() => setDesktopDrop(null)}>
                <Link href={href} className="flex items-center gap-1 py-2 hover:text-gray-900 transition-colors">
                  {label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDrop === key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {desktopDrop === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 z-50 pt-2 w-52">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                        {items.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            {item.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link href={href} className="block px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                            View All →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/contact" className="bg-orange-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-orange-800 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Hamburger → X */}
          <button
            className="relative z-[9999] md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block w-6 h-[2px] rounded-full origin-center"
              style={{ backgroundColor: "#1a1a1a" }}
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="block w-6 h-[2px] rounded-full"
              style={{ backgroundColor: "#1a1a1a" }}
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-6 h-[2px] rounded-full origin-center"
              style={{ backgroundColor: "#1a1a1a" }}
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            />
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
              className="fixed inset-0 z-[9000] md:hidden"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-[9001] md:hidden flex flex-col w-[82vw] max-w-[360px] bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={drawerSpring}
            >
              {/* Drawer header — minimal */}
              <div className="flex items-center justify-end px-6 h-16 shrink-0">
                <button
                  onClick={close}
                  className="w-10 h-10 flex items-center justify-center -mr-2"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" style={{ color: "#1a1a1a" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable nav */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <AnimatePresence mode="wait" initial={false}>

                  {/* ── Sub-panel ── */}
                  {mobilePanel && (
                    <motion.div
                      key={`sub-${mobilePanel}`}
                      className="flex flex-col px-6"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={panelSpring}
                    >
                      {/* Back */}
                      <button
                        onClick={() => setMobilePanel(null)}
                        className="flex items-center gap-2.5 py-4 -ml-0.5 active:opacity-60 transition-opacity"
                      >
                        <svg className="w-4 h-4" style={{ color: "#666" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm font-medium" style={{ color: "#666" }}>Back</span>
                      </button>

                      {/* Section label */}
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.15em] pb-4 pt-2"
                        style={{ color: "#999" }}
                      >
                        {subPanelLabel}
                      </p>

                      {/* Sub-items */}
                      {subPanelItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={close}
                          className="block py-3.5 text-[17px] font-medium active:opacity-60 transition-opacity"
                          style={{ color: "#1a1a1a", borderBottom: "1px solid #f5f5f5" }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* ── Main panel ── */}
                  {!mobilePanel && (
                    <motion.div
                      key="main-panel"
                      className="flex flex-col px-6 pt-2"
                      initial={{ x: "-40%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-40%", opacity: 0 }}
                      transition={panelSpring}
                    >
                      <Link
                        href="/trips"
                        onClick={close}
                        className="block py-5 text-[22px] font-medium active:opacity-60 transition-opacity"
                        style={{ color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}
                      >
                        Trips
                      </Link>

                      <button
                        onClick={() => setMobilePanel("destinations")}
                        className="flex items-center justify-between w-full py-5 text-left text-[22px] font-medium active:opacity-60 transition-opacity"
                        style={{ color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}
                      >
                        Destinations
                        <svg className="w-4 h-4" style={{ color: "#ccc" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button
                        onClick={() => setMobilePanel("essentials")}
                        className="flex items-center justify-between w-full py-5 text-left text-[22px] font-medium active:opacity-60 transition-opacity"
                        style={{ color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}
                      >
                        Essentials
                        <svg className="w-4 h-4" style={{ color: "#ccc" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <Link
                        href="/about"
                        onClick={close}
                        className="block py-5 text-[22px] font-medium active:opacity-60 transition-opacity"
                        style={{ color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}
                      >
                        About
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pinned CTA — the ONLY color accent */}
              <div className="px-6 pb-8 pt-5 shrink-0 bg-white">
                <Link
                  href="/contact"
                  onClick={close}
                  className="block w-full text-center py-4 rounded-xl text-base font-semibold transition-colors"
                  style={{ backgroundColor: "#c2410c", color: "#fff" }}
                >
                  Plan Your Trip
                </Link>
                <a
                  href="tel:+18018231551"
                  className="block text-center text-[13px] mt-3 transition-opacity active:opacity-60"
                  style={{ color: "#aaa" }}
                >
                  (801) 823-1551
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
