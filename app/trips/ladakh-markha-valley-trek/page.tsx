import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ladakh's Markha Valley Trek",
  description: "16-day Markha Valley Trek through Ladakh's highest inhabited plateau with Mandala Adventures.",
};

export default function MarkhaValleyPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/markha-valley.jpg" alt="Markha Valley" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Link href="/destinations/india" className="text-amber-400 uppercase tracking-widest mb-2 hover:text-orange-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">India</Link>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Ladakh's Markha Valley Trek</h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div><p className="text-gray-400 text-sm">Length</p><p className="font-semibold">16 days</p></div>
            <div><p className="text-gray-400 text-sm">Cost</p><p className="font-semibold">From $3,100</p></div>
            <div><p className="text-gray-400 text-sm">Type</p><p className="font-semibold">Trekking</p></div>
            <div><p className="text-gray-400 text-sm">Rating</p><p className="font-semibold">Strenuous</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Through One of the World's Highest Inhabited Plateaus</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Trekking along the Markha River through one of the world's highest inhabited plateaus,
                we revel in sublime high-altitude scenery and visit remote Buddhist monasteries perched on cliff edges.
              </p>
              <p>
                This classic Ladakh trek takes you through traditional villages where ancient Tibetan Buddhist
                culture thrives, past centuries-old gompas, and over high passes with spectacular mountain views.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {["Trek through remote Ladakhi villages", "Visit ancient Buddhist monasteries", "Cross high mountain passes", "Experience traditional Tibetan culture", "Stunning views of Stok Kangri and Kang Yatse"].map((item, i) => (
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
                {["Airport transfers in Leh", "English-speaking guide", "Accommodation in Leh", "Camping equipment on trek", "All meals during trek", "Pack animals", "Permits"].map((item, i) => (
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
                  <Link href="/trips/art-treasures-ladakh" className="block text-sm text-orange-700 hover:text-orange-800">Art Treasures of Ladakh →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
