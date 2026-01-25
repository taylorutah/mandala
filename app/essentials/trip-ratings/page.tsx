import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trip Difficulty Ratings",
  description: "Understanding Mandala Adventures trip difficulty ratings to find the right adventure for your fitness level.",
};

const ratings = [
  {
    level: "Leisurely",
    description: "These trips are suitable for anyone in good health. Walking distances are minimal, and the pace is relaxed. You may encounter some uneven terrain or stairs at cultural sites.",
    activities: [
      "Walking 2-4 miles per day on mostly level terrain",
      "Visiting temples, palaces, and markets",
      "Comfortable hotel accommodations",
      "Vehicle-supported travel",
    ],
    suitableFor: "First-time travelers to Asia, those seeking cultural immersion over physical challenge, or anyone who prefers a comfortable pace.",
    color: "bg-green-500",
  },
  {
    level: "Moderate",
    description: "These trips involve more physical activity but are still accessible to most active travelers. Expect some hiking on trails and longer walking days.",
    activities: [
      "Walking 4-8 miles per day",
      "Some elevation gain (up to 2,000 feet per day)",
      "Mix of paved roads and uneven trails",
      "Possible teahouse or lodge stays",
    ],
    suitableFor: "Active travelers who exercise regularly and enjoy being outdoors. Previous hiking experience is helpful but not required.",
    color: "bg-yellow-500",
  },
  {
    level: "Strenuous",
    description: "These trips require a good level of fitness and often involve trekking at altitude. Prior hiking experience is strongly recommended.",
    activities: [
      "Walking 6-12 miles per day",
      "Significant elevation gain (2,000-4,000 feet per day)",
      "Trails may be steep, rocky, or uneven",
      "Camping or basic teahouse accommodation",
      "Altitudes often exceeding 12,000 feet",
    ],
    suitableFor: "Fit, experienced hikers who exercise regularly. You should be comfortable hiking 6+ hours per day on challenging terrain.",
    color: "bg-orange-700",
  },
  {
    level: "Challenging",
    description: "Our most demanding trips, often involving extreme altitude, technical terrain, or expedition-style travel. Excellent fitness is essential.",
    activities: [
      "Walking 8-14+ miles per day",
      "Major elevation gains in high altitude environments",
      "Technical terrain possible",
      "Remote wilderness camping",
      "Altitudes potentially exceeding 18,000 feet",
    ],
    suitableFor: "Highly fit, experienced trekkers who have trained specifically for the trip. Previous high-altitude experience is recommended.",
    color: "bg-red-500",
  },
];

export default function TripRatingsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/everest-destination.jpg"
          alt="Trip Difficulty Ratings"
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Trip Difficulty Ratings</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed">
          Understanding our trip ratings will help you choose an adventure that matches your fitness level
          and experience. Each trip in our catalog is rated according to the following scale.
        </p>
      </section>

      {/* Ratings */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {ratings.map((rating, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className={`${rating.color} px-6 py-4`}>
                <h2 className="text-2xl font-bold text-white">{rating.level}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">{rating.description}</p>

                <h3 className="font-semibold text-gray-900 mb-3">What to Expect:</h3>
                <ul className="space-y-2 mb-6">
                  {rating.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">Best For: </span>
                    <span className="text-gray-600">{rating.suitableFor}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Preparation Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Physical Preparation</h3>
              <p className="text-gray-600 text-sm">
                Begin training at least 2-3 months before your trip. For trekking trips, focus on cardio
                endurance, hill climbing, and building leg strength. Practice with your actual hiking boots
                and daypack.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Altitude Considerations</h3>
              <p className="text-gray-600 text-sm">
                For trips above 8,000 feet, give yourself time to acclimatize. Stay well-hydrated,
                avoid alcohol, and ascend gradually. Our itineraries are designed with proper
                acclimatization schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Rating is Right for You?</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us to discuss your fitness level and we'll help you find the perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/trips"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Browse Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
