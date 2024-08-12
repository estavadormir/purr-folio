import { About, Contacts, Home, Repository, Techstack } from "@/components";
import type { NextPage } from "next";

const App: NextPage = () => {
  return (
    <main className="min-h-screen flex min-w-screen bg-tiktokPink w-full flex-1 flex-col items-center justify-center min-w-screen text-center ">
      <Home />
      <About />
      <Techstack />
      <Contacts />
      <Repository />
    </main>
  );
};

export default App;
