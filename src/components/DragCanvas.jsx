import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

const ITEMS = [
  // Iced coffees
  {
    id: 'iced-yirga',
    name: 'Iced Yirgacheffe',
    category: 'Iced Coffee',
    price: '£5.50',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    pos: { top: '8%', left: '6%' },
    rot: -8,
    w: 230,
  },
  {
    id: 'oat-cortado-ice',
    name: 'Oat Cortado Ice',
    category: 'Iced Coffee',
    price: '£5',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80',
    pos: { top: '4%', left: '38%' },
    rot: 5,
    w: 210,
  },
  {
    id: 'sidamo-cold',
    name: 'Sidamo Cold Brew',
    category: 'Iced Coffee',
    price: '£6',
    image:
      'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=900&q=80',
    pos: { top: '12%', right: '10%' },
    rot: -4,
    w: 250,
  },
  {
    id: 'cardamom-iced',
    name: 'Cardamom Iced Espresso',
    category: 'Iced Coffee',
    price: '£5.50',
    image:
      'https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&w=900&q=80',
    pos: { top: '48%', left: '12%' },
    rot: 9,
    w: 220,
  },
  {
    id: 'rose-macchiato',
    name: 'Rose Iced Macchiato',
    category: 'Iced Coffee',
    price: '£6',
    image:
      'https://images.unsplash.com/photo-1517705600644-3b7dab5a1134?auto=format&fit=crop&w=900&q=80',
    pos: { bottom: '10%', right: '22%' },
    rot: -12,
    w: 200,
  },
  {
    id: 'buna-affogato',
    name: 'Buna Affogato',
    category: 'Iced Coffee',
    price: '£7',
    image:
      'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80',
    pos: { top: '54%', right: '4%' },
    rot: 6,
    w: 230,
  },

  // Mini desserts
  {
    id: 'mini-mandazi',
    name: 'Mini Mandazi',
    category: 'Mini Dessert',
    price: '£1.20',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    pos: { top: '28%', left: '28%' },
    rot: -3,
    w: 190,
  },
  {
    id: 'halwa-bite',
    name: 'Halwa Bite',
    category: 'Mini Dessert',
    price: '£2',
    image:
      'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=900&q=80',
    pos: { top: '34%', right: '28%' },
    rot: 11,
    w: 180,
  },
  {
    id: 'kashata-square',
    name: 'Kashata Square',
    category: 'Mini Dessert',
    price: '£1.50',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
    pos: { bottom: '22%', left: '4%' },
    rot: 14,
    w: 210,
  },
  {
    id: 'basbousa-bite',
    name: 'Basbousa Bite',
    category: 'Mini Dessert',
    price: '£1.80',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    pos: { bottom: '6%', left: '32%' },
    rot: -7,
    w: 200,
  },
  {
    id: 'teff-tart',
    name: 'Honey Teff Tart',
    category: 'Mini Dessert',
    price: '£3',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    pos: { top: '62%', left: '42%' },
    rot: 4,
    w: 220,
  },
  {
    id: 'berbere-mini',
    name: 'Berbere Shortbread',
    category: 'Mini Dessert',
    price: '£1.50',
    image:
      'https://images.unsplash.com/photo-1600080971135-84ee10ea8002?auto=format&fit=crop&w=900&q=80',
    pos: { top: '18%', left: '62%' },
    rot: -10,
    w: 200,
  },
];

function DragCard({ item, onBringToFront, zIndex, dragConstraints }) {
  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing touch-none select-none"
      style={{
        ...item.pos,
        width: item.w,
        zIndex,
      }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.15}
      dragMomentum={true}
      onPointerDown={onBringToFront}
      initial={{ rotate: item.rot, opacity: 0, y: 20 }}
      animate={{ rotate: item.rot, opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileDrag={{ rotate: item.rot * 0.35, scale: 1.04, transition: { duration: 0.15 } }}
      whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
    >
      <div className="bg-paper border border-maroon/15 p-3 md:p-4 shadow-[0_10px_40px_-15px_rgba(125,36,17,0.35)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={item.image}
            alt={item.name}
            draggable={false}
            loading="lazy"
            className="h-full w-full object-cover pointer-events-none"
          />
          <span className="absolute top-2 left-2 text-[9px] uppercase tracking-widest2 bg-bone text-maroon px-2 py-1">
            {item.price}
          </span>
        </div>
        <div className="mt-3">
          <p className="text-[9px] uppercase tracking-widest2 text-maroon/60">{item.category}</p>
          <h3 className="font-display text-base md:text-lg text-maroon leading-tight mt-0.5">
            {item.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function DragCanvas() {
  const boundsRef = useRef(null);
  const [order, setOrder] = useState(() => ITEMS.map((i) => i.id));
  const [nonce, setNonce] = useState(0);

  const bringToFront = (id) => {
    setOrder((prev) => [...prev.filter((x) => x !== id), id]);
  };

  const reset = () => {
    setOrder(ITEMS.map((i) => i.id));
    setNonce((n) => n + 1);
  };

  return (
    <section id="drag" className="relative bg-bone overflow-hidden">
      <div className="px-6 md:px-10 pt-24 md:pt-32 pb-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">
              The Window — 02
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-maroon max-w-[18ch] leading-[1.05]">
              Iced things, <span className="italic">small sweets.</span> Push them around.
            </h2>
          </Reveal>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-sm text-charcoal leading-relaxed">
              Grab any piece and move it wherever you like. This is our Saturday
              counter — rearrange until it feels like home.
            </p>
            <button
              onClick={reset}
              className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-maroon border-b border-maroon pb-1 hover:text-rust hover:border-rust transition-colors"
            >
              ↺ Tidy up
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={boundsRef}
        className="relative mx-auto max-w-[1600px] h-[720px] md:h-[860px] mb-16 md:mb-24 bg-gradient-to-b from-paper/60 to-bone border-y border-maroon/15 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grain-texture opacity-30 pointer-events-none" />

        <div className="absolute top-5 left-5 md:top-7 md:left-8 text-[10px] uppercase tracking-widest2 text-maroon/50 pointer-events-none">
          Drag ✦ Release
        </div>
        <div className="absolute bottom-5 right-5 md:bottom-7 md:right-8 text-[10px] uppercase tracking-widest2 text-maroon/50 pointer-events-none">
          {ITEMS.length} pieces on the counter
        </div>

        {ITEMS.map((item) => (
          <DragCard
            key={`${item.id}-${nonce}`}
            item={item}
            zIndex={order.indexOf(item.id) + 10}
            onBringToFront={() => bringToFront(item.id)}
            dragConstraints={boundsRef}
          />
        ))}
      </div>
    </section>
  );
}
