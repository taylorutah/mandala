export const metadata = { title: "Repair Kits | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Repair Kits & Replacement Components</h1>
      <p className="text-gray-600 mb-8">
        Factory-matched kits reduce downtime and restore performance — built to original NAPCO specs.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-white/50">
          <h2 className="font-medium mb-1">PK200 – For 2″ Pumps</h2>
          <p className="text-sm text-gray-700">Covers PA200 family (gears, bearings, seals, gaskets).</p>
        </div>
        <div className="rounded-xl border p-6 bg-white/50">
          <h2 className="font-medium mb-1">PK300 – For 3″ Pumps</h2>
          <p className="text-sm text-gray-700">Covers PA300 family (gears, bearings, seals, gaskets).</p>
        </div>
      </div>

      <div className="mt-8">
        <a href="/parts" className="font-medium text-red-600 hover:underline">
          Identify parts & components →
        </a>
      </div>
    </section>
  );
}