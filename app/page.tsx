import { twMerge } from 'tailwind-merge';
import {
  AboutSection,
  ContactSection,
  InitialSection,
  ProjectsSection,
} from '@/components';

const sections = [
  { Component: InitialSection, zIndex: 'z-10' },
  { Component: AboutSection, zIndex: 'z-20' },
  { Component: ProjectsSection, zIndex: 'z-30' },
  { Component: ContactSection, zIndex: 'z-40' },
];

export default function HomePage() {
  return (
    <main className={twMerge('relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900')}>
      {sections.map(({ Component, zIndex }, index) => (
        <div key={index} className={`h-screen sticky top-0 ${zIndex}`}>
          <Component />
        </div>
      ))}
    </main>
  );
}
