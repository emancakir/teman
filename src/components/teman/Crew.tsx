import aiman from "@/assets/rider-aiman.jpg";
import amir from "@/assets/rider-amir.jpg";

const crew = [
  {
    name: "Aiman",
    role: "TemanLead",
    img: aiman,
    line: "12+ years · countless Betong crossings",
  },
  {
    name: "Amir",
    role: "Teman Co-Lead",
    img: amir,
    line: "8+ years · technical sweep & roadside fixes",
  },
];

export function Crew() {
  return (
    <section id="crew" className="scroll-mt-20 bg-brand-deep py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            The Crew
          </p>
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
                <h3 className="font-display text-2xl text-foreground md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent">
                  {p.role}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
