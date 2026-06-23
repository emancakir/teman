import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export type Ride = {
  id: string;
  name: string;
  dates: string;
  duration: string;
  slotsLeft: number;
  totalSlots: number;
  tagline: string;
  disabled?: boolean;
};

interface Props {
  ride: Ride | null;
  onClose: () => void;
}

type BookingPayload = {
  ride_name: string;
  ride_dates: string;
  name: string;
  email: string;
  whatsapp: string;
  bike: string;
  experience: string;
  agreed: boolean;
};

export function BookingModal({ ride, onClose }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [experience, setExperience] = useState("");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (!ride) {
      setSubmitting(false);
      setSucceeded(false);
      setError(null);
      setExperience("");
      setAgreed(false);
    }
  }, [ride]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const payload: BookingPayload = {
      ride_name: ride?.name ?? "",
      ride_dates: ride?.dates ?? "",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      bike: (form.elements.namedItem("bike") as HTMLInputElement).value,
      experience,
      agreed,
    };

    const { error: insertError } = await supabase.from("bookings").insert(payload);

    if (insertError) {
      setError(insertError.message);
      setSubmitting(false);
    } else {
      setSucceeded(true);
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={!!ride} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/60 bg-background sm:max-w-md">

        {succeeded ? (
          // ── Success state ──
          <div className="flex flex-col items-center gap-5 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-card">
              <CheckCircle className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground">Enquiry sent.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll get back to you within 12 hours via WhatsApp or email.
                Ride safe.
              </p>
            </div>
            <Button variant="outline" size="lg" onClick={onClose} className="mt-2">
              Close
            </Button>
          </div>

        ) : (
          // ── Form state ──
          <>
            <DialogHeader className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.4em] text-accent">
                Secure your spot
              </p>
              <DialogTitle className="font-display text-3xl font-normal tracking-tight text-foreground">
                {ride ? ride.dates : ""}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                No payment required. We'll reply within 12 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-5">
              {/* Hidden fields so email shows ride context */}
              <input type="hidden" name="ride_name" value={ride ? ride.name : ""} />
              <input type="hidden" name="ride_dates" value={ride ? ride.dates : ""} />

              <Field id="name" label="Full name" name="name" required />
              <Field id="email" label="Email" name="email" type="email" required />
              <Field id="whatsapp" label="Phone No. (able to receive WhatsApp)" name="whatsapp" placeholder="+60 12 345 6789" required />
              <Field id="bike" label="Motorcycle model" name="bike" placeholder="e.g. Versys 250, Y15" required />

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Experience
                </Label>
                <Select name="experience" value={experience} onValueChange={setExperience}>
                  <SelectTrigger id="experience" className="h-11 border-border/60 bg-transparent">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Starting (0 to 1 year)">Starting (0 to 1 year)</SelectItem>
                    <SelectItem value="Beginner (1 to 3 years)">Beginner (1 to 3 years)</SelectItem>
                    <SelectItem value="Advance (3 years+)">Advance (3 years+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="agree" name="agree" value="yes" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} className="mt-0.5" />
                <Label htmlFor="agree" className="text-xs leading-relaxed text-muted-foreground">
                  I understand routes are flexible based on group consensus,
                  weather, and road conditions. I ride at my own risk and
                  respect the lead rider's decisions.
                </Label>
              </div>

              {error && (
                <p className="text-xs text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Enquiry"}
              </Button>
            </form>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="h-11 border-0 border-b border-border/60 bg-transparent px-0 rounded-none focus-visible:ring-0 focus-visible:border-accent"
      />
    </div>
  );
}
