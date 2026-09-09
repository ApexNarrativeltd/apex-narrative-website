import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';
import ServiceBlock from '@/components/ServiceBlock';

export const metadata: Metadata = {
  title: 'Apex Narrative – Social Media Content Packages',
  description:
    'Social Media Content Packages from Apex Narrative: Content Planning, Motion Graphics, Short-Form Videos, and Campaign Content.',
};

const deliverables = [
  'Content Planning',
  'Motion Graphics',
  'Social Media Photography',
  'Short-Form Videos',
  'Campaign Content',
];

export default function SocialMediaContentPackagesPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="Service"
        title="Social Media Content Packages"
        backgroundImage="/images/service-social-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceBlock
          title="Social Media Content Packages"
          deliverables={deliverables}
          imagePath="/images/service-social-placeholder.jpg"
          imageSide="right"
        />

        <div className="mt-12 text-center border-t border-cream/10 pt-12">
          <p className="text-lg text-cream/80 mb-4">
            Ready to discuss your Social Media Content Packages project?
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