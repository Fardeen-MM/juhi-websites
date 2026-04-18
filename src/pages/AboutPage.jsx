import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Logo from '../components/Logo.jsx';

const VALUES = [
  {
    title: 'Heritage as Living Practice',
    body: 'Traditional recipes passed down, then re-read. We don\'t preserve culture in amber — we live it, adapt it, share it.',
  },
  {
    title: 'Community Over Commerce',
    body: 'We\'re building relationships, not customer lists. The bakery is the excuse; the community is the point.',
  },
  {
    title: 'Quality as Respect',
    body: 'Every product honors the generations who perfected these recipes. Cheap corners dishonor that legacy.',
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
    name: 'Ruhama Y.',
    role: 'Founder · Head Baker',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Yohannes B.',
    role: 'Head of Coffee',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Halima A.',
    role: 'Community & Events',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
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
        subtitle="For the East African Diaspora, home isn't just a place — it's the smell of cardamom in morning coffee, the taste of your grandmother's mandazi, the rhythm of a language you speak with your heart even when your tongue stumbles."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80"
                alt="A jebena waiting"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-4">Our story</p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-[1.08]">
              A cultural home for those who carry <span className="italic">multiple homes within them.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] md:text-[16px] text-charcoal/90 leading-relaxed">
              <p>
                Nomad House was born from a simple truth: home travels with us. Our
                Ethiopian coffee connects you to the birthplace of coffee itself.
                Our halwa carries the warmth of Somali family gatherings. Our
                fusion Injera Birthday Cake celebrates how we create new
                traditions while honoring old ones.
              </p>
              <p>
                Founded in 2026 by Ruhama Y., Nomad House exists at the
                intersection of memory and modernity. We honor traditional recipes
                passed down through generations while creating new traditions for
                those navigating life between cultures.
              </p>
              <p>
                But Nomad House is more than a bakery — it&apos;s a gathering place.
                Through our community hub, events, and digital spaces, we&apos;re
                building a home for those who carry multiple homes within them.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-t border-maroon/20 pt-4">
                <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-2">Mission</p>
                <p className="font-display text-lg text-maroon leading-snug">
                  Celebrating the East African Diaspora through baked goods,
                  merchandise, and community.
                </p>
              </div>
              <div className="border-t border-maroon/20 pt-4">
                <p className="text-[10px] uppercase tracking-widest2 text-maroon/60 mb-2">Vision</p>
                <p className="font-display text-lg text-maroon leading-snug">
                  Becoming the cultural home for the East African Diaspora in the UK.
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
              <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-3">What we stand on</p>
              <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight max-w-[20ch]">
                Values, <span className="italic">quietly held.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="border-t border-maroon/25 pt-6">
                  <p className="text-[10px] uppercase tracking-widest2 text-maroon/50 mb-3">
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
            <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mb-3">The team</p>
            <h2 className="font-display font-light text-3xl md:text-5xl text-maroon leading-tight">
              Who&apos;s <span className="italic">baking.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-sand">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-maroon mt-5">{m.name}</h3>
                  <p className="text-[11px] uppercase tracking-widest2 text-maroon/60 mt-1">
                    {m.role}
                  </p>
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
            <p className="mt-12 max-w-2xl mx-auto font-display italic text-xl md:text-2xl text-cream/90 leading-snug">
              We&apos;re not just selling food. <br className="hidden md:block" />
              We&apos;re building home.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#/shop"
                className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-widest2 bg-bone text-maroon hover:bg-gold hover:text-rust transition-colors duration-300"
              >
                Shop the house
              </a>
              <a
                href="#/community"
                className="inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-widest2 border border-cream/40 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Join the community
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
