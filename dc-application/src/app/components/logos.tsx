import Image from "next/image";
import dreamLogo from "../../logos/dream-logo.jpg";

const Logo = () => {
  return (
    <a href="/" className="ml-[100px] mt-[-1%] inline-block">
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
