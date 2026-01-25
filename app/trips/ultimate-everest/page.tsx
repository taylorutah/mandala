import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ultimate Everest",
  description:
    "21-day Ultimate Everest Trek with Mandala Adventures. The most comprehensive Everest trek available.",
};

export default function UltimateEverestPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/ultimate-everest.jpg"
          alt="Ultimate Everest Trek"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <Link
              href="/destinations/everest"
              className="text-amber-400 uppercase tracking-widest mb-2 hover:text-orange-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Everest Trekking
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Ultimate Everest
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
              <p className="font-semibold">21 days</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Cost</p>
              <p className="font-semibold">From $3,500</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Type</p>
              <p className="font-semibold">Trekking</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Rating</p>
              <p className="font-semibold">Strenuous</p>
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
              Everest Base Camp via Gokyo, Chola and Kala Patthar
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Leave the beaten path of <strong>Himalayan trekking</strong> and
                explore the remotest parts of the region on this 23 day trip.
                From our secluded airstrip at Lukla we climb wind-swept passes
                and rocky glaciers to the summits of Goyku Ri (17,989'), Cho La
                (17,782') Kala Patthar (18,200') and finally to Everest Base
                Camp.
              </p>
              <p>
                From these high summits we look down into the valleys and fields
                yak herds of the Sherpa people. All along our journey we gaze at
                the lofty peaks of four of the world's highest peaks: Cho Oyu,
                Makalu, Lhotse, and Everest.
              </p>
              <p>
                This is a non-technical trek that is strenuous but does not
                require any previous trekking or mountaineering experience. You
                will want to be in very good physical condition and be able to
                trek for 4-6 hours every day, occasionally 8-10 hours on hilly
                and rocky terrain at altitudes above 18,000 feet.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {[
                  "Arguably the most comprehensive and spectacular Everest treks",
                  "Photographing some of the highest mountains in the world",
                  "Opportunity to meet the Sherpa people and visiting Tibetan Buddhist monasteries",
                  "See brightly colored prayer flags and ornately carved mani stones",
                  "Unique shopping and street life in famed Kathmandu",
                  "Visit Tibetan Buddhist monasteries",
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
                  "Scheduled hotel nights in Kathmandu (based on double occupancy)",
                  "Airfare between Kathmandu and Lukla",
                  "Nepal trekking support staff, porters and pack animals",
                  "Accommodation in best available lodges during the trek",
                  "All meals as per itinerary",
                  "All permit fees and entrance fees as per itinerary",
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
                    href="/trips/sherpa-villages-trek"
                    className="block text-sm text-orange-700 hover:text-orange-800"
                  >
                    Sherpa Villages Trek →
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
