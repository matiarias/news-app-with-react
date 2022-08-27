import React from "react";
import NavBar from "../components/navbar/NavBar";
import Overlay from "../components/overlay/Overlay";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
        <div className="w-full">
          <Overlay />
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Home;
