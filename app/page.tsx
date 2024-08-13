import { About, Contacts, Home, Techstack } from "@/components";
import type { NextPage } from "next";

const App: NextPage = () => {
  return (
    <main className=" flex bg-tiktokPink w-full flex-col items-center justify-center text-center">
      <Home />
      <About />
      <Techstack />
      <Contacts />
    </main>
  );
};

export default App;
