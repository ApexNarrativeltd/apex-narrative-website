// Placeholder brand logos — swap for real client logos when confirmed
const brands = [
  { name: 'Hues', mark: '◐' },
  { name: 'Umbrella', mark: '☂' },
  { name: 'Greenish', mark: '❦' },
  { name: 'Vision', mark: '◉' },
  { name: 'Cactus', mark: '✻' },
];

export default function TrustedByBrandsStrip() {
  return (
    <section className="bg-near-black py-8 md:py-12 border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-cream/60 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6 font-secondary">
          Trusted by Brands Ready to Be Seen
        </p>
        <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-12 flex-nowrap md:flex-wrap">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-1 md:gap-2 text-cream/70 hover:text-cream transition-colors"
            >
              <span className="text-sm md:text-2xl" aria-hidden="true">
                {brand.mark}
              </span>
              <span className="text-xs sm:text-sm md:text-2xl font-bold font-primary tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}