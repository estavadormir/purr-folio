'use client';
import { Section } from '@/components/ui';
import { twMerge } from 'tailwind-merge';
import dynamic from 'next/dynamic';
import { MoreInfo } from './MoreInfo';
import { ScrollIndicator } from './ScrollIndicator';

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
  loading: () => <span className="opacity-50">a developer</span>
});

export const InitialSection = () => {
  return (
    <>
      <Section
        id="home"
        title="Hi, I'm"
        subtitle="André"
        variant="initial"
        className="top-0 flex h-screen w-full flex-col items-center justify-center"
      >
        <div className={twMerge('text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto')}>
          <div className={twMerge('text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-light mt-6 sm:mt-8 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]')}>
            <Typewriter
              options={{
                strings: [
                  'a developer',
                  'a good developer',
                  'an ok developer',
                  'a cool developer',
                  'a kewl developer',
                  'a passionate coder',
                  'a problem solver',
                  ':)',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </div>

          <nav className={twMerge('mt-12 sm:mt-16 lg:mt-20')}>
            <ul
              className={twMerge(
                'flex flex-col sm:flex-row items-center justify-center',
                'space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8',
                'px-4 sm:px-0 w-full sm:w-auto'
              )}
            >
              <MoreInfo
                items={[
                  { href: '#about', text: 'Who?' },
                  { href: '#techstack', text: 'Tech Stack' },
                  { href: '#contacts', text: 'Contact' },
                ]}
              />
            </ul>
          </nav>
        </div>
      </Section>
      <ScrollIndicator />
    </>
  );
};
