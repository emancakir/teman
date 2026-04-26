const items = [
  "Lead rider guidance",
  "Safety coordination & route planning",
  "Border crossing support",
  "WhatsApp support during the ride",
];

export function Included() {
  return (
    <section className="bg-brand-deep py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-5">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            What's Included
          </p>
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
              <span className="text-xs uppercase tracking-[0.25em] text-accent">
                Included
              </span>
            </li>
          ))}
          <p className="mt-8 text-sm italic text-muted-foreground">
            Accommodation & meals are arranged by each rider — flexibility is
            the point.
          </p>
        </ul>
      </div>
    </section>
  );
}
