"use client";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute top-1/2 left-1/2
            h-[115vw] w-[115vh]
            -translate-x-1/2 -translate-y-1/2
            -rotate-90 object-cover
            scale-[1.65]
            md:scale-[1.25]
          "
        >
          <source src="/amarism-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-4">
          AMARISM
        </h1>

        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-3xl">
          Building Young Minds Through Smart Interaction
        </p>
      </div>
    </section>
  );
}