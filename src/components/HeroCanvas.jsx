import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Logo from './Logo.jsx';
import { PixelStar, PixelArrow, PixelFlame } from './Pixel.jsx';

// Items are placed inside a large canvas. The whole canvas is draggable,
// items are static relative to each other (like palmer-dinnerware.com).
// Coordinates are in px within the 2200 x 1500 inner canvas.
const CANVAS_W = 2400;
const CANVAS_H = 1600;

const ITEMS = [
  // Somali-led
  { id: 'xalwo-caano', name: 'Xalwo Caano', origin: 'Somalia', price: '£9', x: 140, y: 120, w: 260, rot: -7, img: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=900&q=80' },
  { id: 'iced-bun', name: 'Somali Iced Bun', origin: 'Somalia', price: '£5.50', x: 470, y: 70, w: 230, rot: 4, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80' },
  { id: 'shaah-cadays', name: 'Shaah Cadays', origin: 'Somalia', price: '£4.50', x: 780, y: 180, w: 220, rot: -5, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80' },
  { id: 'malawax', name: 'Malawax Roll', origin: 'Somalia', price: '£4', x: 1070, y: 90, w: 240, rot: 8, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80' },
  { id: 'sambuus', name: 'Sambuus · lentil', origin: 'Somalia', price: '£3.50', x: 1380, y: 220, w: 210, rot: -6, img: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?auto=format&fit=crop&w=900&q=80' },
  { id: 'canjeero', name: 'Canjeero Stack', origin: 'Somalia', price: '£5', x: 1650, y: 80, w: 250, rot: 5, img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80' },
  { id: 'muufo', name: 'Muufo Mini', origin: 'Somalia', price: '£3', x: 1960, y: 260, w: 200, rot: -10, img: 'https://images.unsplash.com/photo-1590080875871-542e1a54a616?auto=format&fit=crop&w=900&q=80' },

  // East African family
  { id: 'yirga', name: 'Iced Yirgacheffe', origin: 'Ethiopia', price: '£5.50', x: 120, y: 490, w: 250, rot: 6, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80' },
  { id: 'kenya-cold', name: 'Kenya Cold Brew', origin: 'Kenya', price: '£6', x: 440, y: 560, w: 230, rot: -4, img: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=900&q=80' },
  { id: 'mandazi', name: 'Mandazi · mini', origin: 'Kenya', price: '£1.20', x: 720, y: 480, w: 220, rot: 9, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80' },
  { id: 'kashata', name: 'Kashata Square', origin: 'Tanzania', price: '£1.50', x: 1010, y: 560, w: 200, rot: -8, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80' },
  { id: 'himbasha', name: 'Himbasha Mini', origin: 'Eritrea', price: '£2.50', x: 1280, y: 480, w: 240, rot: 5, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80' },
  { id: 'rwanda-tonic', name: 'Rwanda Espresso Tonic', origin: 'Rwanda', price: '£6', x: 1590, y: 560, w: 220, rot: -3, img: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&w=900&q=80' },
  { id: 'chapati', name: 'Ugandan Chapati', origin: 'Uganda', price: '£2', x: 1870, y: 510, w: 240, rot: 7, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=900&q=80' },

  // Bottom row
  { id: 'basbousa', name: 'Date Basbousa', origin: 'Diaspora', price: '£1.80', x: 200, y: 960, w: 230, rot: 6, img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80' },
  { id: 'rose-iced', name: 'Rose Iced Macchiato', origin: 'House', price: '£6', x: 500, y: 1010, w: 210, rot: -8, img: 'https://images.unsplash.com/photo-1517705600644-3b7dab5a1134?auto=format&fit=crop&w=900&q=80' },
  { id: 'cardamom-esp', name: 'Cardamom Iced Espresso', origin: 'House', price: '£5.50', x: 780, y: 940, w: 240, rot: 9, img: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&w=900&q=80' },
  { id: 'affogato', name: 'Bun Affogato', origin: 'House', price: '£7', x: 1080, y: 1010, w: 230, rot: -5, img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80' },
  { id: 'xalwo-cambe', name: 'Xalwo Cambe (mango)', origin: 'Somalia', price: '£9', x: 1370, y: 940, w: 250, rot: 6, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80' },
  { id: 'ceremony-set', name: 'Bun Ceremony Set', origin: 'House', price: '£68', x: 1680, y: 1010, w: 240, rot: -7, img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80' },
  { id: 'cambuulo', name: 'Cambuulo Bowl', origin: 'Somalia', price: '£6', x: 1990, y: 950, w: 220, rot: 8, img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80' },
];

function DragItem({ item, onHover, onLeave }) {
  return (
    <motion.div
      className="absolute select-none"
      style={{ top: item.y, left: item.x, width: item.w }}
      initial={{ rotate: item.rot, opacity: 0, y: 16 }}
      animate={{ rotate: item.rot, opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, rotate: item.rot * 0.4, zIndex: 30 }}
      onHoverStart={() => onHover(item)}
      onHoverEnd={onLeave}
    >
      <div className="group relative">
        <div className="absolute -inset-6 rounded-full bg-ember/0 blur-2xl group-hover:bg-ember/60 transition-all duration-500" />
        <div className="relative aspect-[4/5] overflow-hidden bg-sand group-hover:glow-ember transition-all duration-500">
          <img
            src={item.img}
            alt={item.name}
            draggable={false}
            loading="lazy"
            className="h-full w-full object-cover pointer-events-none"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroCanvas() {
  const outerRef = useRef(null);
  const [hover, setHover] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      if (outerRef.current) {
        const r = outerRef.current.getBoundingClientRect();
        setViewport({ w: r.width, h: r.height });
        // Center canvas initially
        x.set(-(CANVAS_W - r.width) / 2);
        y.set(-(CANVAS_H - r.height) / 2 + 40);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [x, y]);

  const onMouseMove = (e) => {
    if (!outerRef.current) return;
    const r = outerRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const leftBound = -(CANVAS_W - viewport.w) - 60;
  const topBound = -(CANVAS_H - viewport.h) - 60;

  return (
    <section
      id="top"
      ref={outerRef}
      onMouseMove={onMouseMove}
      className={`relative h-[100svh] w-full overflow-hidden bg-bone ${isDragging ? 'drag-grabbing' : 'drag-grab'}`}
    >
      <div className="absolute inset-0 bg-grain-texture opacity-40 pointer-events-none" />
      <div className="absolute inset-0 crt-scan opacity-40 pointer-events-none" />

      <motion.div
        drag
        dragConstraints={{ left: leftBound, right: 60, top: topBound, bottom: 60 }}
        dragElastic={0.06}
        dragMomentum
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x, y, width: CANVAS_W, height: CANVAS_H }}
        className="absolute top-0 left-0"
      >
        {ITEMS.map((item) => (
          <DragItem key={item.id} item={item} onHover={setHover} onLeave={() => setHover(null)} />
        ))}
      </motion.div>

      {/* Top bar: small logo + tiny tagline */}
      <div className="absolute top-24 md:top-28 inset-x-0 z-20 pointer-events-none flex flex-col items-center gap-2 px-4 text-center">
        <Logo size="sm" showEst={false} />
        <p className="font-pixel text-[13px] md:text-[15px] uppercase tracking-widest2 text-maroon/80">
          <PixelStar size={10} className="mr-2 text-maroon animate-sparkle" />
          Honoring Heritage · Somali-led, Diaspora-wide
          <PixelStar size={10} className="ml-2 text-maroon animate-sparkle" />
        </p>
      </div>

      {/* Bottom left: pixel info card */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
        <div className="font-pixel text-maroon text-[14px] md:text-[16px] leading-tight bg-paper/85 backdrop-blur-sm px-3 py-2 pixel-border max-w-[260px]">
          <div className="flex items-center gap-2 mb-1">
            <PixelFlame size={12} className="text-ember animate-sparkle" />
            <span className="font-pixelbold text-[9px] tracking-widest2 uppercase">Loading the counter</span>
          </div>
          <p>Drag the background →<br />hover an item to read its name.</p>
        </div>
      </div>

      {/* Bottom right: pixel members badge + CTA */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-3">
        <a
          href="#/community"
          className="pointer-events-auto font-pixelbold text-[10px] tracking-widest2 uppercase bg-maroon text-bone px-4 py-2 inline-flex items-center gap-2 pixel-shadow-cream hover:bg-rust transition-colors"
        >
          <span className="w-2 h-2 bg-y2klime animate-blink" />
          247 online
        </a>
        <a
          href="#/shop"
          className="pointer-events-auto font-pixelbold text-[10px] tracking-widest2 uppercase border-2 border-maroon text-maroon bg-bone px-4 py-2 inline-flex items-center gap-2 hover:bg-maroon hover:text-bone transition-colors"
        >
          Shop the house
          <PixelArrow size={14} />
        </a>
      </div>

      {/* Cursor label */}
      {hover && !isDragging && (
        <div
          className="absolute pointer-events-none z-40"
          style={{
            left: mouse.x + 18,
            top: mouse.y + 18,
          }}
        >
          <div className="bg-maroon text-bone font-pixel px-3 py-1.5 pixel-shadow-cream whitespace-nowrap text-[14px] md:text-[16px] leading-none">
            <p className="font-pixelbold text-[9px] tracking-widest2 uppercase text-y2klime mb-0.5">
              {hover.origin} · {hover.price}
            </p>
            {hover.name}
          </div>
        </div>
      )}

      {/* Pixel corner brackets */}
      <PixelCorner className="top-24 left-4" corner="tl" />
      <PixelCorner className="top-24 right-4" corner="tr" />
    </section>
  );
}

function PixelCorner({ className = '', corner }) {
  const rots = { tl: 0, tr: 90, br: 180, bl: 270 };
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute w-5 h-5 pixel-render text-maroon pointer-events-none ${className}`}
      style={{ transform: `rotate(${rots[corner]}deg)` }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="0" y="0" width="8" height="2" />
        <rect x="0" y="0" width="2" height="8" />
      </g>
    </svg>
  );
}
