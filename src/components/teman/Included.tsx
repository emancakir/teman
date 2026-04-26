const items = [
  "Lead rider guidance",
  "Safety coordination & route planning",
  "Border crossing support",
  "WhatsApp support during the ride",
];

export function Included() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "oklch(0.12 0.022 155)" }}>
      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      {/* Ghost section number */}
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.03] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        06
      </span>

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">What's Included</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl">
            Built-in. <span className="italic">Not bolted on.</span>
          </h2>
        </div>

        <ul className="md:col-span-7 md:pt-2">
          {items.map((label) => (
            <li
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-border/60 py-5 text-base text-foreground"
            >
              <span>{label}</span>
              <span className="h-px flex-1 translate-y-[-4px] bg-border/40" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent">Included</span>
            </li>
          ))}
          <p className="mt-8 text-sm italic text-muted-foreground">
            Accommodation & meals are arranged by each rider — flexibility is the point.
          </p>
        </ul>
      </div>

      {/* Bottom fade to footer */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.18 0.04 155))" }} />
    </section>
  );
}
