/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Nav = ({ onLogin }) => {
  return (
    <>
      <nav className="px-10  w-full z-50  bg-red-700 fixed max-md:px-5 py-5 flex justify-between ">
        <div className="flex gap-2">
          {/* <div className="bg-gray-300/20 flex gap-1 justify-center items-center rounded-lg px-4 py-2">
            <div className="px-2 py-2 rounded-full bg-[#207DFF]"></div>
            <div className="px-2 py-2 rounded-full bg-[#F06157]"></div>
          </div> */}
          <div className="flex justify-center items-center">
            <p className="text-3xl text-white font-semibold">TIMELESS</p>
          </div>
        </div>
        <ul className="flex max-lg:hidden justify-center text-lg items-center  gap-[60px] ">
          <Link
            to={'/'}
            className="hover:text-white hover:scale-105 transition-all 3s">
            <li className="font-semibold">Home</li>
          </Link>
          <Link
            to={'/featured'}
            className="hover:text-white hover:scale-105 transition-all 3s">
            <li>Features</li>
          </Link>
          <Link
            to={'/showcase'}
            className="hover:text-white hover:scale-105 transition-all 3s">
            <li>Showcase</li>
          </Link>
          <Link
            to={'/products'}
            className="hover:text-white hover:scale-105 transition-all 3s">
            <li>Products</li>
          </Link>
        </ul>

        <button
          onClick={onLogin}
          className="bg-gray-100 max-md:hidden font-semibold hover:text-white hover:3s hover:scale-110 hover:transition-all  uppercase  hover:bg-black  tracking-wider rounded text-black px-8 py-2 ">
          Sign in
        </button>
      </nav>
    </>
  );
};

export default Nav;
