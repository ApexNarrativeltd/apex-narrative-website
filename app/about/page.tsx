import type { Metadata } from 'next';
import PageHeroBanner from '@/components/PageHeroBanner';
import PositioningBand from '@/components/PositioningBand';
import ThreeColumnConnector from '@/components/ThreeColumnConnector';

export const metadata: Metadata = {
  title: 'Apex Narrative – About Us',
  description:
    'Learn about Apex Narrative – our mission, vision, and brand promise. We help African brands tell better stories through cinematic content.',
};

export default function AboutPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* Hero */}
      <PageHeroBanner
        eyebrow="Who We Are"
        title="About Us"
        backgroundImage="/images/about-hero-placeholder.jpg"
      />

      {/* Three-column section: Mission, Brand Promise, Vision */}
      <section className="relative py-16 md:py-20 bg-near-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThreeColumnConnector />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Mission */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gold mb-3">Our Mission</h2>
              <p className="text-cream/80 text-sm leading-relaxed">
                To become Africa&apos;s leading media production company, empowering brands to be seen, heard, and remembered through powerful storytelling that inspires connection and drives meaningful impact.
              </p>
            </div>

            {/* Brand Promise */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gold mb-3">Brand Promise</h2>
              <p className="text-cream/80 text-sm leading-relaxed">
                We promise to partner with every client to create strategic cinematic stories that capture attention, build trust, inspire action, and deliver lasting business impact consistently with stories that elevate brands.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gold mb-3">Our Vision</h2>
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