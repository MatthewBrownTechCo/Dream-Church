"use client";

import Logo from "../components/logos";
import { useNavigate } from "../components/buttons";

export default function Home() {
  const inPersonNavigate = useNavigate("/inperson.tsx");
  const onlineNavigate = useNavigate("/online.tsx");

  return (
    <>
      <Logo />
      <header className="text-center mt-[70px]">
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
      <section className="text-center mt-[100px]">
        <h1 className="text-4xl font-bold">Watch the latest sermon.</h1>
        <h2 className="mt-[20px]">
          Check out the latest sermon from Dream Church Pastor Joshua Brown
        </h2>
        <h2 className="mt-[50px]">
          Other content can be found on our social media pages, our YouTube
          channel, or by podcast
        </h2>
      </section>
      <section className="text-center mt-[100px]">
        <h1 className="text-4xl font-bold">Join our livestream.</h1>
        <h2 className="mt-[20px]">
          We livestream our Sunday Service at 10 AM EST
        </h2>
        <h2 className="mt-[50px]">
          To watch previous livestreams, visit our YouTube channel{" "}
          <a
            className="underline text-blue-500"
            href="https://www.youtube.com/@dreamchurchcola"
          >
            here
          </a>
        </h2>
      </section>
      <section className="text-center mt-[100px]">
        <h2 className="text-2xl font-bold">
          Dream Church is a family being formed in the love of Jesus and the
          ways of his Kingdom
        </h2>
      </section>
    </>
  );
}
