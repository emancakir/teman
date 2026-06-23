import journeyImg from "@/assets/journey-road.jpg";
import sadaoImg from "@/assets/gallery-sadao.jpg";
import shootingRangeImg from "@/assets/gallery-shooting-range.jpg";
import hatyaiImg from "@/assets/gallery-hatyai.jpg";
import sunsetImg from "@/assets/gallery-sunset.jpg";

const timeline = [
  {
    day: "Day 1",
    title: "KL to Betong Border",
    desc: "Long ride north. R&R stops along Route 4. Convoy crossing into Thailand via Sadao — the checkpoint every Malaysian rider knows.",
    img: sadaoImg,
    imgAlt: "The famous Sadao sticker store at the Thai border",
    imgCaption: "Sadao checkpoint — where every rider leaves a sticker",
    extra: null,
  },
  {
    day: "Day 2",
    title: "Betong Hotspot and to Pattani",
    desc: "Sea of mist at dawn. Hidden waterfalls. Local food. And the Betong shooting range — a fully legal civilian range that most riders don't know about until they're standing in it.",
    img: shootingRangeImg,
    imgAlt: "Betong shooting range target — a hidden gem for riders",
    imgCaption: "Betong Shooting Range — yes, you can shoot here",
    extra: null,
  },
  {
    day: "Day 3",
    title: "Discover Pattani",
    desc: "Ride into Pattani — a coastal town with deep history, colourful fishing villages, and food that most riders never get to try. A slower day built for exploring.",
    img: hatyaiImg,
    imgAlt: "Southern Thailand street scene",
    imgCaption: "Southern Thailand — off the usual route",
    extra: null,
  },
  {
    day: "Day 4",
    title: "Return Journey",
    desc: "Back to KL. We don't rush the last day. The best views are usually on the way home.",
    // TODO: replace with new photo
    img: sunsetImg,
    imgAlt: "Golden sunset over the Andaman Sea",
    imgCaption: "Andaman coast — end of the road",
    extra: null,
  },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ background: "oklch(0.18 0.04 155)" }}>
      <img
        src={journeyImg}
        alt="Aerial view of winding mountain road through misty jungle"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 155) 0%, oklch(0.18 0.04 155 / 0.7) 50%, oklch(0.18 0.04 155) 100%)" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <span className="absolute right-4 top-8 font-display leading-none text-foreground/[0.04] select-none pointer-events-none" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
        05
      </span>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-accent/60 shrink-0" />
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">Betong JMS V3 Ride</p>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl">
            Three days. <span className="italic">One road north.</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Our signature crossing into Southern Thailand — the route we know inside out.
          </p>
        </div>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.title} className="grid grid-cols-1 gap-8 border-t border-border/60 pt-10 pb-12 md:grid-cols-2 md:gap-16 md:items-center">

              {/* Text — alternate sides on desktop */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-5xl text-accent/80 md:text-6xl">0{i + 1}</span>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{item.day}</p>
                </div>
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                {item.extra && (
                  <p className="mt-3 border-l-2 border-accent/40 pl-3 text-xs italic text-muted-foreground/70">{item.extra}</p>
                )}
              </div>

              {/* Photo — alternate sides */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative overflow-hidden rounded-sm aspect-[16/10]">
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "oklch(0.18 0.04 155 / 0.1)" }} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{item.imgCaption}</p>
              </div>

            </div>
          ))}
        </div>

        <p className="mt-4 max-w-md text-sm italic text-muted-foreground border-t border-border/40 pt-8">
          Routes adapt to weather, road conditions, and group preference.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.12 0.022 155))" }} />
    </section>
  );
}
