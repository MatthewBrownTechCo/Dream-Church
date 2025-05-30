"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import instagram from "../../public/logos/instagram.png";
import facebook from "../../public/logos/facebooklogo.png";
import youtube from "../../public/logos/youtube-app-white-icon.webp";

/// <reference types="grecaptcha" />

declare const grecaptcha: ReCaptchaV2.ReCaptcha;

const Footer = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Injecting reCAPTCHA script");
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => console.log("reCAPTCHA script loaded");
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "submit" }
    );

    // Retrieves api middleware to bypass CORS
    const scriptUrl = "/api/newsletter";

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email, token }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setMessage("Thanks for signing up!");
      } else {
        setMessage("Oops! Something went wrong.");
      }
    } catch (error) {
      console.log("Error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setfName("");
      setlName("");
      setEmail("");
    }
  };

  return (
    <footer className="text-center bg-[rgb(28,28,28)] mt-[50px] text-white p-8">
      <div>
        <h2 className="text-3xl font-medium">Stay in the loop</h2>
        <br />
        <p className="text-xl">
          Sign up with your email address to receive news and updates from Dream
          Church.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-10 mt-[40px]">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center">
          <input
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            placeholder="First Name"
            className="text-black block border rounded-md border-black p-2 w-full md:w-64 md:mx-[1%]"
          />
          <input
            type="text"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            placeholder="Last Name"
            className="text-black block border rounded-md border-black p-2 w-full md:w-64 md:mx-[1%]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="text-black block border rounded-md border-black p-2 w-full md:w-64 md:mx-[1%]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-center text-xl text-black font-bold bg-white border border-white w-[150px] h-[50px] hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      <div className="flex justify-center gap-x-6 mt-[50px]">
        <a href="https://www.instagram.com/dreamchurchcola/" target="_blank">
          <Image
            src={instagram}
            alt="Instagram Logo"
            className="h-[31px] w-auto object-contain"
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
      <p className="mt-[20px]">
        <a
          href="/contactus"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Contact Us
        </a>{" "}
        |{" "}
        <a
          href="/give"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Give
        </a>
      </p>
      <p className="text-xl mt-[60px]">
        <i>&copy; Dream Church Columbia. All rights reserved.</i>
      </p>
      <p className="text-base mt-[20px]">
        <i>
          Site created by{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61564673454795"
            target="_blank"
            className="font-bold hover:text-gray-300"
          >
            Matthew Brown Tech
          </a>
        </i>
      </p>
    </footer>
  );
};

export default Footer;
