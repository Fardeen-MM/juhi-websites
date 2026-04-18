import Reveal from './Reveal.jsx';

export default function PageHeader({ eyebrow, title, italic, subtitle, no }) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-bone overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture opacity-30 pointer-events-none" />
      <div className="relative px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest3 text-maroon/60 mb-5">
              {eyebrow}
            </p>
          </Reveal>
          {no && (
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-maroon/50">
                № {no}
              </p>
            </Reveal>
          )}
        </div>
        <Reveal delay={80}>
          <h1 className="font-display font-light text-maroon text-[12vw] md:text-[7vw] leading-[0.95] tracking-tight">
            {title} {italic && <span className="italic">{italic}</span>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={180}>
            <p className="mt-10 max-w-2xl text-[15px] md:text-[17px] text-charcoal leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
