import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { JunkMail } from './components/JunkMail';
import { LivingRoomSessions } from './components/LivingRoomSessions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navbar />
      <Hero />
      <Philosophy />
      <JunkMail />
      <LivingRoomSessions />
      <Footer />
    </div>
  );
}
