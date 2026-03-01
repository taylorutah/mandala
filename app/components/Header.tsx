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

export default function Header() {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isEssentialsOpen, setIsEssentialsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setMobileSection(null), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const close = () => setIsMobileOpen(false);

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" onClick={close} style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/mandala-logo.png"
              alt="Mandala Adventures"
              width={160}
              height={48}
              priority
              style={{ objectFit: "contain", display: "block", backgroundColor: "#fff" }}
            />
          </Link>

          {/* Desktop Nav — hidden below 768px */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 24, fontSize: 14, fontWeight: 500, color: "#374151" }}>
            <Link href="/trips" className="hover:text-orange-800 transition-colors">Trips</Link>

            <div style={{ position: "relative" }}
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}>
              <Link href="/destinations" style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 0" }} className="hover:text-orange-800 transition-colors">
                Destinations
                <svg style={{ width: 16, height: 16, transition: "transform 0.2s", transform: isDestinationsOpen ? "rotate(180deg)" : "none" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <AnimatePresence>
                {isDestinationsOpen && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8, width: 208, zIndex: 50 }}>
                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 10px 40px rgba(0,0,0,0.12)", padding: "8px 0" }}>
                      {destinations.map((d) => (
                        <Link key={d.href} href={d.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors text-sm">{d.name}</Link>
                      ))}
                      <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 8, paddingTop: 8 }}>
                        <Link href="/destinations" className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50 text-sm">View All →</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div style={{ position: "relative" }}
              onMouseEnter={() => setIsEssentialsOpen(true)}
              onMouseLeave={() => setIsEssentialsOpen(false)}>
              <Link href="/essentials" style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 0" }} className="hover:text-orange-800 transition-colors">
                Essentials
                <svg style={{ width: 16, height: 16, transition: "transform 0.2s", transform: isEssentialsOpen ? "rotate(180deg)" : "none" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <AnimatePresence>
                {isEssentialsOpen && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8, width: 224, zIndex: 50 }}>
                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 10px 40px rgba(0,0,0,0.12)", padding: "8px 0" }}>
                      {essentials.map((e) => (
                        <Link key={e.href} href={e.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors text-sm">{e.name}</Link>
                      ))}
                      <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 8, paddingTop: 8 }}>
                        <Link href="/essentials" className="block px-4 py-2 text-orange-700 font-medium hover:bg-orange-50 text-sm">View All →</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="hover:text-orange-800 transition-colors">About</Link>
            <Link href="/contact" style={{ background: "#c2410c", color: "#fff", padding: "8px 20px", borderRadius: 8, fontWeight: 500 }} className="hover:bg-orange-800 transition-colors">Contact</Link>
          </nav>

          {/* Hamburger — visible below 768px only */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            style={{ position: "relative", zIndex: 9999, padding: 8, marginRight: -8, background: "none", border: "none", cursor: "pointer" }}
          >
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              <motion.span animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
                style={{ display: "block", height: 2, background: "#1f2937", borderRadius: 2, transformOrigin: "center" }} />
              <motion.span animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
                style={{ display: "block", height: 2, background: "#1f2937", borderRadius: 2 }} />
              <motion.span animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
                style={{ display: "block", height: 2, background: "#1f2937", borderRadius: 2, transformOrigin: "center" }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay — rendered at root level, above everything */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              style={{ position: "fixed", inset: 0, zIndex: 9000, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              className="md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "85vw",
                maxWidth: 360,
                zIndex: 9001,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.15)"
              }}
              className="md:hidden"
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid #f3f4f6" }}>
                <Link href="/" onClick={close}>
                  <Image src="/images/mandala-logo.png" alt="Mandala Adventures" width={120} height={36} style={{ objectFit: "contain" }} />
                </Link>
                <button onClick={close} style={{ padding: 8, marginRight: -8, background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }} aria-label="Close">
                  <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Content */}
              <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
                <AnimatePresence mode="wait">
                  {mobileSection === "destinations" ? (
                    <motion.div key="dest" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <button onClick={() => setMobileSection(null)}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", width: "100%", background: "none", border: "none", cursor: "pointer", color: "#c2410c", fontSize: 14, fontWeight: 600 }}>
                        <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <p style={{ padding: "4px 24px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}>Destinations</p>
                      {destinations.map((d) => (
                        <Link key={d.href} href={d.href} onClick={close}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", fontSize: 17, fontWeight: 500, color: "#111827", borderBottom: "1px solid #f9fafb", textDecoration: "none" }}
                          className="hover:text-orange-700 transition-colors">
                          {d.name}
                          <svg style={{ width: 16, height: 16, color: "#d1d5db" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </motion.div>
                  ) : mobileSection === "essentials" ? (
                    <motion.div key="ess" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <button onClick={() => setMobileSection(null)}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", width: "100%", background: "none", border: "none", cursor: "pointer", color: "#c2410c", fontSize: 14, fontWeight: 600 }}>
                        <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <p style={{ padding: "4px 24px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}>Essentials</p>
                      {essentials.map((e) => (
                        <Link key={e.href} href={e.href} onClick={close}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", fontSize: 17, fontWeight: 500, color: "#111827", borderBottom: "1px solid #f9fafb", textDecoration: "none" }}
                          className="hover:text-orange-700 transition-colors">
                          {e.name}
                          <svg style={{ width: 16, height: 16, color: "#d1d5db" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="main" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.2 }}>
                      {[
                        { label: "Trips", href: "/trips" },
                        { label: "About", href: "/about" },
                      ].map((item, i) => (
                        <Link key={item.href} href={item.href} onClick={close}
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", fontSize: 20, fontWeight: 600, color: "#111827", borderBottom: "1px solid #f3f4f6", textDecoration: "none" }}
                          className="hover:text-orange-700 transition-colors">
                          {item.label}
                          <svg style={{ width: 18, height: 18, color: "#d1d5db" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                      {[
                        { label: "Destinations", section: "destinations" },
                        { label: "Essentials", section: "essentials" },
                      ].map((item) => (
                        <button key={item.section} onClick={() => setMobileSection(item.section)}
                          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", fontSize: 20, fontWeight: 600, color: "#111827", background: "none", border: "none", borderBottom: "1px solid #f3f4f6", cursor: "pointer", textAlign: "left" }}
                          className="hover:text-orange-700 transition-colors">
                          {item.label}
                          <svg style={{ width: 18, height: 18, color: "#d1d5db" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              {!mobileSection && (
                <div style={{ padding: "20px 24px", borderTop: "1px solid #f3f4f6" }}>
                  <Link href="/contact" onClick={close}
                    style={{ display: "block", width: "100%", background: "#c2410c", color: "#fff", textAlign: "center", padding: "16px", borderRadius: 12, fontSize: 17, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(194,65,12,0.3)" }}
                    className="hover:bg-orange-800 transition-colors">
                    Plan Your Trip
                  </Link>
                  <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", marginTop: 12 }}>(801) 823-1551</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
