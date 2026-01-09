import Image from "next/image";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 shadow-lg">
      <Image
        src="/define-academy-logo.png"
        alt="DEFINE ACADEMY"
        width={400}
        height={300}
        className="h-20 md:h-18 w-auto p-2"
        priority
      />
    </header>
  );
}
