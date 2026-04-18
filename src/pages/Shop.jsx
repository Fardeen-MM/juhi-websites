import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { PRODUCTS, CATEGORIES } from '../data/products.js';

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
        eyebrow="The Shop"
        title="Coffee, cakes,"
        italic="heirlooms."
        subtitle="Recipes passed down and re-read. Coffee from the Horn, desserts baked slowly, gift boxes assembled by hand. Collection in Dalston or UK-wide post."
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-14 md:mb-16">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-widest2 border transition-colors duration-300 ${
                  active === c
                    ? 'bg-maroon text-bone border-maroon'
                    : 'border-maroon/30 text-maroon hover:border-maroon'
                }`}
              >
                {c}
              </button>
            ))}
            <p className="ml-auto text-[11px] uppercase tracking-widest2 text-maroon/60">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative overflow-hidden aspect-[4/5] bg-sand">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.04]"
                    />
                    {p.featured && (
                      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest2 text-bone bg-maroon px-2 py-1">
                        House Signature
                      </span>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest2 text-maroon/60">
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
                          className="text-[10px] uppercase tracking-widest2 border border-maroon/20 px-2.5 py-1 text-maroon/80"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <button className="mt-5 w-full px-5 py-3 text-[11px] uppercase tracking-widest2 border border-maroon text-maroon hover:bg-maroon hover:text-bone transition-colors duration-300">
                      Add to basket · £{p.price}
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {[
            ['Collection', 'Dalston, Tue — Sun. Free with any order.'],
            ['UK Post', 'Royal Mail Tracked 48 on orders over £25.'],
            ['Wholesale', 'Shops, caterers & offices — write to trade@.'],
          ].map(([t, body]) => (
            <div key={t} className="border-t border-maroon/20 pt-6">
              <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-3">{t}</p>
              <p className="font-display text-xl text-maroon">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
