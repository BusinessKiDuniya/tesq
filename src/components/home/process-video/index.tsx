export default function ProcessVideo() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-hero-end text-primary-foreground lg:min-h-[560px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/manufacturing/video-poster.jpg"
      >
        <source src="/videos/TESQ_raw-2.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text legibility over the moving footage */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-4 lg:min-h-[560px]">
        <div className="max-w-xl">
          <p className="tech-label mb-4 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" /> See the process
          </p>
          <h2 className="text-5xl font-extrabold leading-tight sm:text-5xl">
            From raw film to a tested, sealed capacitor
          </h2>
          <p className="mt-5 leading-7 text-primary-foreground/80">
            Winding, filling, sealing and the electrical test every unit goes
            through before it&apos;s packed for dispatch — filmed on our Delhi
            floor.
          </p>
        </div>
      </div>
    </section>
  );
}
