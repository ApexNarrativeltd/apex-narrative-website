import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { client, imageBuilder } from '@/lib/sanity/client';

// Query featured portfolio items from Sanity
const FEATURED_QUERY = `*[_type == "portfolioItem" && featured == true] | order(publishedAt desc)[0...2] {
  _id,
  title,
  client,
  serviceType,
  mediaType,
  description,
  thumbnail
}`;

// Fallback query if no featured items exist yet — show most recent 2
const FALLBACK_QUERY = `*[_type == "portfolioItem" && defined(thumbnail)] | order(publishedAt desc)[0...2] {
  _id,
  title,
  client,
  serviceType,
  mediaType,
  description,
  thumbnail
}`;

type PortfolioItem = {
  _id: string;
  title: string;
  client?: string;
  serviceType: string;
  mediaType: 'video' | 'photo';
  description?: string;
  thumbnail: {
    asset: {
      _ref: string;
    };
  };
};

async function getFeaturedItems(): Promise<PortfolioItem[]> {
  try {
    const featured = await client.fetch(FEATURED_QUERY);
    if (featured && featured.length > 0) {
      return featured;
    }
    // Fall back to most recent 2 if no featured items yet
    return await client.fetch(FALLBACK_QUERY);
  } catch (error) {
    console.error('Failed to fetch portfolio teaser items:', error);
    return [];
  }
}

export default async function PortfolioTeaser() {
  const items = await getFeaturedItems();

  // Don't render the section at all if there are no items yet
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-near-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Stories We&apos;ve Helped Tell
          </h2>
        </div>

        {/* Grid of 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {items.map((item) => {
            const imageUrl = imageBuilder
              .image(item.thumbnail)
              .width(800)
              .height(500)
              .fit('crop')
              .url();

            return (
              <Link
                key={item._id}
                href="/work"
                className="group block bg-cream/5 rounded-lg overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-near-black overflow-hidden">
                  {imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-cream/20 text-sm">
                      No image
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-cream mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60">
                    {item.client ? `${item.client} — ` : ''}
                    {item.serviceType}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA to full portfolio */}
        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}