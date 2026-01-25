import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trips",
  description:
    "Explore adventure trips with Mandala Adventures. Trekking, cultural tours, and expeditions across Asia.",
};

const trips = [
  // Everest
  {
    slug: "ultimate-everest",
    title: "Ultimate Everest",
    destination: "Everest",
    image: "/images/ultimate-everest.jpg",
    length: "21 days",
    cost: "$3,500",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Every step of this world-class trek rewards us with sublime vistas encompassing four of the world's highest summits.",
  },
  {
    slug: "sherpa-villages-trek",
    title: "Sherpa Villages Everest Trek",
    destination: "Everest",
    image: "/images/sherpa-villages.jpg",
    length: "12 days",
    cost: "$2,500",
    type: "Trekking",
    rating: "Moderate",
    description:
      "Trekking through Sherpa communities with deluxe lodge accommodation beneath the inspiring Mount Everest.",
  },
  {
    slug: "everest-close-up",
    title: "Everest Close Up",
    destination: "Everest",
    image: "/images/everest-closeup.jpg",
    length: "19 days",
    cost: "$2,895",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Arrive at Everest Base Camp via the historic route taken by Hillary and Tenzing in 1953.",
  },
  // Nepal
  {
    slug: "forbidden-kingdom-mustang",
    title: "The Forbidden Kingdom of Mustang",
    destination: "Nepal",
    image: "/images/mustang-trek.jpg",
    length: "17 days",
    cost: "$3,100",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Penetrate Mustang's dramatic, tawny and mysterious landscape—a former Tibetan kingdom closed to outsiders until 1992.",
  },
  // India
  {
    slug: "ladakh-markha-valley-trek",
    title: "Ladakh's Markha Valley Trek",
    destination: "India",
    image: "/images/markha-valley.jpg",
    length: "16 days",
    cost: "$3,100",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Trek along the Markha River through one of the world's highest inhabited plateaus with remote Buddhist monasteries.",
  },
  {
    slug: "art-treasures-ladakh",
    title: "Art Treasures of Ladakh",
    destination: "India",
    image: "/images/ladakh-treasures.jpg",
    length: "16 days",
    cost: "$3,900",
    type: "Cultural",
    rating: "Moderate",
    description:
      "A remote borderland region in far northern India, Ladakh remains an unspoiled enclave of Tibetan Buddhist culture.",
  },
  {
    slug: "ancient-holy-northern-india",
    title: "Ancient & Holy Northern India",
    destination: "India",
    image: "/images/northern-india.jpg",
    length: "14 days",
    cost: "$4,500",
    type: "Cultural",
    rating: "Easy",
    description:
      "Northern India is a pastiche of myriad cultures and architectural styles from Hindu and Mogul influences.",
  },
  // Bhutan
  {
    slug: "snowman-trek",
    title: "Ultimate Bhutan: The Snowman Trek",
    destination: "Bhutan",
    image: "/images/bhutan-destination.jpg",
    length: "33 days",
    cost: "$8,500",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "The people of Laya call their land Beyul, the hidden paradise—travel into Bhutan's high-altitude wilderness.",
  },
  {
    slug: "chomolhari-trek",
    title: "Chomolhari Trek",
    destination: "Bhutan",
    image: "/images/bhutan-destination.jpg",
    length: "16 days",
    cost: "$4,700",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Bhutan's classic trekking route through dense forests ascending into the lofty realm with views of sacred Chomolhari.",
  },
  // Cambodia
  {
    slug: "classic-cambodia",
    title: "Classic Cambodia",
    destination: "Cambodia",
    image: "/images/angkor-wat.jpg",
    length: "7 days",
    cost: "$1,700",
    type: "Cultural",
    rating: "Leisurely",
    description:
      "Highlights Cambodia's best-known sites beginning in the charming colonial capital and the temples of Angkor.",
  },
  // China
  {
    slug: "heights-of-huangshan",
    title: "Heights of Huangshan",
    destination: "China",
    image: "/images/huangshan.jpg",
    length: "11 days",
    cost: "$2,600",
    type: "Overland",
    rating: "Moderate",
    description:
      "Among the classical scenes of China are precipitous mountain spires piercing the silvery clouds of Huangshan.",
  },
];

export default function TripsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Trips</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From challenging Himalayan treks to cultural immersions, explore our
            curated collection of adventures across Asia.
          </p>
        </div>
      </section>

      {/* Filter by Type */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-orange-700 text-white rounded-full text-sm font-medium">
              All Trips
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer">
              Trekking
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer">
              Cultural
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer">
              Overland
            </span>
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <Link
              key={trip.slug}
              href={`/trips/${trip.slug}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {trip.destination}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-orange-800 transition-colors">
                  {trip.title}
                </h2>
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
                <div className="mt-4 flex items-center text-orange-700 font-semibold text-sm">
                  View Trip Details
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Custom Travel CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Travel</h2>
          <p className="text-gray-600 mb-8 text-lg mx-auto">
            Over half of our business comes from guests who request a private,
            custom-designed adventure. Let us create your perfect journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-orange-800 transition"
          >
            Design Your Adventure
          </Link>
        </div>
      </section>
    </div>
  );
}
