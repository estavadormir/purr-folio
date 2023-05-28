import Image from "next/image";

const About = ({ }) => {
    return (
        <section id="about" aria-label="About" className="lg:flex-row flex-col w-full flex justify-center bg-slate-900  z-11 xl:min-h-screen sticky">
            <div className="flex-row flex justify-center lg:w-1/2">
                <div className="w-full relative sm:h-full flex h-50">
                    <Image
                        src="/images/snow.jpg"
                        alt="André likes computers developer luxembourg"
                        width={1080}
                        height={1275}
                        priority={true}
                        className="z-0"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center lg:w-1/2  z-11">
                <h1 className="flex mt-5 lg:mb-2 pl-2 ml-5 justify-center lg:justify-start font-mono text-4xl  text-gray-100 lg:text-6xl">
                    About me...
                </h1>
                <div className="flex flex-col justify-center px-5">
                    <div className="flex justify-center flex-col lg:flex-row  lg:pt-10 w-full ">
                        <ul className="flex pb-1 flex-col  font-medium min-w-1/2 max-w-1/2 list-disc text-left py-2 w-full">
                            <div className="flex justify-center lg:justify-start bg-transparent text-white py-3 rounded px-10 rounded-t-3xl">
                                <ul className="list-disc">
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Luxembourg"><li className="hover:text-tiktokPink cursor-pointer">🏠 Based in Luxembourg.</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Time"><li className="hover:text-tiktokPink cursor-pointer">👷‍♀️ 5 years experience.</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Bachelor_of_Computer_Science"><li className="hover:text-tiktokPink cursor-pointer">📕 Bachelor in Computer Science</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Languages_of_Europe"><li className="hover:text-tiktokPink cursor-pointer">🗣️ English, French and Portuguese.</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Europe"><li className="hover:text-tiktokPink cursor-pointer">✈️ Moved countries at 18.</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Financial_institution"><li className="hover:text-tiktokPink cursor-pointer">🏦 2 years experience in financial institutions</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://www.istqb.org/"><li className="hover:text-tiktokPink cursor-pointer">📕 Certified Tester ISTQB</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://worldofwarcraft.com/"><li className="hover:text-tiktokPink cursor-pointer">🎮 WoW Player </li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Longboard_(skateboard)"><li className="hover:text-tiktokPink cursor-pointer">🛹 longboard is the fav transportation</li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Running"><li className="hover:text-tiktokPink cursor-pointer">🏃 Runner </li></a>
                                    <a className="h-fit" rel="noreferrer" href="https://en.wikipedia.org/wiki/Cat"><li className="hover:text-tiktokPink cursor-pointer">😺 hates cats</li></a>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}; export default About;