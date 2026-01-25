import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sherpa Villages Everest Trek",
  description:
    "12-day Sherpa Villages Trek with Mandala Adventures. Experience Sherpa culture with luxury lodge accommodation.",
};

export default function SherpaVillagesTrekPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/sherpa-villages.jpg"
          alt="Sherpa Villages Trek"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Link
              href="/destinations/everest"
              className="text-amber-500 uppercase tracking-widest mb-2 hover:text-orange-300"
            >
              Everest Trekking
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Sherpa Villages Everest Trek
            </h1>
          </div>
        </div>
      </section>

      {/* Trip Details Bar */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-gray-400 text-sm">Length</p>
              <p className="font-semibold">12 days</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Cost</p>
              <p className="font-semibold">From $2,500</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Type</p>
              <p className="font-semibold">Trekking</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Rating</p>
              <p className="font-semibold">Moderate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Trekking Through Sherpa Communities
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                This is an introduction to Himalayan trekking with luxury.
                Instead of camping, on this trip we stay in deluxe lodges in
                Sherpa communities beneath the inspiring Mount{" "}
                <strong>Everest</strong>.
              </p>
              <p>
                Experience the Sherpa way of life, their customs and traditions
                to gain a window into a distinct culture. Trek through villages
                where prayer wheels spin and prayer flags flutter in the
                mountain breeze.
              </p>
              <p>
                This moderate trek is perfect for those seeking the Everest
                experience without the extreme physical demands of longer,
                high-altitude routes. Our experienced Sherpa guides ensure your
                comfort and safety throughout the journey.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Deluxe lodge accommodation throughout the trek",
                  "Immersive Sherpa cultural experiences",
                  "Stunning views of Everest and surrounding peaks",
                  "Visit ancient Buddhist monasteries",
                  "Explore Namche Bazaar, the Sherpa capital",
                  "Experienced English-speaking Sherpa guides",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2">
                {[
                  "Roundtrip airport transfers in Kathmandu",
                  "Experienced English-speaking Trip Leader",
                  "Hotel nights in Kathmandu (based on double occupancy)",
                  "Airfare between Kathmandu and Lukla",
                  "Deluxe lodge accommodation during the trek",
                  "All meals during the trek",
                  "Trekking permits and entrance fees",
                  "Porter service for luggage",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Inquire About This Trip</h3>
              <p className="text-gray-600 text-sm mb-6">
                Contact us to learn more about this trek, check availability, or
                customize your adventure.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-orange-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
              >
                Contact Us
              </Link>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Trip Dates</h4>
                <p className="text-gray-600 text-sm">On Demand</p>
                <p className="text-gray-500 text-xs mt-1">
                  Custom departures available
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Related Trips</h4>
                <div className="space-y-3">
                  <Link
                    href="/trips/ultimate-everest"
                    className="block text-sm text-orange-700 hover:text-orange-800"
                  >
                    Ultimate Everest →
                  </Link>
                  <Link
                    href="/trips/everest-close-up"
                    className="block text-sm text-orange-700 hover:text-orange-800"
                  >
                    Everest Close Up →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
