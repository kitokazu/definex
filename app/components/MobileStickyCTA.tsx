import { MessageCircle } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-dark/95 backdrop-blur border-t border-white/10 z-50">
      <a
        href="https://line.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-brand-line text-white font-bold py-3 rounded-full shadow-lg active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        LINEで無料体験を受ける
      </a>
    </div>
  );
}

