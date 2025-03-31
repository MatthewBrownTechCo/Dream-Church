"use client";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";

export default function Location() {
  const router = useRouter();

  const planVisitNavigate = () => router.push("/planvisit");

  return (
    <div>
      <NavBar />
      <div className="relative bg-[url('/images/pastor-study-back.jpg')] bg-cover bg-[center_bottom_45%] px-[7%] py-[8%] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center py-[80px] z-10">
          <h1 className="text-8xl font-bold">Location and Times</h1>
        </header>
      </div>
      <div className="flex flex-row justify-between items-center text-center bg-white text-black">
        <div className="flex-1 space-y-6">
          <header className="text-5xl font-bold">Sunday Services</header>
          <p className="text-xl">
            <b>The Pastor&apos;s Study:</b> 1633 Main Street, Columbia, SC
          </p>
          <p className="underline underline-offset-2 text-xl">10 AM EST</p>
          <div className="w-full flex justify-center space-x-4 mt-[75px] text-xl">
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[200px] hover:bg-gray-700 text-white font-bold">
                <a
                  href="https://maps.apple.com/?address=1633%20Main%20St,%20Columbia,%20SC%20%2029201,%20United%20States&ll=34.007368,-81.036660&q=1633%20Main%20St&t=m"
                  target="_blank"
                >
                  Apple Maps
                </a>
              </button>
            </div>
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[200px] hover:bg-gray-700 text-white font-bold">
                <a
                  href="https://maps.app.goo.gl/79jGfKKsBYYwYT8A6"
                  target="_blank"
                >
                  Google Maps
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6614.843219691566!2d-81.03905142407854!3d34.00738727317387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d47752cafd%3A0x454d3e5c23bf4b13!2s1633%20Main%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1740184103522!5m2!1sen!2sus"
            className="border-none grayscale w-full h-[450px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="relative bg-[url('/images/josh-lh-preach.jpg')] bg-cover bg-center px-[7%] py-[8%] text-white">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <header className="relative text-center py-[30px] z-10">
            <h1 className="text-6xl font-bold">What To Expect</h1>
          </header>
          <div className="relative z-10 text-center px-[20%] text-xl">
            <p>
              At Dream, you&apos;ll find an immediate sense of belonging! We are
              dedicated to creating a warm, welcoming atmosphere where everyone
              is embraced like family. Every Sunday begins with a breakfast at
              9:30 AM, half an hour before our service starts. At 10 AM, we
              begin our service with reading scripture, paving the way for
              worship that includes singing, giving, prayer, and communion (on
              the first Sunday of the month). Following this, our Senior Pastor,
              Joshua Brown, shares an insightful sermon that explores the depths
              of the scriptures for spiritual formation. It&apos;s a great
              opportunity to reflect and grow!
            </p>
            <br />
            <p>
              We also offer a special program for our younger guests aged 2-8,{" "}
              <a href="/dreamkids">
                <span className="font-bold underline underline-offset-2">
                  Dream Kids
                </span>
              </a>
              , where they can learn and explore in a fun and engaging way. This
              program takes place during the sermon (families all worship
              together).
            </p>
            <br />
            <p>
              If you plan to visit Dream for the first time, we are eager to
              ensure you feel welcomed! Just click the button below to plan your
              visit. Our team will reach out to answer any questions and ensure
              someone is there to greet you and your family upon arrival. We
              can&apos;t wait to meet you and share this incredible experience
              together!
            </p>
          </div>
          <div className="flex justify-center relative mt-[50px] z-10">
            <button
              className="bg-white text-black border border-white py-[20px] w-[300px] hover:bg-gray-200"
              onClick={planVisitNavigate}
            >
              <b>Plan Your Visit</b>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
