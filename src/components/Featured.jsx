import { useRef } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const ITEMS = [
  {
    name: 'Slow-pour Geisha',
    kind: 'Single origin · Panama',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Burnt Basque',
    kind: 'House cheesecake',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Cardamom Bun',
    kind: 'Laminated, by hand',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Iced Oat Cortado',
    kind: 'House blend',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Tonka Tiramisu',
    kind: 'Signature',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Morning Croissant',
    kind: 'T65 flour, cultured butter',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function Featured() {
  const trackRef = useRef(null);

  return (
    <section className="relative py-28 md:py-36 bg-cream">
      <div className="px-6 md:px-10 flex items-end justify-between mb-14 md:mb-20">
        <Reveal>
          <p className="text-[11px] uppercase tracking-widest2 text-ash mb-4">Featured — 01</p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-espresso max-w-[14ch] leading-[1.05]">
            A handful of things <span className="italic">we love right now.</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="hidden md:block">
          <p className="text-[11px] uppercase tracking-widest2 text-ash">Drag →</p>
        </Reveal>
      </div>

      <motion.div
        ref={trackRef}
        className="cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar"
      >
        <motion.ul
          drag="x"
          dragConstraints={{ left: -1600, right: 0 }}
          dragElastic={0.08}
          className="flex gap-6 md:gap-10 px-6 md:px-10 select-none"
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.name}
              className="shrink-0 w-[72vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw]"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-sand">
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-soft hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between mt-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-ash">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-espresso mt-1">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-mocha max-w-[14ch] text-right">{item.kind}</p>
              </div>
            </li>
          ))}
          <li className="shrink-0 w-10 md:w-24" aria-hidden />
        </motion.ul>
      </motion.div>
    </section>
  );
}
