const steps = [
  {
    number: 1,
    title: 'Discovery',
    description:
      'We listen before we create. We dive deep into your brand, audience, and challenges.',
  },
  {
    number: 2,
    title: 'Strategies',
    description:
      'Using insights from discovery, we develop a creative way to achieve measurable results.',
  },
  {
    number: 3,
    title: 'Create',
    description:
      'We bring your vision to life from pre-production to post-production, with brand goal.',
  },
  {
    number: 4,
    title: 'Amplify',
    description:
      'We help your story go further and prepare your content for right channels.',
  },
];

export default function ProcessTeaser() {
  return (
    <section className="bg-near-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
            From Strategy to Screen
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-cream/80 max-w-2xl mx-auto">
            Every successful story begins with a clear strategy using our four-step process.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-gold/30 rounded-lg p-6 md:p-8 hover:border-gold/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Numbered circle */}
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold text-gold font-bold text-lg">
                  {step.number}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-cream/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}