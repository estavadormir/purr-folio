import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Repository = () => {
  return (
    <section
      id="repository"
      className="z-12 z-11 relative flex h-screen min-h-screen w-full flex-col justify-center bg-black sm:flex-row sm:bg-slate-900 xl:min-h-screen"
    >
      <div className="bg-tiktokPink flex flex-row justify-center sm:w-1/2"></div>
      <div className="mb-2 mt-5 flex flex-col justify-center font-mono text-4xl text-gray-100 sm:w-1/2">
        <div className="mt-auto flex flex-col">
          <h2 className="flex-start font-display text-tiktokPink mb-4 ml-5 flex font-bold uppercase md:text-xl">
            Source code
          </h2>
          <h1 className="mb-2 ml-5 mt-5 flex justify-start font-mono text-4xl text-gray-100 lg:text-6xl">
            Behind the scenes
          </h1>
          <p className="mx-5 mb-5 mt-2 flex max-w-prose justify-start text-justify font-mono text-xl leading-relaxed text-neutral-400">
            Wondering how I work? Need a specific component
            for your project? Or just curious on how I code?
          </p>
          <div className="ml-5 flex justify-start ">
            <Link
              href={`https://github.com/estavadormir`}
              rel="noopener noreferrer"
              className="text-tiktokPink hover:bg-tiktokAqua hover:border-tiktokAqua border-tiktokPink flex flex-row border-2 px-5 hover:cursor-pointer hover:text-black"
            >
              <FaGithub size={32} />
            </Link>
          </div>
        </div>
        <div className="mt-64 flex lg:mt-auto">
          <p className="flex w-full justify-center text-xs">
            {`Copyright © ` +
              new Date().getFullYear().toString() +
              ` andrelikescomputers.dev All Rights Reserved.`}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Repository;
