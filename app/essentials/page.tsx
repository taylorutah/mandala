import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Traveler Essentials",
  description: "Everything you need to know before your Mandala Adventures trip - FAQs, trip ratings, gear, health, and booking information.",
};

const essentials = [
  {
    title: "Frequently Asked Questions",
    href: "/essentials/faq",
    description: "Get answers to commonly asked questions about traveling with Mandala Adventures.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trip Difficulty Ratings",
    href: "/essentials/trip-ratings",
    description: "Understand our trip difficulty ratings to find the right adventure for your fitness level.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Gear & Clothing",
    href: "/essentials/gear",
    description: "Recommended packing lists and essential gear for your Asian adventure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Traveler's Health",
    href: "/essentials/health",
    description: "Important health information, vaccinations, and altitude considerations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Reservations & Booking",
    href: "/essentials/booking",
    description: "How to reserve your trip, payment options, and booking policies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Visa Information",
    href: "/essentials/visa",
    description: "Visa requirements and application guidance for Asian destinations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
];

export default function EssentialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/bhutan-destination.jpg"
          alt="Traveler Essentials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-amber-500 uppercase tracking-widest mb-2">What to Know</p>
            <h1 className="text-4xl md:text-6xl font-bold">Traveler Essentials</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed">
          Planning an adventure to Asia? Here you'll find everything you need to know before your trip,
          from FAQs and packing lists to health information and visa requirements.
        </p>
      </section>

      {/* Essentials Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <div className="text-orange-500 mb-4 group-hover:text-orange-800 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-orange-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Our team is here to help you plan your perfect adventure. Contact us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
            >
              Contact Us
            </Link>
            <p className="text-gray-600">
              or call <a href="tel:+18018231551" className="text-orange-700 font-semibold hover:underline">(801) 823-1551</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
