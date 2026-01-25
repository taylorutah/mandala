import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Visa Information",
  description: "Visa requirements and application guidance for Asian destinations with Mandala Adventures.",
};

const visaInfo = [
  {
    country: "Nepal",
    requirements: "Visa required for most nationalities",
    details: [
      "Visa on arrival available at Kathmandu airport",
      "15/30/90 day tourist visas available",
      "Passport-size photos required",
      "Can also obtain in advance from Nepal Embassy",
    ],
    tips: "Bring extra passport photos for trekking permits.",
  },
  {
    country: "Bhutan",
    requirements: "Visa required for all foreign visitors",
    details: [
      "Visa arranged through Mandala Adventures",
      "Processed by Tourism Council of Bhutan",
      "Minimum daily tariff applies",
      "Visa clearance letter sent before departure",
    ],
    tips: "We handle all Bhutan visa arrangements as part of your trip.",
  },
  {
    country: "India",
    requirements: "Visa required for most nationalities",
    details: [
      "e-Visa available for many countries",
      "Apply online at indianvisaonline.gov.in",
      "Traditional visa through Indian Embassy also available",
      "Processing time varies; apply early",
    ],
    tips: "Special permits required for Ladakh, Sikkim, and other restricted areas—we arrange these.",
  },
  {
    country: "Tibet (China)",
    requirements: "Chinese visa + Tibet Travel Permit required",
    details: [
      "Chinese visa must be obtained in advance",
      "Tibet Travel Permit arranged by Mandala Adventures",
      "Additional permits for certain areas",
      "Group travel required for Tibet",
    ],
    tips: "Allow extra time for visa processing. We'll provide invitation letter for permit.",
  },
  {
    country: "Cambodia",
    requirements: "Visa required for most nationalities",
    details: [
      "Visa on arrival available",
      "e-Visa also available online",
      "30-day tourist visa",
      "Passport photo required",
    ],
    tips: "e-Visa is convenient but only valid at certain entry points.",
  },
  {
    country: "China",
    requirements: "Visa required for most nationalities",
    details: [
      "Must apply at Chinese Embassy/Consulate",
      "Invitation letter may be required",
      "Processing can take 4-7 business days",
      "10-year multiple entry visas available for US citizens",
    ],
    tips: "Apply well in advance. Hong Kong does not require a visa for short stays.",
  },
];

export default function VisaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/cambodia-destination.jpg"
          alt="Visa Information"
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Visa Information</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Visa requirements vary by destination and nationality. Below is general guidance for our most popular
          destinations. Requirements can change, so always verify current information before your trip.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-orange-800 text-sm">
            <strong>Important:</strong> Ensure your passport has at least 6 months validity beyond your planned
            return date and at least 2-4 blank pages. This information is for U.S. passport holders; requirements
            may differ for other nationalities.
          </p>
        </div>
      </section>

      {/* Visa Information by Country */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          {visaInfo.map((country, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">{country.country}</h2>
                <span className="text-sm text-gray-300">{country.requirements}</span>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {country.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">Tip: </span>
                    <span className="text-gray-600">{country.tips}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Tips */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">General Visa Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Apply Early</h3>
              <p className="text-gray-600 text-sm">
                Start the visa process at least 6-8 weeks before departure. Some visas require
                interviews or have lengthy processing times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Keep Copies</h3>
              <p className="text-gray-600 text-sm">
                Make photocopies of your passport and visas. Keep one copy with you (separate from
                originals) and leave one with someone at home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Photos Ready</h3>
              <p className="text-gray-600 text-sm">
                Bring extra passport-sized photos. Many destinations require them for visas on
                arrival, permits, or registration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Check Requirements</h3>
              <p className="text-gray-600 text-sm">
                Requirements change frequently. Always verify current requirements with the embassy
                or consulate before applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Visas?</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            We provide detailed visa guidance for your specific trip and can recommend visa services if needed.
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
