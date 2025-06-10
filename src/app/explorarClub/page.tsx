"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link"; // Importar Link de Next.js si se usa en este componente

const servicios = [
  {
    titulo: "Club de Lectura virtual y presencial",
    descripcion:
      "Sumérgete en la magia de la literatura con nuestro Club de Lectura. Participa en sesiones semanales interactivas, disponibles tanto de forma virtual como presencial, conectándote con otros apasionados de los libros.",
    imagen: "/img/servicios/club.png",
  },
  {
    titulo: "Talleres de escritura creativa",
    descripcion:
      "Libera tu imaginación y perfecciona tu narrativa en nuestros talleres guiados por escritores experimentados. Descubre y fortalece tu propia voz.",
    imagen: "/img/servicios/escritura.jpg",
  },
  {
    titulo: "Foros de debate literario",
    descripcion:
      "Comparte ideas, teorías y opiniones en foros con otros lectores apasionados. Un espacio perfecto para expandir tu mirada literaria.",
    imagen: "/img/servicios/foro.jpg",
  },
  {
    titulo: "Recomendaciones semanales personalizadas",
    descripcion:
      "Recibe sugerencias de lectura adaptadas a tus gustos, seleccionadas cuidadosamente por nuestro equipo cada semana.",
    imagen: "/img/servicios/recomendacion.png",
  },
  {
    titulo: "Acceso a biblioteca digital",
    descripcion:
      "Explora una colección digital exclusiva para miembros. Lee desde cualquier lugar sin límites.",
    imagen: "/img/servicios/biblioteca.jpg",
  },
  {
    titulo: "Eventos exclusivos para miembros",
    descripcion:
      "Asiste a charlas, lanzamientos y encuentros culturales únicos junto a autores y lectores.",
    imagen: "/img/servicios/evento.jpg",
  },
];

const beneficios = [
  "💡 Desarrollo personal a través de la lectura y la escritura.",
  "💡 Conexión con lectores apasionados de la misma comunidad.",
  "💡 Participación en sorteos exclusivos de libros.",
  "💡 Descuentos en librerías aliadas para miembros premium.",
];

const testimonios = [
  {
    nombre: "Ana M.",
    mensaje:
      "¡Un espacio increíble para compartir lecturas y crecer como escritora! Las sesiones son dinámicas y enriquecedoras.",
    imagen: "/img/servicios/ana.jpg",
  },
  {
    nombre: "Carlos L.",
    mensaje:
      "Gracias al club descubrí mi amor por la poesía contemporánea. Los talleres me cambiaron la vida.",
    imagen: "/img/servicios/carlos.jpg",
  },
];

const faqs = [
  {
    pregunta: "¿Cómo me uno al club?",
    respuesta:
      "Puedes registrarte en nuestro sitio web haciendo clic en el botón 'Únete ahora'.",
  },
  {
    pregunta: "¿Cuánto cuesta ser miembro?",
    respuesta:
      "Tenemos planes gratuitos y pagos con beneficios exclusivos. Elige el que mejor se adapte a ti.",
  },
  {
    pregunta: "¿Dónde se realizan las actividades presenciales?",
    respuesta:
      "En bibliotecas públicas y centros culturales en distintas ciudades. Te informamos con antelación.",
  },
];

