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
        <h3 className="text-xl font-bold">
          At Dream Church, you are <u>family</u>.
        </h3>
        <br />
        <h1 className="text-6xl font-bold">Plan Your Visit!</h1>
      </header>
      <section className="text-center mt-[50px]">
        <h1 className="text-4xl font-bold">We can't wait to meet you!</h1>
      </section>
      <form className="mt-[50px] space-y-6">
        <p className="text-center font-bold mx-[30%]">
          Visiting a church for the first time can be daunting. We want to help
          make it <u>enjoyable</u>! Sign up to plan your visit below, and we
          will have someone reach out to you to answer any questions you have
          about Dream, welcome you at church, and make sure you and your family
          feel like a valuable part of our church family.
        </p>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="f-name" className="block font-medium">
            <b>First Name</b> (required)
          </label>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="l-name" className="block font-medium">
            <b>Last Name</b> (required)
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="email" className="block font-medium">
            <b>Email</b> (required)
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>Phone</b> (required)
          </label>
          <input
            type="text"
            name="phone"
            placeholder="XXX-XXX-XXXX"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-3.5 mx-auto w-[45%]">
          <label>
            <b>Preferred Method of Contact</b>
          </label>
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

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>Date You Plan on Visiting a Service</b> (required)
          </label>
          <input
            type="date"
            name="date"
            placeholder="Choose Date"
            className="border border-black w-[20%] p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>People (ages 8 and up) Visiting With You</b> (required)
          </label>
          <select
            id="extras"
            name="extras"
            className="w-[20%] px-1 py-2 border border-black"
            defaultValue=""
            required={true}
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>Children (ages 8 and under) Visiting With You</b> (required)
          </label>
          <select
            id="children"
            name="children"
            className="w-[20%] px-1 py-2 border border-black"
            defaultValue=""
            required={true}
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="0">Just Me</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="message" className="block font-medium">
            <b>Anything You'd Like Us To Know?</b>
          </label>
          <textarea
            rows={5}
            name="message"
            placeholder="Enter your message here"
            className="border border-black w-full p-2"
          ></textarea>
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>How Did You Hear About Dream?</b>
          </label>
          <select
            id="heard-about"
            name="heard-about"
            className="w-[25%] px-1 py-2 border border-black"
            defaultValue=""
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Podcast">Podcast</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}
