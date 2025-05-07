import Image from "next/image";
import instagram from "../../public/logos/instagram.png";
import facebook from "../../public/logos/facebooklogo.png";
import youtube from "../../public/logos/youtube-app-white-icon.webp";

export const SocialBtn = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <a href="https://www.instagram.com/dreamchurchcola/" target="_blank">
        <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-12 h-12 md:w-16 md:h-16 hover:bg-gray-700">
          <Image src={instagram} alt="Instagram Logo" width={30} height={30} />
        </button>
      </a>
      <a href="https://www.facebook.com/dreamchurchcola" target="_blank">
        <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-12 h-12 md:w-16 md:h-16 hover:bg-gray-700">
          <Image src={facebook} alt="Facebook Logo" width={30} height={30} />
        </button>
      </a>
      <a href="https://www.youtube.com/@dreamchurchcola" target="_blank">
        <button className="bg-[rgb(28,28,28)] flex justify-center items-center w-12 h-12 md:w-16 md:h-16 hover:bg-gray-700">
          <Image src={youtube} alt="YouTube Logo" width={30} height={30} />
        </button>
      </a>
    </div>
  );
};
