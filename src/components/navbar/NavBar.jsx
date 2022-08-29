import React from "react";
import newsLogo from "../../assets/newsapp-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="relative bg-gradient-to-r from-[rgba(136,73,9,.7)] to-[#335343] w-full h-[90px] p-2 lg:px-4 lg:py-2 flex justify-between items-center">
      <Link to="/">
        <img className="h-[50px] lg:h-[70px]" src={newsLogo} alt="news logo" />
      </Link>
      <div className="mr-8">
        <ul className="flex gap-x-4 lg:gap-x-10">
          <Link to="/">
            <li className="text-white text-sm md:text-base lg:text-xl font-medium hover:text-yellow-400 lg:hover:scale-110">
              Inicio
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white text-sm md:text-base lg:text-xl font-medium hover:text-yellow-400 lg:hover:scale-110">
              Sobre Nosotros
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
