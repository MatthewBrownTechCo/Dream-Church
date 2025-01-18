import Image from "next/image";
import instagram from "../../logos/instagram.png";
import facebook from "../../logos/facebook.png";
import applePodcasts from "../../logos/apple-podcast-icon-932x1024-dnug5zi2.png";
import spotify from "../../logos/Spotify_Primary_Logo_RGB_White.png";

const Footer = () => {
  return (
    <footer className="flex text-center bg-black mt-[100px] text-white">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Contact Info</h1>
        <p>hello@dreamcolumbia.com</p>
        <p>1633 Main St</p>
        <p>Suite 100</p>
        <p>Columbia, SC 29201</p>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Service Times</h1>
        <p>Sundays at 10 AM EST</p>
        <p>Tuesdays at 7 PM EST</p>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Follow Us</h1>
        <div className="flex justify-center gap-x-8 items-center">
          <Image
            src={instagram}
            alt="Instagram Logo"
            className="h-12 w-auto object-contain"
          />
          <Image
            src={facebook}
            alt="Facebook Logo"
            className="h-[55px] w-auto object-contain"
          />
          <Image
            src={applePodcasts}
            alt="Apple Podcasts Logo"
            className="h-12 w-auto object-contain"
          />
          <Image
            src={spotify}
            alt="Spotify Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
