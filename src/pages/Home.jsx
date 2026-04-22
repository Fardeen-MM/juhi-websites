import HeroCanvas from '../components/HeroCanvas.jsx';
import Marquee from '../components/Marquee.jsx';
import Featured from '../components/Featured.jsx';
import MenuPreview from '../components/MenuPreview.jsx';
import Signature from '../components/Signature.jsx';
import CommunityTeaser from '../components/CommunityTeaser.jsx';
import EventsTeaser from '../components/EventsTeaser.jsx';
import JournalTeaser from '../components/JournalTeaser.jsx';
import Lifestyle from '../components/Lifestyle.jsx';

export default function Home() {
  return (
    <>
      <HeroCanvas />
      <Marquee />
      <Featured />
      <MenuPreview />
      <Signature />
      <CommunityTeaser />
      <EventsTeaser />
      <JournalTeaser />
      <Lifestyle />
    </>
  );
}
