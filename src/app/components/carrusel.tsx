// Carrusel.tsx

"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const destacados = [
  {
    titulo: "Caída Libre",
    autor: "Ali Hazelwood",
    descripcion:
      "Una historia apasionante sobre segundas oportunidades, ciencia y emociones desbordadas. Cuando los sentimientos colisionan con la razón, el resultado es una caída inevitable… y tal vez liberadora.",
    imagen:
      "https://contraluzeditorial.es/imagenes/libros/9788419822543-caida-libre.jpg",
  },
  {
    titulo: "A Oscuras",
    autor: "Navessa Allen",
    descripcion:
      "Un romance cargado de tensión, heridas emocionales y deseo contenido. Dos almas rotas se enfrentan a sus sombras mientras intentan encontrar luz en medio de la oscuridad.",
    imagen: "https://images.penguinrandomhouse.com/cover/9788466680516",
  },
  {
    titulo: "La Asistenta",
    autor: "Freida McFadden",
    descripcion:
      "Un thriller psicológico adictivo que juega con la confianza y las apariencias. Milly consigue lo que parece el trabajo perfecto, pero pronto descubre que su nueva jefa esconde mucho más de lo que aparenta.",
    imagen:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/f2/61/f261ec0717d823439ddf47bedc1323fe.jpg",
  },
];

const Carrusel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev === destacados.length - 1 ? 0 : prev + 1));
  };

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? destacados.length - 1 : prev - 1));
  };

  return (
    <div id="destacados" className="bg-pink-100 min-h-screen py-10 px-4">
      <div className="relative max-w-4xl mx-auto p-6 bg-pink-100 min-h-[500px] rounded-lg">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-[#0C1E3C]">
          Destacados de la semana
        </h1>

        {/* Tarjeta */}
        <div
          className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg"
          style={{
            background: "linear-gradient(135deg, #0C1E3C 0%, #F4C3D6 100%)",
            color: "#0C1E3C",
          }}
        >
          <img
            src={destacados[index].imagen}
            alt={destacados[index].titulo}
            className="w-64 h-96 object-cover rounded-md shadow-lg border-4 border-white"
          />
          <div className="md:max-w-xl">
            <h2 className="text-3xl font-extrabold drop-shadow-md text-[#0C1E3C]">
              {destacados[index].titulo}
            </h2>
            <h3 className="text-xl italic text-[#6BAED6] mb-3 drop-shadow-md">
              {destacados[index].autor}
            </h3>
            <p className="text-[#1E3A5F] leading-relaxed drop-shadow-md">
              {destacados[index].descripcion}
            </p>
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={anterior}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#F5F9FC] hover:bg-[#A3C7E6] text-[#0C1E3C] p-3 rounded-full shadow-lg transition"
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#F5F9FC] hover:bg-[#A3C7E6] text-[#0C1E3C] p-3 rounded-full shadow-lg transition"
          aria-label="Siguiente"
        >
          <FaChevronRight />
        </button>

        {/* Indicadores tipo línea */}
        <div className="flex justify-center mt-6 gap-3">
          {destacados.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${
                i === index
                  ? "bg-[#6BAED6] w-10"
                  : "bg-[#D3CFEA] w-5 hover:bg-[#9D7A6D]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;