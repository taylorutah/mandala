export const metadata = { title: "Industries & Applications | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Industries & Applications</h1>
      <p className="text-gray-600 mb-6">
        Rotary gear pumps for abrasive, viscous, shear-sensitive, or corrosive media.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="/slurry" className="rounded-xl border p-6 bg-white/50 hover:shadow">
          <h2 className="font-medium mb-2">Slurry & Energetic Slurries</h2>
          <p className="text-sm text-gray-700">Wear management, containment, and reliability.</p>
        </a>
        <a href="/engineering" className="rounded-xl border p-6 bg-white/50 hover:shadow">
          <h2 className="font-medium mb-2">Engineering Data</h2>
          <p className="text-sm text-gray-700">Performance, materials, downloads.</p>
        </a>
      </div>
    </section>
  );
}