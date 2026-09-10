import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Copy sourced from the confirmed live Who We Work With page — not the Figma draft
const segments = [
  {
    id: 'real-estate',
    title: 'Real Estate Agencies',
    description:
      'From luxury property showcases to drone aerial photography, we help real estate agencies tell compelling visual stories that sell properties faster.',
    cta: 'Showcase Your Properties',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    flagship: true,
  },
  {
    id: 'smes',
    title: 'SMEs & Startups',
    description:
      'We help growing businesses build brand credibility through professional video content that communicates their value clearly and memorably.',
    cta: 'Grow Your Brand',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    flagship: false,
  },
  {
    id: 'corporate',
    title: 'Corporate Brands',
    description:
      'We partner with established brands to create polished corporate films, product launch videos, and executive communications that reinforce market leadership.',
    cta: 'Tell Your Brand Story',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    flagship: false,
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Events',
    description:
      'We capture the energy and atmosphere of hospitality venues and events, creating content that attracts guests and builds a vibrant brand image.',
    cta: 'Capture Every Moment',
    image:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
    flagship: false,
  },
];

export default function WhoWeWorkWithTeaser() {
  return (
    <section className="bg-near-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="group bg-cream/5 rounded-lg overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-near-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gold overlay block */}
              <div className="bg-gold text-near-black p-5 md:p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    {segment.title}
                  </h3>
                  {segment.flagship && (
                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-near-black border border-near-black/30 px-2 py-0.5 rounded-full">
                      Flagship
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-near-black/80 mb-4 flex-1">
                  {segment.description}
                </p>
                <Link
                  href={`/who-we-work-with#${segment.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-near-black hover:underline focus:outline-none focus:ring-2 focus:ring-near-black focus:ring-offset-2 focus:ring-offset-gold rounded"
                >
                  {segment.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}