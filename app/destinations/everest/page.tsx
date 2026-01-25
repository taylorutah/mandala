import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Everest Trekking",
  description:
    "Trek to Everest Base Camp with Mandala Adventures. Multiple routes and difficulty levels available.",
};

const trips = [
  {
    slug: "ultimate-everest",
    title: "Ultimate Everest",
    image: "/images/ultimate-everest.jpg",
    length: "21 days",
    cost: "$3,500",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Every step of this world-class trek rewards us with sublime vistas encompassing four of the world's highest summits: Cho Oyu, Makalu, Lhotse and Everest.",
  },
  {
    slug: "sherpa-villages-trek",
    title: "Sherpa Villages Everest Trek",
    image: "/images/sherpa-villages.jpg",
    length: "12 days",
    cost: "$2,500",
    type: "Trekking",
    rating: "Moderate",
    description:
      "Trekking through Sherpa communities with deluxe lodge accommodation beneath the inspiring Mount Everest. Experience the Sherpa way of life, their customs and traditions.",
  },
  {
    slug: "everest-close-up",
    title: "Everest Close Up",
    image: "/images/everest-closeup.jpg",
    length: "19 days",
    cost: "$2,895",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Arrive at Everest Base Camp (17,389') via the historic route taken by Edmund Hillary and Tenzing Norgay in 1953. We'll pause along the way in Sherpa villages, teahouses, markets, and Buddhist monasteries.",
  },
];

export default function EverestPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/everest-destination.jpg"
          alt="Everest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Nature's Signature Piece
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Everest Trekking in Nepal
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            To behold Mt. Everest is to stand within the circumference of a
            great gravity, and join in a tradition of adventure that has drawn
            explorers and dreamers for centuries. A mountain possessed of an
            unsurpassed majesty, it's Nature's signature piece.
          </p>
          <p>
            This special trekking trip features ten days in the Everest region,
            an in-depth survey of Sherpa culture, the entrancing Mani Rimdu
            festival, and cultural highlights of Kathmandu. We employ
            state-of-the-art, ecologically-sound trekking and camping practices,
            and our friendly Sherpa guides are experts in mountain safety, camp
            hygiene and high-altitude feasts.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Everest Treks</h2>
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
            Plan Your Everest Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect Everest trek or join one of our
            scheduled departures.
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
