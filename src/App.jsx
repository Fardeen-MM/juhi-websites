import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import JournalPage from './pages/JournalPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { useRoute } from './hooks/useRoute.js';

const ROUTES = {
  home: Home,
  shop: Shop,
  community: CommunityPage,
  events: EventsPage,
  journal: JournalPage,
  about: AboutPage,
};

export default function App() {
  const route = useRoute();
  const Page = ROUTES[route] || Home;

  useEffect(() => {
    const titles = {
      home: 'Nomad House — Honoring Heritage, One Bite at a Time',
      shop: 'Shop — Nomad House',
      community: 'Community — Nomad House',
      events: 'Events — Nomad House',
      journal: 'The Journal — Nomad House',
      about: 'About — Nomad House',
    };
    document.title = titles[route] || titles.home;
  }, [route]);

  return (
    <main className="relative min-h-screen bg-bone">
      <Nav route={route} />
      <Page />
      <Footer />
    </main>
  );
}
