const Nav = () => {
  return (
    <>
      <nav className="px-14 max-md:px-5 py-10 flex justify-between ">
        <div className="flex gap-2">
          <div className="bg-gray-300/20 flex gap-1 justify-center items-center rounded-lg px-4 py-2">
            <div className="px-2 py-2 rounded-full bg-[#207DFF]"></div>
            <div className="px-2 py-2 rounded-full bg-[#F06157]"></div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-3xl font-semibold">Payna</p>
          </div>
        </div>
        <ul className="flex max-md:hidden justify-center text-lg items-center  gap-[60px] ">
          <li className="font-semibold">Home</li>
          <li>Features</li>
          <li>Showcase</li>
          <li>Pricing</li>
        </ul>
        <button className="bg-gray-300 max-md:hidden rounded-full text-black px-10 py-2 ">
          Sign in
        </button>

      </nav>
    </>
  );
};

export default Nav;
