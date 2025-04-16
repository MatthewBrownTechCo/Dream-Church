"use client";

import Footer from "../../components/footer";
import Head from "next/head";
import NavBar from "../../components/navbar";
import React, { useState } from "react";

export default function Serve() {
  const [formData, setFormData] = useState<{
    fname: string;
    lname: string;
    email: string;
    phone: string;
    servingInterests: string[];
    message: string;
  }>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    servingInterests: [],
    message: "",
  });

  const servingOptions = [
    "Set up team",
    "Breakfast team",
    "Outreach",
    "Dream Kids",
    "Worship",
    "Audio and Video",
    "Hosting Midweek",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      servingInterests: checked
        ? [...prev.servingInterests, value] // Add to array if checked
        : prev.servingInterests.filter((interest) => interest !== value), // Remove if unchecked
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
      const response = await fetch("/api/serve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(
          "Thanks for filling out form! We will get in touch with you soon."
        );
        setFormData({
          // Reset form data after submission
          fname: "",
          lname: "",
          email: "",
          phone: "",
          servingInterests: [],
          message: "",
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
    <>
      <Head>
        <title>
          Volunteer Opportunities - Dream Church | Church in Columbia, SC
        </title>
        <meta
          name="description"
          content="Serve in the mission of deeply forming people in the love of Jesus and the ways of his kingdom."
        />
      </Head>
      <NavBar />
      <div className="relative bg-[url('/images/serving-outside.png')] bg-cover bg-[center_20%] px-[100px] py-[200px] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center">
          <h1 className="text-8xl font-bold">Serve</h1>
        </header>
      </div>
      <p className="px-[300px] text-center mt-[30px] text-xl">
        We are doing impactful kingdom ministry, and we want you to step into
        the vital part of the body that you are called to. If you are interested
        in serving, fill out this short form and we will reach out to answer any
        questions you have and help you get plugged in!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-[50px] py-10 mx-[20%] space-y-6 bg-white text-black text-xl"
      >
        <div className="space-y-2 px-10 w-full">
          <label htmlFor="f-name" className="block font-medium">
            <b>First Name</b> (required)
          </label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 px-10 w-full">
          <label htmlFor="l-name" className="block font-medium">
            <b>Last Name</b> (required)
          </label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 px-10 w-full">
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

        <div className="space-y-2 px-10 w-full">
          <label htmlFor="phone" className="block font-medium">
            <b>Phone</b> (required)
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="XXX-XXX-XXXX"
            className="border border-black w-full p-2"
            required={true}
          />
        </div>

        <div className="space-y-2 px-10 w-full">
          <label className="block font-medium">
            <b>Serving Area of Interest</b> (required)
          </label>
          <div className="flex flex-col gap-3">
            {servingOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="servingInterests"
                  value={option}
                  checked={formData.servingInterests.includes(option)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2 px-10 w-full">
          <label htmlFor="message" className="block font-medium">
            <b>Anything You&apos;d Like Us To Know?</b>
          </label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleTextAreaChange}
            placeholder="Enter your message here"
            className="border border-black w-full p-2"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-transparent border border-black py-[15px] w-[200px] hover:bg-gray-200"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
      <Footer />
    </>
  );
}
