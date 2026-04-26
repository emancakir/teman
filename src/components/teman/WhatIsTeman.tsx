export function WhatIsTeman() {
  return (
    <section className="relative bg-background py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="mb-10 text-[11px] uppercase tracking-[0.5em] text-accent">
          What is Teman
        </p>
        <p className="font-display text-3xl leading-[1.25] text-balance text-foreground sm:text-4xl md:text-5xl">
          Teman is not a tour agency. It's a riding crew —{" "}
          <span className="italic text-foreground/70">
            a small circle of motorcyclists who cross borders together, share
            roads, and ride at the pace of the group.
          </span>
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
    </section>
  );
}
