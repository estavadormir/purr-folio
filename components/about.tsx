import Image from 'next/image';

const About =
  () => {
    return (
      <section
        id="about"
        aria-label="About"
        className="z-11 sticky flex w-full flex-col justify-center  bg-slate-900 lg:flex-row xl:min-h-screen"
      >
        <div className="flex flex-row justify-center lg:w-1/2">
          <div className="h-50 relative flex w-full sm:h-full">
            <Image
              src="/images/snow.jpg"
              alt="André likes computers developer luxembourg"
              width={
                1080
              }
              height={
                1275
              }
              priority={
                true
              }
              className="z-0"
            />
          </div>
        </div>
        <div className="z-11 flex flex-col justify-center  lg:w-1/2">
          <h1 className="ml-5 mt-5 flex justify-center pl-2 font-mono text-4xl text-gray-100 lg:mb-2  lg:justify-start lg:text-6xl">
            About
            me...
          </h1>
          <div className="flex flex-col justify-center px-5">
            <div className="flex w-full flex-col justify-center  lg:flex-row lg:pt-10 ">
              <ul className="min-w-1/2 max-w-1/2 flex  w-full list-disc flex-col py-2 pb-1 text-left font-medium">
                <div className="flex justify-center rounded rounded-t-3xl bg-transparent px-10 py-3 text-white lg:justify-start">
                  <ul className="list-disc">
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Luxembourg"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🏠
                        Based
                        in
                        Luxembourg.
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Time"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        👷‍♀️
                        5
                        years
                        experience.
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Bachelor_of_Computer_Science"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        📕
                        Bachelor
                        in
                        Computer
                        Science
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Languages_of_Europe"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🗣️
                        English,
                        French
                        and
                        Portuguese.
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Europe"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        ✈️
                        Moved
                        countries
                        at
                        18.
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Financial_institution"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🏦
                        2
                        years
                        experience
                        in
                        financial
                        institutions
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://www.istqb.org/"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        📕
                        Certified
                        Tester
                        ISTQB
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://worldofwarcraft.com/"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🎮
                        WoW
                        Player{' '}
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Longboard_(skateboard)"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🛹
                        longboard
                        is
                        the
                        fav
                        transportation
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Running"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        🏃
                        Runner{' '}
                      </li>
                    </a>
                    <a
                      className="h-fit"
                      rel="noreferrer"
                      href="https://en.wikipedia.org/wiki/Cat"
                    >
                      <li className="hover:text-tiktokPink cursor-pointer">
                        😺
                        hates
                        cats
                      </li>
                    </a>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default About;
