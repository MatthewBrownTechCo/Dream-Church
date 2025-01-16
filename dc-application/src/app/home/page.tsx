"use client";

import Logo from "../components/logos";
import { useNavigate } from "../components/buttons";

export default function Home() {
  const inPersonNavigate = useNavigate("/inperson.tsx");
  const onlineNavigate = useNavigate("/online.tsx");

  return (
    <>
      <Logo />
      <header className="text-center">
        <h1 className="text-4xl font-bold">Dream Church Columbia</h1>
        <h2 className="text-2xl">Columbia, SC</h2>
        <h2 className="text-2xl">Sundays @ 10AM EST</h2>
      </header>
      <div className="flex justify-center items-center flex-col mt-[20px] gap-4">
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={inPersonNavigate}
        >
          IN-PERSON
        </button>
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={onlineNavigate}
        >
          ONLINE
        </button>
      </div>
    </>
  );
}
