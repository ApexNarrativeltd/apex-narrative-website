interface ProcessStepsProps {
  heading?: string;
  subtext?: string;
}

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

export default function ProcessSteps({
  heading = 'The Process',
  subtext = 'A structured, four-phase approach to ensure your project is completed on time, on budget, and beyond expectations.',
}: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-cream/80 max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        {/* Steps grid — 2x2, borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Numbered circle */}
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold text-gold font-bold text-lg md:text-xl mb-5">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-cream mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-cream/70 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}