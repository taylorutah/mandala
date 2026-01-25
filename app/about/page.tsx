import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Learn about Mandala Adventures, our team, and our commitment to extraordinary Asian travel experiences.",
};

const team = [
  {
    name: "Taylor Warnick",
    role: "President",
    bio: "After spending several years in the adventure travel space leading the sales efforts for an Asian Travel company, Taylor has set his sights on delivering a first class experience for those souls looking for adventure. Taylor brings with him to Mandala Adventures an extensive sales and management background covering both the adventure travel and high-tech marketplaces.",
  },
  {
    name: "John Collins",
    role: "Controller",
    bio: "A son of the Rocky Mountains, John is a fourth generation Montanan. His family still ranches on the family homestead in Montana's Crazy Mountains, located in the Yellowstone River drainage. Occasionally, John finds himself there on horseback assisting with the annual roundup.",
  },
  {
    name: "Cindy Gestland",
    role: "Expedition Services Manager",
    bio: "Cindy has lived in and absorbed languages, cultures, sights and sounds throughout the world. She is fluent in Indonesian, Mandarin and Fukian.",
  },
  {
    name: "Jason Belzer",
    role: "Expedition Consultant",
    bio: "Coming from a family of travelers and outdoorsmen, Jason was bound to make a living in the travel industry. He is a mountain guide by trade and has led groups on adventures to Mexico, South America, Europe, and the red rock deserts of Southern Utah.",
  },
  {
    name: "Glen Cabal",
    role: "Expedition Consultant",
    bio: "After receiving his M.B.A. from the American Graduate School of International Management in Arizona where he also studied Japanese, he moved to San Francisco, working in the International Shipping arena and relishing the diverse cultural influences of the city by the bay.",
  },
  {
    name: "Cel Nelson",
    role: "International Air Desk Manager",
    bio: "Cel began her career in travel management 25 years ago, and has done everything from management to booking leisure, corporate and group travel. She manages contract and published airfares to a variety of far-flung Asian gateways for Mandala Adventures travelers.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/nepal-destination.jpg"
          alt="Mandala Adventures Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-amber-500 uppercase tracking-widest mb-2">Our Culture</p>
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            An <strong>unforgettable journey</strong> back in time beckons in the realm of Mandala Adventures
            as we guide you into the ageless <strong>Himalaya</strong>. We are a unique travel service and
            outfitter of <strong>treks</strong> and overland journeys in Nepal, Tibet, Bhutan, India, and Southeast Asia.
            Be one of the select few who join us this year on an extraordinary journey to the heart of the Himalaya.
          </p>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Guarantee</h3>
              <p className="text-gray-600">
                We stand behind every trip we operate. If something doesn't meet your expectations,
                we'll make it right. Your satisfaction and safety are our top priorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Step Lightly</h3>
              <p className="text-gray-600">
                We believe in responsible travel that benefits local communities and preserves
                the environments we visit. We partner with local guides and support sustainable tourism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Groups</h3>
              <p className="text-gray-600">
                We limit group size to a maximum of 15 for overland cultural trips and 12 for
                most trekking trips. Most trips will run with as few as two members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mandala Adventures */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Mandala Adventures?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700"><strong>Expert Local Guides:</strong> Our trip leaders combine a love and knowledge of Asian culture with an understanding of the logistical quirks to ensure a seamless journey.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700"><strong>Customizable Itineraries:</strong> About half our business consists of private and custom trips for individuals, couples, families and small groups of friends.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700"><strong>Quality Accommodations:</strong> We select the finest hotels and lodges, from boutique properties to mountain tea houses that offer authentic local character.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700"><strong>Decades of Experience:</strong> Our team has extensive experience leading expeditions throughout Asia, with deep knowledge of the region's cultures and landscapes.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mandala Adventures has assembled a superb team of individuals who work the desks
              at World Headquarters in Salt Lake City. Let us introduce our exceptional people.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-gray-300 mb-8 text-lg mx-auto">
            Contact us to learn more about our trips or to customize your own adventure.
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
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Browse Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
