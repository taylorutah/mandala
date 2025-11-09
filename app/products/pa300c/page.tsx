import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PA300C – 3″ Ductile Iron Rotary Gear Pump | NAPCO",
  description:
    "The NAPCO PA300C is a 3″ ductile iron rotary gear pump designed for heavy-duty transfer and emulsion service. Built for durability and full serviceability.",
  openGraph: {
    title: "PA300C – 3″ Ductile Iron Rotary Gear Pump | NAPCO",
    description:
      "3″ ductile iron rotary gear pump for mining, emulsion, and industrial transfer. Robust construction and field-serviceable design.",
    url: "https://napcopumps.com/products/pa300c",
    images: [
      {
        url: "https://napcopumps.com/images/pump-3-stainless.jpg",
        width: 800,
        height: 600,
        alt: "PA300C 3-inch Ductile Iron Rotary Gear Pump",
      },
    ],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PA300C – 3″ Ductile Iron Rotary Gear Pump",
    image: "https://napcopumps.com/images/pump-3-stainless.jpg",
    description:
      "3″ ductile iron rotary gear pump built for heavy-duty industrial transfer, emulsion, and mining service. Nitrile or Viton gears, reversible rotation, and fully serviceable.",
    brand: {
      "@type": "Brand",
      name: "NAPCO – North American Pump Company",
      logo: "https://napcopumps.com/images/napco-logo.png",
    },
    manufacturer: {
      "@type": "Organization",
      name: "NAPCO – North American Pump Company, L.L.C.",
      url: "https://napcopumps.com",
    },
    sku: "PA300C",
    mpn: "PA300C",
    material: "Ductile Iron",
    weight: {
      "@type": "QuantitativeValue",
      value: "173",
      unitText: "lb",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Port Size", value: "3″ NPT" },
      { "@type": "PropertyValue", name: "Gear Material", value: "Nitrile or Viton" },
      { "@type": "PropertyValue", name: "Dimensions", value: "13″ × 19″ × 16″" },
    ],
    offers: {
      "@type": "Offer",
      url: "https://napcopumps.com/products/pa300c",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Back Link */}
      <Link
        href="/products"
        className="text-red-600 dark:text-red-400 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      {/* Layout */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <Image
          src="/images/pump-3-stainless.jpg"
          alt="PA300C 3-inch Ductile Iron Rotary Gear Pump"
          width={600}
          height={400}
          className="rounded-lg object-cover shadow-md max-w-full h-auto"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            PA300C – 3″ Ductile Iron Rotary Gear Pump
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The PA300C delivers high torque and long life in demanding field
            conditions. Designed for reliability, serviceability, and continuous
            industrial use.
          </p>

          <table className="w-full text-sm text-left mb-6 border-collapse">
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium pr-4">Port Size</td>
                <td>3″ NPT</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium pr-4">Material</td>
                <td>Ductile Iron</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium pr-4">Gears</td>
                <td>Nitrile or Viton</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium pr-4">Weight</td>
                <td>173 lbs (approx)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium pr-4">Dimensions</td>
                <td>13″ × 19″ × 16″</td>
              </tr>
            </tbody>
          </table>

          {/* Kit Info */}
          <div className="space-y-1 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Compatible Repair Kit:
            </p>
            <p className="font-medium text-gray-900 dark:text-white">
              PK300C – 3″ Ductile Repair Kit
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              Request Quote
            </Link>
            <Link
              href="/documents/nap300c-dimensions.pdf"
              className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              Download Dimensions (PDF)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}