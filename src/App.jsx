import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Featured from './components/Featured.jsx';
import MenuPreview from './components/MenuPreview.jsx';
import Signature from './components/Signature.jsx';
import Lifestyle from './components/Lifestyle.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Featured />
      <MenuPreview />
      <Signature />
      <Lifestyle />
      <Footer />
    </main>
  );
}