export default function ExploraClub() {
  const [index, setIndex] = useState(0);
  const [faqActiva, setFaqActiva] = useState<number | null>(null);

  const total = servicios.length;
  const siguiente = () => setIndex((prev) => (prev + 1) % total);
  const anterior = () => setIndex((prev) => (prev - 1 + total) % total);
  const servicio = servicios[index];

  const toggleFAQ = (i: number) =>
    setFaqActiva((prev) => (prev === i ? null : i));

  return (
    <section className="flex flex-col">
      {/* Intro */}
      <div className="py-16 px-4 bg-[#0C1E3C] text-[#FDF6E3] text-center">
        <h2 className="text-5xl font-bold font-serif">
          Explora Nuestro Club de Lectura
        </h2>
        <p className="text-lg mt-2 text-[#A3C7E6]-mb-2">
          Descubre todo lo que tenemos preparado para ti y únete a nuestra comunidad.
        </p>
      </div>

      {/* Título "Servicios de nuestro club" */}
      <div className="py-12 px-4 bg-[#FDF6E3] text-center">
        <h2 className="text-4xl font-bold font-serif text-[#0C1E3C]">
          Servicios de nuestro club
        </h2>
      </div>

      {/* Carrusel - Sección "Nuestros Servicios" con ID */}
      <div id="nuestros-servicios" className="pb-16 px-4 pt-0 bg-[#FDF6E3]"> {/* Cambiado py-16 a pb-16 pt-0 para controlar el padding superior después del nuevo título */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto p-6 rounded-xl shadow-2xl text-[#0C1E3C]
                      border border-[#A3C7E6]"
        >
          <div className="md:w-1/2 space-y-4">
            <h3
              className="text-4xl font-bold font-serif text-[#1E3A5F] -mt-4"
            >
              {servicio.titulo}
            </h3>
            <p className="text-base leading-relaxed">{servicio.descripcion}</p>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={anterior}
                className="p-3 bg-[#A3C7E6] rounded-full hover:bg-[#6BAED6] hover:scale-110 transition"
              >
                <ChevronLeft className="text-[#0C1E3C]" />
              </button>
              <span className="text-lg font-semibold text-[#1E3A5F]">
                {index + 1} / {total}
              </span>
              <button
                onClick={siguiente}
                className="p-3 bg-[#A3C7E6] rounded-full hover:bg-[#6BAED6] hover:scale-110 transition"
              >
                <ChevronRight className="text-[#0C1E3C]" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="w-full max-w-xs h-[400px] object-cover rounded-xl shadow-lg border border-[#D3CFEA]"
            />
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="py-16 px-4 bg-[#FDF6E3] text-[#0C1E3C] text-center">
        <div className="max-w-3xl mx-auto space-y-6 rounded-xl shadow-xl p-8">
          <h3 className="text-4xl font-bold font-serif">Beneficios de Unirte</h3>
          <ul className="grid gap-3 text-lg text-left md:grid-cols-2">
            {beneficios.map((b, i) => (
              <li
                key={i}
                className="py-2 border-b border-[#A3C7E6] text-[#1E3A5F]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonios */}
      <div className="py-16 px-4 bg-[#A3C7E6] text-[#0C1E3C] text-center">
        <h3 className="text-4xl font-bold font-serif mb-8">
          Lo que dicen nuestros miembros
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-[#FDF6E3] text-[#0C1E3C] p-6 rounded-xl shadow-xl w-full md:w-80 transition hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={t.imagen}
                alt={t.nombre}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="italic text-[#1E3A5F]">"{t.mensaje}"</p>
              <p className="mt-2 font-semibold">{t.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes - Sección con ID */}
      <div id="preguntas-frecuentes" className="py-16 px-4 bg-[#F5F9FC] text-[#0C1E3C]">
        <div className="max-w-3xl mx-auto rounded-xl shadow-xl p-8">
          <h3 className="text-4xl font-bold font-serif text-center mb-8">
            Preguntas Frecuentes
          </h3>
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 border-b border-[#1E3A5F] pb-2">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-xl font-medium hover:text-[#1E3A5F] transition"
              >
                {faq.pregunta}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    faqActiva === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqActiva === i && (
                <p className="mt-2 text-[#1E3A5F]">{faq.respuesta}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-[#0C1E3C] text-center">
        <h3 className="text-3xl font-bold font-serif text-[#FDF6E3] mb-4">
          ¿Listo para unirte a Mundos de Papel?
        </h3>
        <Link href="/registrate">
          <button className="px-8 py-4 bg-[#6BAED6] text-white rounded-full text-xl hover:bg-[#F4C3D6] transition hover:scale-105 duration-300">
            ¡Únete ahora!
          </button>
        </Link>
      </div>
    </section>
  );
}