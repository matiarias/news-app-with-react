import React from "react";
import newsPaperOverlay from "../../assets/newspaper-overlay-2.jpg";

const Overlay = ({ categorias, setCategorias }) => {
  const handleInputChange = ({ target }) => {
    setCategorias(target.value);
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
          Eligé una categoria de Noticias!
        </h3>
        <form>
          <div>
            <select
              className="w-[250px] md:w-[300px] p-1 md:p-2 rounded-lg bg-indigo-100"
              id="categorias"
              value={categorias}
              onChange={handleInputChange}
            >
              <option value="general">general</option>
              <option value="business">business</option>
              <option value="entertainment">entertainment</option>
              <option value="health">health</option>
              <option value="science">science</option>
              <option value="sports">sports</option>
              <option value="technology">technolody</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
