import journeyImg from "@/assets/journey-road.jpg";

const timeline = [
  { day: "Day 1", title: "KL → Sadao Border", desc: "Long ride north. R&R stops. Convoy crossing." },
  { day: "Day 2", title: "Betong Hotspots", desc: "Sea of mist, hidden waterfalls, local food." },
  { day: "Day 3", title: "Return Journey", desc: "Back to KL. We don't rush the last day." },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ background: "oklch(0.18 0.04 155)" }}>
      {/* Background image */}
      <img
        src={journeyImg}
        alt="Aerial view of winding mountain road through misty jungle"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 155) 0%, oklch(0.18 0.04 155 / 0.7) 50%, oklch(0.18 0.04 155) 100%)" }}
      />

      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Ghost section number */}
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.04] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        05
      </span>

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">The Betong Run</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Three days. <span className="italic">One road north.</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Our signature crossing into Southern Thailand — the route we know inside out.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {timeline.map((item, i) => (
            <div key={item.title} className="grid grid-cols-12 gap-4 border-t border-border/60 pt-8 md:gap-8 md:pt-10">
              <div className="col-span-12 md:col-span-3">
                <span className="font-display text-5xl text-accent/80 md:text-6xl">0{i + 1}</span>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">{item.day}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-md text-sm italic text-muted-foreground">
          Routes adapt to weather, road conditions, and group preference.
        </p>
      </div>

      {/* Bottom fade into darker section */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
