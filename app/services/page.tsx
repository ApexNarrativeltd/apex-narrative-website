import type { Metadata } from 'next';
import ServiceBlock from '@/components/ServiceBlock';
import ProcessSteps from '@/components/ProcessSteps';

export const metadata: Metadata = {
  title: 'Apex Narrative – Services',
};

const services = [
  {
    title: 'Real Estate Media',
    deliverables: [
      'Drone Aerial Photography',
      'Property Walkthrough Videos',
      'Real Estate Promotional Campaigns',
      'Luxury Property Showcase Videos',
      'Real Estate Listing Videos',
    ],
    imagePath: '/images/service-real-estate-placeholder.jpg',
    imageSide: 'left' as const,
  },
  {
    title: 'Brand & Marketing Films',
    deliverables: [
      'Customer Testimonial Videos',
      'Product Launch Videos',
      'Promotional Videos',
      'Company Profile Videos',
      'Brand Story Films',
    ],
    imagePath: '/images/service-brand-placeholder.jpg',
    imageSide: 'right' as const,
  },
  {
    title: 'Social Media Content Packages',
    deliverables: [
      'Content Planning',
      'Motion Graphics',
      'Social Media Photography',
      'Short-Form Videos',
      'Campaign Content',
    ],
    imagePath: '/images/service-social-placeholder.jpg',
    imageSide: 'left' as const,
  },
  {
    title: 'Event Coverage',
    deliverables: [
      'Conferences & Summits',
      'Event Highlight Films',
      'Corporate Events',
      'Live Streaming',
      'Award Ceremonies',
    ],
    imagePath: '/images/service-event-placeholder.jpg',
    imageSide: 'right' as const,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-near-black py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/images/services-hero-placeholder.jpg)',
            backgroundColor: '#1d4b62', // navy fallback
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-secondary text-sm uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            Our Offerings
          </h1>
        </div>
      </section>

      {/* Service blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {services.map((service) => (
          <ServiceBlock
            key={service.title}
            title={service.title}
            deliverables={service.deliverables}
            imagePath={service.imagePath}
            imageSide={service.imageSide}
          />
        ))}
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProcessSteps />
      </div>
    </div>
  );
}