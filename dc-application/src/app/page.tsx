"use client";

import Logo from "./components/logos";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const planVisitNavigate = () => router.push("/planvisit");
  const aboutNavigate = () => router.push("/about");
  const leadersNavigate = () => router.push("/leaders");

  return (
    <>
      <Logo />
      <NavBar />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">Dream Church Columbia</h1>
        <h2 className="text-2xl">Columbia, SC</h2>
        <h2 className="text-2xl">Sundays @ 10AM EST</h2>
      </header>
      <div className="flex justify-center items-center flex-col mt-[20px] gap-4">
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={planVisitNavigate}
        >
          Plan Your Visit
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
            target="_blank"
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
      <div className="flex justify-center items-center flex-col mt-[20px] gap-4">
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={aboutNavigate}
        >
          ABOUT US
        </button>
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={leadersNavigate}
        >
          MEET THE TEAM
        </button>
      </div>
      <section className="text-center mt-[100px]">
        <h2 className="text-2xl font-bold">Follow Us Online</h2>
        <p>(Social Media buttons will go here)</p>
      </section>
      <Footer />
    </>
  );
}
