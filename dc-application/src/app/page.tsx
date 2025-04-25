"use client";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import PodcastEmbed from "../components/podcast-embed";
import Accordion from "../components/accordion";
import { SocialBtn } from "../components/socialBtn";

export default function Home() {
  const router = useRouter();

  const planYourVisitNavigate = () => router.push("/planyourvisit");

  return (
    <div>
      <NavBar />
      <div className="relative bg-[url('/images/josh-lh-matt-piano-ps.jpg')] bg-cover bg-center md:px-[100px] py-40 md:py-20 sm:py-[200px] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center md:text-left py-[50px] z-10 space-y-6">
          <h1 className="text-6xl font-bold md:text-8xl md:font-normal">
            Dream Church
          </h1>
          <h2 className="text-2xl">Columbia, South Carolina</h2>
          <h2 className="text-2xl">Services Sundays @ 10AM EST</h2>
        </header>
        <div className="relative text-center md:text-left mt-[10px] z-10">
          <button
            className="bg-white text-black border border-white py-[20px] w-80 md:w-[300px] text-xl font-bold hover:bg-gray-200"
            onClick={planYourVisitNavigate}
          >
            <b>Plan Your Visit</b>
          </button>
        </div>
      </div>
      <section className="text-center mx-[10%] py-[5%]">
        <h2 className="text-3xl">
          <b>Dream Church</b> is a family being{" "}
          <u className="underline underline-offset-4">deeply formed</u> in the
          love of Jesus and the ways of his Kingdom.
        </h2>
      </section>
      <div className="flex flex-col md:flex-row items-center md:justify-center py-8 px-1 md:pr-0 md:pt-10 bg-white text-black">
        <section className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold">Latest Message</h1>
          <h2 className="mt-[40px] md:text-2xl">
            Check out the latest sermon from Dream Church pastor Joshua Brown
            and other pastors.
          </h2>
          <h2 className="mt-[40px] md:text-2xl">
            Other messages can be found on your favorite podcast platforms.
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-20 md:mt-[75px]">
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[80%] md:w-[180px] hover:bg-gray-700 text-white text-2xl font-bold">
                <a
                  href="https://open.spotify.com/show/37D4UsiIFMv5SUpIQiA4VE"
                  target="_blank"
                >
                  Spotify
                </a>
              </button>
            </div>
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[80%] md:w-[180px] hover:bg-gray-700 text-white text-2xl font-bold">
                <a
                  href="https://podcasts.apple.com/us/podcast/dream-church-with-joshua-brown/id1291957659"
                  target="_blank"
                >
                  Apple Podcast
                </a>
              </button>
            </div>
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[80%] md:w-[180px] hover:bg-gray-700 text-white text-2xl font-bold">
                <a
                  href="https://www.youtube.com/dreamchurchcola"
                  target="_blank"
                >
                  YouTube
                </a>
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-10 md:mt-0">
          <PodcastEmbed />
        </div>
      </div>
      <section className="text-center py-[100px]">
        <h1 className="text-6xl font-bold">Our Values</h1>
        <Accordion />
      </section>
      <section className="relative flex flex-col md:flex-row md:justify-between px-4 md:px-[6%] bg-[url('/images/preservice-christmas.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="flex justify-center text-center md:text-left flex-col z-10 space-y-8 py-[10%]">
          <h1 className="text-6xl md:text-7xl font-bold">1633 Main Street</h1>
          <h1 className="text-6xl md:text-7xl font-bold">Columbia, SC</h1>
        </div>
        <div className="space-y-3 pb-8 md:pb-0 md:py-[5%] text-center w-full md:w-[35%] z-10">
          <h1 className="font-bold text-2xl">
            <u>Service Times</u>
          </h1>
          <p className="text-2xl">Sundays at 10 AM EST</p>
          <p className="text-2xl">
            Tuesdays at 6 PM EST (We meet at homes.{" "}
            <a
              href="/midweek"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              Click here
            </a>{" "}
            for more information)
          </p>
          <br />
          <h1 className="font-bold text-2xl">
            <u>Contact Us with Questions:</u>
          </h1>
          <p className="text-2xl">hello@dreamcolumbia.com</p>
          <p className="text-2xl">
            or{" "}
            <a
              href="sms:8035675336"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              text 803-567-5336 (click here to text us)
            </a>
          </p>
        </div>
      </section>
      <section className="text-center py-[5%] bg-white text-black space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold">Follow Us Online</h2>
        <SocialBtn />
      </section>
      <Footer />
    </div>
  );
}
