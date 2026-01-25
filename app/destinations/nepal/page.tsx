import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nepal",
  description:
    "Travel to Nepal with Mandala Adventures. Experience the Himalaya, Buddhist monasteries, and ancient Hindu culture.",
};

const trips = [
  {
    slug: "forbidden-kingdom-mustang",
    title: "The Forbidden Kingdom of Mustang",
    image: "/images/mustang-trek.jpg",
    length: "17 days",
    cost: "$3,100",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "For years, Mustang has beckoned trekkers to penetrate its dramatic, tawny and mysterious landscape. Tucked behind the Annapurna range, this former Tibetan kingdom was closed to outsiders until 1992.",
  },
];

export default function NepalPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/nepal-destination.jpg"
          alt="Nepal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              The Ultimate Himalayan Adventure
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">Travel to Nepal</h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            Nepal is the ultimate destination for those craving the solitude of
            high mountains, the beauty of windswept plains and the experience of
            far-off culture. While Nepal is home to eight of the world's tallest
            mountains and some of the most remote places on the planet, it is
            also a rich fusion of cultures, religions and ways of life.
          </p>
          <p>
            Here ancient Hindu rituals survive harmoniously with tranquil
            Buddhist monasteries and bucolic yak herder bands. Away from the
            towns and villages, the quietude of the 11,000 foot high Tibetan
            Plateau is contrasted with the subtropical jungle lowlands at only
            2500 feet, and above them all tower the mighty peaks of the Himalaya
            at over 29,000 feet.
          </p>
          <p>Nepal truly is an island of adventure and wonder.</p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Nepal Trips</h2>
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
          <h2 className="text-2xl font-bold mb-4">Plan Your Nepal Adventure</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect Nepal journey or join one of
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
