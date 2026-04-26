import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/teman/Navigation";
import { Hero } from "@/components/teman/Hero";
import { WhatIsTeman } from "@/components/teman/WhatIsTeman";
import { HowItWorks } from "@/components/teman/HowItWorks";
import { UpcomingRides } from "@/components/teman/UpcomingRides";
import { Crew } from "@/components/teman/Crew";
import { Journey } from "@/components/teman/Journey";
import { Gallery } from "@/components/teman/Gallery";
import { Included } from "@/components/teman/Included";
import { Footer } from "@/components/teman/Footer";
import { WhatsAppButton } from "@/components/teman/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Teman — Ride Together. Explore Further." },
      {
        name: "description",
        content:
          "Premium guided motorcycle rides from Kuala Lumpur into Southern Thailand. Betong is our signature crossing — small crews, safety-first, no tour-bus vibes. Limited slots.",
      },
      { property: "og:title", content: "Teman — Ride Together. Explore Further." },
      {
        property: "og:description",
        content:
          "Guided motorcycle rides from KL into Southern Thailand. We started with Betong — the place we know best. Brotherhood. Safety. Hidden roads.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <WhatIsTeman />
        <HowItWorks />
        <UpcomingRides />
        <Crew />
        <Journey />
        <Gallery />
        <Included />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
