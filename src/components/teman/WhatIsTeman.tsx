export function WhatIsTeman() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44" style={{ background: "oklch(0.18 0.04 155)" }}>
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Ghost section number */}
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.035] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        01
      </span>

      <div className="relative mx-auto max-w-3xl px-6 md:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-8 bg-accent/60 shrink-0" />
          <p className="text-[11px] uppercase tracking-[0.5em] text-accent">What is Teman</p>
        </div>

        <p className="font-display text-3xl leading-[1.25] text-balance text-foreground sm:text-4xl md:text-5xl">
          Teman is not a tour agency. It's a riding crew —{" "}
          <span className="italic text-foreground/70">
            a small circle of motorcyclists who cross into Southern Thailand
            together, discover roads most riders never find, and move at the
            pace of the group.
          </span>
        </p>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          We started with Betong — the crossing we know best. But Southern
          Thailand is wide, and we're built to go wherever the road leads.
        </p>

        <div className="mt-16 flex flex-col gap-4 text-sm uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:gap-10">
          <span className="flex items-center gap-3">
            <span className="h-px w-6 bg-accent/60" />
            Ride together
          </span>
          <span className="flex items-center gap-3">
            <span className="h-px w-6 bg-accent/60" />
            Flexible routes
          </span>
          <span className="flex items-center gap-3">
            <span className="h-px w-6 bg-accent/60" />
            Safety-first
          </span>
        </div>
      </div>

      {/* Bottom fade into darker section */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
