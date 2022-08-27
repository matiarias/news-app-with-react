import React, { useEffect, useState } from "react";
import { newsApi } from "../helpers/newsApi";

import NavBar from "../components/navbar/NavBar";
import Overlay from "../components/overlay/Overlay";

const Home = () => {
  const [noticias, setNoticias] = useState({
    datos: [],
    loading: true,
  });

  useEffect(() => {
    newsApi("general").then((respuesta) => {
      //   console.log(respuesta);
      setNoticias({
        datos: respuesta,
        loading: false,
      });
    });
    console.log(noticias);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <Overlay />
      </header>
      <main>
        {noticias.loading ? (
          <h3 className="text-black text-2xl">Cargando.....</h3>
        ) : (
          <h3 className="text-black">noticias...</h3>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
