import {
  AboutSection,
  ContactSection,
  InitialSection,
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
        <TechstackSection part="first" bgColor="bg-white" />
      </div>
      <div className="h-screen sticky top-0 z-30">
        <TechstackSection part="second" bgColor="bg-slate-100" />
      </div>
      <div className="h-screen sticky top-0 z-40">
        <ContactSection />
      </div>
    </main>
  );
};

export default App;
