import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About"
      className="z-11 sticky flex w-full flex-col justify-center  bg-slate-900 lg:flex-row xl:min-h-screen"
    >
      <Image
        src="/snow.jpg"
        alt="A picture of André longboarding in Luxembourg"
        width={1080}
        height={1482}
        className="z-0 flex flex-row justify-center lg:w-1/2"
      />
      <div className="z-11 flex flex-col justify-center  lg:w-1/2">
        <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-gray-100 lg:mb-2  lg:justify-start lg:text-6xl">
          About me...
        </h2>
        <div className="flex flex-col justify-center px-5 w-full lg:flex-row lg:pt-10 rounded rounded-t-3xl bg-transparent py-3 text-white lg:justify-start min-w-1/2 max-w-1/2  list-disc pb-1 text-left font-medium ml-4">
          <ul className="[&>*]:px-1 text-2xl">
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Luxembourg"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🏠 Based in Luxembourg.
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Time"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                👷‍♀️ 7 years of experience in different companies, including a few
                startups, space sector and the financial sector.
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Bachelor_of_Computer_Science"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                📕 Bachelor in Computer Science
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Languages_of_Europe"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🗣️ English, French and Portuguese.
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Europe"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                ✈️ Moved countries at 18.
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Coding"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🏦 Been Coding since 2012.
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://www.istqb.org/"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                📕 Certified Tester ISTQB
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://worldofwarcraft.com/"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🎮 WoW Player{" "}
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Longboard_(skateboard)"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🛹 Longboard is my fav transportation method
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Running"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                🏃 Marathonist
              </li>
            </Link>
            <Link
              className="h-fit"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Cat"
            >
              <li className="hover:text-tiktokPink cursor-pointer">
                😺 Loves cats
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};
