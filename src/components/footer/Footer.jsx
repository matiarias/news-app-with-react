import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[100px] sm:h-[70px] bg-gradient-to-t from-[#45705a] to-[rgba(240,222,173,0.7)] flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-6">
      <h4 className="text-black text-lg font-bold">Creado por Matias Arias</h4>
      <div className="flex gap-6">
        <a href="https://github.com/matiarias" target="_blank">
          <FaGithub className="text-3xl hover:text-gray-100" />
        </a>
        <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
          <FaLinkedinIn className="text-3xl hover:text-blue-800" />
        </a>
        <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
          <FaInstagram className="text-3xl hover:text-orange-600" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
