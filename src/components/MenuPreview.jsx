import Reveal from './Reveal.jsx';
import { PixelStar, PixelArrow, PixelDivider } from './Pixel.jsx';

const CATEGORIES = [
  {
    title: 'Qaxwah & Shaah',
    origin: 'Somalia + East Africa',
    items: [
      ['Shaah Cadays', '4.50'],
      ['Somali Iced Bun', '5.50'],
      ['Yirgacheffe · V60', '5'],
      ['Kenya AA Cold Brew', '5.50'],
      ['Rwanda Espresso Tonic', '6'],
      ['Hibiscus Karkade', '4'],
    ],
  },
  {
    title: 'Xalwo & Sweets',
    origin: 'Somali heritage',
    items: [
      ['Xalwo Caano · milk', '9'],
      ['Xalwo Cambe · mango', '11'],
      ['Malawax rolls', '4'],
      ['Cambuulo bowl', '6'],
      ['Kashata · Tanzania', '6'],
      ['Mandazi · Kenya', '2.80'],
      ['Date & tahini basbousa', '6.50'],
    ],
  },
  {
    title: 'Canjeero & Bread',
    origin: 'Somalia + East Africa',
    items: [
      ['Canjeero stack', '5'],
      ['Muufo · corn flatbread', '3'],
      ['Sambuus · lentil', '3.50'],
      ['Himbasha · Eritrea', '8'],
      ['Ugandan chapati', '2'],
    ],
  },
  {
    title: 'Gift Boxes',
    origin: 'Made to order',
    items: [
      ['Hooyo Box · Somali heritage', '48'],
      ['Home Box · three origins', '42'],
      ['Bun Ceremony Set · jebena + beans', '68'],
      ['Sweet Diaspora flight', '38'],
    ],
  },
  {
    title: 'House Merch',
    origin: 'From our kitchen',
    items: [
      ['Ceramic finjan (x2)', '24'],
      ['Linen house apron', '38'],
      ['Nomad House tote', '18'],
      ['Recipe card set', '14'],
    ],
  },
  {
    title: 'Catering',
    origin: 'For your events',
    items: [
      ['Ramadan iftar trays · from', '120'],
      ['Supper club menu · pp from', '45'],
      ['Bun ceremony service · pp', '18'],
      ['Dessert platter · feeds 10', '75'],
    ],
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="relative bg-paper py-28 md:py-40">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/70 mb-4 inline-flex items-center gap-2">
              <PixelStar size={10} className="text-maroon animate-sparkle" /> The House — 02
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon max-w-[16ch] leading-[1.05]">
              A short list, <span className="italic">made carefully.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Somali heritage leading, with beans, breads, and sweets from across
              the region. Order online, pickup in E8 or delivered across London.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 md:gap-y-20">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="border-t border-maroon/25 pt-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-2xl md:text-3xl text-maroon">{cat.title}</h3>
                  <span className="font-pixel text-[14px] uppercase tracking-widest2 text-maroon/60">
                    № {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/50 mb-5">
                  {cat.origin}
                </p>
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

        <PixelDivider className="mt-20" />

        <Reveal delay={200}>
          <div className="text-center">
            <a
              href="#/shop"
              className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 text-bone bg-maroon px-6 py-3 pixel-shadow-cream hover:bg-rust transition-colors"
            >
              See the full shop <PixelArrow size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
