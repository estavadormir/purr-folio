import Link from "next/link";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="z-9 sticky top-0 flex h-screen w-full flex-col items-center justify-center bg-[length:105%_105%] bg-center bg-no-repeat py-28 transition-all duration-75">
      <h1 className="z-10 mb-2 mt-80 bg-opacity-75 font-mono text-4xl text-gray-100 backdrop-blur-sm backdrop-filter lg:text-6xl dark:bg-gray-100 dark:bg-opacity-50">
        hi, I&apos;m <br className="block lg:hidden" />
        <span className="relative">
          <span className="text-brand-accent text-tiktokAqua h-20 overflow-x-hidden whitespace-nowrap pt-2">
            André <span className="text-3xl lg:text-5xl">💻</span>
          </span>
        </span>
        <div className="text-xl font-light lg:text-3xl">
          <Typewriter
            options={{
              strings: [
                "a developer",
                "a good developer",
                "an ok developer",
                "a cool developer",
                "a kewl developer",
                ":)",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h1>
      <div className="top-0 z-10 flex flex-col ">
        <div className="flex min-h-full flex-col items-center justify-center pb-96 lg:flex-row">
          <ul className="mt-5 flex cursor-pointer flex-col items-center space-x-0.5 text-base font-medium lg:flex-row lg:space-x-1">
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#about">
                <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base font-bold hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
                  Who?
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#techstack">
                <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base font-bold hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
                  techstack
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link className="relative cursor-pointer" href="#contacts">
                <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base font-bold hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;
