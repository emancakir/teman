import { useState, useEffect } from "react";
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
import { toast } from "sonner";

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

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  bike: "",
  experience: "",
  agree: false,
};

export function BookingModal({ ride, onClose }: Props) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (ride) {
      setForm(initialForm);
      setErrors({});
    }
  }, [ride]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !form.email.includes("@"))
      e.email = "Valid email required";
    if (!form.whatsapp.trim()) e.whatsapp = "Required";
    if (!form.bike.trim()) e.bike = "Required";
    if (!form.experience) e.experience = "Required";
    if (!form.agree) e.agree = "You must accept the brotherhood agreement";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!ride) return;
    if (!validate()) return;

    const subject = `[Teman Enquiry] - ${ride.name} - ${form.name}`;
    const body = `New Ride Enquiry
-----------------
Name: ${form.name}
Email: ${form.email}
WhatsApp: ${form.whatsapp}
Motorcycle: ${form.bike}
Experience: ${form.experience}
Selected Ride: ${ride.name} (${ride.dates})
Slots Requested: 1
Agreement Accepted: Yes

Please contact rider to confirm availability.`;

    const mailto = `mailto:temaninfo@pphgroup.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    toast.success("Check your email client to send.", {
      description: "We'll reply within 12 hours. Ride safe.",
    });
    onClose();
  };

  return (
    <Dialog open={!!ride} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/60 bg-background sm:max-w-md">
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

        <form onSubmit={onSubmit} className="mt-4 space-y-5" noValidate>
          <Field
            id="name"
            label="Full name"
            value={form.name}
            error={errors.name}
            onChange={(v) => setForm({ ...form, name: v })}
          />
          <Field
            id="email"
            label="Email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(v) => setForm({ ...form, email: v })}
          />
          <Field
            id="whatsapp"
            label="WhatsApp"
            value={form.whatsapp}
            error={errors.whatsapp}
            onChange={(v) => setForm({ ...form, whatsapp: v })}
            placeholder="+60 12 345 6789"
          />
          <Field
            id="bike"
            label="Motorcycle model"
            value={form.bike}
            error={errors.bike}
            onChange={(v) => setForm({ ...form, bike: v })}
            placeholder="e.g. Yamaha R15, 150cc"
          />

          <div className="space-y-2">
            <Label
              htmlFor="experience"
              className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              Experience
            </Label>
            <Select
              value={form.experience}
              onValueChange={(v) => setForm({ ...form, experience: v })}
            >
              <SelectTrigger
                id="experience"
                className="h-11 border-border/60 bg-transparent"
              >
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
                <SelectItem value="Veteran">Veteran</SelectItem>
              </SelectContent>
            </Select>
            {errors.experience && (
              <p className="text-xs text-destructive">{errors.experience}</p>
            )}
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="agree"
              checked={form.agree}
              onCheckedChange={(v) => setForm({ ...form, agree: v === true })}
              className="mt-0.5"
            />
            <Label
              htmlFor="agree"
              className="text-xs leading-relaxed text-muted-foreground"
            >
              I understand routes are flexible based on group consensus,
              weather, and road conditions. I ride at my own risk and respect
              the lead rider's decisions.
            </Label>
          </div>
          {errors.agree && (
            <p className="text-xs text-destructive">{errors.agree}</p>
          )}

          <Button type="submit" variant="brand" size="lg" className="w-full">
            Send Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="h-11 border-0 border-b border-border/60 bg-transparent px-0 rounded-none focus-visible:ring-0 focus-visible:border-accent"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
