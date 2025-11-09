import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PA200S – 2″ Stainless Rotary Gear Pump | NAPCO",
  description:
    "The NAPCO PA200S is a 2″ stainless steel rotary gear pump for chemical, food-grade, and industrial applications requiring corrosion resistance and serviceability.",
  openGraph: {
    title: "PA200S – 2″ Stainless Rotary Gear Pump | NAPCO",
    description:
      "2″ stainless rotary gear pump with nitrile or Viton gears. Precision-engineered, self-priming, and fully serviceable. Made in the USA.",
    url: "https://napcopumps.com/products/pa200s",
    images: [
      {
        url: "https://napcopumps.com/images/pump-2-ductile.jpg",
        width: 800,
        height: 600,
        alt: "PA200S 2-inch Stainless Rotary Gear Pump",
      },
    ],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PA200S – 2″ Stainless Rotary Gear Pump",
    image: "https://napcopumps.com/images/pump-2-ductile.jpg",
    description:
      "2″ stainless steel rotary gear pump with nitrile or Viton gears. Precision-machined, bi-directional, and fully serviceable.",
    brand: { "@type": "Brand", name: "NAPCO – North American Pump Company" },
    manufacturer: {
      "@type": "Organization",
      name: "NAPCO – North American Pump Company, L.L.C.",
      url: "https://napcopumps.com",
    },
    sku: "PA200S",
    mpn: "PA200S",
    material: "Stainless Steel",
    weight: { "@type": "QuantitativeValue", value: "114", unitText: "lb" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Port Size", value: "2″ NPT" },
      { "@type": "PropertyValue", name: "Gear Material", value: "Nitrile or Viton" },
      { "@type": "PropertyValue", name: "Dimensions", value: "13″ × 19″ × 16″" },
    ],
    offers: {
      "@type": "Offer",
      url: "https://napcopumps.com/products/pa200s",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Link href="/products" className="text-red-600 dark:text-red-400 hover:underline text-sm mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <Image src="/images/pump-2-ductile.jpg" alt="PA200S 2-inch Stainless Rotary Gear Pump" width={600} height={400}
          className="rounded-lg object-cover shadow-md max-w-full h-auto" />

        <div>
          <h1 className="text-3xl font-bold mb-2">PA200S – 2″ Stainless Rotary Gear Pump</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The PA200S features stainless housings and nitrile or Viton gears for chemical, food-grade, and industrial service. Fully rebuildable and precision-machined for reliability.
          </p>

          <table className="w-full text-sm text-left mb-6 border-collapse">
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr><td className="py-2 font-medium pr-4">Port Size</td><td>2″ NPT</td></tr>
              <tr><td className="py-2 font-medium pr-4">Material</td><td>Stainless Steel</td></tr>
              <tr><td className="py-2 font-medium pr-4">Gears</td><td>Nitrile or Viton</td></tr>
              <tr><td className="py-2 font-medium pr-4">Weight</td><td>114 lbs (approx)</td></tr>
              <tr><td className="py-2 font-medium pr-4">Dimensions</td><td>13″ × 19″ × 16″</td></tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Compatible Repair Kit:</p>
          <p className="font-medium text-gray-900 dark:text-white mb-6">PK200S – 2″ Stainless Repair Kit</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">Request Quote</Link>
            <Link href="/documents/nap200s-dimensions.pdf" className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition">Download Dimensions (PDF)</Link>
          </div>
        </div>
      </div>
    </section>
  );
}