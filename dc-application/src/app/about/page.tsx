"use client";
import CustomHead from "../components/head";
import Logo from "../components/logos";
import Footer from "../components/footer";

export default function PlanVisit() {
  return (
    <>
      <CustomHead />
      <Logo />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">About Dream Church</h1>
        <br />
        <h2 className="text-2xl font-bold mx-[20%]">
          Dream Church is a family being formed in the love of Jesus and the
          ways of his Kingdom
        </h2>
      </header>
      <section className="text-center mt-[50px]">
        <h2 className="text-2xl font-bold">Values</h2>
        <ol className="text-xl font-bold list-decimal list-inside">
          <li>Communion with God</li>
          <li>Test</li>
        </ol>
      </section>
      <Footer />
    </>
  );
}
