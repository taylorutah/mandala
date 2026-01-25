import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "China",
  description:
    "Travel to China with Mandala Adventures. Explore ancient history, stunning landscapes, and diverse cultures.",
};

const trips = [
  {
    slug: "heights-of-huangshan",
    title: "Heights of Huangshan",
    image: "/images/huangshan.jpg",
    length: "11 days",
    cost: "$2,600",
    type: "Overland",
    rating: "Moderate",
    description:
      "Among the classical scenes of China are precipitous mountain spires piercing the silvery clouds of Huangshan.",
  },
];

export default function ChinaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/china-destination.jpg"
          alt="China"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Ancient & Modern
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Travel to China
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            As mysterious and inscrutable to the visitor as the characters of its
            complex language, China tantalizes us with splendid relics of its
            long history; with a natural beauty ranging from alpine to florid
            rainforest to eerily eroded desert; with dozens of ethnic peoples
            whose distinct identities have evolved through invasion and
            revolution.
          </p>
          <p>
            Where does one even start to comprehend the immensity of China? From
            the Great Wall snaking across northern mountains to the karst
            pinnacles of Guilin, from the terracotta warriors of Xi'an to the
            ultra-modern skyline of Shanghai, China presents endless contrasts
            and discoveries.
          </p>
          <p>
            Our journeys focus on the China less traveled—the mountain retreats
            of ancient poets, traditional villages where old ways persist, and
            natural wonders that have inspired artists for millennia.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">China Trips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <Link
                key={trip.slug}
                href={`/trips/${trip.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-800 transition-colors">
                    {trip.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-3">
                    <span>{trip.length}</span>
                    <span>•</span>
                    <span>From {trip.cost}</span>
                    <span>•</span>
                    <span>{trip.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {trip.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Plan Your China Adventure</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect China journey or join one of
            our scheduled departures.
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
