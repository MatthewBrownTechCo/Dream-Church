import Image from "next/image";
import dreamLogo from "../../../public/logos/Arch-WHT.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <Image src={dreamLogo} alt="Dream Church Logo" width={45} height={45} />
    </Link>
  );
};

export default Logo;
