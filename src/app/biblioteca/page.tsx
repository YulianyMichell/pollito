"use client";

import { useState } from "react";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: "Misterio" | "Sport Romance" | "Poesía" | "Romance" | "Ciencia Ficción" | "LGTB+" | "Dark Romance" | "Horror" | "Fantasía" | "Novela Gráfica";
  formato: "PDF" | "EPUB";
  portada: string;
  archivo: string;
}

const librosClub: Libro[] = [
  {
    id: 1,
    titulo: "Asesinato para principiantes",
    autor: "Holly Jackson",
    genero: "Misterio",
    formato: "PDF",
    portada: "/img/libros/misterio.jpg",
    archivo: "/img/archivos/misterio.pdf",
  },
  {
    id: 2,
    titulo: "Rewind It Back",
    autor: "Liz Tomforde",
    genero: "Sport Romance",
    formato: "EPUB",
    portada: "/img/libros/sport.jpg",
    archivo: "/img/archivos/sport.epub",
  },
  {
    id: 3,
    titulo: "Aquí dentro siempre llueve",
    autor: "Chris Pueyo",
    genero: "Poesía",
    formato: "PDF",
    portada: "/img/libros/poesia.jpg",
    archivo: "/img/archivos/poesia.pdf",
  },
  {
    id: 4,
    titulo: "El chico que dibujaba constelaciones",
    autor: "Alice Kellen",
    genero: "Romance",
    formato: "EPUB",
    portada: "/img/libros/romance.jpg",
    archivo: "/img/archivos/romance.epub",
  },
  {
    id: 5,
    titulo: "Dune",
    autor: "Frank Herbert",
    genero: "Ciencia Ficción",
    formato: "PDF",
    portada: "/img/libros/ciencia.jpg",
    archivo: "/img/archivos/ciencia.pdf",
  },
  {
    id: 6,
    titulo: "Rojo,blanco y sangre azul",
    autor: "Casey McQuiston",
    genero: "LGTB+",
    formato: "EPUB",
    portada: "/img/libros/lgtb.jpg",
    archivo: "/img/archivos/lgtb.epub",
  },
  {
    id: 7,
    titulo: "Crueles Instintos",
    autor: "Elena Lopéz",
    genero: "Dark Romance",
    formato: "PDF",
    portada: "/img/libros/dark.jpg",
    archivo: "/img/archivos/dark.pdf",
  },
  {
    id: 8,
    titulo: "Never Flinch",
    autor: "Stephing King",
    genero: "Horror",
    formato: "EPUB",
    portada: "/img/libros/horror.jpg",
    archivo: "/img/archivos/horror.epub",
  },
  {
    id: 9,
    titulo: "El Principe Cruel",
    autor: "Holly Black",
    genero: "Fantasía",
    formato: "PDF",
    portada: "/img/libros/fantasia.jpg",
    archivo: "/img/archivos/fantasia.pdf",
  },
  {
    id: 10,
    titulo: "Lore Olympus:Volume Eight",
    autor: "Rachel Smythe",
    genero: "Novela Gráfica",
    formato: "EPUB",
    portada: "/img/libros/novela.jpg",
    archivo: "/img/archivos/novela.epub",
  },
];

