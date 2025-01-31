import React, { useState } from "react";
import Image from "next/image";
import instagram from "../../logos/instagram.png";
import facebook from "../../logos/facebooklogo.png";
import youtube from "../../logos/youtube-app-white-icon.webp";

const Footer = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Retrieves api middleware to bypass CORS
    const scriptUrl = "/api/newsletter";

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email }),
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
    <footer className="text-center bg-black mt-[100px] text-white p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Stay in the loop</h2>
        <br />
        <p className="20%">
          Sign up with your email address to receive news and updates from Dream
          Church.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="flex flex-row justify-center">
          <input
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            placeholder="First Name"
            className="text-black block border rounded-md border-black p-2 w-64 mx-[1%]"
            required
          />
          <input
            type="text"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            placeholder="Last Name"
            className="text-black block border rounded-md border-black p-2 w-64 mx-[1%]"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="text-black block border rounded-md border-black p-2 w-64 mx-[1%]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-center text-black font-bold bg-white border border-white w-[150px] h-[50px] hover:bg-gray-100 disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      <div className="flex justify-center gap-x-8 items-center mt-[70px]">
        <a href="https://www.instagram.com/dreamchurchcola/" target="_blank">
          <Image
            src={instagram}
            alt="Instagram Logo"
            className="h-8 w-auto object-contain"
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
      <p className="mt-[50px]">
        <i>&copy; Dream Church Columbia. All rights reserved.</i>
      </p>
    </footer>
  );
};

export default Footer;
