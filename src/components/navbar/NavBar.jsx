import React, { useState } from "react";
import newsLogo from "../../assets/newsapp-logo.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-gradient-to-r from-[rgba(136,73,9,.7)] to-[#335343] w-full h-[90px] p-2 md:px-4 md:py-2 flex justify-between items-center">
      {/* ------------------------------------- Menu -------------------------------------- */}

      <Link to="/">
        <img className="h-[50px] lg:h-[70px]" src={newsLogo} alt="news logo" />
      </Link>

      <ul className="hidden md:flex md:gap-x-8 md:mr-4">
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

      {/* ---------------------------------------- Hamburger ------------------------------------- */}

      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? (
          <GrMenu className="text-3xl animate-pulse" />
        ) : (
          <GrClose className="text-3xl animate-pulse" />
        )}
      </div>

      {/* ---------------------------------- mobile menu ----------------------------------- */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#884909] to-[rgba(51,83,67,0.9)] flex flex-col justify-center items-center gap-8 z-10"
        }
      >
        <Link to="/">
          <li className="text-white text-3xl font-medium hover:text-yellow-400 lg:hover:scale-110">
            Inicio
          </li>
        </Link>
        <Link to="/about">
          <li className="text-white text-3xl font-medium hover:text-yellow-400 lg:hover:scale-110">
            Sobre Nosotros
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
