import { useEffect, useState } from "react";
import { type Ride } from "@/components/teman/BookingModal";

export type RideData = Ride & {
  route: string;
  enabled: boolean;
};

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

export function useRides() {
  const [rides, setRides] = useState<RideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = import.meta.env.VITE_RIDES_CSV_URL as string;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch rides (${res.status})`);
        return res.text();
      })
      .then((text) => {
        const lines = text.trim().split("\n").slice(1); // skip header row
        const parsed: RideData[] = lines
          .filter((line) => line.trim())
          .map((line, i) => {
            const cols = parseCSVLine(line);
            const enabled = (cols[7] ?? "").trim().toUpperCase() === "TRUE";
            return {
              id: String(i),
              name: cols[0] ?? "",
              dates: cols[1] ?? "",
              duration: cols[2] ?? "",
              route: cols[3] ?? "",
              tagline: cols[4] ?? "",
              slotsLeft: parseInt(cols[5] ?? "0", 10),
              totalSlots: parseInt(cols[6] ?? "0", 10),
              enabled,
              disabled: !enabled,
            };
          });
        setRides(parsed);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load rides");
      })
      .finally(() => setLoading(false));
  }, []);

  return { rides, loading, error };
}
