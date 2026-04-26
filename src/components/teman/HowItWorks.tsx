import { Map, FileSignature, Video, Wrench, Bike } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Choose Your Journey",
    desc: "Pick a date that fits your calendar.",
  },
  {
    icon: FileSignature,
    title: "Secure Slot",
    desc: "Agreement & deposit confirms your seat.",
  },
  {
    icon: Video,
    title: "Virtual Safety Briefing",
    desc: "One week before — gear, route, border prep.",
  },
  {
    icon: Wrench,
    title: "Bike Checking",
    desc: "One day before. Inspection at the meetup point.",
    note: "Teman reserves the right to cancel participation if the motorcycle is not in safe riding condition.",
  },
  {
    icon: Bike,
    title: "Ride Day",
    desc: "KL → Thailand. Led by TemanLead, supported by Teman Co-Lead.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-brand-deep py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            The Flow
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            From signup to <span className="italic">throttle.</span>
          </h2>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block">
          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <ol className="relative grid grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-brand-deep text-accent">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="mt-5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      Step 0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    {s.note && (
                      <p className="mt-4 border-l-2 border-accent/50 pl-3 text-xs italic leading-relaxed text-muted-foreground/90">
                        {s.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <ol className="relative md:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative pb-12 pl-16 last:pb-0">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-brand-deep text-accent">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Step 0{i + 1}
              </span>
              <h3 className="mt-1 font-display text-2xl text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              {s.note && (
                <p className="mt-3 border-l-2 border-accent/50 pl-3 text-xs italic leading-relaxed text-muted-foreground/90">
                  {s.note}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
