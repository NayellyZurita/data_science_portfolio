export default function Welcome() {
  return (
    <section className="relative h-screen">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/video/science.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Looping background video of data visualizations and code"
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2">
          {/* Left copy */}
          <div className="max-w-xl">
            <h1 className="text-white/85 text-5xl font-extrabold leading-tight sm:text-5xl">
              Data to Decisions — Fast, Secure, Real-Time.
            </h1>
            <p className="mt-4 text-lg text-white/85">
              I build modern analytics and engineering systems: streaming pipelines, cloud data
              platforms, and dashboards that ship value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
