import {
  AboutSection,
  ContactSection,
  InitialSection,
  ProjectsSection,
} from '@/components';
import type { NextPage } from 'next';
import { twMerge } from 'tailwind-merge';

const App: NextPage = () => {
  return (
    <main className={twMerge('relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900')}>
      <div className="h-screen sticky top-0 z-10">
        <InitialSection />
      </div>
      <div className="h-screen sticky top-0 z-20">
        <AboutSection />
      </div>
      <div className="h-screen sticky top-0 z-30">
        <ProjectsSection />
      </div>
      <div className="h-screen sticky top-0 z-40">
        <ContactSection />
      </div>
    </main>
  );
};

export default App;
