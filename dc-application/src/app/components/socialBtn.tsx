import Image from "next/image";
import instaLogo from "../../logos/instagram.png";
import fbLogo from "../../logos/facebooklogo.png";
import youtubeLogo from "../../logos/youtube-app-white-icon.webp";

const socialBtn = () => {
  return (
    <div className="flex flex-row justify-center">
      <button className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100">
        <a href="/">
          <Image
            src={instaLogo}
            alt="Instagram Logo"
            width={100}
            height={100}
            className="w-32 h-32"
          />
        </a>
      </button>
      <button className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100">
        <a href="/">
          <Image
            src={fbLogo}
            alt="Facebook Logo"
            width={100}
            height={100}
            className="w-32 h-32"
          />
        </a>
      </button>
      <button className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100">
        <a href="/">
          <Image
            src={youtubeLogo}
            alt="YouTube Logo"
            width={100}
            height={100}
            className="w-32 h-32"
          />
        </a>
      </button>
    </div>
  );
};
