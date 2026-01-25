"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Mandala Adventures
            </h3>
            <p className="leading-relaxed text-gray-400 mb-6 max-w-md">
              An unforgettable journey back in time beckons in the realm of Mandala Adventures
              as we guide you into the ageless Himalaya. We are a unique travel service and
              outfitter of treks and overland journeys in Nepal, Tibet, Bhutan, India, and Southeast Asia.
            </p>
            <div className="text-gray-400">
              <p className="mb-1">2492 Campus Dr</p>
              <p className="mb-1">Salt Lake City, UT 84121, USA</p>
              <p className="font-semibold text-white mt-3">
                <a href="tel:+18018231551" className="hover:text-amber-500 transition-colors">
                  (801) 823-1551
                </a>
              </p>
              <p>
                <a href="mailto:info@mandalaadventures.com" className="hover:text-amber-500 transition-colors">
                  info@mandalaadventures.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/trips" className="hover:text-amber-500 transition-colors">
                  All Trips
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-500 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Traveler Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Traveler Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/essentials/faq" className="hover:text-amber-500 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/essentials/trip-ratings" className="hover:text-amber-500 transition-colors">
                  Trip Difficulty Ratings
                </Link>
              </li>
              <li>
                <Link href="/essentials/gear" className="hover:text-amber-500 transition-colors">
                  Gear & Clothing
                </Link>
              </li>
              <li>
                <Link href="/essentials/health" className="hover:text-amber-500 transition-colors">
                  Traveler's Health
                </Link>
              </li>
              <li>
                <Link href="/essentials/visa" className="hover:text-amber-500 transition-colors">
                  Visa Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Mandala Adventures. All rights reserved.</p>
            <span className="hidden md:inline text-gray-700">|</span>
            <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
