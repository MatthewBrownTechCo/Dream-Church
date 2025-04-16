"use client"; // Required for useRouter
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./logos";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // For About menu
  const [originalMenu, setOriginalMenu] = useState(true); // Tracks if we are on the main menu or About

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
    setAboutOpen(false);
    setOriginalMenu(true); // Return to main menu when navigating
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

  const showAboutMenu = () => {
    setAboutOpen(true);
    setOriginalMenu(false);
  };

  const showMainMenu = () => {
    setAboutOpen(false);
    setOriginalMenu(true);
  };

  return (
    <div className="bg-[rgb(28,28,28)] px-6 py-6 sticky top-0 z-20">
      <div className="flex justify-between items-center text-white">
        <div className="pl-5">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex text-[18px] items-center pr-5">
          <div
            onClick={() => navigate("/")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 {getLinkClass("/")}`}
          >
            Home
          </div>

          <div className="relative group text-left">
            <div
              onClick={() => navigate("/location")}
              className={`px-4 hover:cursor-pointer hover:text-gray-200 {getLinkClass([
                "/location",
                "/dreamkids",
                "/serve",
                "/leaders",
                "/beliefs",
                "/contactus",
              ])}`}
            >
              About
            </div>
            <div className="absolute left-0 top-full w-48 bg-[rgb(28,28,28)] hidden group-hover:block pl-4">
              <div
                onClick={() => navigate("/location")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/location")}`}
              >
                Location & Times
              </div>
              <div
                onClick={() => navigate("/dreamkids")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/dreamkids")}`}
              >
                Dream Kids
              </div>
              <div
                onClick={() => navigate("/serve")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/serve")}`}
              >
                Serve
              </div>
              <div
                onClick={() => navigate("/leaders")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/leaders")}`}
              >
                Leaders
              </div>
              <div
                onClick={() => navigate("/beliefs")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/beliefs")}`}
              >
                Beliefs
              </div>
              <div
                onClick={() => navigate("/contactus")}
                className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/contactus")}`}
              >
                Contact Us
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("/midweek")}
            className={`px-4 hover:cursor-pointer hover:text-gray-200 {getLinkClass("/midweek")}`}
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
            className={`px-4 hover:cursor-pointer hover:text-gray-200 {getLinkClass("/prayer")}`}
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
            className={`px-4 hover:cursor-pointer hover:text-gray-200 {getLinkClass("/planyourvisit")}`}
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && originalMenu && (
        <div className="md:hidden bg-[rgb(28,28,28)] text-white flex flex-col items-center py-6 space-y-4 fixed top-0 left-0 w-full z-30 h-screen">
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center w-full px-6">
            <div className="pl-5">
              <Logo />
            </div>
            <div onClick={toggleMenu} className="cursor-pointer text-2xl">
              <FiX />
            </div>
          </div>

          <div
            onClick={() => navigate("/")}
            className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/")}`}
          >
            Home
          </div>
          <div
            onClick={showAboutMenu}
            className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/about")}`}
          >
            About <span className="md:hidden"> &gt;</span>{" "}
          </div>
          <div
            onClick={() => navigate("/midweek")}
            className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/midweek")}`}
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
            onClick={() => navigate("/prayer")}
            className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/prayer")}`}
          >
            Prayer
          </div>
          <div
            onClick={() => navigate("/planyourvisit")}
            className={`hover:cursor-pointer hover:text-gray-200 {getLinkClass("/planyourvisit")}`}
          >
            Plan Your Visit
          </div>
          <button
            onClick={() => navigate("/give")}
            className="bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] h-[40px] w-[80px] hover:bg-gray-200"
          >
            Give
          </button>
        </div>
      )}

      {/* Mobile About Menu */}
      {menuOpen && aboutOpen && (
        <div className="md:hidden bg-[rgb(28,28,28)] text-white flex flex-col items-center py-6 space-y-4 fixed top-0 left-0 w-full z-30 h-screen">
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center w-full px-6">
            <div className="pl-5">
              <Logo />
            </div>
            <div onClick={toggleMenu} className="cursor-pointer text-2xl">
              <FiX />
            </div>
          </div>

          {/* Back Button */}
          <div
            onClick={showMainMenu}
            className="cursor-pointer text-white text-xl mb-6 text-center"
          >
            &lt; Back {/* Centered the back button */}
          </div>

          <div className="flex flex-col items-center py-6 space-y-4 text-white">
            <div
              onClick={() => navigate("/location")}
              className={getLinkClass("/location")}
            >
              Location & Times
            </div>
            <div
              onClick={() => navigate("/dreamkids")}
              className={getLinkClass("/dreamkids")}
            >
              Dream Kids
            </div>
            <div
              onClick={() => navigate("/serve")}
              className={getLinkClass("/serve")}
            >
              Serve
            </div>
            <div
              onClick={() => navigate("/leaders")}
              className={getLinkClass("/leaders")}
            >
              Leaders
            </div>
            <div
              onClick={() => navigate("/beliefs")}
              className={getLinkClass("/beliefs")}
            >
              Beliefs
            </div>
            <div
              onClick={() => navigate("/contactus")}
              className={getLinkClass("/contactus")}
            >
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
