import { useRef } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { PixelStar, PixelArrow } from './Pixel.jsx';

const ITEMS = [
  {
    name: 'Xalwo Caano',
    kind: 'Signature · Somalia',
    price: '£9',
    image:
      'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Hooyo Box',
    kind: 'Somali heritage gift',
    price: '£48',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Shaah Cadays',
    kind: 'Somali spiced tea',
    price: '£4.50',
    image:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Malawax Rolls',
    kind: 'Somali sweet crepes',
    price: '£4',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Yirgacheffe',
    kind: 'Single origin · Ethiopia',
    price: '£18',
    image:
      'https://images.unsplash.com/photo-1442975631115-c4f7b05b6a8c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Himbasha',
    kind: 'Celebration bread · Eritrea',
    price: '£8',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Kenya AA Cold Brew',
    kind: 'Single origin · Kenya',
    price: '£6',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function Featured() {
  const trackRef = useRef(null);

  return (
    <section id="featured" className="relative py-28 md:py-36 bg-bone">
      <div className="px-6 md:px-10 flex items-end justify-between mb-14 md:mb-20">
        <Reveal>
          <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/70 mb-4 inline-flex items-center gap-2">
            <PixelStar size={10} className="text-maroon" /> Featured — 01
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-maroon max-w-[16ch] leading-[1.05]">
            A handful of things <span className="italic">we love right now.</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="hidden md:block text-right">
          <p className="font-pixel text-[14px] uppercase tracking-widest2 text-maroon/60 mb-2">Drag →</p>
          <a
            href="#/shop"
            className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon soft-underline inline-flex items-center gap-2"
          >
            Browse the shop <PixelArrow size={12} />
          </a>
        </Reveal>
      </div>

      <motion.div
        ref={trackRef}
        className="overflow-x-auto no-scrollbar drag-grab active:drag-grabbing"
      >
        <motion.ul
          drag="x"
          dragConstraints={{ left: -1800, right: 0 }}
          dragElastic={0.08}
          className="flex gap-6 md:gap-10 px-6 md:px-10 select-none"
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.name}
              className="shrink-0 w-[72vw] sm:w-[46vw] md:w-[34vw] lg:w-[24vw]"
            >
              <a href="#/shop" className="block group">
                <div className="relative overflow-hidden aspect-[4/5] bg-sand group-hover:glow-ember transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-3 left-3 font-pixelbold text-[10px] uppercase tracking-widest2 text-bone bg-maroon px-2 py-1 pixel-shadow-cream">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-5">
                  <div>
                    <p className="font-pixel text-[14px] uppercase tracking-widest2 text-maroon/60">
                      № {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-maroon mt-1">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal/70 max-w-[14ch] text-right">{item.kind}</p>
                </div>
              </a>
            </li>
          ))}
          <li className="shrink-0 w-10 md:w-24" aria-hidden />
        </motion.ul>
      </motion.div>
    </section>
  );
}
