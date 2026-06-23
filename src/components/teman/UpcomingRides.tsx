import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BookingModal } from "./BookingModal";
import { useRides, type RideData } from "@/hooks/useRides";

export function UpcomingRides() {
  const [selectedRide, setSelectedRide] = useState<RideData | null>(null);
  const { rides, loading, error } = useRides();

  return (
    <section id="rides" className="scroll-mt-20 relative overflow-hidden py-28 md:py-40" style={{ background: "oklch(0.18 0.04 155)" }}>
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Ghost section number */}
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.035] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        03
      </span>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">Upcoming Rides</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Limited slots. <span className="italic">Small crews only.</span>
          </h2>
        </div>

        {loading && (
          <p className="text-sm text-muted-foreground">Loading rides…</p>
        )}

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {!loading && !error && (
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {rides.map((ride) => {
              const active = ride.enabled && ride.slotsLeft > 0;
              const statusLabel = ride.slotsLeft === 0
                ? "FULLY BOOKED"
                : !ride.enabled
                ? "COMING SOON"
                : `${ride.slotsLeft} of ${ride.totalSlots} helmets left`;

              return (
                <li
                  key={ride.id}
                  className={`group grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-card/30 md:py-10${!active ? " opacity-40" : ""}`}
                >
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-accent">
                      {ride.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {ride.duration} · {ride.route}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{ride.dates}</h3>
                  </div>

                  <div className="col-span-7 md:col-span-5">
                    <p className="text-sm italic text-muted-foreground md:text-base">{ride.tagline}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent/90">
                      {statusLabel}
                    </p>
                  </div>

                  {active && (
                    <div className="col-span-5 flex justify-end md:col-span-3">
                      <Button
                        variant="brand"
                        size="lg"
                        onClick={() => setSelectedRide(ride)}
                        className="group/btn"
                      >
                        Request
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        <p className="mt-10 max-w-md text-sm italic text-muted-foreground">
          Slots are limited, first come first serve.
        </p>
      </div>

      <BookingModal ride={selectedRide} onClose={() => setSelectedRide(null)} />

      {/* Bottom fade into darker section */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
