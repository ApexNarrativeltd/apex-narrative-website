export default function TrustedByBrands() {
  return (
    <section className="lg:hidden bg-near-black py-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-center text-cream/60 text-sm uppercase tracking-wider mb-6 font-secondary">
          Trusted by Brands
        </h3>
        {/* Placeholder row — content to be filled in once client logo list is confirmed */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center justify-items-center opacity-50">
          {/* Empty placeholder slots */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-[2/1] bg-cream/5 rounded border border-cream/10"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-center text-cream/40 text-xs mt-4 italic">
          {/* TODO: Replace placeholder slots with client logos once confirmed */}
          Client logos coming soon
        </p>
      </div>
    </section>
  );
}