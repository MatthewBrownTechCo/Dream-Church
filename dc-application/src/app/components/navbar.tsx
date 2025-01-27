const NavBar = () => {
  return (
    <>
      <div className="flex mt-[50px]">
        <div className="flex-1 text-center">Home</div>
        <div className="flex-1 text-center">About</div>
        <div className="flex-1 text-center">Midweek</div>
        <div className="flex-1 text-center">Live Stream</div>
        <div className="flex-1 text-center">Plan Your Visit</div>
        <div className="flex-1 text-center">
          <button className="bg-transparent border border-black h-[100%] w-[30%] hover:bg-gray-100">
            Give
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
