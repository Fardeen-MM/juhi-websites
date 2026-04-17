import Reveal from './Reveal.jsx';

export default function Footer() {
  return (
    <footer id="visit" className="relative bg-espresso text-cream">
      <div className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[1] tracking-tight">
            Come by. <span className="italic text-clay">Stay a while.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 border-t border-cream/15 pt-14">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-clay mb-4">Find us</p>
            <p className="font-display text-xl leading-snug">
              24 Linden Lane<br />
              Bandra West, Mumbai<br />
              400050
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[11px] uppercase tracking-widest2 text-clay mb-4">Hours</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li className="flex justify-between gap-6"><span>Mon — Thu</span><span className="tabular-nums">8 — 21</span></li>
              <li className="flex justify-between gap-6"><span>Fri — Sat</span><span className="tabular-nums">8 — 23</span></li>
              <li className="flex justify-between gap-6"><span>Sunday</span><span className="tabular-nums">9 — 18</span></li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[11px] uppercase tracking-widest2 text-clay mb-4">Say hello</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li>hello@nomadhouse.cafe</li>
              <li className="tabular-nums">+91 22 4000 1900</li>
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-[11px] uppercase tracking-widest2 text-clay mb-4">Elsewhere</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href="https://instagram.com/"
                  className="inline-block border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-clay hover:text-clay"
                >
                  @nomadhouse
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-clay hover:text-clay"
                >
                  Journal
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 text-[11px] uppercase tracking-widest2 text-cream/60">
          <p>© {new Date().getFullYear()} Nomad House. All moments reserved.</p>
          <p>Made slowly, in Mumbai.</p>
        </div>
      </div>
    </footer>
  );
}
