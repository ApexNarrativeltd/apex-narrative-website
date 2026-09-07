import type { Metadata } from 'next';
import PositioningBand from '@/components/PositioningBand';
import ThreeColumnConnector from '@/components/ThreeColumnConnector';

export const metadata: Metadata = {
  title: 'Apex Narrative – About Us',
};

export default function AboutPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-navy py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/images/about-hero-placeholder.jpg)',
            backgroundColor: '#1d4b62', // navy fallback
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-secondary text-sm uppercase tracking-wider mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            About Us
          </h1>
        </div>
      </section>

      {/* Three-column section: Mission, Brand Promise, Vision */}
      <section className="relative py-16 md:py-20 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThreeColumnConnector />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Mission */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gold mb-3">Our Mission</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                To become Africa&apos;s leading media production company, empowering brands to be seen, heard, and remembered through powerful storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>

            {/* Brand Promise */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gold mb-3">Brand Promise</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                We promise to partner with every client to create strategic cinematic stories that capture attention, build trust, inspire action, and deliver lasting business impact consistently with stories that elevate brands.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gold mb-3">Our Vision</h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                To become Africa&apos;s leading media production company, empowering brands to be seen, heard, and remembered through powerful storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Band */}
      <PositioningBand
        heading="A Distinct Voice in Africa's Media Production Landscape"
        paragraph="At Apex Narrative, we combine strategic thinking, creative storytelling, and world-class production to help African brands communicate with confidence. We don't just create content, we craft narratives that help brands stand out, connect with the right audience, and compete on a global stage."
      />
    </div>
  );
}