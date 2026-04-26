import { MessageCircle } from "lucide-react";

const message = encodeURIComponent(
  "Hi Teman, I'm interested in joining a ride into Southern Thailand. Can you share more details?",
);
// Replace this number with the real one when available
const WA_LINK = `https://wa.me/60199009674?text=${message}`;

export function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Teman on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" fill="white" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full opacity-30" style={{ backgroundColor: "#25D366" }} />
    </a>
  );
}
