import Image from "next/image";
import instagram from "../../../public/logos/instagram.png";
import facebook from "../../../public/logos/facebooklogo.png";
import youtube from "../../../public/logos/youtube-app-white-icon.webp";

const socialBtn = () => {
  return (
    <div className="flex flex-row justify-center">
      <button className="bg-transparent border border-black py-[15px] w-[20%] hover:bg-gray-100">
        <a href="/">
          <Image
            src={instagram}
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
            src={facebook}
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
            src={youtube}
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
