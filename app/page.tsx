import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/mountains.jpg"
          alt="Mountain adventure backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay gradient (for contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-base sm:text-lg md:text-xl tracking-[0.15em] mb-4 uppercase">
            dive deep into cultures, tread along untouched terrains
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-white/40 backdrop-blur-sm px-2 py-1 rounded text-white">
              we are
            </span>{" "}
            <span className="text-orange-500 drop-shadow-md">Adventure</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Adventure Awaits
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Fly Fishing Mongolia — one of the world’s most spectacular
            fly-fishing destinations. This country should be on every angler’s
            bucket list. But be warned — if you visit once, you’ll want to come
            back again and again.
          </p>
        </section>

        {/* Section 2 */}
        <section className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white/80">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">
            ONE OUTFITTER. TWO RIVERS. FOUR ADVENTURES.
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Mandala Adventures guides four unique trips on two special Mongolian
            rivers. Most fishing is from drift boats with guests floating each
            day between pre-established camps. The more adventurous “Headwaters
            Expedition” uses camels to pack into a remote wilderness area. Every
            adventure includes exceptional staff, camps, and gear.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everest Looms Above
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trek to Everest Base Camp (17,389′) via the historic route taken by
            Edmund Hillary and Tenzing Norgay in 1953. Pause in Sherpa
            villages, teahouses, and Buddhist monasteries — culminating at Kala
            Pattar (18,200′) for breathtaking views.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            <li>• Mt. Everest Views</li>
            <li>• Sherpa Village Life</li>
            <li>• Visit Monasteries</li>
            <li>• Life in Kathmandu</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book With Confidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                ONE: Partners
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with the top providers in Asia — the same trusted
                teams used by leading global outfitters.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                TWO: Reputation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over 75 % of our business comes from repeat or referral
                travelers — a testament to lasting experiences.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                THREE: Easier Customization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We specialize in crafting your ideal trip. Most itineraries are
                tailored, ensuring your journey is truly yours.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}