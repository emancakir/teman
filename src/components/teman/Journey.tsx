import journeyImg from "@/assets/journey-road.jpg";

const timeline = [
  { day: "Day 1", title: "KL → Sadao Border", desc: "Long ride north. R&R stops. Convoy crossing." },
  { day: "Day 2", title: "Betong Hotspots", desc: "Sea of mist, hidden waterfalls, local food." },
  { day: "Day 3", title: "Return Journey", desc: "Back to KL. We don't rush the last day." },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-40">
      <img
        src={journeyImg}
        alt="Aerial view of winding mountain road through misty jungle"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, oklch(0.18 0.04 155 / 0.85) 50%, var(--background) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            The Betong Run
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Three days. <span className="italic">One road north.</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className="grid grid-cols-12 gap-4 border-t border-border/60 pt-8 md:gap-8 md:pt-10"
            >
              <div className="col-span-12 md:col-span-3">
                <span className="font-display text-5xl text-accent/80 md:text-6xl">
                  0{i + 1}
                </span>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  {item.day}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-md text-sm italic text-muted-foreground">
          Routes adapt to weather, road conditions, and group preference.
        </p>
      </div>
    </section>
  );
}
