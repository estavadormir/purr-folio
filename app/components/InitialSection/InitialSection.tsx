'use client';
import { twMerge } from 'tailwind-merge';
import Typewriter from 'typewriter-effect';
import { MoreInfo } from './MoreInfo';
import { ScrollIndicator } from './ScrollIndicator';

export const InitialSection = () => {
  return (
    <>
      <section
        id="home"
        data-testid="home"
        className={twMerge(
          'top-0 flex h-screen w-full flex-col items-center justify-center py-28'
        )}
      >
        <h1 className={twMerge('mb-2 bg-opacity-75 text-4xl lg:text-6xl')}>
          Hi, I'm <br className={twMerge('hidden ')} />
          <span
            className={twMerge(
              ' relative text-brand-accent text-tiktokAqua h-20 overflow-x-hidden whitespace-nowrap pt-2'
            )}
          >
            André
          </span>
          <div
            className={twMerge('text-xl font-light lg:text-3xl text-center')}
          >
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
        </h1>
        <ul
          className={twMerge(
            '[&>li]:mb-10 [&>li>*]:bg-tiktokAqua z-10 flex flex-col items-center justify-center mt-5 cursor-pointer space-x-0.5 text-base font-bold sm:flex-row lg:space-x-1'
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
      </section>
      <ScrollIndicator />
    </>
  );
};
