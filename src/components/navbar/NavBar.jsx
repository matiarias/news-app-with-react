import React from "react";
import newsLogo from "../../assets/newsapp-logo.png";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-green-700 w-full h-[90px] p-2 lg:px-4 lg:py-2 flex justify-between items-center">
      <img className="h-[50px] lg:h-[70px]" src={newsLogo} alt="news logo" />
      <div className="mr-8">
        <ul className="flex gap-x-4 lg:gap-x-10">
          <li className="text-white text-sm md:text-base lg:text-xl font-medium">
            Inicio
          </li>
          <li className="text-white text-sm md:text-base lg:text-xl font-medium">
            Sobre Nosotros
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
