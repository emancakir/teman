import aiman from "@/assets/rider-aiman.jpg";
import amir from "@/assets/rider-amir.jpg";

const crew = [
  { name: "Aiman", role: "TemanLead", img: aiman, line: "12+ years · countless Betong crossings" },
  { name: "Amir", role: "Teman Co-Lead", img: amir, line: "8+ years · technical sweep & roadside fixes" },
];

export function Crew() {
  return (
    <section id="crew" className="scroll-mt-20 relative overflow-hidden py-28 md:py-40" style={{ background: "oklch(0.12 0.022 155)" }}>
      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      {/* Ghost section number */}
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.03] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        04
      </span>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">The Crew</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Your crew. <span className="italic">Your trust.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
          {crew.map((p) => (
            <article key={p.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-card">
                <img
                  src={p.img}
                  alt={`${p.name}, ${p.role}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent">{p.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom fade back to background */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.18 0.04 155))" }} />
    </section>
  );
}
