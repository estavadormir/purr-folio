import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="z-12 sticky flex h-screen w-full flex-col justify-center bg-slate-900 px-10 xl:min-h-screen"
    >
      <h2 className="flex-start font-display text-brand text-tiktokPink border-tiktokPink mb-4 flex border-b-2 font-bold uppercase lg:text-xl ">
        Contact
      </h2>
      <h1 className="mb-2 mt-5 flex justify-start text-4xl text-gray-100 lg:text-6xl">
        Need some help solving a bug?
      </h1>
      <p className="mb-5 mt-2 flex max-w-prose justify-start pl-5 pt-5 text-justify font-mono text-xl leading-relaxed text-neutral-400">{`Pick up a pen, write down your thoughts and reach me out through one of the options below, I'm sure we can work something out.`}</p>
      <ul className="min-w-1/2 max-w-1/2 w-full list-disc flex-col pb-5 font-medium">
        <div className=" border-tiktokPink flex justify-start border-b-2 py-3 text-white sm:px-10">
          <ul className="flex items-center justify-start">
            <Link
              className="hover:text-tiktokPink mr-2 mt-2 flex cursor-pointer justify-start rounded-lg px-2 text-center sm:text-xl"
              href="mailto:andrelikescomputers@gmail.com"
            >
              ✉️ E-mail
            </Link>
            <Link
              className="hover:text-tiktokPink mr-2 mt-2 flex cursor-pointer justify-start rounded-lg px-2 text-center sm:text-xl"
              href="https://www.linkedin.com/in/andrelikescomputers/"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              className="hover:text-tiktokPink mt-2 flex cursor-pointer justify-start rounded-lg px-2 text-center sm:text-xl"
              href="https://github.com/estavadormir/"
            >
              <FaGithub size={32} />
            </Link>
          </ul>
        </div>
      </ul>
    </section>
  );
};
