import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import PositioningBand from '@/components/PositioningBand';

export const metadata: Metadata = {
  title: 'Apex Narrative – About Us',
};

export default function AboutPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative w-full h-auto min-h-[400px] md:h-[70vh] md:min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)',
            backgroundColor: '#191919',
          }}
        />
        <div className="absolute inset-0 bg-near-black/50" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-12 md:pt-16 pb-2 md:pb-3">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cream leading-tight">
              Built for African Brands. Ready for the World.
            </h2>
          </div>

          <h1 className="hidden md:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-red leading-none">
            About Us
          </h1>
        </div>
      </section>

      {/* ===== Mission / Brand Promise / Vision — clean text layout ===== */}
      <section className="bg-near-black py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Our Mission — centered at top */}
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
              Our Mission
            </h2>
            <p className="text-cream/70 text-sm md:text-base leading-relaxed">
              To become Africa&apos;s leading media production company, empowering
              brands to be seen, heard, and remembered through powerful
              storytelling that inspires connection and drives meaningful impact.
            </p>
          </div>

          {/* Brand Promise + Our Vision — two equal columns below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Brand Promise */}
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
                Brand Promise
              </h2>
              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                We promise to partner with every client to create strategic
                cinematic stories that capture attention, build trust, inspire
                action, and deliver lasting business impact consistently with
                stories that elevate brands.
              </p>
            </div>

            {/* Our Vision */}
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
                Our Vision
              </h2>
              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                To become Africa&apos;s leading media production company, empowering
                brands to be seen, heard, and remembered through powerful
                storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Mobile-only Chat Now button ===== */}
      <div className="md:hidden flex justify-center pb-12 bg-near-black">
        <a
          href="https://wa.me/2348133105922"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-near-black"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          Chat Now
        </a>
      </div>

      {/* ===== Positioning band ===== */}
      <section className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="h-1/2 bg-navy" />
          <div className="h-1/2 bg-near-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <PositioningBand
            label="Our Positioning"
            heading="A Distinct Voice in Africa's Media Production Landscape"
            paragraph="At Apex Narrative, we combine strategic thinking, creative storytelling, and world-class production to help African brands communicate with confidence. We don't just create content, we craft narratives that help brands stand out, connect with the right audience, and compete on a global stage."
          />
        </div>
      </section>
    </div>
  );
}