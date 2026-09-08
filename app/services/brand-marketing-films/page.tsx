import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';
import ServiceBlock from '@/components/ServiceBlock';

export const metadata: Metadata = {
  title: 'Apex Narrative – Brand & Marketing Films',
};

const deliverables = [
  'Customer Testimonial Videos',
  'Product Launch Videos',
  'Promotional Videos',
  'Company Profile Videos',
  'Brand Story Films',
];

export default function BrandMarketingFilmsPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="Service"
        title="Brand & Marketing Films"
        backgroundImage="/images/service-brand-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceBlock
          title="Brand & Marketing Films"
          deliverables={deliverables}
          imagePath="/images/service-brand-placeholder.jpg"
          imageSide="right"
        />

        <div className="mt-12 text-center border-t border-cream/10 pt-12">
          <p className="text-lg text-cream/80 mb-4">
            Ready to discuss your Brand & Marketing Films project?
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