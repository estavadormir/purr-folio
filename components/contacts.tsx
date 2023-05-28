const Contacts = ({ }) => {
    return (
        <section id="contacts" className="w-full h-screen flex justify-center bg-slate-900 flex-col z-12 xl:min-h-screen px-10 sticky">
            <h2 className="flex flex-start font-display font-bold text-brand lg:text-xl uppercase mb-4 text-tiktokPink border-b-2 border-tiktokPink ">
                Contact
            </h2>
            <h1 className="flex mt-5 mb-2 font-mono text-4xl text-gray-100 lg:text-6xl justify-start">
                Need some help solving a bug?
            </h1>
            <p className="text-neutral-400 leading-relaxed max-w-prose mt-2 mb-5 flex justify-start text-justify font-mono text-xl pl-5 pt-5">{`Pick up a pen, write down your thoughts and reach me out through one of the options below, I'm sure we can work something out.`}</p>
            <ul className="pb-5 flex-col font-medium min-w-1/2 max-w-1/2 list-disc w-full">
                <div className=" text-white py-3 sm:px-10 justify-start flex border-b-2 border-tiktokPink">
                    <ul className="flex flex-col justify-start">
                        <li className="flex justify-start px-2 rounded-lg text-center mt-2 hover:text-tiktokPink cursor-pointer mr-2 animate-pulse sm:text-xl" onClick={() => window.location.href = 'mailto:andrelikescomputers@gmail.com'} >✉️ E-mail</li>
                        <li className="flex justify-start px-2 rounded-lg text-center mt-2 hover:text-tiktokPink cursor-pointer mr-2 sm:text-xl" onClick={() => window.location.href = 'https://www.linkedin.com/in/andrelikescomputers/'} >🧑‍💼 Linkedin</li>
                        <li className="flex justify-start px-2 rounded-lg text-center mt-2 hover:text-tiktokPink cursor-pointer sm:text-xl" onClick={() => window.location.href = 'https://github.com/estavadormir/'} >💻 Github</li>
                    </ul>
                </div>
            </ul>
        </section>
    );
}; export default Contacts;