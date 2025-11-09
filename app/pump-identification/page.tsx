import Image from "next/image";

export const metadata = {
  title: "Pump Identification | NAPCO Rotary Gear Pumps",
  description:
    "Explore and identify NAPCO rotary gear pump components. View the exploded diagram and download the official parts identification chart.",
};

export default function PumpIdentificationPage() {
  return (
    <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-6">
        Pump Identification
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
        Identify your pump’s key components and part numbers. Use the exploded
        diagram and reference chart below to determine the correct repair parts
        for your 2″ or 3″ NAPCO rotary gear pump.
      </p>

      {/* EXPLODED DIAGRAM */}
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <Image
  src="/images/pump-exploded-diagram.webp"
  alt="NAPCO Rotary Gear Pump Exploded Diagram"
  width={1000}
  height={700}
  className="rounded-lg shadow-md hover:shadow-lg transition max-w-full h-auto cursor-zoom-in"
/>
        </div>
      </div>

{/* COMPONENT REFERENCE TABLE */}
<section className="mt-20 mb-24 text-center">
  <h2 className="text-3xl font-semibold mb-10 tracking-tight">
    NAPCO Pump Component Reference
  </h2>

  <div className="overflow-x-auto mx-auto max-w-6xl border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
    <table className="mx-auto w-full text-[15px] leading-[1.35] border-collapse text-left">
      <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 uppercase text-xs font-semibold tracking-wide border-b border-gray-300 dark:border-gray-700">
        <tr>
          <th className="p-3 w-[40%] border-r border-gray-200 dark:border-gray-700">Description</th>
          <th className="p-3 w-[35%] border-r border-gray-200 dark:border-gray-700">Part Number</th>
          <th className="p-3 w-[12%] text-right border-r border-gray-200 dark:border-gray-700">Ref. No.</th>
          <th className="p-3 w-[13%] text-right">Qty / Pump</th>
        </tr>
      </thead>

      <tbody className="text-gray-800 dark:text-gray-300">

        {/* 3" PUMP SECTION */}
        <tr className="bg-gray-200 dark:bg-gray-700/60 border-b border-gray-300 dark:border-gray-600">
          <td colSpan={4} className="p-3 font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-wide text-left">
            3″ Pump
          </td>
        </tr>
        {[
          ["3″ Pump", "PA300C or PA300S", "", ""],
          ["3″ Service Kit", "PK300C or PK300S", "", ""],
          ["Idler Shaft", "PM304C or PM304S", "4", "1"],
          ["Drive Shaft", "PM303C or PM303S", "3", "1"],
          ["Pump Housing 3″", "PM0301C or PM0301S", "1", "1"],
          ["Driver Gear 3″", "PM306N", "9", "1"],
          ["Idler Gear 3″", "PM306N", "9", "1"],
          ["Port Bolt", "5/8-11 x 1.5″ Hex Bolt C or S", "16", "4"],
          ["Port Gasket", "PB316", "14", "2"],
        ].map(([desc, part, ref, qty], i) => (
          <tr
            key={i}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800"
          >
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{desc}</td>
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{part}</td>
            <td className="p-3 text-right border-r border-gray-200 dark:border-gray-700">{ref}</td>
            <td className="p-3 text-right">{qty}</td>
          </tr>
        ))}

        {/* 2" PUMP SECTION */}
        <tr className="bg-gray-200 dark:bg-gray-700/60 border-b border-gray-300 dark:border-gray-600">
          <td colSpan={4} className="p-3 font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-wide text-left">
            2″ Pump
          </td>
        </tr>
        {[
          ["2″ Pump", "PA200C or PA200S", "", ""],
          ["2″ Service Kit", "PK200C or PK200S", "", ""],
          ["Idler Shaft", "PM204C or PM204S", "4", "1"],
          ["Drive Shaft", "PM203C or PM203S", "3", "1"],
          ["Pump Housing 2″", "PM0201C or PM0201S", "1", ""],
          ["Driver Gear 2″", "PM206N", "9", "1"],
          ["Idler Gear 2″", "PM206N", "9", "1"],
          ["Port Bolt", "5/8-11 x 1.5″ Hex Bolt C or S", "16", "4"],
          ["Port Gasket", "PB216", "14", "2"],
        ].map(([desc, part, ref, qty], i) => (
          <tr
            key={`2-${i}`}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800"
          >
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{desc}</td>
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{part}</td>
            <td className="p-3 text-right border-r border-gray-200 dark:border-gray-700">{ref}</td>
            <td className="p-3 text-right">{qty}</td>
          </tr>
        ))}

        {/* COMMON PARTS */}
        <tr className="bg-gray-200 dark:bg-gray-700/60 border-b border-gray-300 dark:border-gray-600">
          <td colSpan={4} className="p-3 font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-wide text-left">
            Common Parts
          </td>
        </tr>
        {[
          ["Bearing Housing / Side Cover", "PM002C or PM002S", "2", "2"],
          ["Set Screw", "NAP-1/4-2.8 × .5 SNSS", "5", "2"],
          ["Gasket .016″", "PM007G02", "7", "4"],
          ["Gasket .008″", "PM007G01", "7", "3"],
          ["Roller Bearing", "PM038", "8", "4"],
          ["Seal – Low Pressure", "PM037", "10", "4"],
          ["Seal – High Pressure", "PM036", "11", "4"],
          ["Side Cover Bolt", "3/8-16 × 1.25″ Hex Bolt C or S", "17", "24"],
          ["Grease Nipple (SS)", "H1610S", "18", "8"],
          ["Aligning Pin", "PM42", "19", "2"],
          ["O-Ring", "PB43", "25", "4"],
          ["Backing Washer", "PM226", "27", "4"],
        ].map(([desc, part, ref, qty], i) => (
          <tr
            key={`common-${i}`}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800"
          >
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{desc}</td>
            <td className="p-3 border-r border-gray-200 dark:border-gray-700">{part}</td>
            <td className="p-3 text-right border-r border-gray-200 dark:border-gray-700">{ref}</td>
            <td className="p-3 text-right">{qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* DOWNLOAD LINK */}
      <div className="text-center">
        <a
          href="/documents/napco-pump-parts-identification-chart.pdf"
          className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition inline-block"
        >
          Download Pump Parts Identification Chart (PDF)
        </a>
      </div>
    </section>
  );
}