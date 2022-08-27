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
                className="relative bg-gray-200 h-[400px] w-full sm:h-[450px] lg:h-[400px] lg:max-w-[350px] rounded-md border-2 border-sky-200 border-r-sky-900 place-self-center"
              >
                <img
                  className="w-full h-[200px] object-cover"
                  src={item.urlToImage}
                  alt={item.title}
                />
                <div className="px-2 py-4">
                  <h3 className="text-black font-medium text-lg">
                    {item.title}
                  </h3>
                </div>
                <a
                  className="absolute bottom-2 rounded-md bg-slate-300"
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
