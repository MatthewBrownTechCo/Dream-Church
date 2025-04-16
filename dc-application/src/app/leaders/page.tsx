"use client";

import Footer from "../../components/footer";
import Image from "next/image";
import joshHeadshot from "../../../public/images/josh-headshot.jpeg";
import dreamLogoNavy from "../../../public/logos/Arch-Navy.png";
import NavBar from "../../components/navbar";

export default function Leaders() {
  return (
    <>
      <NavBar />
      <header className="text-center mt-[70px] py-[80px]">
        <h1 className="text-7xl font-bold">Leadership</h1>
      </header>
      <section className="text-center mt-[50px] px-[5%] space-y-4">
        <div className="flex">
          <div className="flex-1 flex justify-center flex-col px-[75px]">
            <h1 className="text-5xl font-bold">Joshua Brown, Senior Pastor</h1>
            <br />
            <p className="text-xl">
              <b>Joshua Brown</b> is the founder and Senior Pastor of Dream
              Church. He will soon hold a Master&apos;s Degree in Biblical
              Studies from Western Theological Seminary in Holland, MI. He has
              been married to Jordyn for 10 years, and his family is everything
              to him. Outside of church and family, Joshua is a huge college
              football guy, a coffee enthusiast, a lover of books, and writes
              extensively on theological studies. You can find some of his
              contributions on his website below.
            </p>
            <br />
            <button className="bg-white text-black p-[15px] w-auto hover:bg-gray-200 mt-5 text-xl font-bold">
              <a href="https://www.joshuabrown.org" target="_blank">
                Joshua Brown&apos;s website
              </a>
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={joshHeadshot}
              alt="Josh Headshot"
              width={470}
              height={470}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="mt-[125px] py-[80px] bg-white text-black">
        <h1 className="text-center text-6xl font-bold">Elders</h1>
        <div className="mt-[85px] flex">
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Matthew Brown</h1>
            <h2 className="text-2xl font-bold">Associate Pastor</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Evan Rouleau</h1>
            <h2 className="text-2xl font-bold">Chairman of Elder Board</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Jenna Rouleau</h1>
            <h2 className="text-2xl font-bold">Elder / Administration</h2>
          </div>
        </div>
        <br />
        <div className="mt-[5%] flex">
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Michael Davis</h1>
            <h2 className="text-2xl font-bold">
              Elder / Oversight & Discipleship
            </h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Emily Harmon</h1>
            <h2 className="text-2xl font-bold">Elder / Hospitality</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Anita Cruz</h1>
            <h2 className="text-2xl font-bold">Elder / Hospitality</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogoNavy}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Ray Cruz</h1>
            <h2 className="text-2xl font-bold">Elder / Finance</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
