import Image from "next/image";
import instagram from "../../../public/logos/instagram.png";
import facebook from "../../../public/logos/facebooklogo.png";
import youtube from "../../../public/logos/youtube-app-white-icon.webp";

export const SocialBtn = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-16 h-16 hover:bg-gray-700">
        <a href="/">
          <Image src={instagram} alt="Instagram Logo" width={30} height={30} />
        </a>
      </button>
      <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-16 h-16 hover:bg-gray-700">
        <a href="/">
          <Image src={facebook} alt="Facebook Logo" width={30} height={30} />
        </a>
      </button>
      <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-16 h-16 hover:bg-gray-700">
        <a href="/">
          <Image src={youtube} alt="YouTube Logo" width={30} height={30} />
        </a>
      </button>
    </div>
  );
};
