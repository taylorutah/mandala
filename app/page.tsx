import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NAPCO Rotary Gear Pumps | North American Pump Company",
  description: "Precision rotary gear pumps and service kits for demanding industrial transfer applications. Built to last, made in the USA.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[420px] sm:h-[480px] mb-16">
        <Image src="/images/hero-nitrile-gears.jpg" alt="NAPCO Nitrile Gears" fill priority className="object-cover brightness-[0.65]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Rotary Gear Pumps Built to Last</h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-200 mb-6">
            Precision-engineered rotary gear pumps and service kits for abrasive, viscous, and corrosive industrial applications.
          </p>
          <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition">
            Request a Quote
          </Link>
        </div>
      </div>

      {/* VALUE ROW */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Built to Last",
              desc: "Heavy-duty ductile or stainless steel housings designed for reliability.",
            },
            {
              title: "Fully Serviceable",
              desc: "Every pump can be rebuilt with genuine NAPCO parts and kits.",
            },
            {
              title: "Made in the USA",
              desc: "Engineered and assembled in Sandy, Utah for industrial performance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-900 border border-red-200 dark:border-red-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/50 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Industries & Applications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our pumps are trusted by leading manufacturers and industrial facilities for applications such as:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Adhesives & Sealants – Handling thick, high-viscosity materials",
            "Petroleum & Fuel Transfer – High-temperature, high-efficiency flow",
            "Chemical Processing – Resistant to corrosive and reactive fluids",
            "Mining & Explosive Slurries – Heavy-duty wear resistance",
            "Food & Beverage Processing – Sanitary and precise fluid transfer",
          ].map((app) => (
            <div key={app} className="flex items-start gap-3 text-left">
              <span className="text-red-600 mt-0.5 text-lg">✔</span>
              <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">{app}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-10 max-w-3xl mx-auto text-sm sm:text-base">
          If your industry requires precision fluid movement with minimal downtime, <strong>NAPCO has the solution.</strong>
        </p>
      </section>
    </>
  );
}