import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* === HERO SECTION === */}
      <section className="relative w-full bg-white">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/mountains.jpg"
            alt="Mandala Adventures Mountains"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-semibold mb-3 tracking-tight drop-shadow-xl">
              Adventure Awaits
            </h1>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed drop-shadow-md">
              Dive deep into culture and wild terrain — guided by the spirit of discovery.
            </p>
          </div>
        </div>
      </section>

      {/* === INTRODUCTION === */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Fly Fishing Mongolia
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Mongolia is one of the world’s most spectacular fly-fishing destinations. 
            This country should be on every angler’s bucket list. 
            But be warned — if you visit once, you’ll want to come back again and again.
          </p>
        </div>
      </section>

      {/* === ADVENTURES SECTION === */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-12">
            One Outfitter. Two Rivers. Four Adventures.
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                River Expeditions
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Mandala Adventures guides four unique trips on two special Mongolian rivers.
                Most fishing is from drift boat with guests floating between pre-established camps.
                The more adventurous “Headwaters Expedition” uses camels to pack into remote wilderness areas.
                Every trip features exceptional staff, world-class gear, and well-equipped camps.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                Everest Looms Above
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Trek to Everest Base Camp (17,389’) via the route taken by Edmund Hillary and Tenzing Norgay in 1953.
                Pause in Sherpa villages, teahouses, and monasteries before culminating at Kala Patthar (18,200’).
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Mt. Everest Views</li>
                <li>• Sherpa Village Life</li>
                <li>• Visit Monasteries</li>
                <li>• Life in Kathmandu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === BOOK WITH CONFIDENCE === */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-12">
            Book With Confidence
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 hover:bg-white transition shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-emerald-700">1. Partners</h4>
              <p className="text-gray-600 leading-relaxed">
                We proudly work with top outfitters across Asia — the same trusted partners used by luxury travel brands.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 hover:bg-white transition shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-emerald-700">2. Reputation</h4>
              <p className="text-gray-600 leading-relaxed">
                Over 75% of our business is repeat or referral — a testament to trust, consistency, and excellence.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 hover:bg-white transition shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-emerald-700">3. Customization</h4>
              <p className="text-gray-600 leading-relaxed">
                Most of our trips are custom itineraries. We specialize in crafting experiences entirely around your vision.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-block rounded-lg bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}