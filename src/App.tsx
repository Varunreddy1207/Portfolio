import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import JourneySection from './sections/JourneySection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div
      className="font-kanit"
      style={{ background: '#080A0F', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
    </div>
  );
}
