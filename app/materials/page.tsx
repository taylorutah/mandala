export const metadata = { title: "Materials & Composition | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Materials & Composition</h1>
      <p className="text-gray-600 mb-6">Choose materials to match fluid, corrosion potential, and duty cycle.</p>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Component</th>
              <th className="p-3 text-left">Options</th>
              <th className="p-3 text-left">Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Housing</td>
              <td className="p-3">Stainless / Ductile Iron</td>
              <td className="p-3">Corrosion resistance vs heavy duty</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Gears</td>
              <td className="p-3">Nitrile / Viton</td>
              <td className="p-3">Compatibility with media & temperature</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Seals</td>
              <td className="p-3">Mechanical / Lip (various materials)</td>
              <td className="p-3">Containment at duty pressure</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}