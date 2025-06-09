"use client";

import React, { useState } from "react";

export default function FormularioInscripcion() {
  const inputStyle =
    "w-full px-4 py-2 rounded-md bg-[#1c2d49] border border-white/20 " +
    "text-[#FDF6E3] placeholder-[#FDF6E3] " +
    "focus:outline-none focus:ring-2 focus:ring-[#A3C7E6] appearance-none";

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [sexo, setSexo] = useState("");
  const [pais, setPais] = useState("");

  const paises = [
    "Colombia",
    "México",
    "España",
    "Argentina",
    "Chile",
    "Estados Unidos",
    "Canadá",
    "Alemania",
    "Francia",
    "Reino Unido",
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('/img/login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full max-w-3xl p-10 rounded-2xl shadow-xl"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(28,45,73,0.6), rgba(163,199,230,0.3))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1 className="text-3xl text-[#FDF6E3] font-bold mb-8 text-center">
          Formulario de Inscripción
        </h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              className={inputStyle}
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            >
              <option value="" disabled>
                Tipo de documento
              </option>
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="ti">Tarjeta de Identidad</option>
              <option value="ce">Cédula de Extranjería</option>
              <option value="pasaporte">Pasaporte</option>
            </select>

            <input className={inputStyle} placeholder="Número de documento" />
            <input className={inputStyle} placeholder="Nombres" />
            <input className={inputStyle} placeholder="Apellidos" />
            <input className={inputStyle} placeholder="Número de contacto" />
            <input
              type="email"
              className={inputStyle}
              placeholder="Correo electrónico"
            />

            <select
              className={inputStyle}
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="" disabled>
                Sexo
              </option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
              <option value="prefiero_no_decirlo">Prefiero no decirlo</option>
            </select>

            <input
              type="date"
              className={inputStyle}
              placeholder="Fecha de nacimiento"
            />
            <select
              className={inputStyle}
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            >
              <option value="" disabled>
                País de residencia
              </option>
              {paises.map((optionPais) => (
                <option key={optionPais} value={optionPais}>
                  {optionPais}
                </option>
              ))}
            </select>
            <input className={inputStyle} placeholder="Departamento" />
            <input className={inputStyle} placeholder="Ciudad" />
          </div>
          <textarea
            className={`${inputStyle} h-24`}
            placeholder="Comentarios adicionales..."
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FDF6E3] text-[#0C1E3C] py-2 rounded-md font-semibold hover:bg-[#e6e2c4] hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            Inscribirse
          </button>
        </form>
      </div>
    </div>
  );
}