'use client';
import { Section } from '@/components/ui';
import { twMerge } from 'tailwind-merge';
import Typewriter from 'typewriter-effect';
import { MoreInfo } from './MoreInfo';
import { ScrollIndicator } from './ScrollIndicator';

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
        <div className={twMerge('text-center')}>
          <div className={twMerge('text-xl font-light lg:text-3xl mt-4')}>
            <Typewriter
              options={{
                strings: [
                  'a developer',
                  'a good developer',
                  'an ok developer',
                  'a cool developer',
                  'a kewl developer',
                  ':)',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <nav className={twMerge('mt-12')}>
            <ul
              className={twMerge(
                'flex flex-col sm:flex-row items-center justify-center',
                'space-y-6 sm:space-y-0 sm:space-x-4', // Increased mobile spacing
                'px-4 sm:px-0 w-full sm:w-auto' // Added padding for mobile
              )}
            >
              <MoreInfo
                items={[
                  { href: '#about', text: 'Who?' },
                  { href: '#techstack', text: 'tech stack' },
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
