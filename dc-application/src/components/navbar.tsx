"use client"; // Required for useRouter
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./logos";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const calendarNav = () =>
    window.open(
      "https://www.canva.com/design/DAGjZAcL9Nc/Ft_cN9rUWWy2uG25fqAm9w/view?utm_content=DAGjZAcL9Nc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8828f26d98",
      "_blank"
    );

  const liveStreamNav = () =>
    window.open("https://www.youtube.com/dreamchurchcola", "_blank");

  const getLinkClass = (paths: string | string[]) => {
    const isActive = Array.isArray(paths)
      ? paths.includes(pathname)
      : pathname === paths;
    return isActive
      ? "cursor-pointer hover:text-gray-200 underline underline-offset-4"
      : "cursor-pointer hover:text-gray-200";
  };

  return (
    <div className="bg-[rgb(28,28,28)] px-6 py-6 sticky top-0 z-20">
      <div className="flex justify-between items-center text-white">
        <div className="pl-5 md:pl-9">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex text-[18px] items-center pr-5">
          <div
            onClick={() => navigate("/")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/"
            )}`}
          >
            Home
          </div>

          <div className="relative group text-left">
            <div
              onClick={() => navigate("/location")}
              className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                [
                  "/location",
                  "/dreamkids",
                  "/serve",
                  "/leaders",
                  "/beliefs",
                  "/contactus",
                ]
              )}`}
            >
              About
            </div>
            <div className="absolute left-0 top-full w-48 bg-[rgb(28,28,28)] hidden group-hover:block pl-4">
              <div
                onClick={() => navigate("/location")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/location"
                )}`}
              >
                Location & Times
              </div>
              <div
                onClick={() => navigate("/dreamkids")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/dreamkids"
                )}`}
              >
                Dream Kids
              </div>
              <div
                onClick={() => navigate("/serve")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/serve"
                )}`}
              >
                Serve
              </div>
              <div
                onClick={() => navigate("/leaders")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/leaders"
                )}`}
              >
                Leaders
              </div>
              <div
                onClick={() => navigate("/beliefs")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/beliefs"
                )}`}
              >
                Beliefs
              </div>
              <div
                onClick={() => navigate("/contactus")}
                className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                  "/contactus"
                )}`}
              >
                Contact Us
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("/midweek")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/midweek"
            )}`}
          >
            Midweek
          </div>
          <div
            onClick={liveStreamNav}
            className="px-4 cursor-pointer hover:text-gray-200"
          >
            Live Stream
          </div>
          <div
            onClick={() => navigate("/prayer")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/prayer"
            )}`}
          >
            Prayer
          </div>
          <div
            onClick={calendarNav}
            className={`px-4 cursor-pointer hover:text-gray-200`}
          >
            Calendar
          </div>
          <div
            onClick={() => navigate("/planyourvisit")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
              "/planyourvisit"
            )}`}
          >
            Plan Your Visit
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/give")}
              className="px-4 cursor-pointer bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] h-[40px] w-[80px] hover:bg-gray-200"
            >
              Give
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl items-center cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden bg-[rgb(28,28,28)] text-white fixed top-0 left-0 w-full h-screen z-30 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header: Logo + Close */}
        <div className="flex justify-between items-center px-6 py-6">
          <div className="pl-5">
            <Logo />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer text-2xl">
            <FiX />
          </div>
        </div>

        {/* Mobile Menu Content Container */}
        <div className="relative h-full w-full overflow-hidden mt-4">
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-6 transition-transform duration-500 ease-in-out ${
              aboutOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div
              onClick={() => navigate("/")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/"
              )}`}
            >
              Home
            </div>
            <div
              onClick={() => setAboutOpen(true)}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/about"
              )}`}
            >
              About <span className="md:hidden">&gt;</span>
            </div>
            <div
              onClick={() => navigate("/midweek")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/midweek"
              )}`}
            >
              Midweek
            </div>
            <div
              onClick={liveStreamNav}
              className="cursor-pointer hover:text-gray-200 text-5xl"
            >
              Live Stream
            </div>
            <div
              onClick={() => navigate("/prayer")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/prayer"
              )}`}
            >
              Prayer
            </div>
            <div
              onClick={calendarNav}
              className="cursor-pointer hover:text-gray-200 text-5xl"
            >
              Calendar
            </div>
            <div
              onClick={() => navigate("/planyourvisit")}
              className={`hover:cursor-pointer hover:text-gray-200 text-5xl ${getLinkClass(
                "/planyourvisit"
              )}`}
            >
              Plan Your Visit
            </div>
            <br />
            <button
              onClick={() => navigate("/give")}
              className="bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] text-5xl h-[70px] w-[250px] hover:bg-gray-200"
            >
              Give
            </button>
          </div>

          {/* About Slide Panel (slide in from right) */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-6 transition-transform duration-500 ease-in-out ${
              aboutOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setAboutOpen(false)}
              className="cursor-pointer text-zinc-500 hover:text-zinc-400 text-5xl mb-6 text-center"
            >
              &lt; Back
            </div>
            <div
              onClick={() => navigate("/location")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/location")}`}
            >
              Location & Times
            </div>
            <div
              onClick={() => navigate("/dreamkids")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/dreamkids")}`}
            >
              Dream Kids
            </div>
            <div
              onClick={() => navigate("/serve")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/serve")}`}
            >
              Serve
            </div>
            <div
              onClick={() => navigate("/leaders")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/leaders")}`}
            >
              Leaders
            </div>
            <div
              onClick={() => navigate("/beliefs")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/beliefs")}`}
            >
              Beliefs
            </div>
            <div
              onClick={() => navigate("/contactus")}
              className={`text-5xl hover:text-gray-200 {getLinkClass("/contactus")}`}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
