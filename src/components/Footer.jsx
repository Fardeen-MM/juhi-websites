import Reveal from './Reveal.jsx';
import Logo from './Logo.jsx';
import { PixelStar, PixelHeart, PixelArrow, PixelDivider } from './Pixel.jsx';

export default function Footer() {
  return (
    <footer id="visit" className="relative bg-rust text-cream overflow-hidden">
      <div className="absolute inset-0 crt-scan opacity-30 pointer-events-none" />
      <div className="relative px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-gold mb-6 inline-flex items-center gap-2">
            <PixelHeart size={12} className="text-gold animate-sparkle" /> Stay a while
          </p>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[1] tracking-tight">
            Order online. <span className="italic text-gold">Eat together.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-cream/85">
            We&apos;re a small kitchen, a bigger community. No physical shop yet —
            we bake to order, pickup in E8, delivery across London, and we host
            events in beloved spaces around the city.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 border-t border-cream/15 pt-14">
          <Reveal>
            <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-4">Pickup</p>
            <p className="font-display text-xl leading-snug">
              Dalston · E8<br />
              Tue &ndash; Sun, by appointment<br />
              <span className="text-cream/60">We&apos;ll text you when it&apos;s ready</span>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-4">Delivery</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li className="flex justify-between gap-6"><span>Zone 1–2</span><span className="tabular-nums">£4</span></li>
              <li className="flex justify-between gap-6"><span>Zone 3–4</span><span className="tabular-nums">£6</span></li>
              <li className="flex justify-between gap-6"><span>Outer London</span><span className="tabular-nums">£9</span></li>
              <li className="flex justify-between gap-6"><span>UK post</span><span>from £4.50</span></li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-4">Say hello</p>
            <ul className="space-y-1 text-[15px] text-cream/85">
              <li>hello@nomadhouse.co</li>
              <li className="tabular-nums">+44 20 3456 7788</li>
              <li className="mt-4 font-pixelbold text-[9px] uppercase tracking-widest2 text-gold">Events & catering</li>
              <li>gatherings@nomadhouse.co</li>
              <li className="mt-4 font-pixelbold text-[9px] uppercase tracking-widest2 text-gold">Wholesale</li>
              <li>trade@nomadhouse.co</li>
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-4">Elsewhere</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="https://instagram.com/" className="inline-flex items-center gap-2 border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold">
                  @nomadhouse <PixelArrow size={12} />
                </a>
              </li>
              <li>
                <a href="#/community" className="inline-flex items-center gap-2 border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold">
                  Discord community <PixelArrow size={12} />
                </a>
              </li>
              <li>
                <a href="#/journal" className="inline-flex items-center gap-2 border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold">
                  The Journal <PixelArrow size={12} />
                </a>
              </li>
              <li>
                <a href="#/events" className="inline-flex items-center gap-2 border-b border-cream/20 pb-1 transition-colors duration-500 hover:border-gold hover:text-gold">
                  Upcoming events <PixelArrow size={12} />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <form className="mt-20 border-t border-cream/15 pt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-gold mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-gold" /> The letter
              </p>
              <p className="font-display text-2xl md:text-3xl leading-snug max-w-md">
                Weekly stories, new drops, and invitations to supper clubs.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col sm:flex-row gap-3 md:items-center">
              <input
                type="email"
                required
                placeholder="your.email@diaspora.home"
                className="flex-1 bg-transparent border-b border-cream/40 py-3 px-1 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold font-pixel text-[16px]"
              />
              <button
                type="submit"
                className="font-pixelbold px-7 py-3 text-[11px] uppercase tracking-widest2 bg-bone text-maroon hover:bg-gold hover:text-rust transition-colors duration-300 pixel-shadow-cream"
              >
                Subscribe
              </button>
            </div>
          </form>
        </Reveal>

        <PixelDivider className="mt-20 text-gold" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 font-pixelbold text-[9px] uppercase tracking-widest2 text-cream/60">
          <div>
            <Logo size="sm" inverted showEst={false} />
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p>© {new Date().getFullYear()} Nomad House. Heritage in motion.</p>
            <p className="inline-flex items-center gap-2">Built slowly, in London <PixelHeart size={10} className="text-gold" /> Mogadishu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
