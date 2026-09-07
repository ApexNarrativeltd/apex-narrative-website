interface PageHeroBannerProps {
  eyebrow?: string;
  title: string;
  backgroundImage: string;
}

export default function PageHeroBanner({
  eyebrow,
  title,
  backgroundImage,
}: PageHeroBannerProps) {
  return (
    <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-gold font-secondary text-sm uppercase tracking-wider mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
          {title}
        </h1>
      </div>
    </section>
  );
}