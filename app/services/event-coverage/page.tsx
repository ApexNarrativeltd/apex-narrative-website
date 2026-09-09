import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';
import ServiceBlock from '@/components/ServiceBlock';

export const metadata: Metadata = {
  title: 'Apex Narrative – Event Coverage',
  description:
    'Event Coverage services from Apex Narrative: Conferences, Highlight Films, Live Streaming, and Award Ceremonies.',
};
const deliverables = [
  'Conferences & Summits',
  'Event Highlight Films',
  'Corporate Events',
  'Live Streaming',
  'Award Ceremonies',
];

export default function EventCoveragePage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="Service"
        title="Event Coverage"
        backgroundImage="/images/service-event-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceBlock
          title="Event Coverage"
          deliverables={deliverables}
          imagePath="/images/service-event-placeholder.jpg"
          imageSide="left"
        />

        <div className="mt-12 text-center border-t border-cream/10 pt-12">
          <p className="text-lg text-cream/80 mb-4">
            Ready to discuss your Event Coverage project?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}