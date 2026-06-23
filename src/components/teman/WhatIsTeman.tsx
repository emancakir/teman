import ferryImg from "@/assets/gallery-ferry.jpg";

export function WhatIsTeman() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44" style={{ background: "oklch(0.18 0.04 155)" }}>
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.035] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        01
      </span>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 md:items-center">

          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-8 bg-accent/60 shrink-0" />
              <p className="text-[11px] uppercase tracking-[0.5em] text-accent">What is Teman</p>
            </div>
            <p className="font-display text-3xl leading-[1.25] text-balance text-foreground sm:text-4xl md:text-5xl">
              Teman means friend.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">And that's exactly what we hope to be.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Whether we're crossing into Thailand or exploring roads closer to home in Malaysia, our goal is simple: create rides where everyone feels welcome, comfortable, and part of the group.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">No flags. No shouting through megaphones. No rigid tour schedules.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Just riders sharing roads, meals, conversations, and memories together.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Come for the ride. Stay for the people.</p>
            <div className="mt-12 flex flex-col gap-4 text-sm uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:gap-10">
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60" />Ride together
              </span>
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60" />Flexible routes
              </span>
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60" />Safety-first
              </span>
            </div>
          </div>

          {/* Ferry photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <img
                src={ferryImg}
                alt="Riders on the ferry crossing into Southern Thailand"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* Subtle green overlay to match theme */}
              <div className="absolute inset-0" style={{ background: "oklch(0.18 0.04 155 / 0.15)" }} />
            </div>
            {/* Caption */}
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Ferry crossing — Southern Thailand
            </p>
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
