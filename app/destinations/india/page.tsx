import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "India",
  description:
    "Travel to India with Mandala Adventures. Experience Ladakh, the Himalaya, ancient temples and vibrant culture.",
};

const trips = [
  {
    slug: "ladakh-markha-valley-trek",
    title: "Ladakh's Markha Valley Trek",
    image: "/images/markha-valley.jpg",
    length: "16 days",
    cost: "$3,100",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Trekking along the Markha River through one of the world's highest inhabited plateaus, we revel in sublime high-altitude scenery and visit remote Buddhist monasteries.",
  },
  {
    slug: "art-treasures-ladakh",
    title: "Art Treasures of Ladakh",
    image: "/images/ladakh-treasures.jpg",
    length: "16 days",
    cost: "$3,900",
    type: "Cultural",
    rating: "Moderate",
    description:
      "A remote borderland region in far northern India, Ladakh remains an unspoiled enclave of Tibetan Buddhist culture, art and architecture.",
  },
  {
    slug: "ancient-holy-northern-india",
    title: "Ancient & Holy Northern India",
    image: "/images/northern-india.jpg",
    length: "14 days",
    cost: "$4,500",
    type: "Cultural",
    rating: "Easy",
    description:
      "Northern India is a pastiche of myriad cultures and architectural styles evolved from Hindu and Mogul influences over thousands of years.",
  },
];

export default function IndiaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/india-destination.jpg"
          alt="India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Gateway to the Subcontinent
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">Travel to India</h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            Sable-eyed women gaze at you from beneath curving folds of crimson
            and gold-embroidered silk. They stand framed within the window of a
            palace they inhabit with 800 million fellow residents. It is an
            immense edifice with annexes built over the millennia by a lustrous
            succession of proprietors.
          </p>
          <p>
            The fragrances of sandalwood, incense, curry and blossoms perfume
            its halls; hallowed waters cascade from the uphill side to merge in
            the ocean waves lapping the foundation. Celebration and worship take
            place every day within its precinct.
          </p>
          <p>
            Mandala Adventures opens the gateway to India and helps you feel at
            home in this teeming domain where sensation and encounter are not
            confined by the imaginable.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">India Trips</h2>
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
          <h2 className="text-2xl font-bold mb-4">Plan Your India Adventure</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect India journey or join one of
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
