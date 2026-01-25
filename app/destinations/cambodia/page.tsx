import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cambodia",
  description:
    "Travel to Cambodia with Mandala Adventures. Explore the magnificent temples of Angkor and experience Khmer culture.",
};

const trips = [
  {
    slug: "classic-cambodia",
    title: "Classic Cambodia",
    image: "/images/cambodia-destination.jpg",
    length: "7 days",
    cost: "$1,700",
    type: "Cultural",
    rating: "Leisurely",
    description:
      "Highlights Cambodia's best-known sites beginning in the charming colonial capital and the temples of Angkor.",
  },
];

export default function CambodiaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/cambodia-destination.jpg"
          alt="Cambodia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Temples of Angkor
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Travel to Cambodia
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            Atop any traveler's wish list are the World Heritage ruins at Angkor.
            This Indiana Jones-esque city of temples is one of the most remarkable
            destinations on Earth. The sheer scale and artistry of Angkor Wat,
            the mysterious faces of Bayon, and the jungle-consumed Ta Prohm
            create an unforgettable tapestry of ancient wonder.
          </p>
          <p>
            Journey further afield to gaze upon an endless sea of emerald rice
            fields, or discover virtually unexplored areas just newly opened to
            travelers. Enjoy the fascinating capital of Phnom Penh, once known as
            the "Paris of the East," with its French colonial architecture and
            vibrant riverside promenades.
          </p>
          <p>
            Get to know the gracious and hospitable Khmer people, whose warmth
            and resilience shine through despite the country's difficult recent
            history. Cambodia offers a journey of both beauty and poignancy.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Cambodia Trips</h2>
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
          <h2 className="text-2xl font-bold mb-4">
            Plan Your Cambodia Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect Cambodia journey or join one of
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