export default function BibliotecaPage() {
  const [vista, setVista] = useState<"biblioteca" | "rincon">("biblioteca");
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroFormato, setFiltroFormato] = useState("");
  const [historial, setHistorial] = useState<
    { id: number; calificacion?: number; reseña?: string }[]
  >([]);
  const [proximasLecturas, setProximasLecturas] = useState<number[]>([]);

  const librosFiltrados = librosClub.filter((libro) => {
    return (
      (libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        libro.autor.toLowerCase().includes(busqueda.toLowerCase())) &&
      (filtroGenero ? libro.genero === filtroGenero : true) &&
      (filtroFormato ? libro.formato === filtroFormato : true)
    );
  });

  const agregarAlHistorial = (id: number) => {
    if (!historial.some((h) => h.id === id)) {
      setHistorial((prev) => [...prev, { id }]);
      setProximasLecturas((prev) => prev.filter((x) => x !== id));
    }
  };

  const cambiarCalificacion = (id: number, cal: number) => {
    setHistorial((prev) =>
      prev.map((h) => (h.id === id ? { ...h, calificacion: cal } : h))
    );
  };

  const cambiarReseña = (id: number, reseña: string) => {
    setHistorial((prev) =>
      prev.map((h) => (h.id === id ? { ...h, reseña } : h))
    );
  };

  const toggleProximaLectura = (id: number) => {
    const isRead = historial.some((h) => h.id === id);
    if (!isRead) {
      setProximasLecturas((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    }
  };

  const librosLeidos = historial
    .map((h) => {
      const libro = librosClub.find((l) => l.id === h.id);
      return libro ? { ...libro, ...h } : null;
    })
    .filter(Boolean) as (Libro & { calificacion?: number; reseña?: string })[];

  const librosProximos = librosClub.filter((l) => proximasLecturas.includes(l.id));

  return (
    // Degradado general del fondo, de Azul Noche (#0C1E3C) a Celeste Suave (#A3C7E6)
    <div className="max-w-5xl mx-auto px-4 py-10 font-sans text-[#FDF6E3] bg-gradient-to-br from-[#0C1E3C] to-[#A3C7E6] min-h-screen">
      {/* Tabs (como títulos) */}
      <div className="flex border-b border-[#A3C7E6] mb-8 text-xl font-bold font-serif">
        <div
          className={`mr-8 pb-3 cursor-pointer transition-colors duration-300 ${
            vista === "biblioteca"
              ? "text-[#FDF6E3] border-b-4 border-[#6BAED6]"
              : "text-[#A3C7E6] hover:text-[#FDF6E3]"
          }`}
          onClick={() => setVista("biblioteca")}
        >
          📚 Biblioteca del Club
        </div>
        <div
          className={`pb-3 cursor-pointer transition-colors duration-300 ${
            vista === "rincon"
              ? "text-[#FDF6E3] border-b-4 border-[#6BAED6]"
              : "text-[#A3C7E6] hover:text-[#FDF6E3]"
          }`}
          onClick={() => setVista("rincon")}
        >
          📖 Mi Rincón Literario
        </div>
      </div>

      {/* Contenido dinámico */}
      {vista === "biblioteca" && (
        // Degradado específico de la sección de biblioteca: de Lavanda Claro a Celeste Suave
        <div className="bg-gradient-to-br from-[#D3CFEA] to-[#A3C7E6] p-8 rounded-xl shadow-lg -mt-4">
          {/* Filtros */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <input
              className="border border-[#A3C7E6] p-3 rounded-lg w-full text-[#0C1E3C] focus:outline-none focus:ring-2 focus:ring-[#6BAED6] bg-[#F5F9FC]"
              placeholder="Buscar por título o autor"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ fontFamily: 'Open Sans' }}
            />
            <select
              className="border border-[#A3C7E6] p-3 rounded-lg w-full text-[#0C1E3C] focus:outline-none focus:ring-2 focus:ring-[#6BAED6] bg-[#F5F9FC]"
              value={filtroGenero}
              onChange={(e) => setFiltroGenero(e.target.value)}
              style={{ fontFamily: 'Open Sans' }}
            >
              <option value="">Todos los géneros</option>
              {[...new Set(librosClub.map((l) => l.genero))].map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <select
              className="border border-[#A3C7E6] p-3 rounded-lg w-full text-[#0C1E3C] focus:outline-none focus:ring-2 focus:ring-[#6BAED6] bg-[#F5F9FC]"
              value={filtroFormato}
              onChange={(e) => setFiltroFormato(e.target.value)}
              style={{ fontFamily: 'Open Sans' }}
            >
              <option value="">Todos los formatos</option>
              {[...new Set(librosClub.map((l) => l.formato))].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Libros disponibles (tarjetas más pequeñas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {librosFiltrados.length === 0 ? (
              <p className="text-[#1E3A5F] col-span-full text-center text-lg">
                No se encontraron libros que coincidan con tu búsqueda o filtros.
              </p>
            ) : (
              librosFiltrados.map((libro) => {
                const isRead = historial.some(h => h.id === libro.id);
                const isUpcoming = proximasLecturas.includes(libro.id);

                return (
                  <div
                    key={libro.id}
                    className="bg-[#F5F9FC] p-4 rounded-xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={libro.portada}
                      alt={libro.titulo}
                      className="object-cover rounded-lg mb-4 border border-[#A3C7E6]"
                      style={{ width: 160, height: 240 }}
                      loading="lazy"
                    />
                    <div className="flex-grow flex flex-col items-center text-center mb-4">
                      <h3 className="font-bold text-md text-[#0C1E3C] font-serif mb-1">
                        {libro.titulo}
                      </h3>
                      <p className="text-sm text-[#1E3A5F] font-sans">
                        {libro.autor}
                      </p>
                      <p className="text-xs text-[#6BAED6] font-sans">
                        {libro.genero} • {libro.formato}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full px-2 mt-auto">
                      <a
                        href={libro.archivo}
                        download
                        className="bg-[#6BAED6] text-[#FDF6E3] px-3 py-2 rounded-lg text-sm text-center font-semibold transition-colors duration-200 hover:bg-[#1E3A5F]"
                      >
                        Descargar
                      </a>
                      <button
                        onClick={() => agregarAlHistorial(libro.id)}
                        disabled={isRead}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                          isRead
                            ? "bg-[#D3CFEA] text-[#0C1E3C] cursor-not-allowed opacity-70"
                            : "bg-[#A3C7E6] text-[#0C1E3C] hover:bg-[#D3CFEA]"
                        }`}
                      >
                        {isRead ? "Ya Leído" : "Marcar como Leído"}
                      </button>
                      <button
                        onClick={() => toggleProximaLectura(libro.id)}
                        disabled={isRead}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                          isRead
                            ? "bg-[#C2B8A3] text-[#FDF6E3] cursor-not-allowed opacity-70"
                            : isUpcoming
                            ? "bg-[#F4C3D6] text-[#9D7A6D] hover:bg-[#D3CFEA]"
                            : "bg-[#D3CFEA] text-[#1E3A5F] hover:bg-[#F4C3D6]"
                        }`}
                      >
                        {isUpcoming ? "Quitar de Próximas" : "Añadir a Próximas"}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {vista === "rincon" && (
        <div className="space-y-10">
          {/* Libros leídos */}
          <div>
            <h3 className="text-2xl font-bold text-[#FDF6E3] mb-5 font-serif">Mis Libros Leídos</h3>
            {librosLeidos.length === 0 ? (
              <p className="text-[#A3C7E6] text-lg font-sans">
                Aún no has marcado ningún libro como leído. ¡Explora la biblioteca para empezar!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {librosLeidos.map((libro) => (
                  <div
                    key={libro.id}
                    className="bg-[#F5F9FC] p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-start border border-[#A3C7E6]"
                  >
                    <img
                      src={libro.portada}
                      alt={libro.titulo}
                      className="object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
                      style={{ width: 100, height: 150 }}
                      loading="lazy"
                    />
                    <div className="flex-grow">
                      <h4 className="font-bold text-xl text-[#0C1E3C] font-serif">
                        {libro.titulo}
                      </h4>
                      <p className="text-md text-[#1E3A5F] font-sans mb-2">
                        {libro.autor}
                      </p>
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star
                            key={n}
                            filled={libro.calificacion ? n <= libro.calificacion : false}
                            onClick={() => cambiarCalificacion(libro.id, n)}
                          />
                        ))}
                      </div>
                      <textarea
                        className="mt-2 w-full border border-[#C2B8A3] rounded-lg p-3 text-sm text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#6BAED6] bg-[#FDF6E3] font-sans"
                        rows={4}
                        placeholder="Escribe tu reseña aquí..."
                        value={libro.reseña || ""}
                        onChange={(e) => cambiarReseña(libro.id, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Próximas lecturas */}
          <div>
            <h3 className="text-2xl font-bold text-[#FDF6E3] mb-5 font-serif">Mis Próximas Lecturas</h3>
            {librosProximos.length === 0 ? (
              <p className="text-[#A3C7E6] text-lg font-sans">
                No has agregado ninguna lectura a tu lista de próximas lecturas.
              </p>
            ) : (
              <div className="space-y-4">
                {librosProximos.map((libro) => (
                  <div
                    key={libro.id}
                    className="bg-[#F5F9FC] p-5 rounded-xl shadow-md flex items-center justify-between border border-[#A3C7E6]"
                  >
                    <div className="flex items-center">
                      <img
                        src={libro.portada}
                        alt={libro.titulo}
                        className="object-cover rounded-md mr-4"
                        style={{ width: 60, height: 90 }}
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-bold text-lg text-[#0C1E3C] font-serif">{libro.titulo}</h4>
                        <p className="text-sm text-[#1E3A5F] font-sans">{libro.autor}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleProximaLectura(libro.id)}
                      className="bg-[#F4C3D6] text-[#9D7A6D] px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 hover:bg-[#D3CFEA] hover:text-[#0C1E3C]"
                    >
                      Quitar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Star({ filled, onClick }: { filled: boolean; onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
        filled ? "text-[#F4C3D6]" : "text-[#C2B8A3]"
      } hover:text-[#9D7A6D]`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
    </svg>
  );
}