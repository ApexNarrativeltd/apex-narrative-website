interface PositioningBandProps {
  heading: string;
  paragraph: string;
}

export default function PositioningBand({ heading, paragraph }: PositioningBandProps) {
  return (
    <section className="bg-gold text-near-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {heading}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-near-black/80 max-w-3xl mx-auto">
          {paragraph}
        </p>
      </div>
    </section>
  );
}