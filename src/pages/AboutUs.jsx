import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import matiImg from "../assets/mati2.jpg";
import Lottie from "lottie-react";
import personLottie from "../assets/lotties/personLottie.json";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen w-full p-8 grid grid-cols-1 place-items-center">
        <div className="h-full sm:h-[400px] md:h-[500px] w-full sm:w-[600px] md:w-[750px] border-4 border-green-700 flex flex-col sm:flex-row rounded-md">
          <img
            className="h-full w-full sm:w-[300px] md:w-[400px] object-cover object-left sm:object-center"
            src={matiImg}
            alt="matias arias imagen"
          />
          <div className="relative p-4 w-full flex flex-col justify-center items-center gap-2">
            <h3 className="text-black font-bold text-2xl md:text-4xl">
              Matias Arias
            </h3>
            <h4 className="text-black font-light text-xl md:text-2xl">
              Frontend Developer
            </h4>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="absolute block bottom-0 w-[250px] md:w-[300px]">
              <Lottie animationData={personLottie} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
