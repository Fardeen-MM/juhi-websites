import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Logo from '../components/Logo.jsx';
import { PixelStar, PixelHeart, PixelArrow, PixelDivider } from '../components/Pixel.jsx';

const VALUES = [
  {
    title: 'Heritage as Living Practice',
    body: 'Somali recipes passed down, then re-read. We don\'t preserve culture in amber — we live it, adapt it, share it, and make room for every diaspora voice.',
  },
  {
    title: 'Community Over Commerce',
    body: 'We\'re building relationships, not customer lists. The kitchen is the excuse; the community is the point.',
  },
  {
    title: 'Quality as Respect',
    body: 'Every product honors the generations who perfected these recipes. Cheap corners dishonor that legacy.',
  },
  {
    title: 'Somali First, Diaspora Wide',
    body: 'We lead with our founder\'s Somali heritage — and make space for every East African kitchen, from Addis to Arusha to Kigali.',
  },
  {
    title: 'Storytelling as Connection',
    body: 'Every item we sell tells part of the larger story of the East African Diaspora experience.',
  },
  {
    title: 'Inclusive Excellence',
    body: 'Rooted in specific cultural identity, welcoming to everyone curious, respectful, and hungry.',
  },
];

const TEAM = [
  {
    name: 'Ayan H.',
    role: 'Founder · Head Baker',
    heritage: 'Somali-British',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Yohannes B.',
    role: 'Head of Coffee',
    heritage: 'Ethiopian-British',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Halima A.',
    role: 'Community & Events',
    heritage: 'Somali-Kenyan',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        no="05"
        eyebrow="About the House"
        title="Home travels"
        italic="with us."
        subtitle="For the East African Diaspora, home isn't just a place — it's the smell of shaah, the taste of your hooyo's xalwo, the rhythm of a language you speak with your heart even when your tongue stumbles."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand pixel-shadow border-2 border-maroon/30">
              <img
                src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=1400&q=80"
                alt="Xalwo caano — our founder's mother's recipe"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 font-pixel text-[14px] text-maroon/70 italic">
              Hooyo&apos;s xalwo, the recipe that started everything.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-4 inline-flex items-center gap-2">
              <PixelHeart size={10} className="text-maroon animate-sparkle" /> Our story
            </p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-[1.08]">
              A Somali daughter, a London kitchen, and every East African&apos;s <span className="italic">welcome.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] md:text-[16px] text-charcoal/90 leading-relaxed">
              <p>
                Nomad House was founded in 2026 by <strong>Ayan H.</strong>, a
                Somali-British daughter raised between Mogadishu and East
                London. She grew up in a kitchen where xalwo bubbled low on
                Fridays, where shaah cadays marked every visitor, where
                bariis was the center of every celebration.
              </p>
              <p>
                Years of working in London bakeries taught her one thing: the
                flavors she grew up with weren&apos;t on any shelf. Not properly.
                Not the way her hooyo made them. So she started small — a home
                kitchen, a WhatsApp order form, a pickup table at Ridley Road.
              </p>
              <p>
                Nomad House leads with Somali heritage and opens wide to the
                rest of East Africa. Our coffee is Ethiopian, Kenyan, and
                Rwandan. Our sweets draw from Tanzania, Uganda, Eritrea and
                Djibouti. Our Saturday kitchen is Somali-first — xalwo, canjeero,
                sambuus — but the table is long, and there&apos;s room for every
                story.
              </p>
              <p>
                We&apos;re not a shop yet. We&apos;re an online kitchen with a pickup
                hub in E8, delivery across London, and events hosted in
                partner spaces — from the Africa Centre to Dalston Curve Garden.
                One day we&apos;ll have four walls. For now, we have each other.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-t-2 border-maroon/30 pt-4">
                <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">Mission</p>
                <p className="font-display text-lg text-maroon leading-snug">
                  Celebrating the East African Diaspora — Somali-led — through
                  heirloom sweets, great coffee, and community.
                </p>
              </div>
              <div className="border-t-2 border-maroon/30 pt-4">
                <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mb-2">Vision</p>
                <p className="font-display text-lg text-maroon leading-snug">
                  Becoming the cultural home for the East African Diaspora in
                  the UK — online, around town, and (soon) under one roof.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <Reveal>
              <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
                <PixelStar size={10} className="text-maroon" /> What we stand on
              </p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[20ch]">
                Values, <span className="italic">quietly held.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="border-t-2 border-maroon/30 pt-6">
                  <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/50 mb-3">
                    № {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-2xl text-maroon leading-snug">{v.title}</h3>
                  <p className="mt-4 text-[14px] text-charcoal/85 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-pixelbold text-[10px] uppercase tracking-widest2 text-maroon/60 mb-3 inline-flex items-center gap-2">
              <PixelHeart size={10} className="text-maroon" /> The team
            </p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight">
              Who&apos;s <span className="italic">baking.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-sand border-2 border-maroon/20">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-maroon mt-5">{m.name}</h3>
                  <p className="font-pixelbold text-[9px] uppercase tracking-widest2 text-maroon/60 mt-1">
                    {m.role}
                  </p>
                  <p className="text-sm text-charcoal/70 mt-1">{m.heritage}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rust text-cream py-24 md:py-32">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto text-center">
          <Reveal>
            <Logo size="lg" inverted />
          </Reveal>
          <Reveal delay={120}>
            <PixelDivider className="text-gold mt-10" />
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl mx-auto font-display italic text-xl md:text-2xl text-cream/90 leading-snug">
              We&apos;re not just selling food. <br className="hidden md:block" />
              We&apos;re building home.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#/shop"
                className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 bg-bone text-maroon px-8 py-4 pixel-shadow-cream hover:bg-gold hover:text-rust transition-colors duration-300"
              >
                Shop the house <PixelArrow size={14} />
              </a>
              <a
                href="#/community"
                className="inline-flex items-center gap-3 font-pixelbold text-[11px] uppercase tracking-widest2 border-2 border-cream/50 px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Join the community <PixelArrow size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
