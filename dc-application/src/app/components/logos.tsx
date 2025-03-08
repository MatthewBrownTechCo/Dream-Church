import Image from "next/image";
import dreamLogo from "../../../public/logos/Arch-WHT.png";

const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <Image src={dreamLogo} alt="Dream Church Logo" width={45} height={45} />
    </a>
  );
};

export default Logo;
