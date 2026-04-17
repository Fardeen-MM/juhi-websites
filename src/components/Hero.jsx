const HERO_IMAGE =
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2200&q=80';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-espresso/35" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 text-bone">
        <div className="max-w-5xl">
          <p className="text-[11px] uppercase tracking-widest2 opacity-80 mb-6">
            A quiet corner, since 2019
          </p>
          <h1 className="font-display font-light leading-[0.95] text-[19vw] md:text-[13vw] lg:text-[11vw] tracking-tight">
            Nomad<span className="italic font-light"> House</span>
          </h1>
          <div className="mt-8 flex items-end justify-between gap-8">
            <p className="font-display italic text-xl md:text-2xl opacity-90">
              Coffee &amp; Desserts
            </p>
            <p className="hidden md:block text-[11px] uppercase tracking-widest2 opacity-70 max-w-[24ch] text-right">
              Small-batch roasts, slow mornings,<br /> made-by-hand pastries.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-bone text-[10px] uppercase tracking-widest2 opacity-70">
        <span className="block animate-pulse">Scroll</span>
      </div>
    </section>
  );
}
