import React from 'react';
import Link from "next/link"; // Make sure Link is imported

export default function LoginForm() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center py-24 px-4"
      style={{
        backgroundImage: "url('/img/login.png')", // Reemplaza con tu ruta real
      }}
    >
      {/* Formulario con efecto vidrio y degradado */}
      <div
        className="relative z-10 w-full max-w-md rounded-xl p-8 
        backdrop-blur-md 
        bg-gradient-to-br from-[#0C1E3C]/60 via-[#1E3A5F]/60 to-[#6BAED6]/60 
        border border-white/20 
        shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#FDF6E3]">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            className={inputStyle}
          />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className={inputStyle}
          />

          <div className="flex justify-between text-sm text-[#FDF6E3]/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#FDF6E3]" />
              Recuerdame
            </label>
            <a href="#" className="hover:underline">
              Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FDF6E3] text-[#0C1E3C] py-2 rounded-md font-semibold hover:bg-[#E5E0D8] transition"
          >
            Inicia Sesión
          </button>

          <p className="text-center text-sm text-[#FDF6E3]/80 mt-4">
            No tienes una cuenta?{' '}
            {/* Use Link component for navigation */}
            <Link href="/registrate" className="underline">
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

// Estilo de input
const inputStyle =
  "w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 " +
  "placeholder-[#FDF6E3] text-[#FDF6E3] " +
  "focus:outline-none focus:ring-2 focus:ring-[#A3C7E6] backdrop-blur-sm";