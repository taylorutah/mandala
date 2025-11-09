import Link from "next/link";

export const metadata = {
  title: "PA200C – 2″ Ductile Iron Rotary Gear Pump | NAPCO",
  description:
    "The NAPCO PA200C is a 2″ ductile iron rotary gear pump for heavy-duty industrial and emulsion service. Reliable, bi-directional, and fully serviceable.",
  openGraph: {
    title: "PA200C – 2″ Ductile Iron Rotary Gear Pump | NAPCO",
    description:
      "2″ ductile iron rotary gear pump built for industrial and emulsion applications. Self-priming and fully serviceable.",
    url: "https://napcopumps.com/products/pa200c",
    images: [{ url: "https://napcopumps.com/images/pump-2-ductile.jpg", width: 800, height: 600 }],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PA200C – 2″ Ductile Iron Rotary Gear Pump",
    description: "2″ ductile iron rotary gear pump for industrial and emulsion service. Nitrile or Viton gears, self-priming, and fully serviceable.",
    brand: { "@type": "Brand", name: "NAPCO – North American Pump Company" },
    sku: "PA200C",
    mpn: "PA200C",
    material: "Ductile Iron",
    weight: { "@type": "QuantitativeValue", value: "114", unitText: "lb" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Port Size", value: "2″ NPT" },
      { "@type": "PropertyValue", name: "Gear Material", value: "Nitrile or Viton" },
      { "@type": "PropertyValue", name: "Dimensions", value: "13″ × 19″ × 16″" },
    ],
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <Link href="/products" className="text-red-600 hover:underline text-sm mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: Text + Specs */}
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl font-bold mb-2">PA200C – 2″ Ductile Iron Rotary Gear Pump</h1>
          <p className="text-gray-600 mb-6">
            Rugged ductile housings ideal for general industrial and mining service. Reliable, bi-directional, and serviceable.
          </p>

          <table className="w-full text-sm text-left mb-6 border-collapse">
            <tbody className="text-gray-700">
              <tr><td className="py-2 font-medium pr-4">Port Size</td><td>2″ NPT</td></tr>
              <tr><td className="py-2 font-medium pr-4">Material</td><td>Ductile Iron</td></tr>
              <tr><td className="py-2 font-medium pr-4">Gears</td><td>Nitrile or Viton</td></tr>
              <tr><td className="py-2 font-medium pr-4">Weight</td><td>114 lbs (approx)</td></tr>
              <tr><td className="py-2 font-medium pr-4">Dimensions</td><td>13″ × 19″ × 16″</td></tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 mb-2">Compatible Repair Kit:</p>
          <p className="font-medium text-gray-900 mb-6">PK200C – 2″ Ductile Repair Kit</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
              Request Quote
            </Link>
            <Link href="/documents/nap200c-dimensions.pdf" className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition">
              Download Dimensions (PDF)
            </Link>
          </div>
        </div>

        {/* Right: Clean Placeholder */}
        <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center h-80">
          <div className="text-center p-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl"></div>
            <p className="text-sm text-gray-500 font-medium">PA200C</p>
            <p className="text-xs text-gray-400 mt-1">2″ Ductile Iron</p>
          </div>
        </div>
      </div>
    </section>
  );
}