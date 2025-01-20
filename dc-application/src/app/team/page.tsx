"use client";
import CustomHead from "../components/head";
import Logo from "../components/logos";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dreamLogo from "../../../src/logos/dream-logo.jpg";

export default function PlanVisit() {
  const router = useRouter();

  const teamNavigate = () => router.push("/about");

  return (
    <>
      <CustomHead />
      <Logo />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">Meet the Team</h1>
        <br />
        <h2 className="text-2xl font-bold mx-[20%]">
          Dream Church is a family being formed in the love of Jesus and the
          ways of his Kingdom
        </h2>
      </header>
      <section className="text-center mt-[50px] mx-[20%] space-y-4">
        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="ml-[100px] rounded-full w-32 h-32"
        />
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
