import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Everest Close Up",
  description:
    "19-day Everest Close Up trek via the historic Hillary-Tenzing route with Mandala Adventures.",
};

export default function EverestCloseUpPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/everest-closeup.jpg"
          alt="Everest Close Up"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <Link href="/destinations/everest" className="hero-tagline uppercase tracking-widest mb-3 hover:text-orange-300 font-semibold text-sm sm:text-base">
              Everest Trekking
            </Link>
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-6xl font-bold mt-2">Everest Close Up</h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div><p className="text-gray-400 text-sm">Length</p><p className="font-semibold">19 days</p></div>
            <div><p className="text-gray-400 text-sm">Cost</p><p className="font-semibold">From $2,895</p></div>
            <div><p className="text-gray-400 text-sm">Type</p><p className="font-semibold">Trekking</p></div>
            <div><p className="text-gray-400 text-sm">Rating</p><p className="font-semibold">Strenuous</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Historic Route to Everest Base Camp</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The snowcapped summit of Everest, world's highest peak at 29,035', looms over the Khumbu Region of Nepal.
                Arrive at Everest Base Camp (17,389') via the historic route taken by Edmund Hillary and Tenzing Norgay in 1953.
              </p>
              <p>
                We'll pause along the way in Sherpa villages, teahouses, markets, and Buddhist monasteries.
                The trek culminates at Kala Pattar (18,200') for breathtaking views of Everest and the surrounding peaks.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {["Arrive at Everest Base Camp via the historic 1953 route", "Summit Kala Pattar for panoramic Everest views", "Experience authentic Sherpa village life", "Visit Buddhist monasteries and ancient stupas", "Trek through rhododendron forests", "Explore Namche Bazaar"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2">
                {["Airport transfers in Kathmandu", "Experienced English-speaking guide", "Hotel nights in Kathmandu", "Flights to/from Lukla", "Lodge accommodation on trek", "All meals during trek", "Permits and entrance fees", "Porter service"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Inquire About This Trip</h3>
              <p className="text-gray-600 text-sm mb-6">Contact us to learn more or customize your adventure.</p>
              <Link href="/contact" className="block w-full bg-orange-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-800 transition">
                Contact Us
              </Link>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Related Trips</h4>
                <div className="space-y-3">
                  <Link href="/trips/ultimate-everest" className="block text-sm text-orange-700 hover:text-orange-800">Ultimate Everest →</Link>
                  <Link href="/trips/sherpa-villages-trek" className="block text-sm text-orange-700 hover:text-orange-800">Sherpa Villages Trek →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
