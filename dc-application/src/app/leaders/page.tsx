"use client";

import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import joshHeadshot from "../../../public/images/josh-headshot.jpeg";
import dreamLogo from "../../../public/logos/dream-logo.jpg";
import NavBar from "../components/navbar";

export default function Leaders() {
  const router = useRouter();

  const teamNavigate = () => router.push("/about");

  return (
    <>
      <NavBar />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">Leadership</h1>
      </header>
      <section className="text-center mt-[50px] mx-[10%] space-y-4">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Joshua Brown, Senior Pastor</h1>
            <br />
            <p>
              <b>Joshua Brown</b> is the founder and Senior Pastor of Dream
              Church. He will soon hold a Master's Degree in Biblical Studies
              from Western Theological Seminary in Holland, MI. He has been
              married to Jordyn for 10 years, and his family is everything to
              him. Outside of church and family, Joshua is a huge college
              football guy, a coffee enthusiast, a lover of books, and writes
              extensively on theological studies. You can find some of his
              contributions on his website below.
            </p>
            <br />
            <button className="bg-transparent border border-black p-[15px] w-auto hover:bg-gray-100">
              <a href="https://www.joshuabrown.org" target="_blank">
                Joshua Brown's website
              </a>
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={joshHeadshot}
              alt="Josh Headshot"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="mt-[7%]">
        <h1 className="text-center text-4xl font-bold">Elders</h1>
        <div className="mt-[7%] flex">
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Matthew Brown</h1>
            <h2 className="text-2xl font-bold">Associate Pastor / Elder</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
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
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Jenna Rouleau</h1>
            <h2 className="text-2xl font-bold">Elder</h2>
          </div>
        </div>
        <br />
        <div className="mt-[5%] flex">
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Michael Davis</h1>
            <h2 className="text-2xl font-bold">Elder</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Emily Harmon</h1>
            <h2 className="text-2xl font-bold">Elder</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Anita Cruz</h1>
            <h2 className="text-2xl font-bold">Elder</h2>
          </div>
          <div className="text-center flex-1">
            <Image
              src={dreamLogo}
              alt="Dream Church Logo"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold">Ray Cruz</h1>
            <h2 className="text-2xl font-bold">Elder</h2>
          </div>
        </div>
      </section>
      <div className="text-center mt-[50px]">
        <button
          className="bg-transparent border border-black py-[20px] w-[200px] hover:bg-gray-100"
          onClick={teamNavigate}
        >
          About Dream
        </button>
      </div>
      <Footer />
    </>
  );
}
