"use client";

import Footer from "../components/footer";
import React, { useState } from "react";
import NavBar from "../components/navbar";

export default function PlanVisit() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    preferredMethod: "",
    message: "",
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
      const response = await fetch("/api/prayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(
          "Form sent successfully! We are partnering with you in prayer over your need!"
        );
        setFormData({
          // Reset form data after submission
          fname: "",
          lname: "",
          email: "",
          phone: "",
          preferredMethod: "",
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
    <div className="bg-white text-black">
      <NavBar />
      <div className="relative bg-[url('/images/prayer-cross.jpg')] bg-cover bg-center px-[100px] py-[200px] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center">
          <h1 className="text-8xl font-bold">Prayer</h1>
        </header>
      </div>
      <section className="text-center mt-[50px]">
        <h1 className="text-6xl font-bold">How can we pray for you?</h1>
      </section>
      <form onSubmit={handleSubmit} className="mt-[50px] space-y-6">
        <p className="text-center font-bold mx-[30%]">
          You were never meant to walk through life alone. We want to walk with
          you by being a partner in prayer. Let us know how we can pray for you
          below.
        </p>

        <div className="space-y-2 mx-auto w-[45%]">
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

        <div className="space-y-2 mx-auto w-[45%]">
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

        <div className="space-y-2 mx-auto w-[45%]">
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

        <div className="space-y-2 mx-auto w-[45%]">
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

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="extras" className="block font-medium">
            <b>Preferred Method of Contact</b> (required)
          </label>
          <select
            id="preferredMethod"
            name="preferredMethod"
            value={formData.preferredMethod}
            onChange={handleSelectChange}
            className="w-full px-1 py-2 border border-black"
            required={true}
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="text">Text</option>
            <option value="phoneCall">Phone Call</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div className="space-y-2 mx-auto w-[45%]">
          <label htmlFor="message" className="block font-medium">
            <b>Prayer Request</b> (required)
          </label>
          <p>
            Fell free to share as much or as little as you'd like. You may also
            put, "Unspoken".
          </p>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleTextAreaChange}
            placeholder="Enter your message here"
            className="border border-black w-full p-2 text-black"
            required={true}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
      <Footer />
    </div>
  );
}
