"use client"; // Required for useRouter
import { useRouter, usePathname } from "next/navigation";
import Logo from "./logos";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const beliefsNav = () => router.push("/beliefs");
  const contactNav = () => router.push("/contact");
  const dreamKidsNav = () => router.push("/dreamkids");
  const giveNav = () => router.push("/give");
  const homeNav = () => router.push("/");
  const leadersNav = () => router.push("/leaders");
  const locationNav = () => router.push("/location");
  const liveStreamNav = () =>
    window.open("https://www.youtube.com/dreamchurchcola", "_blank");
  const midweekNav = () => router.push("/midweek");
  const planVisitNav = () => router.push("/planvisit");
  const prayerNav = () => router.push("/prayer");
  const serveNav = () => router.push("/serve");

  const getLinkClass = (paths: string | string[]) => {
    const isActive = Array.isArray(paths)
      ? paths.includes(pathname)
      : pathname === paths;
    return isActive
      ? "cursor-pointer text-center hover:text-gray-200 underline underline-offset-4" // Active state
      : "cursor-pointer text-center hover:text-gray-200"; // Inactive state
  };

  return (
    <div className="bg-[rgb(28,28,28)] px-10 pl-[60px] py-6 sticky top-0 z-20">
      <div className="flex justify-between relative text-white">
        <Logo />
        <div className="text-[18px] flex items-center space-x-10">
          <div onClick={homeNav} className={getLinkClass("/")}>
            Home
          </div>

          {/* About with hover dropdown */}
          <div className="relative text-center group">
            <div
              onClick={locationNav}
              className={getLinkClass([
                "/about",
                "/location",
                "/dreamkids",
                "/serve",
                "/leaders",
                "/beliefs",
                "/contact",
              ])}
            >
              About
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-40 bg-[rgb(28,28,28)] hidden group-hover:block">
              <div
                onClick={locationNav}
                className={`${getLinkClass(
                  "/location"
                )} cursor-pointer hover:text-gray-200`}
              >
                Location & Times
              </div>
              <div
                onClick={dreamKidsNav}
                className={`${getLinkClass(
                  "/dreamkids"
                )} cursor-pointer hover:text-gray-200`}
              >
                Dream Kids
              </div>
              <div
                onClick={serveNav}
                className={`${getLinkClass(
                  "/serve"
                )} cursor-pointer hover:text-gray-200`}
              >
                Serve
              </div>
              <div
                onClick={leadersNav}
                className={`${getLinkClass(
                  "/leaders"
                )} cursor-pointer hover:text-gray-200`}
              >
                Leaders
              </div>
              <div
                onClick={beliefsNav}
                className={`${getLinkClass(
                  "/beliefs"
                )} cursor-pointer hover:text-gray-200`}
              >
                Beliefs
              </div>
              <div
                onClick={contactNav}
                className={`${getLinkClass(
                  "/contact"
                )} cursor-pointer hover:text-gray-200`}
              >
                Contact Us
              </div>
            </div>
          </div>

          <div
            onClick={midweekNav}
            className={`${getLinkClass(
              "/midweek"
            )} cursor-pointer hover:text-gray-200`}
          >
            Midweek
          </div>
          <div
            onClick={liveStreamNav}
            className="cursor-pointer hover:text-gray-200"
          >
            Live Stream
          </div>
          <div
            onClick={prayerNav}
            className={`${getLinkClass(
              "/prayer"
            )} cursor-pointer hover:text-gray-200`}
          >
            Prayer
          </div>
          <div
            onClick={planVisitNav}
            className={`${getLinkClass(
              "/planvisit"
            )} cursor-pointer hover:text-gray-200`}
          >
            Plan Your Visit
          </div>
          <div className="text-center">
            <button
              onClick={giveNav}
              className="cursor-pointer bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] h-[40px] w-[80px] hover:bg-gray-200"
            >
              Give
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
