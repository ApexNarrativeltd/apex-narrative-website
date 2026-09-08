import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';
import ServiceBlock from '@/components/ServiceBlock';

export const metadata: Metadata = {
  title: 'Apex Narrative – Real Estate Media',
};

const deliverables = [
  'Drone Aerial Photography',
  'Property Walkthrough Videos',
  'Real Estate Promotional Campaigns',
  'Luxury Property Showcase Videos',
  'Real Estate Listing Videos',
];

export default function RealEstateMediaPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="Service"
        title="Real Estate Media"
        backgroundImage="/images/service-real-estate-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceBlock
          title="Real Estate Media"
          deliverables={deliverables}
          imagePath="/images/service-real-estate-placeholder.jpg"
          imageSide="left"
        />

        {/* CTA */}
        <div className="mt-12 text-center border-t border-cream/10 pt-12">
          <p className="text-lg text-cream/80 mb-4">
            Ready to discuss your Real Estate Media project?
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