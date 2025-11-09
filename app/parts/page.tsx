export const metadata = { title: "Parts Identification | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Parts Identification</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Assembly</th>
              <th className="p-3 text-left">Includes</th>
              <th className="p-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Gear Kit (Drive/Idler)</td>
              <td className="p-3">Gears, shafts, keys</td>
              <td className="p-3">Nitrile or Viton options</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Seal Kit</td>
              <td className="p-3">Primary seal, O-rings, gaskets</td>
              <td className="p-3">Material matched to fluid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Need help? <a href="/contact" className="text-red-600 hover:underline">Contact us</a>.
      </p>
    </section>
  );
}