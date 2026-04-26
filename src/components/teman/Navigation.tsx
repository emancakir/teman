import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Rides", href: "#rides" },
  { label: "Crew", href: "#crew" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <button
          onClick={() => scrollTo("#top")}
          className="font-display text-xl tracking-[0.3em] text-foreground md:text-2xl"
        >
          TEMAN
        </button>

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="brand" size="lg" onClick={() => scrollTo("#rides")}>
            Secure a Slot
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="rounded-sm px-2 py-3 text-left text-sm uppercase tracking-[0.25em] text-foreground hover:bg-muted/50"
              >
                {l.label}
              </button>
            ))}
            <Button
              variant="brand"
              size="lg"
              className="mt-3"
              onClick={() => scrollTo("#rides")}
            >
              Secure a Slot
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
