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
        <h1 className="text-4xl font-bold">Plan Your Visit!</h1>
      </header>
      <section className="text-center mt-[50px]">
        <h1 className="text-2xl font-bold">
          We are so honored that you chose to have church with us!
        </h1>
      </section>
      <form className="mt-[50px] ml-[30%] space-y-6">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <h3 className="font-bold mr-[45.5%]">
          If you could, please fill out the form below to let us know that you
          are coming. We'll save you a seat!
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
