import Reveal from './Reveal.jsx';

export default function Signature() {
  return (
    <section id="signature" className="relative bg-rust text-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        <div className="relative lg:col-span-7 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=2000&q=80"
            alt="Ethiopian coffee ceremony — jebena and cups"
            className="h-[70vh] lg:h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rust/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-widest2 text-cream/70">
            № 03 — The Signature
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex items-center">
          <div className="px-6 md:px-14 py-20 lg:py-28 max-w-xl">
            <Reveal>
              <p className="text-[11px] uppercase tracking-widest2 text-gold mb-6">
                The Buna Ceremony
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02]">
                Injera <span className="italic">Birthday Cake.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-[15px] leading-[1.8] text-cream/85">
                A fusion baked for Sunday afternoons and birthdays lived between two
                homes. Fermented teff layers, cardamom buttercream, honey from the
                Ethiopian highlands. Your grandmother would approve — and maybe ask
                for a second slice.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <dl className="mt-12 grid grid-cols-2 gap-y-6 gap-x-10 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-gold mb-2">Pairs with</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Sidamo cold brew</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-gold mb-2">Served</dt>
                  <dd className="text-cream/90 font-display italic text-lg">By the slice, or whole</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-gold mb-2">Rested</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Twenty-four hours</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest2 text-gold mb-2">Origin</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Addis &mdash; London</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={340}>
              <a
                href="#/shop"
                className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-widest2 border-b border-cream/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-500"
              >
                Order the cake
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
