"use client";

import { useState, useEffect } from 'react';
import { client, imageBuilder } from '@/lib/sanity/client';
import PageHeroBanner from '@/components/PageHeroBanner';
import { SERVICE_TYPES } from '@/lib/constants';
import VideoModal from '@/components/VideoModal';

// Type for a portfolio item
export type PortfolioItem = {
  _id: string;
  title: string;
  client?: string;
  serviceType: string;
  mediaType: 'video' | 'photo';
  videoUrl?: string;
  description?: string;
  featured?: boolean;
  duration?: string;
  publishedAt: string;
  thumbnail: {
    asset: {
      _ref: string;
    };
  };
};

// Query to fetch all published portfolio items, sorted by date
const PORTFOLIO_QUERY = `*[_type == "portfolioItem" && defined(thumbnail)] | order(publishedAt desc) {
  _id,
  title,
  client,
  serviceType,
  mediaType,
  videoUrl,
  description,
  featured,
  duration,
  publishedAt,
  thumbnail
}`;

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return client.fetch(PORTFOLIO_QUERY);
}

export default function WorkPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Load data on mount
  useEffect(() => {
    getPortfolioItems()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch portfolio items:', error);
        setLoading(false);
      });
  }, []);

  const filteredItems =
    activeFilter === 'All'
      ? items
      : items.filter((item) => item.serviceType === activeFilter);

  const handleItemClick = (item: PortfolioItem) => {
    if (item.mediaType === 'video' && item.videoUrl) {
      setSelectedVideo({ url: item.videoUrl, title: item.title });
    }
    // For photo items, we could open a photo modal here if needed
  };

  if (loading) {
    return (
      <div className="bg-near-black text-cream min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-cream/60 mt-4">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="Our Work"
        title="Portfolio"
        backgroundImage="/images/work-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-cream/10 pb-4">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeFilter === 'All'
                ? 'text-gold border-gold'
                : 'text-cream/60 hover:text-cream border-transparent hover:border-cream/20'
            }`}
          >
            All
          </button>
          {SERVICE_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                activeFilter === type
                  ? 'text-gold border-gold'
                  : 'text-cream/60 hover:text-cream border-transparent hover:border-cream/20'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-cream/60">
              {items.length === 0
                ? 'No portfolio items added yet.'
                : 'No items match this filter.'}
            </p>
            {items.length === 0 && (
              <p className="text-cream/40 text-sm mt-2">
                Add content in the Sanity Studio at /studio
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const imageUrl = imageBuilder
                .image(item.thumbnail)
                .width(600)
                .height(400)
                .fit('crop')
                .url();

              const isVideo = item.mediaType === 'video';

              return (
                <div
                  key={item._id}
                  onClick={() => handleItemClick(item)}
                  className={`group bg-cream/5 rounded-lg overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-300 cursor-pointer ${
                    isVideo ? 'hover:shadow-lg hover:shadow-gold/10' : ''
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] bg-near-black overflow-hidden relative">
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

                    {/* Video overlay */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-gold/80 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-6 h-6 text-near-black ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-cream text-sm leading-tight">
                        {item.title}
                      </h3>
                      <span className="flex-shrink-0 text-xs text-cream/40 bg-cream/10 px-2 py-0.5 rounded-full">
                        {item.serviceType.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-cream/60 text-xs mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    {item.client && (
                      <p className="text-cream/40 text-xs mt-1">{item.client}</p>
                    )}
                    {item.duration && (
                      <p className="text-cream/30 text-xs mt-1">⏱ {item.duration}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}