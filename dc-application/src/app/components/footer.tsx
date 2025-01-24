import React, { useState } from "react";
import Image from "next/image";
import instagram from "../../logos/instagram.png";
import facebook from "../../logos/facebook.png";
import applePodcasts from "../../logos/apple-podcast-icon-932x1024-dnug5zi2.png";
import spotify from "../../logos/Spotify_Primary_Logo_RGB_White.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Use the Next.js API route
    const scriptUrl = "/api/newsletter";

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="text-black block border rounded-md border-black p-2 w-64 mx-auto"
          required
        />
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
        <Image
          src={instagram}
          alt="Instagram Logo"
          className="h-8 w-auto object-contain"
        />
        <Image
          src={facebook}
          alt="Facebook Logo"
          className="h-[37px] w-auto object-contain"
        />
        <Image
          src={applePodcasts}
          alt="Apple Podcasts Logo"
          className="h-8 w-auto object-contain"
        />
        <Image
          src={spotify}
          alt="Spotify Logo"
          className="h-8 w-auto object-contain"
        />
      </div>
      <p className="mt-[50px]">
        <i>&copy; Dream Church Columbia. All rights reserved.</i>
      </p>
    </footer>
  );
};

export default Footer;
