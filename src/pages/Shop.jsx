import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { PixelStar, PixelArrow, PixelHeart } from '../components/Pixel.jsx';

export default function Shop() {
  const [active, setActive] = useState('All');

  const items = useMemo(
    () => (active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        no="01"
        eyebrow="The Shop · order online"
        title="Xalwo, cakes,"
        italic="heirlooms."
        subtitle="Somali recipes leading, with beans, breads and sweets from across East Africa. Order online, collect in Dalston E8, or delivered across London."
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-14 md:mb-16">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 font-pixelbold text-[10px] uppercase tracking-widest2 border-2 transition-colors duration-300 ${
                  active === c
                    ? 'bg-maroon text-bone border-maroon pixel-shadow-cream'
                    : 'border-maroon/30 text-maroon hover:border-maroon'
                }`}
              >
                {c}
              </button>
            ))}
            <p className="ml-auto font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 inline-flex items-center gap-2">
              <PixelStar size={10} className="text-maroon" /> {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative overflow-hidden aspect-[4/5] bg-sand group-hover:glow-ember transition-all duration-500">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-4 left-4 font-pixelbold text-[9px] uppercase tracking-widest2 text-bone bg-maroon px-2 py-1 pixel-shadow-cream">
                      {p.origin}
                    </span>
                    {p.featured && (
                      <span className="absolute top-4 right-4 font-pixelbold text-[9px] uppercase tracking-widest2 text-rust bg-gold px-2 py-1 animate-sparkle">
                        House pick
                      </span>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60">
                          {p.category}
                        </p>
                        <h3 className="font-display text-2xl text-maroon mt-1">{p.name}</h3>
                      </div>
                      <p className="font-display text-xl text-maroon tabular-nums">£{p.price}</p>
                    </div>
                    <p className="mt-2 text-sm text-charcoal/80">{p.subtitle}</p>
                    <p className="mt-3 text-[13px] text-charcoal/70 leading-relaxed">{p.story}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.notes.map((n) => (
                        <span
                          key={n}
                          className="font-pixelbold text-[9px] uppercase tracking-widest2 border border-maroon/30 px-2.5 py-1 text-maroon/80"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <button className="mt-5 w-full px-5 py-3 font-pixelbold text-[11px] uppercase tracking-widest2 border-2 border-maroon text-maroon hover:bg-maroon hover:text-bone transition-colors duration-300 inline-flex items-center justify-center gap-2">
                      Add to basket · £{p.price} <PixelArrow size={12} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-4 inline-flex items-center gap-2">
              <PixelHeart size={10} className="text-maroon" /> How it works
            </p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[22ch]">
              No shop yet. <span className="italic">A kitchen, a bike, and your door.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              ['Pickup · Dalston E8', 'Tue–Sun, 10–18. We\'ll text when it\'s ready. Free with any order.'],
              ['London delivery', 'From £4. Evening slots available. Refrigerated bags for xalwo.'],
              ['UK post', 'Royal Mail Tracked 48 on orders over £25. Safe for shelf-stable items.'],
            ].map(([t, body], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="border-t-2 border-maroon/30 pt-6">
                  <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                    <PixelStar size={10} className="text-maroon" /> № {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-xl text-maroon">{t}</h3>
                  <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
