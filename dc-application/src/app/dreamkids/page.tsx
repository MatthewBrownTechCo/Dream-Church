"use client";

import Footer from "../../components/footer";
import { TextBtnAlt } from "../../components/textbtn";
import NavBar from "../../components/navbar";

export default function DreamKids() {
  return (
    <div>
      <NavBar />
      <div className="relative bg-[url('/images/dream-kids.webp')] bg-cover bg-[center_bottom_45%] px-[7%] py-[5%] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center py-[80px] z-10">
          <h1 className="text-8xl font-bold">Dream Kids</h1>
          <br />
          <p className="text-3xl font-bold">For Children Ages 2-8</p>
        </header>
      </div>
      <section className="bg-white text-black text-center py-[85px] px-[25%] space-y-8">
        <h2 className="text-6xl font-bold">Need to Know</h2>
        <p className="text-xl">
          Dream Kids takes place every Sunday during the sermon for children
          ages 2-8. We created this space to allow our kids to engage in a
          lesson on their level and experience community with one another. All
          we ask is you bring them a water cup. We provide snacks and fun. All
          of our volunteers are thoroughly vetted to ensure that only trusted
          people are teaching your kids.
        </p>
        <br />
        <p>
          If you have any questions, feel free to <b>email</b> us at{" "}
          <b>hello@dreamcolumbia.com</b> or{" "}
          <b>
            <u>text</u>
          </b>{" "}
          us by clicking the button below.
        </p>
        <TextBtnAlt />
      </section>
      <Footer />
    </div>
  );
}
