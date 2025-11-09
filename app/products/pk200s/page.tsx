import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PK300S – 3″ Stainless Repair Kit | NAPCO",
  description:
    "The PK300S repair kit includes stainless factory-matched components for servicing 3″ NAPCO rotary gear pumps. Designed for long life and reliability.",
  openGraph: {
    title: "PK300S – 3″ Stainless Repair Kit | NAPCO",
    description:
      "Complete stainless steel repair kit for 3″ rotary gear pumps, including gears, bearings, seals, and gaskets. Corrosion-resistant design.",
    url: "https://napcopumps.com/kit/pk300s",
    images: [
      {
        url: "https://napcopumps.com/images/kit-3-stainless.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PK300S – 3″ Stainless Repair Kit",
    image: "https://napcopumps.com/images/kit-3-stainless.jpg",
    description:
      "Repair kit for NAPCO PA300S pumps. Includes stainless steel gears, seals, bearings, and gaskets. Built for corrosive or sanitary service.",
    sku: "PK300S",
    mpn: "PK300S",
    material: "Stainless Steel",
    weight: { "@type": "QuantitativeValue", value: "34", unitText: "lb" },
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Link
        href="/kit"
        className="text-red-600 dark:text-red-400 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Repair Kits
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <Image
          src="/images/kit-3-stainless.jpg"
          alt="PK300S Repair Kit"
          width={600}
          height={400}
          className="rounded-lg object-cover shadow-md max-w-full h-auto"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">
            PK300S – 3″ Stainless Repair Kit
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Stainless steel repair kit for 3″ rotary gear pumps, providing full
            rebuild capability and long service life in harsh environments.
          </p>

          <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-6">
            <li>1 Drive Gear Assembly – PA350S</li>
            <li>1 Idler Gear Assembly – PA351S</li>
            <li>4 Roller Bearings – PM038</li>
            <li>4 High Pressure Seals – PM036</li>
            <li>4 Low Pressure Seals – PM037</li>
            <li>5 Center Case Gaskets – PM007G01 / PM007G02</li>
            <li>4 O-Rings – PB43</li>
          </ul>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Compatible Pump:
          </p>
          <p className="font-medium text-gray-900 dark:text-white mb-6">
            PA300S – 3″ Stainless Rotary Gear Pump
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              Request Quote
            </Link>
            <Link
              href="/documents/pk300s.pdf"
              className="border border-gray-300 hover:border-red-600 text-gray-700 dark:text-gray-300 hover:text-red-600 px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              View Drawing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}