import Reveal from './Reveal.jsx';

const SHOTS = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
    alt: 'Morning light, empty tables',
    span: 'md:col-span-7 aspect-[4/5] md:aspect-[5/6]',
  },
  {
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80',
    alt: 'A slow pour',
    span: 'md:col-span-5 aspect-[4/5] md:aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Two cups at a wooden counter',
    span: 'md:col-span-5 aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80',
    alt: 'Reading, alone',
    span: 'md:col-span-7 aspect-[4/5] md:aspect-[16/10]',
  },
];

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="relative bg-cream py-28 md:py-40">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-terracotta mb-4">The House — 05</p>
            <h2 className="font-display font-light text-4xl md:text-6xl text-espresso max-w-[18ch] leading-[1.05]">
              A room for <span className="italic">slow afternoons,</span> quiet conversation, and
              second cups.
            </h2>
          </Reveal>
          <Reveal delay={150} className="max-w-sm">
            <p className="text-sm text-mocha leading-relaxed">
              Linen tablecloths, long windows, and a little jazz between twelve and three. We keep
              the lights warm and the music soft.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 80} className={shot.span}>
              <figure className="relative h-full w-full overflow-hidden bg-sand">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-soft hover:scale-[1.03]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
