import Image from "next/image";
import dreamLogo from "../../../src/logos/dream-logo.jpg";

const Logo = () => {
  return (
    <Image
      src={dreamLogo}
      alt="Dream Church Logo"
      width={100}
      height={100}
      className="ml-[100px]"
    />
  );
};

export default Logo;
