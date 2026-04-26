import hatyaiImg from "@/assets/gallery-hatyai.jpg";
import sevenElevenDayImg from "@/assets/gallery-711-day.jpg";
import krabiVideo from "@/assets/krabi-coast.mp4";
import insideSevenEVideo from "@/assets/inside-7e.mp4";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 relative overflow-hidden py-28 md:py-40" style={{ background: "oklch(0.18 0.04 155)" }}>
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.035] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        07
      </span>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">From the Road</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Real rides. <span className="italic">Real places.</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            These aren't stock photos. Every frame is from an actual Teman run.
          </p>
        </div>

        {/* ── Video features – two full-width-ish cards ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">

          {/* Krabi coast POV */}
          <div className="group relative overflow-hidden rounded-sm aspect-[9/16] md:aspect-[4/5]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={krabiVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="inline-block mb-2 rounded-full border border-accent/50 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-accent">
                Future Route
              </span>
              <p className="text-lg font-display text-white">Krabi Coastal Roads</p>
              <p className="mt-1 text-xs text-white/60">POV — Andaman coast highway</p>
            </div>
          </div>

          {/* Inside 7-Eleven */}
          <div className="group relative overflow-hidden rounded-sm aspect-[9/16] md:aspect-[4/5]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={insideSevenEVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="inline-block mb-2 rounded-full border border-accent/50 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-accent">
                Rider Life
              </span>
              <p className="text-lg font-display text-white">Thai 7-Eleven</p>
              <p className="mt-1 text-xs text-white/60">The R&R stop every Malaysian rider lives for</p>
            </div>
          </div>

        </div>

        {/* ── Photo pair ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              src: sevenElevenDayImg,
              alt: "Bikes parked at the iconic Phatthalung 7-Eleven",
              caption: "The Phatthalung pit stop",
              location: "Phatthalung — every rider knows this one",
            },
            {
              src: hatyaiImg,
              alt: "Hatyai famous seafood steamboat restaurant",
              caption: "The Hat Yai seafood spot",
              location: "Hat Yai — the bowl everyone talks about",
            },
          ].map((photo) => (
            <div key={photo.alt} className="group relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-sm font-medium text-white">{photo.caption}</p>
                <p className="mt-1 text-xs text-white/60">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
