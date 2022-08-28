import React, { useEffect, useState } from "react";
import { newsApi } from "../helpers/newsApi";

import NavBar from "../components/navbar/NavBar";
import Overlay from "../components/overlay/Overlay";

const Home = () => {
  const [noticias, setNoticias] = useState({
    datos: [],
    loading: true,
  });

  const [categorias, setCategorias] = useState("general");

  useEffect(() => {
    newsApi(categorias).then((respuesta) => {
      console.log(respuesta);
      setNoticias({
        datos: respuesta,
        loading: false,
      });
    });
  }, [categorias]);

  return (
    <>
      <header>
        <NavBar />
        <Overlay categorias={categorias} setCategorias={setCategorias} />
      </header>
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-5 py-10">
          {noticias.loading ? (
            <h3 className="text-black text-center text-3xl">Cargando.....</h3>
          ) : (
            noticias.datos.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#bfdda8] h-[400px] w-full sm:h-[450px] lg:h-[400px] lg:max-w-[350px] rounded-lg border-2 border-[#5e7a5e] shadow-lg shadow-[#82a882] place-self-center"
              >
                <img
                  className="w-full h-[200px] object-cover"
                  src={item.urlToImage}
                  alt={item.title}
                />
                <h3 className="text-black font-bold text-md p-2">
                  {item.title}
                </h3>
                <a
                  className="absolute bottom-2 left-1/4 w-[50%] py-1 rounded-lg shadow-lg shadow-green-900 text-center text-white text-md lg:text-lg bg-gradient-to-r from-green-900 to-lime-600 hover:from-amber-700 hover:to-emerald-600"
                  href={item.url}
                  target="_blank"
                >
                  Ir a la Noticia
                </a>
              </div>
            ))
          )}
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
