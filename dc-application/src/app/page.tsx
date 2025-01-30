"use client";

import Logo from "./components/logos";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const planVisitNavigate = () => router.push("/planvisit");
  const aboutNavigate = () => router.push("/about");
  const leadersNavigate = () => router.push("/leaders");

  return (
    <>
      <Logo />
      <NavBar />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">Dream Church Columbia</h1>
        <h2 className="text-2xl">Columbia, SC</h2>
        <h2 className="text-2xl">Sundays @ 10AM EST</h2>
      </header>
      <div className="flex justify-center items-center flex-col mt-[20px] gap-4">
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={planVisitNavigate}
        >
          Plan Your Visit
        </button>
      </div>
      <section className="text-center mt-[100px]">
        <h1 className="text-4xl font-bold">Watch the latest sermon.</h1>
        <h2 className="mt-[20px]">
          Check out the latest sermon from Dream Church Pastor Joshua Brown
        </h2>
        <h2 className="mt-[50px]">
          Other content can be found on our social media pages, our YouTube
          channel, or by podcast
        </h2>
      </section>
      <section className="text-center mt-[100px]">
        <h1 className="text-4xl font-bold">Join our livestream.</h1>
        <h2 className="mt-[20px]">
          We livestream our Sunday Service at 10 AM EST
        </h2>
        <h2 className="mt-[50px]">
          To watch previous livestreams, visit our YouTube channel{" "}
          <a
            className="underline text-blue-500"
            href="https://www.youtube.com/@dreamchurchcola"
            target="_blank"
          >
            here
          </a>
        </h2>
      </section>
      <section className="text-center mt-[100px]">
        <h2 className="text-2xl font-bold">
          Dream Church is a family being formed in the love of Jesus and the
          ways of his Kingdom
        </h2>
      </section>
      <div className="flex justify-center items-center flex-col mt-[20px] gap-4">
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={aboutNavigate}
        >
          ABOUT US
        </button>
        <button
          className="bg-transparent border border-black py-[20px] w-[500px] hover:bg-gray-100"
          onClick={leadersNavigate}
        >
          MEET THE TEAM
        </button>
      </div>
      <section className="text-center mt-[100px]">
        <h2 className="text-2xl font-bold">Follow us on social media</h2>
        <p>(Social Media buttons will go here)</p>
      </section>
      <form className="mt-[100px] ml-[30%] space-y-6">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <h3 className="font-bold">
          We'd love to hear from you. Fill out the form below to get started.
        </h3>

        <div className="space-y-2">
          <label htmlFor="f-name" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="border border-black w-[55%] p-2"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="l-name" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="border border-black w-[55%] p-2"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="border border-black w-[55%] p-2"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block font-medium">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="XXX-XXX-XXXX"
            className="border border-black w-[55%] p-2"
            required={true}
          />
        </div>

        <div className="space-y-3.5">
          <label>Preferred Method of Contact</label>
          <div className="flex space-x-[10%]">
            <div>
              <label htmlFor="call" className="block font-medium mr-2">
                Call
              </label>
              <input
                type="checkbox"
                id="call"
                name="call"
                className="form-checkbox h-5 w-5 bg-transparent checked:bg-black checked:text-white"
              />
            </div>
            <div>
              <label htmlFor="text" className="block font-medium mr-2">
                Text
              </label>
              <input
                type="checkbox"
                id="text"
                name="text"
                className="form-checkbox h-5 w-5 bg-transparent checked:bg-black checked:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mr-2">
                Email
              </label>
              <input
                type="checkbox"
                id="email"
                name="email"
                className="form-checkbox h-5 w-5 bg-transparent checked:bg-black checked:text-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            placeholder="Enter your message here"
            className="border border-black w-[55%] p-2"
            required={true}
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-transparent border border-black py-[15px] w-[15%] hover:bg-gray-100"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}
