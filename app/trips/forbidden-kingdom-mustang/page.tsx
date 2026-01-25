import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Forbidden Kingdom of Mustang",
  description:
    "17-day trek to the Forbidden Kingdom of Mustang, a former Tibetan kingdom in Nepal.",
};

export default function MustangPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/mustang-trek.jpg" alt="Mustang Trek" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Link href="/destinations/nepal" className="text-amber-500 uppercase tracking-widest mb-2 hover:text-orange-300">Nepal</Link>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">The Forbidden Kingdom of Mustang</h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div><p className="text-gray-400 text-sm">Length</p><p className="font-semibold">17 days</p></div>
            <div><p className="text-gray-400 text-sm">Cost</p><p className="font-semibold">From $3,100</p></div>
            <div><p className="text-gray-400 text-sm">Type</p><p className="font-semibold">Trekking</p></div>
            <div><p className="text-gray-400 text-sm">Rating</p><p className="font-semibold">Strenuous</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Enter the Hidden Kingdom</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                For years, Mustang has beckoned trekkers to penetrate its dramatic, tawny and mysterious landscape.
                Tucked behind the Annapurna range, this former Tibetan kingdom was closed to outsiders until 1992.
              </p>
              <p>
                Today, Mustang remains one of the most pristine examples of traditional Tibetan culture,
                with ancient cave monasteries, whitewashed villages, and a landscape of otherworldly beauty.
                The walled capital of Lo Manthang feels frozen in time.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {["Explore the walled city of Lo Manthang", "Visit ancient Tibetan Buddhist monasteries", "Trek through dramatic desert-like landscapes", "Experience authentic Tibetan culture", "Discover cave dwellings and ancient frescoes"].map((item, i) => (
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
                {["Airport transfers", "English-speaking guide", "Hotels in Kathmandu and Pokhara", "Flights to Jomsom", "Teahouse accommodation", "All meals on trek", "Special Mustang permits", "Porter service", "First aid kit"].map((item, i) => (
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
