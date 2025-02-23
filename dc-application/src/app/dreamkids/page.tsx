"use client";

import Footer from "../components/footer";
import TextBtn from "../components/textbtn";
import NavBar from "../components/navbar";

export default function DreamKids() {
  return (
    <div>
      <NavBar />
      <header className="text-center mt-[70px] space-y-8">
        <h1 className="text-4xl font-bold">Dream Kids</h1>
        <br />
        <p className="text-xl">For Children Ages 2-8</p>
      </header>
      <section className="text-center mt-[50px] mx-[20%] space-y-8">
        <h2 className="text-2xl font-bold">Need to Know</h2>
        <p>
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
        <TextBtn />
      </section>
      <Footer />
    </div>
  );
}
