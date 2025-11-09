export const metadata = { title: "Maintenance & Service | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-10 prose">
      <h1>Maintenance & Service</h1>
      <ul>
        <li>Inspect seals, O-rings, and gaskets at planned intervals.</li>
        <li>Check bearing play and alignment; replace when out of spec.</li>
        <li>Monitor priming performance when fluid or viscosity changes.</li>
        <li>Use factory kits to restore original performance.</li>
      </ul>
      <p><a href="/kit">Order repair kits →</a></p>
    </section>
  );
}