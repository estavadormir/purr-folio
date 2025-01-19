import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About"
      data-testid="about"
      className={twMerge(
        'h-screen z-11 relative flex w-full flex-col justify-center bg-slate-900 lg:flex-row xl:min-h-screen'
      )}
    >
      <div className={twMerge('z-11 flex flex-col justify-center lg:w-1/2')}>
        <h2
          className={twMerge(
            'ml-5 mt-5 flex justify-center pl-2 text-4xl text-gray-100 lg:mb-2 lg:justify-start lg:text-6xl'
          )}
        >
          About me<span className="text-tiktokPink">...</span>
        </h2>
        <div className={twMerge('w-48 h-1 bg-tiktokPink ml-7 mt-2')}></div>
        <div className={twMerge('w-32 h-1 bg-tiktokPink ml-7 mt-1')}></div>
        <div
          className={twMerge(
            'flex flex-col justify-center px-5 w-full lg:flex-row lg:pt-10 rounded rounded-t-3xl py-3 text-white lg:justify-start min-w-1/2 max-w-1/2 list-disc pb-1 text-left font-medium '
          )}
        >
          <ul className={twMerge('[&>*]:px-1 text-2xl')}>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Luxembourg"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                🏠 Based in Luxembourg.
              </li>
            </Link>
            <Link
              className={twMerge('h-fit hidden sm:flex')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Time"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                👷‍♀️ 7 years of experience in different companies, including a few
                startups, space sector and the financial sector.
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Bachelor_of_Computer_Science"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                📕 Bachelor in Computer Science
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Languages_of_Europe"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                🗣️ English, French and Portuguese.
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://worldofwarcraft.com/"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                🎮 WoW Player{' '}
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Longboard_(skateboard)"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                🛹 Longboard is my fav transportation method
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Running"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                🏃 Marathonist
              </li>
            </Link>
            <Link
              className={twMerge('h-fit')}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Cat"
            >
              <li className={twMerge('hover:text-tiktokPink cursor-pointer')}>
                😺 Loves cats
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};
