import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gear & Clothing",
  description: "Essential gear and clothing recommendations for your Mandala Adventures trip.",
};

const essentialGear = [
  {
    category: "Footwear",
    items: [
      "Sturdy hiking boots (broken in before trip)",
      "Camp shoes or lightweight sandals",
      "Trekking socks (wool or synthetic blend)",
      "Sock liners to prevent blisters",
    ],
  },
  {
    category: "Clothing",
    items: [
      "Moisture-wicking base layers",
      "Insulating mid-layer (fleece or down)",
      "Waterproof/windproof outer shell",
      "Quick-dry hiking pants",
      "Sun hat and warm beanie",
      "Lightweight gloves and warm gloves",
      "Bandana or buff",
    ],
  },
  {
    category: "Backpack & Bags",
    items: [
      "Daypack (25-35 liters)",
      "Waterproof pack cover or dry bags",
      "Duffel bag for porters (if trekking)",
      "Small toiletry bag",
    ],
  },
  {
    category: "Sleeping",
    items: [
      "Sleeping bag rated to appropriate temperature",
      "Sleeping bag liner (silk or cotton)",
      "Inflatable pillow (optional)",
    ],
  },
  {
    category: "Accessories",
    items: [
      "Trekking poles (highly recommended)",
      "Headlamp with spare batteries",
      "Sunglasses (UV protection)",
      "Water bottles or hydration system",
      "Water purification tablets or filter",
    ],
  },
  {
    category: "Personal Items",
    items: [
      "Sunscreen (SPF 30+)",
      "Lip balm with SPF",
      "Insect repellent",
      "Personal medications",
      "First aid kit basics",
      "Camera and extra batteries",
    ],
  },
];

export default function GearPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/nepal-destination.jpg"
          alt="Gear and Clothing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Link href="/essentials" className="text-amber-500 uppercase tracking-widest mb-2 hover:text-orange-300">
              Essentials
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Gear & Clothing</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
          Having the right gear can make the difference between an enjoyable adventure and a challenging one.
          Below is our recommended packing list for trekking trips. Cultural tours require less specialized gear,
          but many items still apply.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-orange-800 text-sm">
            <strong>Note:</strong> You'll receive a detailed, trip-specific packing list after booking.
            This list covers general recommendations for most Himalayan adventures.
          </p>
        </div>
      </section>

      {/* Gear Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialGear.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-100 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Packing Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Layer, Layer, Layer</h3>
              <p className="text-gray-600 text-sm">
                Mountain weather changes quickly. Multiple thin layers provide more versatility than
                a single heavy jacket. You can add or remove layers as conditions change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Break In Your Boots</h3>
              <p className="text-gray-600 text-sm">
                Never wear new boots on a trek. Break them in thoroughly with several practice hikes
                before your trip to prevent painful blisters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Quality Over Quantity</h3>
              <p className="text-gray-600 text-sm">
                Invest in quality gear that will last. A good rain jacket, sleeping bag, and boots
                are worth the investment and will serve you on many adventures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Pack Light</h3>
              <p className="text-gray-600 text-sm">
                On trekking trips, porters typically carry your main bag, but keep your daypack light.
                Only carry what you need for the day plus emergency essentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Gear?</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us for specific recommendations based on your trip and the season you're traveling.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
