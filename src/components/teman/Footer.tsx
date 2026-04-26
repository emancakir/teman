import { Mail, Copy } from "lucide-react";
import { toast } from "sonner";

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
    <footer id="contact" className="scroll-mt-20 bg-background">
      <div
        id="about"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl">
              A brand under <span className="italic">PPH Group.</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Built by riders, for riders. A quiet circle for those who'd rather
              cross into Southern Thailand than sit in traffic. We started with
              Betong — the place we know best — and we're not stopping there.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">
              Contact
            </p>
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
          <span className="font-display text-xl tracking-[0.3em] text-foreground">
            TEMAN
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Teman · Ride Together. Explore Further.
          </p>
        </div>
      </div>
    </footer>
  );
}
