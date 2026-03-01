"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

type Panel = "main" | "destinations" | "essentials";

/* Apple's sheet presentation curve — snappy open, graceful deceleration */
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

/* ────────────────────────── Component ─────────────────────────── */

export default function Header() {
  const [desktopDrop, setDesktopDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<Panel>("main");
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setMobileOpen(false), []);

  /* Scroll lock + panel reset on close */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) {
      const t = setTimeout(() => setActivePanel("main"), 350);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Inert attribute — prevents focus in off-screen drawer */
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    if (mobileOpen) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [mobileOpen]);

  /* Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [close]);

  /* Sub-panel data */
  const subItems = activePanel === "destinations" ? destinations : essentials;
  const subLabel = activePanel === "destinations" ? "Destinations" : "Essentials";

  return (
    <>
      {/* ─── Header bar ─── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={close} className="text-inherit hover:text-inherit">
            <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={148} height={44} priority className="object-contain" />
          </Link>

          {/* Desktop nav — Framer Motion for dropdown AnimatePresence */}
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
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
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

          {/* ── Hamburger → X (CSS transitions) ── */}
          <button
            className="relative z-[9999] md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-transparent p-0 border-none shadow-none rounded-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-[2px] rounded-full origin-center"
              style={{
                backgroundColor: "#1a1a1a",
                transform: mobileOpen ? "translateY(8px) rotate(45deg)" : "none",
                transition: `transform 0.3s ${EASE}`,
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full"
              style={{
                backgroundColor: "#1a1a1a",
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "scaleX(0)" : "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full origin-center"
              style={{
                backgroundColor: "#1a1a1a",
                transform: mobileOpen ? "translateY(-8px) rotate(-45deg)" : "none",
                transition: `transform 0.3s ${EASE}`,
              }}
            />
          </button>
        </div>
      </header>

      {/* ─── Backdrop (always in DOM) ─── */}
      <div
        className="fixed inset-0 z-[9000] md:hidden"
        onClick={close}
        aria-hidden="true"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: `opacity 0.3s ${EASE}`,
        }}
      />

      {/* ─── Drawer (always in DOM, translated off-screen when closed) ─── */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-[9001] md:hidden flex flex-col"
        style={{
          width: "min(82vw, 360px)",
          backgroundColor: "#fff",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: `transform 0.35s ${EASE}`,
        }}
      >
        {/* Drawer header — close X only */}
        <div className="flex items-center justify-end shrink-0" style={{ padding: "0 24px", height: 64 }}>
          <button
            onClick={close}
            className="bg-transparent p-0 border-none shadow-none rounded-none"
            style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginRight: -8, color: "#1a1a1a" }}
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Panel container (all panels always in DOM) ── */}
        <div className="flex-1 relative overflow-hidden">

          {/* Main panel */}
          <div
            className="absolute inset-0 overflow-y-auto overscroll-contain"
            style={{
              padding: "8px 24px 0",
              transform: activePanel === "main" ? "translateX(0)" : "translateX(-100%)",
              transition: `transform 0.3s ${EASE}`,
            }}
          >
            <NavLink href="/trips" onClick={close}>Trips</NavLink>
            <NavButton onClick={() => setActivePanel("destinations")} hasChevron>Destinations</NavButton>
            <NavButton onClick={() => setActivePanel("essentials")} hasChevron>Essentials</NavButton>
            <NavLink href="/about" onClick={close}>About</NavLink>
          </div>

          {/* Destinations panel */}
          <div
            className="absolute inset-0 overflow-y-auto overscroll-contain"
            style={{
              padding: "0 24px",
              transform: activePanel === "destinations" ? "translateX(0)" : "translateX(100%)",
              transition: `transform 0.3s ${EASE}`,
            }}
          >
            <BackButton onClick={() => setActivePanel("main")} />
            <SectionLabel>Destinations</SectionLabel>
            {destinations.map((d) => (
              <SubLink key={d.href} href={d.href} onClick={close}>{d.name}</SubLink>
            ))}
          </div>

          {/* Essentials panel */}
          <div
            className="absolute inset-0 overflow-y-auto overscroll-contain"
            style={{
              padding: "0 24px",
              transform: activePanel === "essentials" ? "translateX(0)" : "translateX(100%)",
              transition: `transform 0.3s ${EASE}`,
            }}
          >
            <BackButton onClick={() => setActivePanel("main")} />
            <SectionLabel>Essentials</SectionLabel>
            {essentials.map((e) => (
              <SubLink key={e.href} href={e.href} onClick={close}>{e.name}</SubLink>
            ))}
          </div>
        </div>

        {/* ── Pinned CTA — the ONLY orange element ── */}
        <div style={{ padding: "20px 24px 32px", flexShrink: 0, borderTop: "1px solid #f0f0f0" }}>
          <Link
            href="/contact"
            onClick={close}
            className="block w-full text-center rounded-xl text-base font-semibold transition-colors hover:opacity-90"
            style={{ padding: "16px 0", backgroundColor: "#c2410c", color: "#fff", textDecoration: "none" }}
          >
            Plan Your Trip
          </Link>
          <a
            href="tel:+18018231551"
            className="block text-center transition-opacity active:opacity-60"
            style={{ fontSize: 13, color: "#aaa", marginTop: 12, textDecoration: "none" }}
          >
            (801) 823-1551
          </a>
        </div>
      </div>
    </>
  );
}

/* ─────────────────── Sub-components (drawer items) ───────────────── */

/** Main nav link — large text, no orange */
function NavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block transition-opacity active:opacity-60"
      style={{ padding: "20px 0", fontSize: 22, fontWeight: 500, color: "#1a1a1a", borderBottom: "1px solid #f0f0f0", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}

/** Main nav button (drill-down) — includes subtle chevron */
function NavButton({ onClick, children, hasChevron }: { onClick: () => void; children: React.ReactNode; hasChevron?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full text-left bg-transparent p-0 border-none shadow-none rounded-none transition-opacity active:opacity-60"
      style={{ padding: "20px 0", fontSize: 22, fontWeight: 500, color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}
    >
      {children}
      {hasChevron && (
        <svg width="16" height="16" fill="none" stroke="#ccc" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

/** Back button in sub-panels */
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 bg-transparent p-0 border-none shadow-none rounded-none transition-opacity active:opacity-60"
      style={{ padding: "16px 0", color: "#666" }}
    >
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
      </svg>
      <span style={{ fontSize: 14, fontWeight: 500 }}>Back</span>
    </button>
  );
}

/** Section label in sub-panels — small, uppercase, tracked, gray */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", padding: "8px 0 16px", margin: 0 }}>
      {children}
    </p>
  );
}

/** Sub-panel link item */
function SubLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block transition-opacity active:opacity-60"
      style={{ padding: "14px 0", fontSize: 17, fontWeight: 500, color: "#1a1a1a", borderBottom: "1px solid #f5f5f5", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}
