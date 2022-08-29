import React, { useEffect, useState } from "react";
import { newsApi } from "../helpers/newsApi";

import NavBar from "../components/navbar/NavBar";
import Overlay from "../components/overlay/Overlay";

const Home = () => {
  const [noticias, setNoticias] = useState({
    datos: [],
    loading: true,
  });

  const [categorias, setCategorias] = useState("");

  const [pais, setPais] = useState("us");

  //   const [error, setError] = useState(false);

  useEffect(() => {
    newsApi(categorias, pais)
      .then((respuesta) => {
        console.log(respuesta);
        setNoticias({
          datos: respuesta,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        // setError(true);
      });
  }, [categorias, pais]);

  return (
    <>
      <header>
        <NavBar />
        <Overlay
          categorias={categorias}
          setCategorias={setCategorias}
          pais={pais}
          setPais={setPais}
        />
      </header>
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-5 py-10">
          {noticias.loading ? (
            <h3 className="text-black text-center text-3xl">Cargando.....</h3>
          ) : (
            noticias.datos.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#fbfff9] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[500px] w-full md:max-w-[450px] rounded-lg border-2 border-[#618f61] shadow-xl shadow-[#82a882] place-self-center"
              >
                <img
                  className="w-full h-[200px] object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="font-medium text-center bg-gradient-to-r from-green-800 to-green-300">
                  <span className="text-white">{item.source.name}</span>
                </div>
                <h3 className="text-black font-bold text-lg md:text-md lg:text-xl p-2">
                  {item.title}
                </h3>
                <p className="text-black font-light px-2 py-1 text-sm md:text-md">
                  {item.description}
                </p>
                <a
                  className="absolute bottom-6 left-1/4 w-[50%] py-1 rounded-lg shadow-lg shadow-green-900 text-center text-white text-md lg:text-lg bg-gradient-to-r from-green-900 to-lime-600 hover:from-amber-800 hover:to-sky-900"
                  href={item.source.url}
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
