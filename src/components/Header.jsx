import React from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/willi-logo.jpg";

const Header = () => {
  return (
    <header className="py-4 mb-12 border-b bg-logo">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <img className="w-[180px] h-[80px]" src={Logo} alt="logo" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link
            className="text-white hover:text-yellow-400 font-bold transition"
            to="">
            Log In
          </Link>
          <Link
            className=" bg-yellow-400 hover:bg-white text-black font-bold px-4 py-3 rounded-lg transition"
            to="">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
