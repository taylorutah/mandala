export const metadata = { title: "Engineering & Performance Data | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Engineering & Performance Data</h1>
      <p className="text-gray-600 mb-6">
        Representative values for water (SG 1.0) at ambient conditions. For other fluids and viscosities,
        contact NAPCO for a review.
      </p>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Model</th>
              <th className="p-3 text-left">Port</th>
              <th className="p-3 text-left">RPM</th>
              <th className="p-3 text-left">Pressure (psi)</th>
              <th className="p-3 text-left">Flow (GPM)</th>
              <th className="p-3 text-left">HP (approx)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">PA200</td>
              <td className="p-3">2″</td>
              <td className="p-3">1800</td>
              <td className="p-3">150</td>
              <td className="p-3">120</td>
              <td className="p-3">7.5</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">PA300</td>
              <td className="p-3">3″</td>
              <td className="p-3">1800</td>
              <td className="p-3">150</td>
              <td className="p-3">180</td>
              <td className="p-3">10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="/downloads/napco-pa200-datasheet.pdf" className="font-medium text-red-600 hover:underline">
          Download PA200 Datasheet (PDF)
        </a>
        <a href="/downloads/napco-pa300-datasheet.pdf" className="font-medium text-red-600 hover:underline">
          Download PA300 Datasheet (PDF)
        </a>
      </div>
    </section>
  );
}