import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* === HERO BANNER === */}
      <section className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/images/mountains.jpg"
          alt="Mandala Adventures"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl">
            MANDALA ADVENTURES
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Dive deep into cultures. Forge paths less traveled.  
            Discover the world through connection, story, and wild terrain.
          </p>
        </div>
      </section>

      {/* === CONTENT SECTION === */}
      <section id="explore" className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Adventure Awaits
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-600">
              Fly Fishing Mongolia
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Mongolia is one of the world’s most spectacular fly-fishing
              destinations. This country should be on every angler’s bucket
              list. But be warned—if you visit once, you’ll want to come back
              again and again.
            </p>

            <h4 className="text-xl font-semibold text-gray-800">
              ONE OUTFITTER. TWO RIVERS. FOUR ADVENTURES.
            </h4>
            <p className="text-lg leading-relaxed text-gray-700">
              Mandala Adventures guides four unique trips on two special
              Mongolian rivers. Most fishing is from drift boat with guests
              floating each day between pre-established camps. The more
              adventurous “Headwaters Expedition” uses camels to pack into a
              remote wilderness area. All adventures have exceptional staff,
              camps, and gear.
            </p>

            <h4 className="text-xl font-semibold text-gray-800">
              Everest Looms Above
            </h4>
            <p className="text-lg leading-relaxed text-gray-700">
              Trek to Everest Base Camp (17,389′) via the historic route taken
              by Edmund Hillary and Tenzing Norgay in 1953. Pause in Sherpa
              villages, teahouses, and Buddhist monasteries — culminating at
              Kala Patthar (18,200′) for breathtaking views.
            </p>

            <h4 className="text-xl font-semibold text-emerald-600 mt-8">
              Highlights
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                Mt. Everest views
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                Sherpa village life
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                Visit monasteries
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                Life in Kathmandu
              </li>
            </ul>
          </div>

          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
            <p className="text-gray-500 font-medium">
              Placeholder – Fisherman Image
            </p>
          </div>
        </div>
      </section>
    </>
  );
}