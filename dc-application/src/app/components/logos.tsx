import Image from "next/image";
import image from "../../../src/logos/GitHub-logo.png";

const Logo = () => {
  return (
    <Image
      src={image}
      alt="Dream Church Logo"
      width={100}
      height={100}
      className="ml-[100px]"
    />
  );
};

export default Logo;
