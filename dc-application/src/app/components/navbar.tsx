"use client"; // Required for useRouter
import { useRouter } from "next/navigation";
import Logo from "./logos";

const NavBar = () => {
  const router = useRouter();

  const homeNav = () => router.push("/");
  const leadersNav = () => router.push("/leaders");
  const valuesNav = () => router.push("/values");
  const beliefsNav = () => router.push("/beliefs");
  const midweekNav = () => router.push("/midweek");
  const liveStreamNav = () =>
    window.open("https://www.youtube.com/dreamchurchcola", "_blank");
  const planVisitNav = () => router.push("/planvisit");
  const giveNav = () => router.push("/give");

  return (
    <div className="bg-[rgb(21,31,38)] p-10 sticky top-0 z-10 py-6">
      <Logo />
      <div className="flex mt-[-4.5%] ml-[40%] relative text-white">
        <div
          onClick={homeNav}
          className="cursor-pointer flex-1 text-center hover:text-gray-200"
        >
          Home
        </div>

        {/* About with hover dropdown */}
        <div className="relative flex-1 text-center group">
          <div className="cursor-pointer hover:text-gray-200">About</div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-40 bg-[rgb(21,31,38)] rounded-lg shadow-lg hidden group-hover:block">
            <div
              onClick={leadersNav}
              className="cursor-pointer px-4 py-2 border border-transparent hover:border-white"
            >
              Leaders
            </div>
            <div
              onClick={valuesNav}
              className="cursor-pointer px-4 py-2 border border-transparent hover:border-white"
            >
              Values
            </div>
            <div
              onClick={beliefsNav}
              className="cursor-pointer px-4 py-2 border border-transparent hover:border-white"
            >
              Beliefs
            </div>
          </div>
        </div>

        <div onClick={midweekNav} className="cursor-pointer flex-1 text-center">
          Midweek
        </div>
        <div
          onClick={liveStreamNav}
          className="cursor-pointer flex-1 text-center"
        >
          Live Stream
        </div>
        <div
          onClick={planVisitNav}
          className="cursor-pointer flex-1 text-center"
        >
          Plan Your Visit
        </div>
        <div className="flex-1 text-center">
          <button
            onClick={giveNav}
            className="mt-[-10%] cursor-pointer bg-white text-[rgb(21,31,38)] border border-[rgb(21,31,38)] h-[50px] w-[70px] hover:bg-gray-100"
          >
            Give
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
