import Image from "next/image";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-500 py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-2xl text-white italic mb-2">
            <Image
              src="/define-academy-logo.png"
              alt="DEFINE ACADEMY"
              width={400}
              height={300}
              className="h-20 md:h-18 w-auto p-2"
              priority
            />
          </div>
          <p className="text-xs">PR: DEFINE ACADEMY</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-brand-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brand-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-brand-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="text-xs">&copy; {currentYear} DEFINE ACADEMY.</div>
      </div>
    </footer>
  );
}
