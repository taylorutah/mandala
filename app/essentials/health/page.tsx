import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Traveler's Health",
  description: "Important health information, vaccinations, and altitude considerations for your Mandala Adventures trip.",
};

export default function HealthPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/tibet-destination.jpg"
          alt="Traveler Health"
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Traveler's Health</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
          Your health and safety are our top priorities. Below you'll find important health information
          to help you prepare for your adventure. We strongly recommend consulting with a travel medicine
          specialist before your trip.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">
            <strong>Disclaimer:</strong> This information is provided as general guidance only and should not
            replace professional medical advice. Please consult your physician or a travel health specialist
            for personalized recommendations.
          </p>
        </div>
      </section>

      {/* Health Topics */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        {/* Vaccinations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Vaccinations</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Required and recommended vaccinations vary by destination. Generally, travelers to Asia should
              consider the following:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Typically Recommended</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Hepatitis A & B</li>
                  <li>Typhoid</li>
                  <li>Tetanus-Diphtheria</li>
                  <li>MMR (if not already immune)</li>
                  <li>Influenza</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">May Be Recommended</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Japanese Encephalitis</li>
                  <li>Rabies</li>
                  <li>Cholera</li>
                  <li>Yellow Fever (if arriving from endemic area)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Altitude */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Altitude Sickness</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Many of our destinations are at high altitude. Acute Mountain Sickness (AMS) can affect anyone,
              regardless of age or fitness level. Understanding the symptoms and prevention is crucial.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-orange-900 mb-2">Symptoms of AMS</h3>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>Headache (most common)</li>
                <li>Nausea or loss of appetite</li>
                <li>Fatigue and weakness</li>
                <li>Dizziness or lightheadedness</li>
                <li>Difficulty sleeping</li>
              </ul>
            </div>
            <h3 className="font-semibold mb-2">Prevention</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Ascend gradually:</strong> Our itineraries are designed with proper acclimatization days.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Stay hydrated:</strong> Drink plenty of water—dehydration exacerbates AMS.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Avoid alcohol:</strong> Especially during the first few days at altitude.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Consider Diamox:</strong> Consult your doctor about prophylactic acetazolamide.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Food & Water */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Food & Water Safety</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Safe Practices</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drink only bottled or purified water
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Avoid ice in drinks
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Eat hot, freshly cooked food
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wash hands frequently
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Avoid</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Raw or undercooked meat/seafood
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Salads and uncooked vegetables
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Fruits you can't peel yourself
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Street food from questionable vendors
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Travel Insurance */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Travel Insurance</h2>
          <p className="text-gray-700 mb-4">
            <strong>Travel insurance with emergency evacuation coverage is required for all Mandala Adventures trips.</strong>
            This is especially important for trekking trips at high altitude where helicopter evacuation may be necessary.
          </p>
          <p className="text-gray-600">
            Your policy should cover trip cancellation, medical expenses, emergency evacuation, and repatriation.
            We can recommend insurance providers if needed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Health Preparation?</h2>
          <p className="text-gray-600 mb-6 mx-auto">
            Contact us for destination-specific health information or recommendations for travel health clinics.
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
