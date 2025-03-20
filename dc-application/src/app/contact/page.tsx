"use client";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import instagram from "../../../public/logos/instagram.png";
import facebook from "../../../public/logos/facebooklogo.png";
import youtube from "../../../public/logos/youtube-app-white-icon.webp";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   For later use should we decide to add select blocks later
//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

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
      const response = await fetch("/api/contact", {
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
    <div>
      <NavBar />
      <div className="flex mb-[300px]">
        <div className="flex-1 flex flex-col justify-center text-left pl-[100px]">
          <h1 className="text-6xl">Contact Us.</h1>
          <br />
          <p>hello@dreamcolumbia.com</p>
          <p>(803) 567-5336</p>
          <br />
          <p>1633 Main Street</p>
          <p>Columbia, SC</p>
          <div className="flex gap-x-8 items-center mt-[20px]">
            <a
              href="https://www.instagram.com/dreamchurchcola/"
              target="_blank"
            >
              <Image
                src={instagram}
                alt="Instagram Logo"
                className="h-7 w-auto object-contain"
              />
            </a>
            <a href="https://www.facebook.com/dreamchurchcola" target="_blank">
              <Image
                src={facebook}
                alt="Facebook Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
            <a href="https://www.youtube.com/@dreamchurchcola" target="_blank">
              <Image
                src={youtube}
                alt="YouTube Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 mt-[50px] space-y-3">
          <div className="space-y-2 w-[80%]">
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

          <div className="space-y-2 w-[80%]">
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

          <div className="space-y-2 w-[80%]">
            <label htmlFor="email" className="block font-medium">
              <b>Email</b> (required)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="border border-black w-full p-2 text-black"
              required={true}
            />
          </div>

          <div className="space-y-2 w-[80%]">
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

          <div className="space-y-2 w-[80%]">
            <label htmlFor="message" className="block font-medium">
              <b>What would you'd like us to know?</b> (required)
            </label>
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

          <div className="">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-bold border border-black py-[15px] w-[200px] hover:bg-gray-200"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
          {message && <p className="text-left text-xl mt-4">{message}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
