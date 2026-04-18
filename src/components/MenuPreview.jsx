import Reveal from './Reveal.jsx';

const CATEGORIES = [
  {
    title: 'Buna · Coffee',
    items: [
      ['Yirgacheffe · V60', '5'],
      ['Sidamo Cold Brew', '5.5'],
      ['Harar Espresso', '4.5'],
      ['Spiced Buna Latte', '5.5'],
      ['Cardamom Cortado', '5'],
    ],
  },
  {
    title: 'Heirloom Desserts',
    items: [
      ['Cardamom Mandazi', '2.80'],
      ['Somali Halwa', '9'],
      ['Kashata Kenya', '6'],
      ['Injera Cake (slice)', '7'],
      ['Date & Tahini Basbousa', '6.50'],
    ],
  },
  {
    title: 'Pastry & Bread',
    items: [
      ['Himbasha Flatbread', '4'],
      ['Sambusa · lentil', '3.50'],
      ['Berbere Shortbread', '4'],
      ['Injera, fresh', '3.50'],
      ['Coconut Kaimati', '3'],
    ],
  },
  {
    title: 'Tea & Herbs',
    items: [
      ['Shaah Hawaash', '4.50'],
      ['Ethiopian Herbal Blend', '4.50'],
      ['Spiced Chai', '4'],
      ['Hibiscus Karkade', '4'],
    ],
  },
  {
    title: 'Gift Boxes',
    items: [
      ['Home Box · three origins', '42'],
      ['Ceremony Set · jebena + beans', '68'],
      ['Sweet Diaspora · dessert flight', '38'],
      ['Festival Box · Meskel edition', '55'],
    ],
  },
  {
    title: 'House Merch',
    items: [
      ['Ceramic Finjan (x2)', '24'],
      ['Linen Coffee Apron', '38'],
      ['Nomad House Tote', '18'],
      ['Recipe Card Set', '14'],
    ],
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="relative bg-paper py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">The House — 02</p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon max-w-[16ch] leading-[1.05]">
              A short list, <span className="italic">made carefully.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Recipes passed down, then re-read. Coffee sourced from farms across the
              Horn, desserts baked slowly by hand. A preview of what we serve.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 md:gap-y-20">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="border-t border-maroon/25 pt-6">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-display text-2xl md:text-3xl text-maroon">{cat.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest2 text-maroon/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="space-y-4">
                  {cat.items.map(([name, price]) => (
                    <li key={name} className="flex items-baseline gap-4 group">
                      <span className="text-base md:text-[17px] text-charcoal transition-colors duration-500 group-hover:text-maroon">
                        {name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-maroon/30" />
                      <span className="text-sm text-mocha tabular-nums">£{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 text-center">
            <a
              href="#/shop"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-maroon border-b border-maroon pb-1"
            >
              See the full shop
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
