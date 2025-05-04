"use client";

import Footer from "../../components/footer";
import React, { useState } from "react";
import NavBar from "../../components/navbar";

export default function Baptism() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
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
      const response = await fetch("/api/baptism", {
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
      <div className="relative bg-[url('/images/baptism.jpg')] bg-cover bg-center py-[100px] md:py-[200px] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center">
          <h1 className="text-6xl md:text-8xl font-bold">
            Baptism Sign Up Form
          </h1>
        </header>
      </div>
      <div className="text-center pt-[50px] px-8 md:px-0 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          We are so excited to see you take your next step in baptism!
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="pt-[50px] space-y-6 bg-white">
        <p className="text-center font-bold px-[10%] md:px-[25%]">
          Baptism is said to be an outward expression of inward transformation.
          While that is very true, we believe that baptism represents us doing
          exactly what Israel did, but in a spiritual sense. We are passing
          through the waters out of our slavery and into our freedom. If this is
          something that you would like to experience for yourself, fill out the
          sign up form below. If you have questions on whether signing up for
          baptism is the right step for you, fill out our contact form{" "}
          <span className="hover:text-gray-700">
            <u className="underline-offset-2">
              <a href="/contactus">here</a>
            </u>
          </span>
          .
        </p>

        <br />

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

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-transparent border border-black py-[15px] w-[80%] md:w-[20%] hover:bg-gray-100"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </form>
      {message && (
        <p className="text-center bg-white p-4 px-20 md:px-0">{message}</p>
      )}
      <Footer />
    </div>
  );
}
