"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        {/* Help Center */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">
            Help Center
          </h3>
          <ul className="space-y-2">
            {[
              "Frequently Asked Questions",
              "Company Profile",
              "Trip Difficulty Ratings",
              "Traveler Essentials",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-orange-600 transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Mandala Adventures */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">
            About Mandala Adventures
          </h3>
          <p className="leading-relaxed text-gray-600 max-w-2xl">
            At <span className="font-medium text-gray-900">Mandala Adventures</span>,
            we guide travelers into the heart of Asia through thoughtful, small-group
            expeditions that connect culture, landscape, and story. Our journeys span
            Nepal, Bhutan, Tibet, and Mongolia—each crafted to immerse guests in the
            rhythm of place and people. Join us to travel deeper, with purpose and respect.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Mandala Adventures</p>
          <p className="text-gray-400">
            Exploring culture through story and place.
          </p>
        </div>
      </div>
    </footer>
  );
}