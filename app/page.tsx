import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[480px] overflow-hidden bg-white">
        <Image
          src="/images/mountains.jpg"
          alt="Mandala Adventures Mountain Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-3">
            Mandala Adventures
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Forge paths less traveled. Discover the world through connection,
            story, and wild terrain.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mt-16 text-center bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Journey Beyond the Map
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Mandala Adventures leads guided expeditions that connect travelers to
          extraordinary cultures and landscapes. Our journeys are rooted in
          respect, exploration, and authentic experience.
        </p>
      </section>
    </>
  );
}