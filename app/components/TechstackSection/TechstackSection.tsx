'use client';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const TechstackSection = () => {
  return (
    <section
      id="techstack"
      data-testid="techstackSection"
      className="h-[110vh] z-13 relative top-0 flex w-full flex-col items-center justify-center bg-white"
    >
      <h2
        className={twMerge(
          'ml-5 mt-5 flex justify-center pl-2 text-4xl text-slate-900 lg:mb-2 lg:justify-start lg:text-6xl'
        )}
      >
        Tech stack
      </h2>
      <div className={twMerge('w-48 h-1 bg-tiktokPink ml-7 mt-2')}></div>
      <div className={twMerge('w-32 h-1 bg-tiktokPink ml-7 mt-1')}></div>
      <div className="flex flex-col mt-3 h-screen">
        <ul className="w-full flex-col border-black px-5 pb-1 text-left font-medium text-white">
          <div className="rounded border-2 border-black bg-white py-3 text-black hover:shadow-xl sm:px-10">
            <li className="ml-5 font-bold sm:ml-0">CSS frameworks:</li>
            <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://tailwindcss.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  TailwindCSS
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://getbootstrap.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Bootstrap
                </li>
              </Link>
            </ul>
            <li className="ml-5 font-bold sm:ml-0">Languages:</li>
            <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.typescriptlang.org/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  TypeScript
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.php.net/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  PHP
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  HTML
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  CSS
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 font-bold sm:ml-0 sm:mt-0">
              Testing libraries:
            </li>
            <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://jestjs.io/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Jest
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.cypress.io/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Cypress
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://storybook.js.org/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Storybook
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://vitest.dev/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Vitest
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 font-bold sm:ml-0 sm:mt-0">Frameworks:</li>
            <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://nextjs.org/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  NextJS
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.solidjs.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  SolidJS
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://laravel.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Laravel
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://astro.build"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Astro
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Runtime Environments
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://nodejs.org/en"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Node.js
                </li>
              </Link>
              <Link className="h-fit" rel="noreferrer" href="https://bun.sh/">
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Bun
                </li>
              </Link>
              <Link className="h-fit" rel="noreferrer" href="https://deno.com/">
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Deno 2.0
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              CI/CD and tools
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://developer.chrome.com/docs/lighthouse/overview"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Lighthouse & Chrome DevTools
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.jenkins.io/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Jenkins
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://docs.github.com/en/actions"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Github actions
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://docs.gitlab.com/runner/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  GitLab CI/CD
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.checklyhq.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Checkly
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://betterstack.com/logs"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Betterstack
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 font-bold sm:ml-0 sm:mt-0 flex">
              Databases
            </li>
            <ul className="mb-5 h-full w-full flex-row  flex-wrap justify-start pl-3 flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.postgresql.org/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Postgres
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.mongodb.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  MongoDB
                </li>
              </Link>
              <Link className="h-fit" rel="noreferrer" href="https://redis.io/">
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Redis
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Code quality
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.sonarsource.com/products/sonarqube/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Sonarqube
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Favorite Editor & AI assistants
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
              <Link className="h-fit" rel="noreferrer" href="https://zed.dev/">
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Zed (vim_mode: true)
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://claude.ai/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Claude
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 font-bold sm:ml-0 sm:mt-0 flex">
              Libraries
            </li>
            <ul className="mb-5 h-full w-full flex-row flex-wrap justify-start pl-3 flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://tanstack.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Tanstack Query (solidJS and reactJS)
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.framer.com/motion/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Framer Motion
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://github.com/changesets/changesets"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Changeset
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              CMS
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://payloadcms.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  PayloadCMS
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://strapi.io/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Strapi
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://www.notion.so/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Notion (as a cms, works w)
                </li>
              </Link>
            </ul>
          </div>
        </ul>
      </div>
    </section>
  );
};
