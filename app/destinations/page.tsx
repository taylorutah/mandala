import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Destinations",
  description:
    "Explore Asia travel destinations with Mandala Adventures. Nepal, Everest, India, Tibet, Bhutan, Mongolia, Southeast Asia, China, Cambodia, Vietnam, Laos, and Indonesia.",
};

const destinations = [
  {
    name: "Nepal",
    slug: "nepal",
    tagline: "The Ultimate Himalayan Adventure",
    image: "/images/nepal-destination.jpg",
    description:
      "Nepal is the ultimate destination for those craving the solitude of high mountains, the beauty of windswept plains and the experience of far-off culture. While Nepal is home to eight of the world's tallest mountains and some of the most remote places on the planet, it is also a rich fusion of cultures, religions and ways of life. Here ancient Hindu rituals survive harmoniously with tranquil Buddhist monasteries and bucolic yak herder bands.",
  },
  {
    name: "Everest",
    slug: "everest",
    tagline: "Nature's Signature Piece",
    image: "/images/everest-destination.jpg",
    description:
      "To behold Mt. Everest is to stand within the circumference of a great gravity, and join in a tradition of adventure that has drawn explorers and dreamers for centuries. A mountain possessed of an unsurpassed majesty, it's Nature's signature piece. Our special trekking trips feature in-depth surveys of Sherpa culture, the entrancing Mani Rimdu festival, and cultural highlights of Kathmandu.",
  },
  {
    name: "Mongolia",
    slug: "mongolia",
    tagline: "Land of the Eternal Blue Sky",
    image: "/images/mongolia-destination.jpg",
    description:
      "Mighty powers have ruled the vast expanses of Mongolia, from the homegrown empire of Genghis Khan, to the Chinese and in the 20th century, the Soviets. Yet none have subjugated its wilderness or the nomadic spirit of the earthbound people who still roam the steppes, deserts, forests and mountain ranges in concert with the seasons. Travel in Mongolia is an encounter with a land resistant to the passing whim of human forces.",
  },
  {
    name: "Tibet",
    slug: "tibet",
    tagline: "The Roof of the World",
    image: "/images/tibet-destination.jpg",
    description:
      "Thanks to 21st-century media and air travel, the teachings of Tibetan Buddhism guide the spiritual practice of millions worldwide. Guests return home in awe of the land's natural beauty and the hospitality of a people perpetually tested by the rugged politics and elements that surround them. Whether you travel to understand better its inhabitants and their beliefs or to walk the pilgrimage routes around its sacred peaks, there are endless pathways toward the divine in Tibet.",
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    tagline: "Land of the Thunder Dragon",
    image: "/images/bhutan-destination.jpg",
    description:
      "With its beauty and mystery, Bhutan presents travelers with experiences found nowhere else on Earth. Their celebrations awaken travelers to the vibrant culture found in the treasure named Bhutan. Bhutan's fragile and delicate eco-system has been preserved for visitors to appreciate and stand in awe. Quality of life is measured in terms of Gross National Happiness.",
  },
  {
    name: "India",
    slug: "india",
    tagline: "Gateway to the Subcontinent",
    image: "/images/india-destination.jpg",
    description:
      "Sable-eyed women gaze at you from beneath curving folds of crimson and gold-embroidered silk. They stand framed within the window of a palace they inhabit with 800 million fellow residents. The fragrances of sandalwood, incense, curry and blossoms perfume its halls. Mandala Adventures opens the gateway to India and helps you feel at home in this teeming domain where sensation and encounter are not confined by the imaginable.",
  },
  {
    name: "Southeast Asia",
    slug: "southeast-asia",
    tagline: "Renewed Serenity",
    image: "/images/southeast-asia-destination.jpg",
    description:
      "Peace settled some 30 years ago on the Indochinese peninsula, and now no trace of the enemy remains upon the countenance of its people. The Vietnamese, Cambodians and Laotians today welcome the American visitor with genuine grace and friendliness. Alongside the earthiness of Vietnam, Cambodia, Laos and Myanmar, Thailand entices with refined style and sensuality.",
  },
  {
    name: "China",
    slug: "china",
    tagline: "Ancient & Modern",
    image: "/images/china-destination.jpg",
    description:
      "As mysterious and inscrutable to the visitor as the characters of its complex language, China tantalizes us with splendid relics of its long history; with a natural beauty ranging from alpine to florid rainforest to eerily eroded desert; with dozens of ethnic peoples whose distinct identities have evolved through invasion and revolution. Where does one even start to comprehend the immensity of China?",
  },
  {
    name: "Cambodia",
    slug: "cambodia",
    tagline: "Temples of Angkor",
    image: "/images/cambodia-destination.jpg",
    description:
      "Atop any traveler's wish list are the World Heritage ruins at Angkor. This Indiana Jones-esque city of temples is one of the most remarkable destinations on Earth. Journey further afield to gaze upon an endless sea of emerald rice fields, or discover virtually unexplored areas just newly opened to travelers. Enjoy the fascinating capital once known as the 'Paris of the East.'",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    tagline: "Emerging Beauty",
    image: "/images/vietnam-destination.jpg",
    description:
      "Now savvy travelers come to savor the many alluring qualities Vietnam possesses, such as superb natural scenery (some say the most gorgeous in all of Southeast Asia), friendly local people, ancient Buddhist culture, French-fusion architecture and food so good it's worth a trip just to try the banh khoai. Emerging from its years of isolation, Vietnam is changing dramatically.",
  },
  {
    name: "Laos",
    slug: "laos",
    tagline: "Timeless Indochina",
    image: "/images/laos-destination.jpg",
    description:
      "Visitors to this least populated Southeast Asian country will be rewarded with sights of a rugged natural landscape and ethnically diverse people where not much changed since French explorers set foot here more than a century ago. Set on a broad curve of the Mekong, Vientiane is perhaps Indochina's most modest capital city. To the north, Louang Prabang was once the heart and soul of the ancient kingdom of Lane Xang.",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    tagline: "Paradise Found",
    image: "/images/indonesia-destination.jpg",
    description:
      "Paradise is otherwise known as Bali, a brilliant island of colorful traditions, sculpted rice terraces, balmy breezes and sandy beaches lapped by translucent waves. For the ultimate relaxing vacation of luxury and invigorating outdoor activity, Bali is not to be outdone. This devout and peaceful Hindu culture welcomes visitors with open arms.",
  },
];

export default function DestinationsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/hero-himalaya.jpg"
          alt="Himalayan mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Asia Travel Destinations
            </h1>
            <p className="hero-heading text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              From the mighty peaks of the Himalaya to the ancient temples of
              Southeast Asia, explore the destinations that have captivated
              adventurers for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article
              key={dest.slug}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                    {dest.tagline}
                  </p>
                  <h2 className="text-2xl font-bold text-white">{dest.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {dest.description}
                </p>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="inline-flex items-center mt-4 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
                >
                  Explore {dest.name}
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
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Custom Travel CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Travel</h2>
          <p className="text-gray-600 mb-8 text-lg mx-auto">
            Over half of our business comes from guests who request a private,
            custom-designed adventure. These have ranged from a three-month
            trans-Himalayan trek to a three-day getaway in Hanoi following a
            business meeting in Hong Kong.
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
