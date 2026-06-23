import { Mail, Copy } from "lucide-react";
import { toast } from "sonner";
import krabiImg from "@/assets/gallery-krabi.jpg";

const EMAIL = "temaninfo@pphgroup.com";

export function Footer() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy. Please copy manually.");
    }
  };

  return (
    <footer id="contact" className="scroll-mt-20 relative overflow-hidden" style={{ background: "oklch(0.18 0.04 155)" }}>
      {/* Krabi night boat background */}
      <img
        src={krabiImg}
        alt="Traditional boat at night in Krabi"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.18 0.04 155 / 0.9) 0%, oklch(0.18 0.04 155 / 0.97) 100%)" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div id="about" className="relative mx-auto max-w-5xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl">
              Your road. <span className="italic">Your people.</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Teman Ride is built around one simple idea: Riding is better with
              good company. We're not tour guides carrying flags and rushing
              schedules. We're fellow riders who enjoy discovering places,
              meeting people, and making memories together. We plan the route.
              You enjoy the ride. Ride together. Arrive together. Remember it
              forever.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">Contact</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-base text-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className="rounded-sm p-1 text-muted-foreground transition-colors hover:text-accent"
                aria-label="Copy email"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Beta · Limited Slots
            </p>
          </div>
        </div>
 
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <span className="font-display text-xl tracking-[0.3em] text-foreground">TEMAN</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Teman · Ride Together. Explore Further.
          </p>
        </div>
      </div>
    </footer>
  );
}
