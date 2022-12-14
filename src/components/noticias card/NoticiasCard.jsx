import React from "react";

const NoticiasCard = ({ item, index }) => {
  return (
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
        href={item.url}
        target="_blank"
      >
        Ir a la Noticia
      </a>
    </div>
  );
};

export default NoticiasCard;
