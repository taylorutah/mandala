import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Mandala Adventures privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Mandala Adventures, we are committed to protecting the privacy and personal information of both
            our travelers as well as casual visitors to our website. This Privacy Policy describes what information
            we collect, how we use it, and what choices you have regarding your personal data.
          </p>

          {/* What Information We Collect */}
          <h2 className="text-2xl font-bold mt-10 mb-4">What Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you visit our website, we collect anonymous aggregate data to help us understand how visitors
            use our site. This may include information about your browser type, IP address, and pages visited.
          </p>
          <p className="text-gray-700 mb-4">
            We only collect personal information when you voluntarily provide it through our forms, such as when
            you request information, sign up for our newsletter, or book a trip. This information may include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Name, email address, mailing address, and phone number</li>
            <li>IP address and browser type</li>
            <li>Trip-specific information such as date of birth, passport details, emergency contact information,
                health conditions, and dietary restrictions</li>
          </ul>

          {/* How We Use This Information */}
          <h2 className="text-2xl font-bold mt-10 mb-4">How We Use This Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Process and fulfill your trip reservations</li>
            <li>Share necessary information with our service providers (hotels, airlines, local guides) to deliver your trip</li>
            <li>Enhance your website experience and pre-fill forms for your convenience</li>
            <li>Send you requested information about our trips and services</li>
            <li>Analyze aggregated user behavior through Google Analytics to improve our website</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>We never sell your personal information to third parties.</strong>
          </p>
          <p className="text-gray-700 mb-4">
            We may share your information with contracted service providers who assist us in our operations,
            including mail houses, email distributors, airlines, and payment processors. These providers are
            contractually obligated to protect your information and use it only for the purposes we specify.
          </p>

          {/* Safeguarding Your Information */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Safeguarding Your Information</h2>
          <p className="text-gray-700 mb-4">
            Mandala Adventures maintains reasonable and appropriate physical, electronic, and managerial procedures
            to safeguard and secure the information we collect. However, no data transmission over the internet
            can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot
            guarantee the security of any information you transmit to us.
          </p>

          {/* Newsletter and Marketing */}
          <h2 className="text-2xl font-bold mt-10 mb-4">eNewsletter & Marketing Communications</h2>
          <p className="text-gray-700 mb-4">
            If you have subscribed to our newsletter or requested information from us, we may send you periodic
            emails about our trips, special offers, and travel updates. You can opt out of these communications
            at any time by:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Clicking the "unsubscribe" link at the bottom of any marketing email</li>
            <li>Contacting us at <a href="mailto:info@mandalaadventures.com" className="text-orange-700 hover:underline">info@mandalaadventures.com</a></li>
            <li>Calling us at <a href="tel:+18018231551" className="text-orange-700 hover:underline">(801) 823-1551</a></li>
          </ul>

          {/* Cookies */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            Our website uses cookies to enhance your browsing experience. Cookies are small text files stored
            on your device that help us:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve our website functionality</li>
          </ul>
          <p className="text-gray-700 mb-4">
            You can modify your browser settings to reject cookies, though this may affect some website functionality.
          </p>

          {/* Your Rights */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Reviewing & Managing Your Personal Information</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or delete your personal information at any time. To make such
            a request, please contact us at <a href="mailto:info@mandalaadventures.com" className="text-orange-700 hover:underline">info@mandalaadventures.com</a>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">California Privacy Rights (CCPA)</h3>
          <p className="text-gray-700 mb-4">
            If you are a California resident, you have the following rights under the California Consumer Privacy Act:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>Right to Delete:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
            <li><strong>Right to Opt-Out:</strong> You can opt out of the sale of your personal information. Note: We do not sell personal information.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">European Economic Area Residents (GDPR)</h3>
          <p className="text-gray-700 mb-4">
            If you are a resident of the European Economic Area, you have additional rights under the General
            Data Protection Regulation, including the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Transfer your personal data to another service</li>
            <li>Restrict or object to certain processing of your data</li>
          </ul>

          {/* Children's Privacy */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our website is not directed at children under the age of 18. We do not knowingly collect personal
            information from children under 16. If we become aware that we have inadvertently collected personal
            information from a child under 16, we will promptly delete such information from our records.
          </p>

          {/* Changes to This Policy */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by
            posting the new Privacy Policy on this page and updating the "Last Updated" date above.
          </p>

          {/* Contact Us */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2"><strong>Mandala Adventures</strong></p>
            <p className="text-gray-600 mb-1">8744 S Sandy Pkwy Ste E</p>
            <p className="text-gray-600 mb-1">Sandy, UT 84070-6436, USA</p>
            <p className="text-gray-600 mb-1">
              Email: <a href="mailto:info@mandalaadventures.com" className="text-orange-700 hover:underline">info@mandalaadventures.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+18018231551" className="text-orange-700 hover:underline">(801) 823-1551</a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/"
            className="text-orange-700 hover:text-orange-800 font-medium"
          >
            ← Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
