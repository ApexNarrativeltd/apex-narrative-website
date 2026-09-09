import type { Metadata } from 'next';
import {
  Building2,
  Rocket,
  Briefcase,
  PartyPopper,
  User,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apex Narrative – Who We Work With',
  description:
    'Apex Narrative works with Real Estate Agencies, SMEs, Corporate Brands, Hospitality & Events, and Personal Brands.',
};

// Placeholder copy — pending final FRD sign-off.
const segments = [
  {
    id: 'real-estate',
    icon: Building2,
    title: 'Real Estate Agencies',
    description:
      'From luxury property showcases to drone aerial photography, we help real estate agencies tell compelling visual stories that sell properties faster.',
    flagship: true,
  },
  {
    id: 'smes',
    icon: Rocket,
    title: 'SMEs & Startups',
    description:
      'We help growing businesses build brand credibility through professional video content that communicates their value clearly and memorably.',
    flagship: false,
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate Brands',
    description:
      'We partner with established brands to create polished corporate films, product launch videos, and executive communications that reinforce market leadership.',
    flagship: false,
  },
  {
    id: 'hospitality',
    icon: PartyPopper,
    title: 'Hospitality & Events',
    description:
      'We capture the energy and atmosphere of hospitality venues and events, creating content that attracts guests and builds a vibrant brand image.',
    flagship: false,
  },
  {
    id: 'personal',
    icon: User,
    title: 'Personal Brands / Influencers',
    description:
      'We help individuals build a compelling personal brand through professional visual content that resonates with their audience and builds trust.',
    flagship: false,
  },
];

export default function WhoWeWorkWithPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-navy py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/images/wwww-hero-placeholder.jpg)',
            backgroundColor: '#1d4b62', // navy fallback
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-secondary text-sm uppercase tracking-wider mb-2">
            Our Clients
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            Who We Work With
          </h1>
          <p className="mt-4 text-lg text-cream/70 max-w-2xl mx-auto">
            We partner with brands across industries to tell their stories.
          </p>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment) => {
            const Icon = segment.icon;
            const isFlagship = segment.flagship;

            return (
              <div
                key={segment.id}
                className={`
                  p-6 rounded-lg border transition-all
                  ${isFlagship
                    ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                    : 'border-cream/10 hover:border-cream/30'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    flex-shrink-0 p-3 rounded-full
                    ${isFlagship ? 'bg-gold/20 text-gold' : 'bg-cream/10 text-cream'}
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-bold text-cream">
                        {segment.title}
                      </h2>
                      {isFlagship && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold border border-gold/30 px-2 py-0.5 rounded-full">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-cream/70 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}