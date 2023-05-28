import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Repository = ({ }) => {
    return (
        <section id="repository" className="sm:flex-row flex-col w-full flex justify-center sm:bg-slate-900 bg-black z-12 min-h-screen h-screen relative z-11 xl:min-h-screen sticky">
            <div className="flex-row flex justify-center sm:w-1/2 bg-tiktokPink">

            </div>
            <div className="flex flex-col justify-center mt-5 mb-2 font-mono text-4xl text-gray-100 sm:w-1/2">
                <div className="flex flex-col mt-auto"><h2 className="flex flex-start ml-5 font-display font-bold md:text-xl uppercase mb-4 text-tiktokPink">Source code</h2>
                    <h1 className="flex justify-start ml-5 mt-5 mb-2 font-mono text-4xl text-gray-100 lg:text-6xl">Behind the scenes</h1>
                    <p className="text-neutral-400 leading-relaxed max-w-prose text-xl mt-2 mx-5 mb-5 flex justify-start text-justify font-mono">Wondering how this website is working? Need a specific component for your project? Or just curious on how I code?</p>
                    <div className="flex justify-start ml-5 ">
                        <a href={`https://github.com/estavadormir/curly-couscous`} rel="noreferrer" className="flex flex-row text-tiktokPink hover:cursor-pointer hover:bg-tiktokAqua hover:text-black hover:border-tiktokAqua border-tiktokPink border-2 px-5">Check it out</a>
                    </div>
                </div>
                <div className="flex mt-64 lg:mt-auto"><p className="text-xs flex justify-center w-full">Copyright © 2022 andrelikescomputers.dev All Rights Reserved.</p></div>
            </div>
        </section>

    );
}; export default Repository;