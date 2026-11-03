import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import AboutSection from './sections/AboutSection';
import ResourcesSection from './sections/ResourcesSection';
import ContactSection from './sections/ContactSection';
import ShowreelModal from './components/ShowreelModal';
import ProjectModal from './components/ProjectModal';
import { ProjectDetail } from './data/artistData';

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <div className="font-kanit min-h-screen bg-[#08090C] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection onOpenShowreel={() => setIsShowreelOpen(true)} />

      {/* 2. Work Categories & Project Grid */}
      <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 3. About, Software Stack, Hardware Rig Specs & Pipeline */}
      <AboutSection />

      {/* 4. Free 3D Models & Educational Resources */}
      <ResourcesSection />

      {/* 5. Contact, Rates & Commission Inquiries */}
      <ContactSection />

      {/* Modals */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
