import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Reservations & Booking",
  description: "How to book your Mandala Adventures trip, payment options, and booking policies.",
};

export default function BookingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/images/bhutan-destination.jpg"
          alt="Reservations and Booking"
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2">Reservations & Booking</h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xl text-gray-700 leading-relaxed">
          Booking your adventure with Mandala Adventures is simple. Below you'll find everything you need
          to know about reserving your trip, payment options, and our policies.
        </p>
      </section>

      {/* Booking Process */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How to Book</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-700 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Choose Your Trip</h3>
            <p className="text-gray-600 text-sm">
              Browse our catalog of trips and find the adventure that speaks to you. Contact us with questions
              or for customization options.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-700 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Reserve Your Spot</h3>
            <p className="text-gray-600 text-sm">
              Complete our booking form and submit your deposit to secure your place. We'll send you a
              confirmation and trip materials.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-700 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Prepare & Go</h3>
            <p className="text-gray-600 text-sm">
              We'll provide detailed pre-trip information to help you prepare. Then it's time for your adventure!
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Deposit</h3>
              <p className="text-gray-600 text-sm mb-4">
                A deposit of $500 per person is required to confirm your booking. For trips departing within
                60 days, full payment is required at time of booking.
              </p>
              <h3 className="font-semibold mb-3">Balance</h3>
              <p className="text-gray-600 text-sm">
                Final payment is due 60 days before departure. For trips booked within 60 days of departure,
                full payment is required at time of booking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Accepted Payment Methods</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Check
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bank wire transfer
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Credit card (Visa, MasterCard, American Express)
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-2">
                Note: A 3% processing fee applies to credit card payments.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
          <p className="text-gray-700 mb-4">
            We understand that plans can change. Our cancellation policy is as follows:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Days Before Departure</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cancellation Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">More than 90 days</td>
                  <td className="px-4 py-3 text-sm text-gray-600">$500 deposit forfeited</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">60-90 days</td>
                  <td className="px-4 py-3 text-sm text-gray-600">50% of trip cost</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">30-59 days</td>
                  <td className="px-4 py-3 text-sm text-gray-600">75% of trip cost</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Less than 30 days</td>
                  <td className="px-4 py-3 text-sm text-gray-600">100% of trip cost</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            We strongly recommend purchasing travel insurance that includes trip cancellation coverage.
          </p>
        </div>

        {/* Trip Changes */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h3 className="font-semibold text-orange-900 mb-3">Changes to Your Booking</h3>
          <p className="text-orange-800 text-sm mb-2">
            If you need to change your departure date or trip, please contact us as soon as possible.
            We will do our best to accommodate changes, subject to availability.
          </p>
          <p className="text-orange-800 text-sm">
            A change fee may apply depending on timing and the nature of the change.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Adventure?</h2>
          <p className="text-gray-300 mb-6 mx-auto">
            Contact us to start planning your journey or to get answers to any questions.
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
