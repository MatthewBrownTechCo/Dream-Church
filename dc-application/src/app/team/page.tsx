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
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Joshua Brown</h1>
        <h2 className="text-2xl font-bold">Lead Pastor</h2>
        <p>*Place Bio Here*</p>

        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Matthew Brown</h1>
        <h2 className="text-2xl font-bold">Associate Pastor</h2>
        <p>*Place Bio Here*</p>

        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Evan Rouleau</h1>
        <h2 className="text-2xl font-bold">Chairman of Elder Board</h2>
        <p>*Place Bio Here*</p>

        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Jenna Rouleau</h1>
        <h2 className="text-2xl font-bold">Administrative Elder</h2>
        <p>*Place Bio Here*</p>

        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Anita Cruz</h1>
        <h2 className="text-2xl font-bold">Elder of Hospitality</h2>
        <p>*Place Bio Here*</p>

        <Image
          src={dreamLogo}
          alt="Dream Church Logo"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">Ray Cruz</h1>
        <h2 className="text-2xl font-bold">Elder of Treasury</h2>
        <p>*Place Bio Here*</p>
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
