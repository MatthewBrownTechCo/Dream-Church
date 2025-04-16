"use client";

import Footer from "../../components/footer";
import { TextBtnAlt } from "../../components/textbtn";
import NavBar from "../../components/navbar";

export default function Midweek() {
  return (
    <>
      <NavBar />
      <div className="relative bg-[url('/images/josh-house-firepit.jpg')] bg-cover bg-[center_bottom_45%] px-[7%] py-[5%] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center py-[80px] z-10">
          <h1 className="text-8xl font-bold">Midweek</h1>
          <br />
          <p className="text-3xl font-bold">For Children Ages 2-8</p>
        </header>
      </div>
      <section className="text-center py-[100px] px-[20%] space-y-8 bg-white text-black">
        <h2 className="text-5xl font-bold">Times and Info</h2>
        <p className="text-2xl font-bold">Tuesdays at 6:30 PM</p>
        <p>
          The location changes each week due to rotationg homes where we meet.
          To get the upcoming Midweek location(s), please <b>email</b> us at{" "}
          <b>hello@dreamcolumbia.com</b> or{" "}
          <b>
            <u>text</u>
          </b>{" "}
          us by clicking the button below.
        </p>
        <TextBtnAlt />
      </section>
      <Footer />
    </>
  );
}
