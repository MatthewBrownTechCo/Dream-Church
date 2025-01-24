"use client";

import Logo from "../components/logos";
import Footer from "../components/footer";
import CustomHead from "../components/head";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Logo />
      <header className="text-center mt-[70px] space-y-8">
        <h1 className="text-4xl font-bold">Midweek</h1>
        <br />
        <p className="text-xl">
          <u>Every Tuesday night</u>, we meet at hoes to grow, experience
          community, and share life together.
        </p>
      </header>
      <section className="text-center mt-[50px] mx-[20%] space-y-8">
        <h2 className="text-2xl font-bold">Times and Info</h2>
        <p className="text-xl font-bold">Tuesdays at 6:30 PM</p>
        <p>
          The location changes each week due to rotationg homes where we meet.
          To get the upcoming Midweek location(s), please <b>email</b> us at{" "}
          <b>hello@dreamcolumbia.com</b> or{" "}
          <b>
            <u>text</u>
          </b>{" "}
          us by clicking the button below.
        </p>
        <div className="text-center">
          <button className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100">
            <a href="sms:8035675336">Text Us Here</a>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
