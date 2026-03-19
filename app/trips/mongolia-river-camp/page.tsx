import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mongolia River Camp",
  description:
    "10-day Mongolia River Camp with Mandala Adventures. Float pristine rivers in pursuit of taimen, the world's largest river trout.",
};

export default function MongoliaRiverCampPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/mongolia-river-camp.jpg"
          alt="Mongolia River Camp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <Link
              href="/destinations/mongolia"
              className="hero-tagline uppercase tracking-widest mb-3 hover:text-orange-300 font-semibold text-sm sm:text-base"
            >
              Mongolia
            </Link>
            <h1 className="hero-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Mongolia River Camp
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
              <p className="font-semibold">10 days</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Cost</p>
              <p className="font-semibold">From $7,950</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Type</p>
              <p className="font-semibold">Fishing Expedition</p>
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
              Chasing Giants on Mongolia's Wild Rivers
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Mongolia looks like Montana with big sky views and rolling
                steppe — except there are no fences, herds of livestock roam
                free, and nomadic herders in white gers dot even the most
                remote valleys. This is a land that has changed almost nothing
                since the days of Chinggis Khaan, and it is home to the
                world's largest river trout.
              </p>
              <p>
                The taimen — a prehistoric salmonid that can exceed 60 inches —
                is the reason you come to Mongolia. But the rivers hold more
                than one trophy: Amur trout with copper flanks and black spots,
                lenok that rise to dry flies, wild grayling, and Amur pike
                pushing 40 inches. Each day is a float into new water, drifting
                pristine reaches that may not see another angler for the entire
                season.
              </p>
              <p>
                Camp life is comfortable and deeply Mongolian. Guests stay in
                traditional gers (round felt yurts) furnished with wood-burning
                stoves, wool carpets, and cots. A dedicated cook prepares
                hearty breakfasts, streamside lunches, and multi-course
                dinners. This is as close to the edge of the world as you can
                get while still sleeping well and eating well.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Target taimen, the world's largest river trout — some exceeding 60 inches",
                  "Float pristine, uncrowded rivers through Mongolia's remote wilderness",
                  "Amur trout, lenok, grayling, and Amur pike in the same water",
                  "Stay in authentic Mongolian gers with wood-burning stoves",
                  "Drift through landscapes unchanged since the age of Chinggis Khaan",
                  "Professional guides, dedicated cook, and full camp support",
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
                  "Two nights accommodations in Ulaanbaatar (arrival and departure)",
                  "All transportation within Mongolia (overland 4x4 and river logistics)",
                  "All meals and beverages on the river including beer, wine, and Mongolian vodka",
                  "Authentic Mongolian ger accommodation throughout the expedition",
                  "All camping equipment (personal sleeping bag required on remote legs)",
                  "Fly selection provided for all target species",
                  "Experienced English-speaking fishing guides",
                  "Shore lunch setup with tables and chairs each day",
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
                Contact us to learn more about this expedition, check
                availability, or customize your adventure.
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
                    href="/trips/classic-cambodia"
                    className="block text-sm text-orange-700 hover:text-orange-800"
                  >
                    Classic Cambodia →
                  </Link>
                  <Link
                    href="/trips/forbidden-kingdom-mustang"
                    className="block text-sm text-orange-700 hover:text-orange-800"
                  >
                    Forbidden Kingdom of Mustang →
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
