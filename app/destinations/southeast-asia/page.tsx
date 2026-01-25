import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Southeast Asia",
  description:
    "Travel to Southeast Asia with Mandala Adventures. Explore Vietnam, Laos, Thailand, Myanmar, and Indonesia.",
};

export default function SoutheastAsiaPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/southeast-asia-destination.jpg"
          alt="Southeast Asia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="hero-tagline uppercase tracking-widest mb-3 font-semibold text-sm sm:text-base">
              Renewed Serenity
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold">
              Travel to Southeast Asia
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="full-width-text text-lg text-gray-700 space-y-4">
          <p>
            Peace settled some 30 years ago on the Indochinese peninsula, and now
            no trace of the enemy remains upon the countenance of its people. The
            Vietnamese, Cambodians and Laotians today welcome the American visitor
            with genuine grace and friendliness.
          </p>
          <p>
            Alongside the earthiness of Vietnam, Cambodia, Laos and Myanmar,
            Thailand entices with refined style and sensuality. Indonesia's Bali
            offers paradise beaches and ancient Hindu traditions. Each country in
            this diverse region presents its own unique tapestry of culture,
            cuisine, and natural beauty.
          </p>
          <p>
            From the limestone karsts of Halong Bay to the ancient temples of
            Bagan, from the floating markets of Bangkok to the terraced rice
            fields of Bali, Southeast Asia offers endless discoveries for the
            curious traveler.
          </p>
        </div>
      </section>

      {/* Countries Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Explore the Region</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vietnam",
                tagline: "Emerging Beauty",
                description:
                  "Superb natural scenery, friendly people, ancient Buddhist culture, and food worth traveling for.",
              },
              {
                name: "Laos",
                tagline: "Timeless Indochina",
                description:
                  "Rugged landscapes and ethnically diverse people where not much has changed for a century.",
              },
              {
                name: "Thailand",
                tagline: "Land of Smiles",
                description:
                  "Refined style, ornate temples, vibrant markets, and legendary hospitality.",
              },
              {
                name: "Myanmar",
                tagline: "Golden Land",
                description:
                  "Ancient pagodas, traditional crafts, and a culture just opening to the world.",
              },
              {
                name: "Indonesia",
                tagline: "Paradise Found",
                description:
                  "Bali's Hindu traditions, sculpted rice terraces, and some of the world's best beaches.",
              },
              {
                name: "Cambodia",
                tagline: "Temples of Angkor",
                description:
                  "The magnificent ruins of Angkor and the resilient spirit of the Khmer people.",
              },
            ].map((country, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-orange-700 text-sm font-medium uppercase tracking-wider mb-1">
                  {country.tagline}
                </p>
                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                <p className="text-gray-600 text-sm">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Plan Your Southeast Asia Adventure
          </h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to design your perfect journey through Southeast Asia.
            Whether you want to focus on one country or explore the entire
            region, we'll create an unforgettable experience.
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
