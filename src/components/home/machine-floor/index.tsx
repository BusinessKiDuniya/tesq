export default function MachineFloor() {
  const machines = [
    {
      src: "/images/1.png",
      alt: "Capacitor winding machine on the TESQ production floor",
      caption: "Automatic Capacitor Testing Machine",
    },
    {
      src: "/images/2.png",
      alt: "Capacitor filling and sealing machine",
      caption: "Automatic Metal Spray Machine",
    },
    {
      src: "/images/machine.png",
      alt: "Electrical testing rig for finished capacitors",
      caption: "Automatic Metal Spray Machine",
    },
      {
      src: "/images/Welding Machine.png",
      alt: "Welding Machine",
      caption: "Automatic Capacitor Welding Machine",
    },
    {
      src: "/images/Winding Machine.png",
      alt: "Winding Machine",
      caption: "Automatic Capacitor Winding Machine",
    },
  ];

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="eyebrow">The machine floor</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Purpose-built machinery for every stage of production
        </h2>
        <span className="rule-accent mt-4" />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {machines.map((machine) => (
            <figure
              key={machine.src}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={machine.src}
                  alt={machine.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-sm font-bold">
                {machine.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
