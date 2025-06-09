// ReseñasLibros.tsx

"use client";
import React from "react";

const reseñas = [
  {
    nombre: "María López",
    texto:
      "‘La canción de Aquiles’ me rompió el corazón. La forma en que se relata la historia de amor entre Patroclo y Aquiles, desde su infancia hasta la guerra de Troya, es simplemente hermosa y devastadora.",
    libro: "La canción de Aquiles",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    estrellas: 5,
  },
  {
    nombre: "Carlos Martínez",
    texto:
      "‘Matar un reino’ me sorprendió por su protagonista: una sirena que arranca corazones y que debe aprender a ser humana. El contraste entre Lira y Elian le da mucha tensión a la historia. Me encantó su desarrollo.",
    libro: "Matar un reino",
    foto: "https://randomuser.me/api/portraits/men/43.jpg",
    estrellas: 4,
  },
  {
    nombre: "Ana Torres",
    texto:
      "‘Tres pasos atrás’ me conmovió profundamente. Es una historia dura sobre abuso y reconstrucción personal. La evolución de la protagonista y su lucha por recuperar el control de su vida es poderosa y muy real.",
    libro: "Tres pasos atrás",
    foto: "https://randomuser.me/api/portraits/women/21.jpg",
    estrellas: 5,
  },
];

const ReseñasLibros = () => {
  return (
    // Asegúrate de que este 'section' tenga el id="reseñas"
    <section id="reseñas" className="bg-[#A3C7E6] py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#0C1E3C] mb-8">
        Reseñas de nuestros lectores
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reseñas.map((resena, index) => (
          <div
            key={index}
            // Fondo de las tarjetas individuales de reseña en Blanco Lunar (#FDF6E3)
            className="flex flex-col w-[340px] bg-[#FDF6E3] rounded-lg p-6 shadow-lg shadow-[#C2B8A3]/40 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={resena.foto}
                alt={resena.nombre}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#6BAED6]"
              />
              <div>
                <h3 className="font-semibold text-[#0C1E3C]">{resena.nombre}</h3>
                <p className="text-sm text-[#6BAED6] italic">{resena.libro}</p>
              </div>
            </div>
            <p className="text-[#1E3A5F] text-sm mb-4">"{resena.texto}"</p>
            <div className="flex">
              {Array.from({ length: resena.estrellas }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              {Array.from({ length: 5 - resena.estrellas }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReseñasLibros;