import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mongolia",
  description:
    "Travel to Mongolia with Mandala Adventures. Experience the Land of the Eternal Blue Sky, vast steppes, and nomadic culture.",
};

export default function MongoliaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/mongolia-destination.jpg"
          alt="Mongolia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Land of the Eternal Blue Sky
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Travel to Mongolia
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            Mighty powers have ruled the vast expanses of Mongolia, from the
            homegrown empire of Genghis Khan, to the Chinese and in the 20th
            century, the Soviets. Yet none have subjugated its wilderness or the
            nomadic spirit of the earthbound people who still roam the steppes,
            deserts, forests and mountain ranges in concert with the seasons.
          </p>
          <p>
            Travel in Mongolia is an encounter with a land resistant to the
            passing whim of human forces. Temperatures here swing from 40 below
            zero in winter to 100 degrees in summer. Rainfall, on the other
            hand, is scarce, and life clings to the rivers and oases that
            sustain herds and herders alike.
          </p>
          <p>
            Mongolia's nomadic traditions remain vibrant today. Experience the
            legendary hospitality of ger camps, witness eagle hunting with
            Kazakh nomads, and explore landscapes that have changed little since
            the time of the great Khans.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Mongolia Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gobi Desert",
                description:
                  "Explore the legendary Gobi, with its dramatic sand dunes, dinosaur fossil sites, and flaming cliffs.",
              },
              {
                title: "Nomadic Culture",
                description:
                  "Stay with nomadic families in traditional gers and experience their timeless way of life.",
              },
              {
                title: "Eagle Hunting",
                description:
                  "Witness the ancient Kazakh tradition of hunting with golden eagles in the Altai Mountains.",
              },
              {
                title: "Naadam Festival",
                description:
                  "Experience Mongolia's greatest celebration featuring wrestling, archery, and horse racing.",
              },
              {
                title: "Karakorum",
                description:
                  "Visit the ancient capital of the Mongol Empire and Erdene Zuu, Mongolia's oldest monastery.",
              },
              {
                title: "Lake Khövsgöl",
                description:
                  "Discover the 'Blue Pearl of Asia,' one of the largest freshwater lakes in Central Asia.",
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Plan Your Mongolia Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to design your perfect Mongolia journey. From the Gobi
            Desert to the steppes, we'll create an unforgettable adventure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
