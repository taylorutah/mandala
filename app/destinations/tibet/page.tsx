import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tibet",
  description:
    "Travel to Tibet with Mandala Adventures. Experience the Roof of the World, ancient monasteries, and Tibetan Buddhist culture.",
};

export default function TibetPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/tibet-destination.jpg"
          alt="Tibet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              The Roof of the World
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Travel to Tibet
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            Thanks to 21st-century media and air travel, the teachings of Tibetan
            Buddhism guide the spiritual practice of millions worldwide. Guests
            return home in awe of the land's natural beauty and the hospitality
            of a people perpetually tested by the rugged politics and elements
            that surround them.
          </p>
          <p>
            Whether you travel to understand better its inhabitants and their
            beliefs or to walk the pilgrimage routes around its sacred peaks,
            there are endless pathways toward the divine in Tibet. From the
            magnificent Potala Palace in Lhasa to the remote monasteries of
            Shigatse, Tibet offers an unparalleled spiritual journey.
          </p>
          <p>
            The vast Tibetan Plateau, averaging over 14,000 feet in elevation,
            presents landscapes of stark beauty—turquoise lakes, snow-capped
            peaks, and endless grasslands where nomadic herders continue their
            ancient way of life.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Tibet Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lhasa",
                description:
                  "Visit the Potala Palace, Jokhang Temple, and experience the spiritual heart of Tibet.",
              },
              {
                title: "Mount Kailash",
                description:
                  "Sacred to four religions, this remote peak draws pilgrims for the holy kora circumambulation.",
              },
              {
                title: "Everest North Face",
                description:
                  "View the world's highest peak from the Tibetan side at Rongbuk Monastery.",
              },
              {
                title: "Shigatse",
                description:
                  "Home to Tashilhunpo Monastery, seat of the Panchen Lama and a center of learning.",
              },
              {
                title: "Namtso Lake",
                description:
                  "One of the highest saltwater lakes in the world, surrounded by sacred mountains.",
              },
              {
                title: "Samye Monastery",
                description:
                  "Tibet's first monastery, built in the 8th century, with unique mandala design.",
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
            Plan Your Tibet Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to design your perfect Tibet journey. From spiritual
            pilgrimages to cultural explorations, we'll create an unforgettable
            experience.
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
