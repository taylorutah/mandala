"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* === HERO SECTION === */}
      <section className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden">
        <Image
          src="/images/nepal.jpg"
          alt="Boudhanath Stupa prayer flags, Kathmandu Nepal"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase mb-5">
            dive deep into cultures · tread along untouched terrains
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            <span className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
              we are
            </span>{" "}
            <span className="text-orange-500">Adventure</span>
          </h1>
        </div>
      </section>

      {/* === ADVENTURE AWAITS === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-10 text-gray-900">
          Adventure Awaits
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Fly Fishing Mongolia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mongolia is one of the world’s most spectacular fly-fishing
              destinations. This country should be on every angler’s bucket
              list. But be warned — if you visit Mongolia once, you’ll want to
              come back again and again.
            </p>
            <h4 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
              One Outfitter. Two Rivers. Four Adventures.
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Mandala Adventures guides four unique trips on two special
              Mongolian rivers. Most fishing is from drift boats with guests
              floating each day between pre-established camps. The more
              adventurous “Headwaters Expedition” uses camels to pack into a
              remote wilderness area. All adventures include exceptional staff,
              camps, and gear.
            </p>
          </div>

          <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/fishing-mongolia.jpg"
              alt="Fly fishing in Mongolia"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.section>

      {/* === EVEREST LOOMS ABOVE === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
            Everest Looms Above
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Trek to Everest Base Camp (17,389′) via the historic route taken by
            Edmund Hillary and Tenzing Norgay in 1953. We’ll pause along the way
            in Sherpa villages, teahouses, markets, and Buddhist monasteries.
            The trek culminates at Kala Pattar (18,200′) for breathtaking views.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">
            {[
              "Mt. Everest Views",
              "Sherpa Village Life",
              "Visit Monasteries",
              "Life in Kathmandu",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* === WHY MANDALA ADVENTURES === */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">
            Why Mandala Adventures?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Mandala Adventures?",
                image: "/images/signpost.jpg",
                text: "We create our unique trips with our partners in Asia and together tend to all details.",
              },
              {
                title: "Travel Without Limits",
                image: "/images/cliff-view.jpg",
                text: "Explore our website, scrutinize our itineraries, contact our past guests — and then give us a call.",
              },
              {
                title: "Adventure Awaits",
                image: "/images/beach-boat.jpg",
                text: "Asia is a destination full of exciting adventures — the countries are many and the activities endless.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <div className="relative h-44 w-full mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover rounded-lg block"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-gray-600 flex-grow">{card.text}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PARTNER LOGOS (fixed + refined) === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white border-t border-gray-100 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
          {[
            {
              src: "/images/expeditions.png",
              alt: "National Geographic Expeditions",
              width: 260,
              height: 80,
            },
            {
              src: "/images/times-logo-new.png",
              alt: "The New York Times Journeys",
              width: 260,
              height: 80,
            },
            {
              src: "/images/JourneysLogo_Yellow.png",
              alt: "Smithsonian Journeys",
              width: 260,
              height: 80,
            },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex justify-center items-center min-w-[200px] max-w-[260px] p-3"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain block select-none"
                style={{
                  backgroundColor: "#ffffff",
                  display: "block",
                  transform: "translateZ(0)",
                  imageRendering: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}