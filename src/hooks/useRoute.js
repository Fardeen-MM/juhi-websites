import { useEffect, useState } from 'react';

const parse = () => {
  const raw = window.location.hash.replace(/^#/, '');
  if (raw.startsWith('/')) {
    const clean = raw.slice(1).split('?')[0].split('#')[0];
    return clean || 'home';
  }
  return 'home';
};

export function useRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => {
      const next = parse();
      setRoute(next);
      if (window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function navigate(path) {
  window.location.hash = path.startsWith('/') ? `#${path}` : `#/${path}`;
}
