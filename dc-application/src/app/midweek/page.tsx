"use client";

import Logo from "../components/logos";
import Footer from "../components/footer";
import TextBtn from "../components/textbtn";
import NavBar from "../components/navbar";

export default function Midweek() {
  return (
    <>
      <Logo />
      <NavBar />
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
        <TextBtn />
      </section>
      <Footer />
    </>
  );
}
