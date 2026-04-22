import Reveal from './Reveal.jsx';
import { PixelStar, PixelHeart, PixelArrow } from './Pixel.jsx';

export default function Signature() {
  return (
    <section id="signature" className="relative bg-rust text-cream overflow-hidden">
      <div className="absolute inset-0 crt-scan opacity-30 pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] relative">
        <div className="relative lg:col-span-7 order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=2000&q=80"
            alt="Xalwo Caano — Somali milk halwa"
            className="h-[70vh] lg:h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rust/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 font-pixel text-[14px] uppercase tracking-widest2 text-cream/70 inline-flex items-center gap-2">
            <PixelStar size={10} className="text-gold" /> № 03 — The Signature
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex items-center">
          <div className="px-6 md:px-14 py-20 lg:py-28 max-w-xl">
            <Reveal>
              <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-gold mb-6 inline-flex items-center gap-2">
                <PixelHeart size={12} className="text-gold animate-sparkle" /> Hooyo&apos;s recipe
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.02]">
                Xalwo <span className="italic">Caano.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-[15px] leading-[1.8] text-cream/85">
                Our founder&apos;s mother&apos;s recipe — slow-cooked until it
                glistens, folded with cardamom and clarified butter, cut into
                chewy squares. This is the sweet that ends every Somali dinner,
                marks every Eid, and travels in every diaspora suitcase. Now
                also yours.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <dl className="mt-12 grid grid-cols-2 gap-y-6 gap-x-10 text-sm">
                <div>
                  <dt className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-2">Pairs with</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Shaah cadays</dd>
                </div>
                <div>
                  <dt className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-2">Served</dt>
                  <dd className="text-cream/90 font-display italic text-lg">By the tin, or bite</dd>
                </div>
                <div>
                  <dt className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-2">Rested</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Twelve hours</dd>
                </div>
                <div>
                  <dt className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-2">Origin</dt>
                  <dd className="text-cream/90 font-display italic text-lg">Mogadishu &mdash; London</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={340}>
              <a
                href="#/shop"
                className="mt-12 inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 bg-bone text-maroon px-6 py-3 pixel-shadow-cream hover:bg-gold hover:text-rust transition-colors"
              >
                Order a tin <PixelArrow size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
