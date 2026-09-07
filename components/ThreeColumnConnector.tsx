export default function ThreeColumnConnector() {
  return (
    <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 px-12">
      {/* Dotted line */}
      <div className="relative w-full h-0.5 border-t-2 border-dotted border-gold/60">
        {/* Left dot */}
        <div className="absolute -top-1.5 left-1/4 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-near-black" />
        {/* Center dot */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-near-black" />
        {/* Right dot */}
        <div className="absolute -top-1.5 right-1/4 translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-near-black" />
      </div>
    </div>
  );
}