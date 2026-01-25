import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bhutan",
  description:
    "Travel to Bhutan with Mandala Adventures. Experience the Land of the Thunder Dragon, Buddhist culture and pristine Himalayan landscapes.",
};

const trips = [
  {
    slug: "snowman-trek",
    title: "Ultimate Bhutan: The Snowman Trek",
    image: "/images/bhutan-destination.jpg",
    length: "33 days",
    cost: "$8,500",
    type: "Trekking/Overland",
    rating: "Strenuous",
    description:
      "The people of Laya call their land Beyul, the hidden paradise—travel with us into the high-altitude wilderness of Bhutan on this legendary trek.",
  },
  {
    slug: "laya-gasa-trek",
    title: "Laya Gasa Trek",
    image: "/images/bhutan-destination.jpg",
    length: "16 days",
    cost: "$4,400",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "The people of Laya call their land Beyul, the hidden paradise—travel with us into the high-altitude wilderness on this spectacular trek.",
  },
  {
    slug: "chomolhari-trek",
    title: "Chomolhari Trek",
    image: "/images/bhutan-destination.jpg",
    length: "16 days",
    cost: "$4,700",
    type: "Trekking",
    rating: "Strenuous",
    description:
      "Bhutan's classic trekking route cuts through dense, lush forests and ascends into the lofty realm above treeline with views of sacred Chomolhari.",
  },
];

export default function BhutanPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/bhutan-destination.jpg"
          alt="Bhutan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-amber-500 uppercase tracking-widest mb-2">
              Land of the Thunder Dragon
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">Travel to Bhutan</h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            With its beauty and mystery, Bhutan presents travelers with
            experiences found nowhere else on Earth. Their celebrations awaken
            travelers to the vibrant culture found in the treasure named Bhutan.
          </p>
          <p>
            Bhutan's fragile and delicate eco-system has been preserved for
            visitors to appreciate and stand in awe. Quality of life is measured
            in terms of Gross National Happiness, and though a tiny country,
            Bhutan is a global conservation leader—proud to be not only
            carbon-neutral, but carbon-negative.
          </p>
          <p>
            The "Land of the Thunder Dragon" remains dedicated to preserving its
            deep Buddhist traditions and pristine landscapes.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Bhutan Trips</h2>
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
            Plan Your Bhutan Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to customize your perfect Bhutan journey or join one of
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
