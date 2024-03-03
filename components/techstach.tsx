import Typewriter from 'typewriter-effect';
const Techstack =
  () => {
    return (
      <section
        id="techstack"
        className="z-13 sticky top-0 flex h-screen w-full flex-col items-center justify-center bg-white bg-[length:105%_105%] bg-center bg-no-repeat transition-all duration-75"
      >
        <h1 className="mb-2 mt-5 flex px-10 font-mono text-xl text-black sm:pb-10 sm:text-4xl lg:text-6xl">
          <Typewriter
            options={{
              strings:
                [
                  'Some of the Technologies that I use:',
                  ':)',
                ],
              autoStart:
                true,
              loop: true,
            }}
          />
        </h1>
        <div />
        <div className="flex flex-col">
          <ul className="w-full flex-col border-black px-5 pb-1 text-left font-medium text-white">
            <div className="rounded border-2 border-black bg-white py-3 text-black hover:shadow-xl sm:px-10">
              <li className="ml-5 font-bold sm:ml-0">
                Languages:
              </li>
              <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.typescriptlang.org/"
                >
                  {' '}
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    TypeScript
                    ❤️
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.php.net/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    PHP
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://dart.dev/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Dart
                    💀
                  </li>
                </a>
              </ul>
              <li className="ml-5 mt-2 font-bold sm:ml-0 sm:mt-0">
                Frameworks:
              </li>
              <ul className="mb-5 flex h-full w-full flex-row flex-wrap justify-start pl-3">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://nextjs.org/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    NextJS
                    ❤️
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://reactjs.org/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    React
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://laravel.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Laravel
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://angularjs.org/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    AngularJS
                    💀
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://tailwindcss.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Tailwind
                    CSS
                    ❤️
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://getbootstrap.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Bootstrap
                    3,4,5
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://jestjs.io/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Jest
                  </li>
                </a>
              </ul>
              <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
                Tools
              </li>
              <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.npmjs.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    NPM
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://git-scm.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    git
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.docker.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Docker
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.jenkins.io/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Jenkins
                  </li>
                </a>
              </ul>
              <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
                Design
                tools
              </li>
              <ul className="mb-5 flex h-full w-full flex-row flex-wrap  justify-start pl-3 lg:flex">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.adobe.com/products/xd.html"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Adobe
                    XD
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.figma.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Figma
                    ❤️
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.justinmind.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Justinmind
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.invisionapp.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Invision
                  </li>
                </a>
              </ul>
              <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
                Editors
              </li>
              <ul className="mb-5 hidden h-full w-full flex-row  flex-wrap justify-start pl-3 lg:flex">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://code.visualstudio.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    VSCode
                    ❤️
                  </li>
                </a>
              </ul>
              <li className="ml-5 mt-2 hidden font-bold sm:ml-0 sm:mt-0 lg:flex">
                Ticketing
                systems
              </li>
              <ul className="mb-5 hidden h-full w-full flex-row flex-wrap justify-start pl-3 lg:flex">
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.jetbrains.com/youtrack/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    YouTrack
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://app.asana.com/"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    Asana
                  </li>
                </a>
                <a
                  className="h-fit"
                  rel="noreferrer"
                  href="https://www.atlassian.com/software/jira"
                >
                  <li className="hover:bg-tiktokAqua mx-2 mt-2 flex h-full cursor-pointer rounded-lg border-2 border-black px-2 py-2 text-center">
                    JIRA
                  </li>
                </a>
              </ul>
            </div>
          </ul>
        </div>
      </section>
    );
  };
export default Techstack;
