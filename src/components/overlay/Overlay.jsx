import React from "react";
import newsPaperOverlay from "../../assets/newspaper-overlay-2.jpg";

const Overlay = ({ categorias, setCategorias, pais, setPais }) => {
  const handleInputCategoria = ({ target }) => {
    setCategorias(target.value);
  };

  const handleInputPais = ({ target }) => {
    setPais(target.value);
  };
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-screen object-cover object-right md:object-center z-0"
        src={newsPaperOverlay}
        alt="newspaper imagen principal"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center gap-6">
        <h1 className="text-amber-400 font-bold text-3xl md:text-4xl lg:text-6xl">
          Info News
        </h1>
        <h3 className="text-indigo-50 font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Eligé tus Noticias!
        </h3>
        <form>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <select
              className="w-[250px] md:w-[300px] p-1 md:p-2 rounded-lg bg-indigo-100"
              id="categorias"
              value={categorias}
              onChange={handleInputCategoria}
            >
              <option value="breaking-news">Ultimo Momento</option>
              <option value="world">Mundo</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="health">Salud</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnologia</option>
            </select>

            <select
              className="w-[150px] p-1 md:p-2 rounded-lg bg-indigo-100"
              id="paises"
              value={pais}
              onChange={handleInputPais}
            >
              <option value="us">Estados Unidos</option>
              <option value="pe">Peru</option>
              <option value="nl">Paises Bajos</option>
              <option value="gb">Reino Unido</option>
              <option value="fr">Francia</option>
              <option value="it">Italia</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
