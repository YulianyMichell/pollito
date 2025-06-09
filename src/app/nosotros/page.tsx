import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Nosotros: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto bg-[#FDF6E3] p-10 rounded-2xl shadow-xl bg-gradient-to-b from-[#D3CFEA] to-[#F5F9FC] py-32 px-5 my-12">
      {/* Logo y lema */}
      <div className="text-center mb-8 w-full">
        <div
          className="bg-cover bg-center bg-no-repeat w-full py-10 rounded-2xl"
          style={{ backgroundImage: "url('https://i.postimg.cc/kgHTgmMv/nosotros.png')" }}
        >
          <img
            src="img/logo.png"
            alt="Logo de Mundos de Papel"
            className="mx-auto max-w-xs drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
          />
        </div>
        <p className="italic text-[#6BAED6] mt-2 text-base">
          Donde cada página abre un mundo
        </p>
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1E3A5F]">
        <span className="text-[#0C1E3C]">Mundos de Papel</span>
      </h1>

      {/* Intro */}
      <p className="text-center text-lg mb-10 text-[#9D7A6D]">
        <strong>
          Un club de lectura juvenil donde las palabras se convierten en puentes
          entre personas, ideas y emociones.
        </strong>
      </p>

      {/* Bloques */}
      <div className="space-y-10">
        <div>
          <h2 className="font-openSans font-bold text-2xl mb-3 text-[#0C1E3C] flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="text-[#6BAED6] mr-2" />
            ¿Quiénes somos?
          </h2>
          <p className="text-[#1E3A5F] text-base leading-7 max-w-md mx-auto text-center">
            Somos una comunidad de lectores jóvenes con la convicción de que un
            buen libro puede cambiarte la vida. En{" "}
            <strong className="text-[#9D7A6D]">Mundos de Papel</strong> creemos en el
            poder de la lectura para conectar, cuestionar y transformar.
          </p>
        </div>

        <div>
          <h2 className="font-openSans font-bold text-2xl mb-3 text-[#0C1E3C] flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} className="text-[#6BAED6] mr-2" />
            Nuestra visión
          </h2>
          <p className="text-[#1E3A5F] text-base leading-7 max-w-md mx-auto text-center">
            Ser un espacio abierto, creativo y diverso donde los jóvenes
            encuentren inspiración en la literatura, crezcan como lectores y como
            personas, y descubran nuevas formas de ver el mundo.
          </p>
        </div>

        <div>
          <h2 className="font-openSans font-bold text-2xl mb-3 text-[#0C1E3C] flex items-center justify-center">
            <FontAwesomeIcon icon={faStar} className="text-[#6BAED6] mr-2" />
            Lo que nos hace únicos
          </h2>
          <p className="text-[#1E3A5F] text-base leading-7 max-w-md mx-auto text-center">
            No somos solo un club de lectura: somos una comunidad. Valoramos la
            voz de cada miembro, celebramos la diversidad de gustos y
            perspectivas, y buscamos hacer de la lectura una experiencia
            compartida y memorable.
          </p>
        </div>

        <div className="bg-[#F4C3D6] p-6 rounded-xl text-center">
          <h2 className="font-openSans font-bold text-2xl mb-3 text-[#0C1E3C] flex items-center justify-center">
            <FontAwesomeIcon icon={faRocket} className="text-[#6BAED6] mr-2" />
            ¡Únete a la aventura!
          </h2>
          <p className="font-medium text-lg text-[#0C1E3C] max-w-prose mx-auto">
            Si amás los libros tanto como nosotros, este es tu lugar. En{" "}
            <em>Mundos de Papel</em>, cada lector cuenta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;