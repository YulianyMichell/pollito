"use client";
import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0C1E3C] text-[#F5F9FC] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Nombre */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Club de Lectura</h3>
          <p className="text-sm text-[#F5F9FC]">
            Historias que nos inspiran, unen y transforman. Únete a nuestro viaje literario.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-[#A3C7E6]">Enlaces Rápidos</h4>
          <ul className="space-y-1 text-sm">
            {/* Enlace de Nuestros Servicios (Apuntando a explorarClub) */}
            <li>
              <Link href="/explorarClub#nuestros-servicios" className="text-[#F5F9FC] hover:text-[#6BAED6]">
                Nuestros Servicios
              </Link>
            </li>
            {/* Enlace de Preguntas Frecuentes (Apuntando a explorarClub) */}
            <li>
              <Link href="/explorarClub#preguntas-frecuentes" className="text-[#F5F9FC] hover:text-[#6BAED6]">
                Preguntas Frecuentes
              </Link>
            </li>
            {/* Destacados de la Semana (Apuntando a la sección en la página de inicio) */}
            <li>
              <Link href="/#destacados" className="text-[#F5F9FC] hover:text-[#6BAED6]">
                Destacados de la Semana
              </Link>
            </li>
            {/* Reseñas de Libros (Apuntando a la sección en la página de inicio) */}
            <li>
              <Link href="/#reseñas" className="text-[#F5F9FC] hover:text-[#6BAED6]">
                Reseñas de Libros
              </Link>
            </li>
            {/* Otros enlaces */}
            <li>
              <Link href="/nosotros" className="text-[#F5F9FC] hover:text-[#6BAED6]">
                Quiénes Somos
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales y Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-[#A3C7E6]">Síguenos y Legal</h4>
          <div className="flex space-x-4 text-2xl mb-4">
            <a href="https://www.instagram.com/tuclubdelectura" target="_blank" rel="noopener noreferrer" className="text-[#F5F9FC] hover:text-[#6BAED6]"><FaInstagram /></a>
            <a href="https://twitter.com/tuclubdelectura" target="_blank" rel="noopener noreferrer" className="text-[#F5F9FC] hover:text-[#6BAED6]"><FaTwitter /></a>
            <a href="https://www.facebook.com/tuclubdelectura" target="_blank" rel="noopener noreferrer" className="text-[#F5F9FC] hover:text-[#6BAED6]"><FaFacebook /></a>
          </div>
          <ul className="space-y-1 text-sm">
            <li><a href="/politica-privacidad" className="text-[#F5F9FC] hover:text-[#6BAED6]">Política de Privacidad</a></li>
            <li><a href="/terminos-servicio" className="text-[#F5F9FC] hover:text-[#6BAED6]">Términos de Servicio</a></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#1E3A5F] mt-8 pt-4 text-center text-sm text-[#C2B8A3]">
        © {new Date().getFullYear()} Mundos de Papel. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;