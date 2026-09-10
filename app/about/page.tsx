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
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)',
            backgroundColor: '#191919',
          }}
        />
        <div className="absolute inset-0 bg-near-black/50" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              Built for African Brands. Ready for the World.
            </h2>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-brand-red leading-none mt-8 md:mt-12">
            About Us
          </h1>
        </div>
      </section>

      {/* ===== Three-column staggered section ===== */}
      <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 bg-near-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block relative min-h-[600px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="50" y1="18" x2="18" y2="72" stroke="#e8a519" strokeWidth="0.2" opacity="0.7" />
              <line x1="50" y1="18" x2="82" y2="72" stroke="#e8a519" strokeWidth="0.2" opacity="0.7" />
              <line x1="5" y1="58" x2="18" y2="72" stroke="#e8a519" strokeWidth="0.2" opacity="0.7" />
              <line x1="82" y1="72" x2="95" y2="86" stroke="#e8a519" strokeWidth="0.2" opacity="0.7" />
            </svg>

            <div className="absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold z-10" />
            <div className="absolute top-[62%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold z-10" />
            <div className="absolute top-[62%] left-[78%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold z-10" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 z-10">
              <div className="relative border border-gold/30 rounded-lg p-6 bg-near-black/40">
                <svg
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-6 opacity-20 pointer-events-none"
                  viewBox="0 0 48 24"
                  aria-hidden="true"
                >
                  <polygon points="24,0 48,24 0,24" fill="#e8a519" />
                </svg>
                <h2 className="text-lg font-medium text-cream mb-3 tracking-wide text-center">
                  Our Mission
                </h2>
                <p className="text-cream/70 text-sm leading-relaxed text-center">
                  To become Africa&apos;s leading media production company, empowering
                  brands to be seen, heard, and remembered through powerful
                  storytelling that inspires connection and drives meaningful impact.
                </p>
              </div>
            </div>

            <div className="absolute top-[62%] left-0 w-72 z-10">
              <h2 className="text-lg font-medium text-cream mb-3 tracking-wide text-center">
                Brand Promise
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed text-center">
                We promise to partner with every client to create strategic
                cinematic stories that capture attention, build trust, inspire
                action, and deliver lasting business impact consistently with
                stories that elevate brands.
              </p>
            </div>

            <div className="absolute top-[62%] right-0 w-72 z-10">
              <h2 className="text-lg font-medium text-cream mb-3 tracking-wide text-center">
                Our Vision
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed text-center">
                To become Africa&apos;s leading media production company, empowering
                brands to be seen, heard, and remembered through powerful
                storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>
          </div>

          <div className="md:hidden space-y-10">
            <div className="text-center">
              <h2 className="text-lg font-medium text-cream mb-3 tracking-wide">Our Mission</h2>
              <p className="text-cream/70 text-sm leading-relaxed max-w-xs mx-auto">
                To become Africa&apos;s leading media production company, empowering brands to be seen, heard, and remembered through powerful storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-cream mb-3 tracking-wide">Brand Promise</h2>
              <p className="text-cream/70 text-sm leading-relaxed max-w-xs mx-auto">
                We promise to partner with every client to create strategic cinematic stories that capture attention, build trust, inspire action, and deliver lasting business impact consistently with stories that elevate brands.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-cream mb-3 tracking-wide">Our Vision</h2>
              <p className="text-cream/70 text-sm leading-relaxed max-w-xs mx-auto">
                To become Africa&apos;s leading media production company, empowering brands to be seen, heard, and remembered through powerful storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-12 flex justify-center px-4">
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
      </section>

      {/* ===== Positioning band – gold card straddles navy/near-black seam ===== */}
      <section className="relative">
        {/* Background: navy top half, near-black bottom half — behind the card */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="h-1/2 bg-navy" />
          <div className="h-1/2 bg-near-black" />
        </div>

        {/* Gold card, sits on top of the seam */}
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