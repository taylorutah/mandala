"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredTrips = [
  {
    title: "Ultimate Everest",
    destination: "Nepal",
    image: "/images/everest-destination.jpg",
    days: "21 days",
    type: "Trekking",
    href: "/trips/ultimate-everest",
  },
  {
    title: "Forbidden Kingdom of Mustang",
    destination: "Nepal",
    image: "/images/mustang-trek.jpg",
    days: "17 days",
    type: "Trekking",
    href: "/trips/forbidden-kingdom-mustang",
  },
  {
    title: "Mongolia River Camp",
    destination: "Mongolia",
    image: "/images/mongolia-river-camp.jpg",
    days: "10 days",
    type: "Fishing",
    href: "/trips/mongolia-river-camp",
  },
];

const destinations = [
  { name: "Nepal", image: "/images/nepal-destination.jpg", href: "/destinations/nepal" },
  { name: "Bhutan", image: "/images/bhutan-destination.jpg", href: "/destinations/bhutan" },
  { name: "India", image: "/images/india-destination.jpg", href: "/destinations/india" },
  { name: "Tibet", image: "/images/tibet-destination.jpg", href: "/destinations/tibet" },
  { name: "Cambodia", image: "/images/angkor-wat.jpg", href: "/destinations/cambodia" },
  { name: "China", image: "/images/china-destination.jpg", href: "/destinations/china" },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* === HERO SECTION === */}
      <section className="relative w-full h-[85vh] min-h-[600px]">
        <Image
          src="/images/hero-himalaya.jpg"
          alt="Himalayan Mountains Adventure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              Journey into the Heart of Asia
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Extraordinary Adventures<br />
              <span className="text-amber-500">Unforgettable Journeys</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Small group treks and cultural expeditions through Nepal, Bhutan, Tibet, India, and Southeast Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trips"
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Our Trips
              </Link>
              <Link
                href="/destinations"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                View Destinations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === INTRODUCTION === */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Welcome to Mandala Adventures
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              An unforgettable journey back in time beckons in the realm of Mandala Adventures
              as we guide you into the ageless Himalaya. We are a unique travel service and
              outfitter of treks and overland journeys that immerse you in ancient cultures,
              breathtaking landscapes, and authentic experiences far from the ordinary tourist path.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === FEATURED TRIPS === */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Adventures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular expeditions, from iconic Everest treks to remote cultural journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrips.map((trip, index) => (
              <motion.div
                key={trip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={trip.href} className="group block">
                  <div className="relative h-72 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-amber-500 text-sm font-medium mb-1">{trip.destination}</p>
                      <h3 className="text-white text-xl font-semibold">{trip.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {trip.days}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {trip.type}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
            >
              View All Trips
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === DESTINATIONS === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the peaks of the Himalaya to the temples of Southeast Asia, discover where your next adventure awaits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={dest.href} className="group block relative h-48 md:h-64 rounded-xl overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">{dest.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* === WHY MANDALA === */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Travel With Mandala Adventures?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                For over two decades, we've been crafting extraordinary journeys into the heart of Asia.
                Our intimate knowledge of the region, combined with deep local partnerships, ensures
                experiences that go far beyond ordinary tourism.
              </p>
              <ul className="space-y-4">
                {[
                  "Small groups (2-15 travelers) for intimate experiences",
                  "Expert local guides with deep cultural knowledge",
                  "Carefully curated itineraries with authentic encounters",
                  "Responsible travel that benefits local communities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-amber-500 font-semibold hover:text-orange-300 transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/prayer-flags.jpg"
                alt="Buddhist prayer flags in the Himalaya"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Adventure?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're dreaming of trekking to Everest Base Camp, exploring ancient temples,
            or immersing yourself in Himalayan culture, we're here to help plan your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
            <Link
              href="/essentials/faq"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Read FAQs
            </Link>
          </div>
          <p className="mt-6 text-gray-500 mx-auto">
            Or call us at <a href="tel:+18018231551" className="text-orange-700 font-semibold hover:underline">(801) 823-1551</a>
          </p>
        </div>
      </section>

      {/* === PARTNER LOGOS === */}
      <section className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
            Trusted by Leading Travel Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {[
              { src: "/images/expeditions.png", alt: "National Geographic Expeditions" },
              { src: "/images/times-logo-new.png", alt: "The New York Times Journeys" },
              { src: "/images/JourneysLogo_Yellow-2.png", alt: "Smithsonian Journeys" },
            ].map((logo, i) => (
              <div key={i} className="partner-logo-image">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={56}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
