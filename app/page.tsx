import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
        <Image
          src="/images/mountains.jpg"
          alt="Adventure mountain landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-base sm:text-lg md:text-xl tracking-wide mb-4 uppercase">
            dive deep into cultures, tread along untouched terrains
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-white/40 backdrop-blur-sm px-3 py-1 rounded text-white">
              we are
            </span>{" "}
            <span className="text-orange-500 drop-shadow-md">Adventure</span>
          </h1>
        </div>
      </section>

      {/* ADVENTURE AWAITS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Adventure Awaits
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Fly Fishing Mongolia
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mongolia is one of the world’s most spectacular fly-fishing
                destinations. This country should be on every angler’s bucket
                list. But be warned — if you visit Mongolia once, you’ll want to
                come back again and again.
              </p>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-extrabold uppercase mb-2">
                One Outfitter. Two Rivers. Four Adventures.
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Mandala Adventures guides four unique trips on two special
                Mongolian rivers. Most fishing is from drift boats with guests
                floating each day between pre-established camps. The more
                adventurous “Headwaters Expedition” uses camels to pack into a
                remote wilderness area. All adventures include exceptional
                staff, camps, and gear.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/fishing-mongolia.jpg"
              alt="Fly fishing in Mongolia"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* EVEREST LOOMS ABOVE */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everest Looms Above
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Trek to Everest Base Camp (17,389′) via the historic route taken by
            Edmund Hillary and Tenzing Norgay in 1953. We’ll pause along the way
            in Sherpa villages, teahouses, markets, and Buddhist monasteries.
            The trek culminates at Kala Pattar (18,200′) for breathtaking views.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "Mt. Everest Views",
              "Sherpa Village Life",
              "Visit Monasteries",
              "Life in Kathmandu",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-center items-center gap-10">
          {[
            "/images/expeditions.png",
            "/images/times-logo-new.png",
            "/images/JourneysLogo_Yellow.png",
          ].map((src, i) => (
            <div key={i} className="relative h-[60px] w-auto">
              <Image
                src={src}
                alt={`Partner ${i + 1}`}
                width={200}
                height={60}
                className="object-contain h-[60px] w-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}