import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ride.jpg";
import { ArrowRight } from "lucide-react";

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Group of motorcyclists riding through misty tropical mountain road at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Layered green overlays — calm, not heavy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.18 0.04 155 / 0.55) 0%, oklch(0.18 0.04 155 / 0.7) 60%, var(--background) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.03 155 / 0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-32 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-8 text-[11px] font-normal uppercase tracking-[0.5em] text-bone/70">
            Kuala Lumpur — Betong
          </p>
          <h1 className="font-display text-[3.25rem] leading-[1] text-bone sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Ride Together.
            <br />
            <span className="italic text-bone/90">Explore Further.</span>
          </h1>
          <p className="mt-10 max-w-md text-balance text-base text-bone/70 md:text-lg">
            Small crews. Guided rides from KL to Betong.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <Button
              variant="brand"
              size="xl"
              onClick={() => scrollTo("#rides")}
            >
              View Upcoming Rides
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <button
              onClick={() => scrollTo("#crew")}
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm uppercase tracking-[0.25em] text-bone/80 transition-colors hover:text-bone"
            >
              Meet the Crew
              <span className="h-px w-8 bg-bone/40 transition-all group-hover:w-12 group-hover:bg-bone" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
