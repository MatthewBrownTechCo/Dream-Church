"use client";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const planVisitNavigate = () => router.push("/planvisit");
  const aboutNavigate = () => router.push("/about");
  const leadersNavigate = () => router.push("/leaders");

  return (
    <div className="bg-[rgb(28,28,28)] text-white">
      <NavBar />
      <div className="relative bg-[url('/images/josh-lh-matt-piano-ps.jpg')] bg-cover bg-center px-[7%] py-[15%] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-left my-[70px] z-10 space-y-6">
          <h1 className="text-6xl">Dream Church</h1>
          <h2 className="text-xl">Columbia, South Carolina</h2>
          <h2 className="text-xl">Services Sundays @ 10AM EST</h2>
        </header>
        <div className="relative mt-[20px] z-10">
          <button
            className="bg-white text-black border border-white py-[20px] w-[30%] hover:bg-gray-100"
            onClick={planVisitNavigate}
          >
            <b>Plan Your Visit</b>
          </button>
        </div>
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
    </div>
  );
}
