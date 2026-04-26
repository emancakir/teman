import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
};

interface Props {
  ride: Ride | null;
  onClose: () => void;
}

export function BookingModal({ ride, onClose }: Props) {
  const [state, handleSubmit, reset] = useForm("mgorbwgn");

  // Reset form state when modal closes
  useEffect(() => {
    if (!ride) reset();
  }, [ride, reset]);

  return (
    <Dialog open={!!ride} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/60 bg-background sm:max-w-md">

        {state.succeeded ? (
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
              <ValidationError field="name" errors={state.errors} className="text-xs text-destructive" />

              <Field id="email" label="Email" name="email" type="email" required />
              <ValidationError field="email" errors={state.errors} className="text-xs text-destructive" />

              <Field id="whatsapp" label="WhatsApp" name="whatsapp" placeholder="+60 12 345 6789" required />
              <ValidationError field="whatsapp" errors={state.errors} className="text-xs text-destructive" />

              <Field id="bike" label="Motorcycle model" name="bike" placeholder="e.g. Yamaha R15, 150cc" required />
              <ValidationError field="bike" errors={state.errors} className="text-xs text-destructive" />

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Experience
                </Label>
                <Select name="experience">
                  <SelectTrigger id="experience" className="h-11 border-border/60 bg-transparent">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Veteran">Veteran</SelectItem>
                  </SelectContent>
                </Select>
                <ValidationError field="experience" errors={state.errors} className="text-xs text-destructive" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="agree" name="agree" value="yes" className="mt-0.5" />
                <Label htmlFor="agree" className="text-xs leading-relaxed text-muted-foreground">
                  I understand routes are flexible based on group consensus,
                  weather, and road conditions. I ride at my own risk and
                  respect the lead rider's decisions.
                </Label>
              </div>

              {/* Global form errors */}
              <ValidationError errors={state.errors} className="text-xs text-destructive" />

              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending…" : "Send Enquiry"}
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
