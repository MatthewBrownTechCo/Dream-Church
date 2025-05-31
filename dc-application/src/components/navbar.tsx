"use client"; // Required for useRouter
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./logos";
import { useEffect } from "react";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            className={`px-4 ${getLinkClass("/")}`}
          >
            Home
          </div>

          <div className="relative group text-left">
            <div
              onClick={() => navigate("/location")}
              className={`px-4 ${getLinkClass([
                "/location",
                "/midweek",
                "/dreamkids",
                "/serve",
                "/leaders",
                "/beliefs",
                "/baptism",
                "/contactus",
              ])}`}
            >
              About
            </div>
            <div className="absolute left-0 top-full w-48 bg-[rgb(28,28,28)] hidden group-hover:block pl-4">
              {[
                "/location",
                "/midweek",
                "/dreamkids",
                "/serve",
                "/leaders",
                "/beliefs",
                "/baptism",
                "/resources",
                "/contactus",
              ].map((path) => (
                <div
                  key={path}
                  onClick={() => navigate(path)}
                  className={`hover:cursor-pointer hover:text-gray-200 ${getLinkClass(
                    path
                  )}`}
                >
                  {path === "/location" && "Location & Times"}
                  {path === "/midweek" && "Midweek"}
                  {path === "/dreamkids" && "Dream Kids"}
                  {path === "/serve" && "Serve"}
                  {path === "/leaders" && "Leaders"}
                  {path === "/beliefs" && "Beliefs"}
                  {path === "/baptism" && "Baptism"}
                  {path === "/resources" && "Resources"}
                  {path === "/contactus" && "Contact Us"}
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={liveStreamNav}
            className="px-4 cursor-pointer hover:text-gray-200"
          >
            Live Stream
          </div>
          <div
            onClick={() => navigate("/visionsunday")}
            className={`px-4 ${getLinkClass("/visionsunday")}`}
          >
            Vision Sunday
          </div>
          <div
            onClick={() => navigate("/prayer")}
            className={`px-4 ${getLinkClass("/prayer")}`}
          >
            Prayer
          </div>
          <div
            onClick={calendarNav}
            className="px-4 cursor-pointer hover:text-gray-200"
          >
            Calendar
          </div>
          <div
            onClick={() => navigate("/planyourvisit")}
            className={`px-4 ${getLinkClass("/planyourvisit")}`}
          >
            Plan Your Visit
          </div>
          <button
            onClick={() => navigate("/give")}
            className="px-4 cursor-pointer bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] h-[40px] w-[80px] hover:bg-gray-200"
          >
            Give
          </button>
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
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[rgb(28,28,28)] text-white z-30 transition-opacity duration-300 ${
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

        {/* Slide Panel Container */}
        <div className="relative h-[calc(100vh-88px)] overflow-hidden px-6">
          {/* Main Menu Panel */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              aboutOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="h-full overflow-y-auto flex flex-col items-center space-y-6 pb-10">
              <div
                onClick={() => navigate("/")}
                className={`text-4xl ${getLinkClass("/")}`}
              >
                Home
              </div>
              <div
                onClick={() => setAboutOpen(true)}
                className={`text-4xl ${getLinkClass("/about")}`}
              >
                About &gt;
              </div>
              <div
                onClick={liveStreamNav}
                className="text-4xl cursor-pointer hover:text-gray-200"
              >
                Live Stream
              </div>
              <div
                onClick={() => navigate("/visionsunday")}
                className={`text-4xl ${getLinkClass("/visionsunday")}`}
              >
                Vision Sunday
              </div>
              <div
                onClick={() => navigate("/prayer")}
                className={`text-4xl ${getLinkClass("/prayer")}`}
              >
                Prayer
              </div>
              <div
                onClick={calendarNav}
                className="text-4xl cursor-pointer hover:text-gray-200"
              >
                Calendar
              </div>
              <div
                onClick={() => navigate("/planyourvisit")}
                className={`text-4xl ${getLinkClass("/planyourvisit")}`}
              >
                Plan Your Visit
              </div>
              <br />
              <button
                onClick={() => navigate("/give")}
                className="mt-6 bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] text-4xl font-bold h-[70px] w-[250px] hover:bg-gray-200"
              >
                Give
              </button>
            </div>
          </div>

          {/* About Panel */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              aboutOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto flex flex-col items-center space-y-6 pb-10">
              <div
                onClick={() => setAboutOpen(false)}
                className="text-4xl text-zinc-500 hover:text-zinc-400"
              >
                &lt; Back
              </div>
              <div
                onClick={() => navigate("/location")}
                className={`text-4xl ${getLinkClass("/location")}`}
              >
                Location & Times
              </div>
              <div
                onClick={() => navigate("/midweek")}
                className={`text-4xl ${getLinkClass("/midweek")}`}
              >
                Midweek
              </div>
              <div
                onClick={() => navigate("/dreamkids")}
                className={`text-4xl ${getLinkClass("/dreamkids")}`}
              >
                Dream Kids
              </div>
              <div
                onClick={() => navigate("/serve")}
                className={`text-4xl ${getLinkClass("/serve")}`}
              >
                Serve
              </div>
              <div
                onClick={() => navigate("/leaders")}
                className={`text-4xl ${getLinkClass("/leaders")}`}
              >
                Leaders
              </div>
              <div
                onClick={() => navigate("/beliefs")}
                className={`text-4xl ${getLinkClass("/beliefs")}`}
              >
                Beliefs
              </div>
              <div
                onClick={() => navigate("/baptism")}
                className={`text-4xl ${getLinkClass("/baptism")}`}
              >
                Baptism
              </div>
              <div
                onClick={() => navigate("/resources")}
                className={`text-4xl ${getLinkClass("/resources")}`}
              >
                Resources
              </div>
              <div
                onClick={() => navigate("/contactus")}
                className={`text-4xl ${getLinkClass("/contactus")}`}
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
