import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | NAPCO Rotary Gear Pumps",
  description:
    "2″ and 3″ NAPCO rotary gear pumps available in stainless or ductile iron housings. Precision-engineered, self-priming, and fully serviceable for demanding industrial applications.",
};

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Rotary Gear Pumps
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
        Select port size, housing, and gear materials to match your application.
        All NAPCO rotary gear pumps are self-priming, bi-directional, and built
        for long service life.
      </p>

      {/* Product Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* 2″ Pump */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 shadow-sm hover:shadow-md transition p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/pump-2-ductile.jpg"
              alt="PA200 2-inch Rotary Gear Pump"
              width={480}
              height={320}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
            PA200 – 2″ Rotary Gear Pump
          </h2>
          <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 flex-grow">
            <li>Stainless or ductile iron housing</li>
            <li>Nitrile or Viton gears</li>
            <li>Self-priming; CW/CCW rotation</li>
            <li>Factory-matched service kits available</li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/products/pa200s"
              className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              View Stainless Model
            </Link>
            <Link
              href="/products/pa200c"
              className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              View Ductile Model
            </Link>
          </div>
        </div>

        {/* 3″ Pump */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/60 shadow-sm hover:shadow-md transition p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/pump-3-stainless.jpg"
              alt="PA300 3-inch Rotary Gear Pump"
              width={480}
              height={320}
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
            PA300 – 3″ Rotary Gear Pump
          </h2>
          <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 flex-grow">
            <li>Stainless or ductile iron housing</li>
            <li>Higher flow for demanding service</li>
            <li>Self-priming; fully serviceable</li>
            <li>Factory-matched repair kits available</li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/products/pa300s"
              className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              View Stainless Model
            </Link>
            <Link
              href="/products/pa300c"
              className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              View Ductile Model
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/engineering"
          className="font-medium text-red-600 dark:text-red-400 hover:underline transition text-sm sm:text-base"
        >
          View engineering & performance data →
        </Link>
      </div>
    </section>
  );
}