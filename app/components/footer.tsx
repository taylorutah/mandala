export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* HELP CENTER */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">
            Help Center
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Frequently Asked Questions",
              "Company Profile",
              "Trip Difficulty Ratings",
              "Traveler Essentials",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">
            Contact Info
          </h3>
          <p className="text-sm leading-relaxed">
            <span className="block font-medium">Mandala Adventures</span>
            1968 E Ashley Mesa Lane<br />
            Sandy, UT 84092<br />
            USA
          </p>
          <p className="mt-4 text-sm font-semibold">
            Tel: <a href="tel:+18018231551">(801) 823-1551</a>
          </p>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">
            Mandala Adventures Information
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            An <strong>unforgettable journey</strong> back in time beckons in
            the realm of Mandala Adventures as we guide you into the ageless{" "}
            <strong>Himalaya</strong>. We are a unique travel service and
            outfitter of <strong>treks</strong> and overland journeys in{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Nepal
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Tibet
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Bhutan
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              India
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Southeast Asia
            </a>
            . Join us this year on an extraordinary journey to the heart of the
            Himalaya.
          </p>
        </div>
      </div>

      {/* FOOTER BASE */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mandala Adventures · Exploring culture
        through story and place.
      </div>
    </footer>
  );
}