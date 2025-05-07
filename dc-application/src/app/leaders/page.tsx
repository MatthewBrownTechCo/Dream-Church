"use client";

import Footer from "../../components/footer";
import Image from "next/image";
import joshHeadshot from "../../../public/images/josh-headshot.jpeg";
import mattElder from "../../../public/images/matt_elder.jpg";
import emilyElder from "../../../public/images/emily.jpg";
import michaelElder from "../../../public/images/michael.jpg";
import rayAnitaElder from "../../../public/images/ray_anita.jpg";
import evanJennaElder from "../../../public/images/evan_jenna.jpg";
import NavBar from "../../components/navbar";

export default function Leaders() {
  return (
    <>
      <NavBar />
      <header className="relative text-center py-[100px] md:py-[200px] bg-[url('/images/elders.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <h1 className="relative text-6xl md:text-8xl font-medium">
          Leadership
        </h1>
      </header>
      <section className="text-center py-[100px] px-[5%] space-y-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <Image
              src={joshHeadshot}
              alt="Josh Headshot"
              width={470}
              height={470}
              className="mx-auto"
            />
          </div>
          <div className="md:flex-1 flex justify-center flex-col px-[20px] md:px-[80px] py-10">
            <h1 className="text-5xl font-medium">
              Joshua Brown, Senior Pastor
            </h1>
            <br />
            <p>
              <b>Joshua Brown</b> is the founder and Senior Pastor of Dream
              Church. He holds a Master&apos;s Degree in Biblical Studies from
              Western Theological Seminary in Holland, MI. He has been married
              to Jordyn for 10 years, and his family is everything to him.
              Outside of church and family, Joshua is a huge college football
              guy, a coffee enthusiast, a lover of books, and writes extensively
              on theological studies. You can find some of his contributions on
              his website below.
            </p>
            <a
              href="https://www.joshuabrown.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black font-bold border border-black py-[15px] w-full md:w-[80%] hover:bg-gray-200 mt-10">
                Joshua's Website
              </button>{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="py-[80px] bg-white text-black">
        <h1 className="text-center text-7xl md:text-8xl font-medium">Elders</h1>
        <div className="mt-[85px] flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-center md:gap-[200px] md:max-w-[800px] md:mx-auto">
          <div className="text-center">
            <Image
              src={mattElder}
              alt="Matt Elder Photo"
              width={1000}
              height={1000}
              className="rounded-full w-64 h-64 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-medium">Matthew Brown</h1>
            <h2 className="text-2xl font-medium">Associate Pastor</h2>
          </div>
          <div className="text-center">
            <Image
              src={evanJennaElder}
              alt="Dream Church Logo"
              width={1000}
              height={1000}
              className="rounded-full w-64 h-64 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-medium">Evan & Jenna Rouleau</h1>
            <h2 className="text-2xl font-medium">Elders</h2>
          </div>
        </div>
        <div className="mt-[10%] flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-center md:gap-[200px] md:max-w-[1200px] md:mx-auto">
          <div className="text-center">
            <Image
              src={michaelElder}
              alt="Dream Church Logo"
              width={1000}
              height={1000}
              className="rounded-full w-64 h-64 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-medium">Michael Davis</h1>
            <h2 className="text-2xl font-medium">Elder</h2>
          </div>
          <div className="text-center">
            <Image
              src={emilyElder}
              alt="Dream Church Logo"
              width={1000}
              height={1000}
              className="rounded-full w-64 h-64 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-medium">Emily Harmon</h1>
            <h2 className="text-2xl font-medium">Elder</h2>
          </div>
          <div className="text-center">
            <Image
              src={rayAnitaElder}
              alt="Dream Church Logo"
              width={1000}
              height={1000}
              className="rounded-full w-64 h-64 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-medium">Ray & Anita Cruz</h1>
            <h2 className="text-2xl font-medium">Elders</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
