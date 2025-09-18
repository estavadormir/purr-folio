import {
  AboutSection,
  ContactSection,
  InitialSection,
  ProjectsSection,
  TechstackSection,
} from '@/components';
import type { NextPage } from 'next';
import { twMerge } from 'tailwind-merge';

const App: NextPage = () => {
  return (
    <main className={twMerge('relative bg-tiktokPink')}>
      <div className="h-screen sticky top-0 z-10">
        <InitialSection />
      </div>
      <div className="h-screen sticky top-0 z-20">
        <AboutSection />
      </div>
      <div className="h-screen sticky top-0 z-30">
        <TechstackSection bgColor="bg-gradient-to-br from-white via-slate-50 to-slate-100" />
      </div>
      <div className="h-screen sticky top-0 z-40">
        <ProjectsSection />
      </div>
      <div className="h-screen sticky top-0 z-50">
        <ContactSection />
      </div>
      <div className="h-screen"></div>
    </main>
  );
};

export default App;
