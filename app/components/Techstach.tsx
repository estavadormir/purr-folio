"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export const Techstack = () => {
  return (
    <section
      id="techstack"
      className="z-13 sticky top-0 flex h-screen w-full flex-col items-center justify-center bg-white bg-[length:105%_105%] bg-center bg-no-repeat transition-all duration-75"
    >
      <h1 className="mb-2 mt-5 flex px-10 text-xl text-black sm:pb-10 sm:text-4xl lg:text-6xl">
        <Typewriter
          options={{
            strings: ["Some of the Technologies that I use:", ":)"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div />
      <div className="flex flex-col">
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
                  Storybook (Accessibility tests and UI showcase)
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
                href="https://react.dev/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  ReactJS
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://angular.dev/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Angular
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Version control
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row  flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://git-scm.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  GIT
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://subversion.apache.org/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  SVN
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
                  GitLab runner
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
                  Betterstack logs (former Logtail)
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Databases
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row  flex-wrap justify-start pl-3 lg:flex">
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
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://vercel.com/docs/storage/vercel-blob"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Blob store (vercel)
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Code quality
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row  flex-wrap justify-start pl-3 lg:flex">
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
              Favorite Editor & Model
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row  flex-wrap justify-start pl-3 lg:flex">
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://code.visualstudio.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  VSCode
                </li>
              </Link>
              <Link
                className="h-fit"
                rel="noreferrer"
                href="https://supermaven.com/"
              >
                <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                  Supermaven
                </li>
              </Link>
            </ul>
            <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
              Libraries
            </li>
            <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
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
            </ul>
          </div>
        </ul>
      </div>
    </section>
  );
};
