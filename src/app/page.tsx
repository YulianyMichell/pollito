// HomeHeader.jsx

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Carrusel from "./components/carrusel"; // Ajusta la ruta si es necesario
import Reseñas from "./components/resenas"; // Ajusta la ruta si es necesario (asumiendo que ReseñasLibros es tu Reseñas)
import Footer from "./components/footer"; // Ajusta la ruta si es necesario

export default function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Imagen de portada como fondo que cubre toda la sección inicial */}
        <Image
          src="/img/portada3.jpg"
          alt="Portada con logo en la luna"
          fill
          priority
          className="object-cover z-0" // La imagen está en la capa más baja
        />

        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-30 z-[1]" />

        {/* Header con efecto de espejo transparente */}
        <header
          className={`absolute top-0 left-0 w-full z-30 transition-all duration-500`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px) saturate(180%)",
            WebkitBackdropFilter: "blur(8px) saturate(180%)",
            borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          }}
        >
          <div className="relative max-w-[1400px] h-[100px] mx-auto flex justify-between items-center px-10 py-2.5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="Mundos de Papel"
                width={100}
                height={30}
                className="w-[114px] h-auto drop-shadow-[0_0_10px_white]"
              />
            </Link>

            <nav className="relative z-10">
              <ul className="flex items-center gap-14 text-white font-libre text-lg">
                {[
                  { href: "#Home", label: "Inicio", icon: "/icons/inicio.svg" },
                  { href: "/biblioteca", label: "Mi Biblioteca", icon: "/icons/biblioteca.svg" },
                  { href: "/eventos", label: "Eventos", icon: "/icons/eventos.svg" }, 
                  { href: "/nosotros", label: "Nosotros", icon: "/icons/nosotros.svg" },
                ].map(({ href, label, icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center gap-1 transition-transform duration-300 hover:scale-105 hover:text-[#6BAED6]"
                      style={{ textShadow: '0px 0px 5px rgba(0, 0, 0, 0.7)' }}
                    >
                      <Image
                        src={icon}
                        alt={label}
                        width={22}
                        height={22}
                        className="transition-transform duration-300 group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_4px_#6BAED6]"
                      />
                      <span className="transition-transform duration-300 group-hover:scale-105">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
                
                <div className="flex items-center space-x-2">
                  <li>
                    <Link
                      href="/login"
                      className="relative flex items-center justify-center text-white text-[17px] font-semibold border border-white/50 rounded-full px-4 py-1.5 transition hover:border-[#6BAED6] before:absolute before:inset-0 before:rounded-full before:scale-0 hover:before:scale-100 before:bg-[#6BAED6] before:transition-transform before:duration-500 before:z-[-1]"
                    >
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/registrate"
                      className="relative flex items-center justify-center text-white text-[17px] font-semibold border border-white/50 rounded-full px-4 py-1.5 transition hover:border-[#6BAED6] before:absolute before:inset-0 before:rounded-full before:scale-0 hover:before:scale-100 before:bg-[#6BAED6] before:transition-transform before:duration-500 before:z-[-1]"
                    >
                      Regístrate
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contenido principal sobre la imagen de portada */}
        <section className="relative z-10 w-full min-h-screen flex justify-center items-center px-5 py-10 text-center text-white">
          <div className="relative max-w-[650px] min-h-[150px] px-10 py-12 mt-10 bg-black/40 rounded-[12px] text-white flex flex-col justify-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold mb-2">
              Bienvenido a Mundos de Papel
            </h1>
            <p className="text-base text-white mb-5 font-light italic">
              "Las palabras no son solo tinta: son alas".
            </p>

            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <Link
                href="/explorarClub"
                className="relative inline-block px-6 py-3 border-2 border-[#13304e] bg-[#13304e] text-white text-base font-bold font-poppins rounded-full transition-all duration-300 overflow-hidden hover:bg-[#4893C2] hover:border-[#F2E1C2]"
              >
                <span className="relative z-10">Explorar Club</span>
                <span className="absolute inset-0 bg-blue-400/40 rounded-full scale-0 hover:scale-100 transition-transform duration-500 z-0" />
              </Link>

              <Link
                href="../../public/videos/videos.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-6 py-3 border-2 border-[#13304e] bg-[#13304e] text-white text-base font-bold font-poppins rounded-full transition-all duration-300 overflow-hidden hover:bg-[#4893C2] hover:border-[#F2E1C2]"
              >
                <span className="relative z-10">Ver video</span>
                <span className="absolute inset-0 bg-blue-400/40 rounded-full scale-0 hover:scale-100 transition-transform duration-500 z-0" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* El resto de tus componentes que aparecerán debajo de la sección de portada */}
      <Carrusel />
      <Reseñas /> {/* Asumiendo que `Reseñas` es tu componente `ReseñasLibros` */}
      <Footer />
    </>
  );
}
