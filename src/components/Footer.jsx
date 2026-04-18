import Reveal from './Reveal.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer id="visit" className="relative bg-rust text-cream">
      <div className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[1] tracking-tight">
            Come by. <span className="italic text-gold">Stay a while.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-cream/85">
            We&apos;re a small kitchen, a bigger community. The door is open
            Tuesday to Sunday — and the kettle is always on.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 border-t border-cream/15 pt-14">
          <Reveal>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Find us</p>
            <p className="font-display text-xl leading-snug">
              14 Ridley Road<br />
              Dalston, London<br />
              E8 2NP
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Hours</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li className="flex justify-between gap-6"><span>Tue — Thu</span><span className="tabular-nums">8 — 19</span></li>
              <li className="flex justify-between gap-6"><span>Fri — Sat</span><span className="tabular-nums">8 — 22</span></li>
              <li className="flex justify-between gap-6"><span>Sunday</span><span className="tabular-nums">9 — 17</span></li>
              <li className="flex justify-between gap-6 text-cream/60"><span>Monday</span><span>Closed</span></li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Say hello</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li>hello@nomadhouse.co</li>
              <li className="tabular-nums">+44 20 3456 7788</li>
              <li className="mt-4 text-[11px] uppercase tracking-widest2 text-gold">Wholesale</li>
              <li>trade@nomadhouse.co</li>
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Elsewhere</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  href="https://instagram.com/"
                  className="inline-block border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold"
                >
                  @nomadhouse
                </a>
              </li>
              <li>
                <a
                  href="#/community"
                  className="inline-block border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold"
                >
                  Discord community
                </a>
              </li>
              <li>
                <a
                  href="#/journal"
                  className="inline-block border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold"
                >
                  The Journal
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <form className="mt-20 border-t border-cream/15 pt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">The letter</p>
              <p className="font-display text-2xl md:text-3xl leading-snug max-w-md">
                Weekly stories, new drops, and invitations to supper clubs.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col sm:flex-row gap-3 md:items-center">
              <input
                type="email"
                required
                placeholder="your.email@diaspora.home"
                className="flex-1 bg-transparent border-b border-cream/40 py-3 px-1 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="px-7 py-3 text-[11px] uppercase tracking-widest2 bg-bone text-maroon hover:bg-gold hover:text-rust transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </Reveal>

        <div className="mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 text-[11px] uppercase tracking-widest2 text-cream/60">
          <div>
            <Logo size="sm" inverted showEst={false} />
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p>© {new Date().getFullYear()} Nomad House. Heritage in motion.</p>
            <p>Built slowly, in London & Addis.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
