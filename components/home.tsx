import Link from "next/link";
import Typewriter from 'typewriter-effect';

const Home = ({ }) => {
  return (
    <section className="flex-col h-screen w-full bg-center bg-no-repeat bg-[length:105%_105%] flex py-28 justify-center items-center transition-all duration-75 sticky top-0 z-9">
      <h1 className="bg-opacity-75 dark:bg-opacity-50 dark:bg-gray-100 backdrop-filter backdrop-blur-sm mt-80 mb-2 font-mono z-10 text-4xl text-gray-100 lg:text-6xl">
        hi, I&apos;m <br className="block lg:hidden" />
        <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-tiktokAqua">
            André <span className="text-3xl lg:text-5xl">💻</span>
          </span>
        </span>
        <div className="text-xl font-light lg:text-3xl">
          <Typewriter
            options={{
              strings: ['a developer', 'a good developer', 'an ok developer', 'a cool developer', 'a kewl developer', ':)'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h1>
      <div className="flex flex-col z-10 top-0 ">

        <div className="flex justify-center items-center flex-col lg:flex-row min-h-full pb-96">
          <ul className="flex flex-col lg:flex-row text-base font-medium items-center space-x-0.5 lg:space-x-1 mt-5 cursor-pointer">
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#about">
                <span
                  className="relative w-full h-full px-8 py-3 text-base  hover:animate-pulse font-bold bg-tiktokAqua border-2 border-black rounded hover:bg-black hover:text-white xl:text-xl"
                >Who?
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#techstack">
                <span
                  className="relative w-full h-full px-8 py-3 text-base  hover:animate-pulse font-bold bg-tiktokAqua border-2 border-black rounded hover:bg-black hover:text-white xl:text-xl"
                >techstack
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#contacts">
                <span
                  className="relative w-full h-full px-8 py-3 text-base  hover:animate-pulse font-bold bg-tiktokAqua border-2 border-black rounded hover:bg-black hover:text-white xl:text-xl"
                >Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}; export default Home;
