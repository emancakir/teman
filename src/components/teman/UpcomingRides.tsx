import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BookingModal, type Ride } from "./BookingModal";

const rides: Ride[] = [
  {
    id: "betong-nov-2026",
    name: "Betong Escape",
    dates: "Nov 24–27, 2026",
    duration: "4D / 3N",
    slotsLeft: 4,
    totalSlots: 10,
    tagline: "Misty mountains, hidden waterfalls.",
  },
  {
    id: "betong-jan-2027",
    name: "Betong Escape",
    dates: "Jan 19–22, 2027",
    duration: "4D / 3N",
    slotsLeft: 8,
    totalSlots: 10,
    tagline: "Cool season convoy. Empty roads.",
  },
  {
    id: "betong-mar-2027",
    name: "Betong Escape",
    dates: "Mar 16–19, 2027",
    duration: "4D / 3N",
    slotsLeft: 10,
    totalSlots: 10,
    tagline: "Pre-monsoon push. Fresh asphalt.",
  },
];

export function UpcomingRides() {
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);

  return (
    <section
      id="rides"
      className="scroll-mt-20 bg-background py-28 md:py-40"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            Upcoming Rides
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Limited slots. <span className="italic">Small crews only.</span>
          </h2>
        </div>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {rides.map((ride) => {
            const sold = ride.slotsLeft === 0;
            return (
              <li
                key={ride.id}
                className="group grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-card/30 md:py-10"
              >
                <div className="col-span-12 md:col-span-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {ride.duration} · KL → Betong
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                    {ride.dates}
                  </h3>
                </div>

                <div className="col-span-7 md:col-span-5">
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    {ride.tagline}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent/90">
                    {sold
                      ? "Fully booked"
                      : `${ride.slotsLeft} of ${ride.totalSlots} helmets left`}
                  </p>
                </div>

                <div className="col-span-5 flex justify-end md:col-span-3">
                  <Button
                    variant={sold ? "outline" : "brand"}
                    size="lg"
                    disabled={sold}
                    onClick={() => setSelectedRide(ride)}
                    className="group/btn"
                  >
                    {sold ? "Waitlist" : "Request"}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 max-w-md text-sm italic text-muted-foreground">
          Max 10 helmets per ride. We keep the crew small so the experience
          stays personal.
        </p>
      </div>

      <BookingModal
        ride={selectedRide}
        onClose={() => setSelectedRide(null)}
      />
    </section>
  );
}
