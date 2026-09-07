interface ServiceBlockProps {
  title: string;
  deliverables: string[];
  imagePath: string;
  imageSide: 'left' | 'right';
}

export default function ServiceBlock({
  title,
  deliverables,
  imagePath,
  imageSide,
}: ServiceBlockProps) {
  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <section className="py-12 md:py-16 border-b border-cream/20 last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        {/* Image */}
        <div className={`w-full md:w-1/2 ${imageOrder}`}>
          <div
            className="w-full h-64 md:h-80 bg-cream/10 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundColor: '#191919', // fallback near-black
            }}
            role="img"
            aria-label={`${title} illustration`}
          />
        </div>

        {/* Text */}
        <div className={`w-full md:w-1/2 ${textOrder}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">
            {title}
          </h2>
          <ul className="space-y-2 text-cream/80">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}