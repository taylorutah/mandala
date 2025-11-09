export const metadata = { title: "About NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-10 prose">
      <h1>About NAPCO</h1>
      <p>
        NAPCO manufactures precision rotary gear pumps and factory-matched repair kits for demanding
        transfer applications. We focus on reliability, serviceability, and responsive support.
      </p>
      <h2>What We Focus On</h2>
      <ul>
        <li>Durable, serviceable pump designs</li>
        <li>Material options for abrasive/corrosive media</li>
        <li>Fast documentation and complete repair kits</li>
      </ul>
    </section>
  );
}