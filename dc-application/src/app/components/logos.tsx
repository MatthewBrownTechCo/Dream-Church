import Image from "next/image";
import dreamLogo from "../../../public/logos/dream-logo.jpg";

const Logo = () => {
  return (
    <a href="/" className="ml-[0px] mt-[-1%] inline-block">
      <Image
        src={dreamLogo}
        alt="Dream Church Logo"
        width={100}
        height={100}
        className="rounded-full w-24 h-24"
      />
    </a>
  );
};

export default Logo;
