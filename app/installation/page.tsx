export const metadata = { title: "Installation & Operation | NAPCO" };

export default function Page() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-10 prose">
      <h1>Installation & Operation</h1>
      <ol>
        <li>Confirm rotation (CW/CCW) before startup.</li>
        <li>Ensure suction integrity; avoid air ingress for reliable priming.</li>
        <li>Size the drive motor for expected pressure and flow.</li>
        <li>Verify seal orientation and torque fasteners per spec.</li>
      </ol>
      <p><a href="/maintenance">See Maintenance & Service →</a></p>
    </section>
  );
}