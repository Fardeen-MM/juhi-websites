import Reveal from './Reveal.jsx';

const CATEGORIES = [
  {
    title: 'Espresso',
    items: [
      ['Doppio', '4'],
      ['Cortado', '4.5'],
      ['Flat White', '5'],
      ['House Latte', '5.5'],
    ],
  },
  {
    title: 'Slow',
    items: [
      ['V60 · Ethiopia', '7'],
      ['Chemex · Colombia', '7'],
      ['Siphon · Geisha', '11'],
      ['Cold Drip · 12h', '8'],
    ],
  },
  {
    title: 'Iced',
    items: [
      ['Iced Oat Cortado', '6'],
      ['Shakerato', '6.5'],
      ['Tonka Cold Brew', '7'],
      ['Yuzu Espresso', '7.5'],
    ],
  },
  {
    title: 'Cakes',
    items: [
      ['Burnt Basque', '8'],
      ['Tonka Tiramisu', '9'],
      ['Olive Oil Citrus', '8'],
      ['Dark Chocolate Tart', '9'],
    ],
  },
  {
    title: 'Pastry',
    items: [
      ['Morning Croissant', '4.5'],
      ['Cardamom Bun', '5'],
      ['Almond Kouign', '5.5'],
      ['Seasonal Danish', '5'],
    ],
  },
  {
    title: 'Tea & Other',
    items: [
      ['Matcha, ceremonial', '6'],
      ['Hojicha Latte', '6'],
      ['Chamomile · Honey', '5'],
      ['House Chocolate', '6'],
    ],
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="relative bg-bone py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-ash mb-4">The Menu — 02</p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-espresso max-w-[16ch] leading-[1.05]">
              A short list, <span className="italic">made carefully.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="hidden md:block max-w-sm text-right">
            <p className="text-sm text-mocha leading-relaxed">
              Our menu changes with what&apos;s in season and what the roast is telling us. Below,
              a preview of the house.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 md:gap-y-20">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="border-t border-espresso/15 pt-6">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-display text-2xl md:text-3xl text-espresso">{cat.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest2 text-ash">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="space-y-4">
                  {cat.items.map(([name, price]) => (
                    <li key={name} className="flex items-baseline gap-4 group">
                      <span className="text-base md:text-[17px] text-cocoa transition-colors duration-500 group-hover:text-espresso">
                        {name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-espresso/20" />
                      <span className="text-sm text-mocha tabular-nums">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
