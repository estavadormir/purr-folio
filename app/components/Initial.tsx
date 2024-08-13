"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export const Initial = () => {
  return (
    <section
      id="home"
      data-testid="home"
      className="z-9 relative top-0 flex h-[105dvh] w-full flex-col items-center justify-center bg-center bg-no-repeat py-28 transition-all duration-75"
    >
      <h1 className="z-10 mb-2 bg-opacity-75 text-4xl text-gray-100 backdrop-blur-sm backdrop-filter lg:text-6xl dark:bg-gray-100 dark:bg-opacity-50">
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
      <ul className="z-10 flex flex-col items-center justify-center mt-5 cursor-pointer space-x-0.5 text-base font-bold lg:flex-row lg:space-x-1">
        <li className="mb-10">
          <Link className="relative cursor-pointer" href="#about">
            <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
              Who?
            </span>
          </Link>
        </li>
        <li className="mb-10">
          <Link className="relative cursor-pointer" href="#techstack">
            <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
              techstack
            </span>
          </Link>
        </li>
        <li className="mb-10">
          <Link className="relative cursor-pointer" href="#contacts">
            <span className="bg-tiktokAqua relative h-full w-full rounded border-2  border-black px-8 py-3 text-base hover:animate-pulse hover:bg-black hover:text-white xl:text-xl">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
};
