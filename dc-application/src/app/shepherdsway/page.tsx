"use client";

import Footer from "../../components/footer";
import React, { useState } from "react";
import NavBar from "../../components/navbar";

export default function ShepherdsWay() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    visitDate: "",
    extras: "",
    kids: "",
    message: "",
    heardAbout: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/shepherdsway", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(
          "Form sent successfully! We will get in touch with you soon."
        );
        setFormData({
          // Reset form data after submission
          fname: "",
          lname: "",
          email: "",
          phone: "",
          visitDate: "",
          extras: "",
          kids: "",
          message: "",
          heardAbout: "",
        });
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black">
      <NavBar />
      <div className="relative bg-[url('/images/thanksgiving-table.jpg')] bg-cover bg-center py-[100px] md:py-[200px] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center">
          <h3 className="text-2xl font-medium">
            At Dream Church, you are <u>family</u>.
          </h3>
          <br />
          <h1 className="text-6xl md:text-8xl font-medium">Plan Your Visit!</h1>
        </header>
      </div>
      <div className="text-center pt-[50px] px-8 md:px-0 bg-white">
        <h1 className="text-4xl md:text-6xl font-medium">
          We can&apos;t wait to meet you!
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="pt-[50px] space-y-6 bg-white">
        <p className="text-center font-medium px-[10%] md:px-[30%]">
          Visiting a church for the first time can be daunting. We want to help
          make it <u className="underline underline-offset-2">enjoyable</u>!
          Sign up to plan your visit below, and we will have someone reach out
          to you to answer any questions you have about Dream, welcome you at
          church, and make sure you and your family feel like a valuable part of
          our church family.
        </p>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="f-name" className="block font-medium">
            <b>First Name</b> (required)
          </label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border border-black w-full p-2 text-black"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="l-name" className="block font-medium">
            <b>Last Name</b> (required)
          </label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="border border-black w-full p-2 text-black"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="email" className="block font-medium">
            <b>Email</b> (required)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="phone" className="block font-medium">
            <b>Phone</b> (required)
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="XXX-XXX-XXXX"
            className="border border-black w-full p-2 text-black"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="visitDate" className="block">
            <b>Date You Plan on Visiting a Service</b> (required)
          </label>
          <input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleInputChange}
            placeholder="Choose Date"
            className="border border-black w-[25%] p-2 text-black bg-white"
            required={true}
          />
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="extras" className="block font-medium">
            <b>People (ages 8 and up) Visiting With You</b> (required)
          </label>
          <select
            id="extras"
            name="extras"
            value={formData.extras}
            onChange={handleSelectChange}
            className="w-[25%] px-1 py-2 border border-black bg-white"
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

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="kids" className="block">
            <b>Children (ages 8 and under) Visiting With You</b> (required)
          </label>
          <select
            id="kids"
            name="kids"
            value={formData.kids}
            onChange={handleSelectChange}
            className="w-[25%] px-1 py-2 border border-black bg-white"
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

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="message" className="block">
            <b>Anything You&apos;d Like Us To Know?</b>
          </label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleTextAreaChange}
            placeholder="Enter your message here"
            className="border border-black w-full p-2 text-black"
          ></textarea>
        </div>

        <div className="space-y-2 mx-auto w-[80%] md:w-[45%]">
          <label htmlFor="heardAbout" className="block">
            <b>How Did You Hear About Dream?</b>
          </label>
          <select
            id="heardAbout"
            name="heardAbout"
            value={formData.heardAbout}
            onChange={handleSelectChange}
            className="w-[25%] px-1 py-2 border border-black bg-white"
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
            disabled={loading}
            className="bg-transparent border border-black py-[15px] w-[80%] md:w-[20%] hover:bg-gray-100 mb-10"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </form>
      {message && <p className="bg-white text-center pt-2">{message}</p>}
      <Footer />
    </div>
  );
}
