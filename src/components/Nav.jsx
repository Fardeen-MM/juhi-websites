export default function Nav() {
  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signature', href: '#signature' },
    { label: 'House', href: '#lifestyle' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-bone">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="font-display text-xl tracking-wider2">
          Nomad House
        </a>
        <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100 transition-opacity duration-500">
              {l.label}
            </a>
          ))}
        </nav>
        <span className="text-[11px] uppercase tracking-widest2 opacity-80">Est. 2019</span>
      </div>
    </header>
  );
}
