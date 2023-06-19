import Typewriter from "typewriter-effect";
const Techstack = ({}) => {
  return (
    <section
      id="techstack"
      className="flex-col h-screen w-full bg-center bg-no-repeat bg-[length:105%_105%] flex justify-center items-center transition-all duration-75 sticky top-0 z-13 bg-white"
    >
      <h1 className="text-black flex mt-5 mb-2 font-mono text-xl sm:text-4xl lg:text-6xl px-10 sm:pb-10">
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
        <ul className="pb-1 flex-col text-white font-medium text-left border-black w-full px-5">
          <div className="bg-white py-3 rounded sm:px-10 text-black border-2 border-black hover:shadow-xl">
            <li className="ml-5 sm:ml-0 font-bold">Languages:</li>
            <ul className="pl-3 w-full h-full justify-start flex flex-row flex-wrap mb-5">
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.typescriptlang.org/"
              >
                {" "}
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  TypeScript ❤️
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://www.php.net/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  PHP
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://dart.dev/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Dart 💀
                </li>
              </a>
            </ul>
            <li className="ml-5 mt-2 sm:mt-0 sm:ml-0 font-bold">Frameworks:</li>
            <ul className="pl-3 w-full h-full justify-start flex flex-row flex-wrap mb-5">
              <a className="h-fit" rel="noreferrer" href="https://nextjs.org/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  NextJS ❤️
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://reactjs.org/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  React
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://laravel.com/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Laravel
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://angularjs.org/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  AngularJS 💀
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://tailwindcss.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Tailwind CSS ❤️
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://getbootstrap.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Bootstrap 3,4,5
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://jestjs.io/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Jest
                </li>
              </a>
            </ul>
            <li className="ml-5 mt-2 sm:mt-0 sm:ml-0 font-bold hidden lg:flex">
              Tools
            </li>
            <ul className="pl-3 w-full h-full justify-start flex-row flex-wrap mb-5 hidden lg:flex">
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.npmjs.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  NPM
                </li>
              </a>
              <a className="h-fit" rel="noreferrer" href="https://git-scm.com/">
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  git
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.docker.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Docker
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.jenkins.io/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Jenkins
                </li>
              </a>
            </ul>
            <li className="ml-5 mt-2 sm:mt-0 sm:ml-0 font-bold hidden lg:flex">
              Design tools
            </li>
            <ul className="pl-3 w-full h-full justify-start flex flex-row  flex-wrap mb-5 lg:flex">
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.adobe.com/products/xd.html"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Adobe XD
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.figma.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Figma ❤️
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.justinmind.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Justinmind
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.invisionapp.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Invision
                </li>
              </a>
            </ul>
            <li className="ml-5 mt-2 sm:mt-0 sm:ml-0 font-bold hidden lg:flex">
              Editors
            </li>
            <ul className="pl-3 w-full h-full justify-start flex-row  flex-wrap mb-5 hidden lg:flex">
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://code.visualstudio.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  VSCode ❤️
                </li>
              </a>
            </ul>
            <li className="ml-5 mt-2 sm:mt-0 sm:ml-0 font-bold hidden lg:flex">
              Ticketing systems
            </li>
            <ul className="pl-3 w-full h-full justify-start flex-row flex-wrap mb-5 hidden lg:flex">
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.jetbrains.com/youtrack/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  YouTrack
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://app.asana.com/"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
                  Asana
                </li>
              </a>
              <a
                className="h-fit"
                rel="noreferrer"
                href="https://www.atlassian.com/software/jira"
              >
                <li className="flex px-2 mx-2 mt-2 py-2 h-full border-2 border-black rounded-lg text-center hover:bg-tiktokAqua cursor-pointer">
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
