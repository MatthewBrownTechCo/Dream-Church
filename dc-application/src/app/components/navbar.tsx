import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const homeNav = () => router.push("/");
  const aboutNav = () => router.push("/values");
  const leadersNav = () => router.push("/leaders");
  const valuesNav = () => router.push("/values");
  const beliefsNav = () => router.push("/beliefs");
  const midweekNav = () => router.push("/midweek");
  const liveStreamNav = () =>
    window.open("https://www.youtube.com/dreamchurchcola", "_blank");
  const planVisitNav = () => router.push("/planvisit");
  const giveNav = () => router.push("/give");

  return (
    <>
      <div className="flex mt-[50px]">
        <div onClick={homeNav} className="cursor-pointer flex-1 text-center">
          Home
        </div>
        <div onClick={aboutNav} className="cursor-pointer flex-1 text-center">
          About
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
            className="cursor-pointer bg-transparent border border-black h-[100%] w-[30%] hover:bg-gray-100"
          >
            Give
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
