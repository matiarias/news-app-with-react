import React, { useEffect, useState } from "react";
import { newsApi } from "../helpers/newsApi";

import NavBar from "../components/navbar/NavBar";
import Overlay from "../components/overlay/Overlay";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";
import NoticiasCard from "../components/noticias card/NoticiasCard";

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
            <div className="w-full h-[500px] flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            noticias.datos.map((item, index) => (
              <NoticiasCard item={item} index={index} />
            ))
          )}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
