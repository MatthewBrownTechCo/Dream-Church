import Image from "next/image";
import instagram from "../../logos/instagram.png";
import facebook from "../../logos/facebook.png";
import applePodcasts from "../../logos/apple-podcast-icon-932x1024-dnug5zi2.png";
import spotify from "../../logos/Spotify_Primary_Logo_RGB_White.png";

const Footer = () => {
  return (
    <footer className="text-center bg-black mt-[100px] text-white p-8">
      <div>
        <h2 className="text-2xl font-bold">Stay in the loop</h2>
        <br />
        <p>
          Sign up with your email address to receive news and updates from Dream
          Church.
        </p>
      </div>
      <br />
      <div className="space-y-7">
        <input
          type="email"
          name="newsletter"
          placeholder="Email Address"
          className="block border rounded-md border-black p-2 w-64 mx-auto"
          required={true}
        />
        <button className="text-center text-black font-bold bg-white border border-white w-[150px] h-[50px] hover:bg-gray-100">
          Sign Up
        </button>
      </div>
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
