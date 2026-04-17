import Reveal from './Reveal.jsx';

export default function Signature() {
  return (
    <section id="signature" className="relative bg-espresso text-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <div className="relative lg:col-span-7 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=2000&q=80"
            alt="Tonka Tiramisu"
            className="h-[70vh] lg:h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-widest2 text-cream/70">
            № 04 — House Signature
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex items-center">
          <div className="px-6 md:px-14 py-20 lg:py-28 max-w-xl">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-clay mb-6">
                The Signature
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02]">
                Tonka <span className="italic">Tiramisu.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-[15px] leading-[1.8] text-cream/80">
                Made the long way. Mascarpone whipped by hand, espresso pulled cold, and a whisper of
                tonka bean folded through. We bake it in the morning, let it rest, and serve it just
                before it&apos;s too late.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <dl className="mt-12 grid grid-cols-2 gap-y-6 gap-x-10 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-clay mb-2">Pairs with</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Cold drip, 12h</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-clay mb-2">Served</dt>
                  <dd className="text-cream/90 font-display italic text-lg">After noon, only</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-clay mb-2">Rested</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Eighteen hours</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-clay mb-2">Made</dt>
                  <dd className="text-cream/90 font-display italic text-lg">By Juhi, daily</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
