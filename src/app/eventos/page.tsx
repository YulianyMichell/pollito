"use client";
import React, { useState, useEffect, useRef } from "react";
import EventFormModal from "../components/formulario"; // Asegúrate de que la ruta sea correcta

const noticias = [
    {
        titulo: "Lanzamiento del Nuevo Ciclo de Lectura",
        texto:
            "Estamos emocionados de anunciar el inicio de nuestro ciclo de lectura de verano, con una selección especial de novelas contemporáneas para todos los gustos.",
    },
    {
        titulo: "Taller de Escritura Creativa",
        texto:
            "El taller de escritura creativa tendrá lugar el próximo 12 de junio. ¡Inscríbete y mejora tus habilidades narrativas!",
    },
    {
        titulo: "Nueva Sección de Recomendaciones",
        texto:
            "Ahora puedes disfrutar de recomendaciones personalizadas basadas en tus gustos literarios. ¡Descúbrelas en nuestro sitio web!",
    },
];

const EventosNoticiasClub = () => {
    const [dateFilter, setDateFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");
    const [isVisible, setIsVisible] = useState(false);

    const [showFormModal, setShowFormModal] = useState(false);
    const [selectedEventTitle, setSelectedEventTitle] = useState("");

    const eventosSectionRef = useRef<HTMLDivElement>(null);
    const isMounted = useRef(false);
    // NUEVO: Ref para rastrear si el modal ha sido abierto al menos una vez
    const hasModalBeenOpened = useRef(false);

    useEffect(() => {
        setIsVisible(true);
        isMounted.current = true;
        // Al cargar la página, asegúrate de que el scroll esté al inicio
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    // Efecto para controlar el scroll a la sección de eventos cuando el modal se cierra
    // AHORA: Solo se ejecuta si el modal ha sido abierto Y luego se cierra
    useEffect(() => {
        // Solo ejecuta el scroll si el componente ya se montó
        // Y si el modal *ha sido abierto alguna vez* (`hasModalBeenOpened.current`)
        // Y si el modal *acaba de cerrarse* (`!showFormModal`)
        if (isMounted.current && hasModalBeenOpened.current && !showFormModal) {
            const timer = setTimeout(() => {
                if (eventosSectionRef.current) {
                    eventosSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [showFormModal]); // El efecto se re-ejecuta cuando showFormModal cambia

    // useEffect para manejar el botón "atrás" del navegador con el modal
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state && event.state.modalOpen) {
                setShowFormModal(true);
                setSelectedEventTitle(event.state.eventTitle || "");
                hasModalBeenOpened.current = true; // Asegura que esta ref se actualice al navegar hacia adelante al estado del modal
            } else if (showFormModal) {
                setShowFormModal(false);
                setSelectedEventTitle("");
                // No necesitamos modificar hasModalBeenOpened aquí, ya que el scroll
                // se activa al cambiar showFormModal de true a false
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [showFormModal]);

    const eventos = [
        {
            titulo: "Lectura Conjunta",
            descripcion: 'Discusión sobre el libro "La Hipótesis del Amor".',
            fecha: "2025-06-05",
            boton: "Más Información",
            img: "img/eventos-noticias/evento1.png",
            etiqueta: "¡Pasado!",
            type: "Club de lectura general",
        },
        {
            titulo: "Taller de Escritura Creativa",
            descripcion:
                "Explora técnicas de narración, desarrollo de personajes y creación de diálogos en este taller práctico de escritura.",
            fecha: "2025-06-12",
            boton: "Inscribirse al Taller",
            img: "img/eventos-noticias/evento2.png",
            type: "Taller de escritura",
        },
        {
            titulo: "Club de Poesía Abierta",
            descripcion:
                "Participa en una noche de lectura y micrófono abierto para compartir tus poemas favoritos o creaciones propias.",
            fecha: "2025-06-20",
            boton: "Participar en el Club",
            img: "img/eventos-noticias/evento3.png",
            etiqueta: "¡Próximo!",
            type: "Reunión presencial",
        },
        {
            titulo: "Reunión del Club de Thriller y Misterio",
            descripcion:
                "Un encuentro para debatir sobre novelas de misterio y suspenso, con recomendaciones y dinámicas interactivas.",
            fecha: "2025-06-25",
            boton: "Unirse al Grupo",
            img: "img/eventos-noticias/evento4.png",
            etiqueta: "¡Próximo!",
            type: "Club de lectura general",
        },
        {
            titulo: "Charla con Autora Local",
            descripcion:
                "Conoce a la aclamada autora Inma Rubiales y descubre su proceso creativo, cómo construye sus personajes, y qué la inspira a escribir novelas tan cautivadoras.",
            fecha: "2025-07-10",
            boton: "Ver Detalles",
            img: "img/eventos-noticias/evento5.jpg",
            type: "Charla con autor/a",
        },
        {
            titulo: "Noche de Cuentacuentos Infantiles",
            descripcion:
                "Una noche mágica para los más pequeños con historias y fantasía.",
            fecha: "2025-07-28",
            boton: "Inscribir Niños",
            img: "img/eventos-noticias/evento6.jpg",
            type: "Actividades para jóvenes o niños",
        },
    ];

    const filteredEvents = eventos.filter((evento) => {
        const eventDate = new Date(evento.fecha);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let dateMatch = true;
        let typeMatch = true;

        if (dateFilter !== "all") {
            if (dateFilter === "upcoming") {
                dateMatch = eventDate >= today;
            } else if (dateFilter === "past") {
                dateMatch = eventDate < today;
            } else if (dateFilter === "next7days") {
                const next7Days = new Date();
                next7Days.setDate(today.getDate() + 7);
                dateMatch = eventDate >= today && eventDate <= next7Days;
            } else if (dateFilter === "thismonth") {
                dateMatch =
                    eventDate.getMonth() === today.getMonth() &&
                    eventDate.getFullYear() === today.getFullYear();
            }
        }

        if (typeFilter !== "all") {
            typeMatch = evento.type === typeFilter;
        }

        return dateMatch && typeMatch;
    });

    const handleOpenForm = (eventTitle: string) => {
        setSelectedEventTitle(eventTitle);
        setShowFormModal(true);
        hasModalBeenOpened.current = true; // Marca que el modal ha sido abierto
        history.pushState({ modalOpen: true, eventTitle: eventTitle }, '', window.location.href);
    };

    const handleCloseForm = () => {
        if (history.state && history.state.modalOpen) {
            history.back();
        } else {
            setShowFormModal(false);
            setSelectedEventTitle("");
        }
    };

    return (
        <main className="bg-[#F5F9FC] text-[#0C1E3C] font-sans min-h-screen flex flex-col">
            {/* Sección: Evento del Mes */}
            <section
                className={`bg-[#D3CFEA] p-6 md:p-10 rounded-lg max-w-5xl mx-auto mb-14 transition-colors duration-700 hover:bg-[#A3C7E6] py-10 ${isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                style={{ animationDuration: "1s" }}
            >
                <h2
                    className="font-serif font-bold text-3xl text-[#0C1E3C] uppercase text-center tracking-widest mb-8"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    EVENTO DEL MES
                </h2>
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex-1 p-4 transition-opacity duration-1000 delay-150 opacity-100">
                        <h2
                            className="font-serif text-2xl text-[#1E3A5F] mb-2 font-bold"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Debate Literario
                        </h2>
                        <h3
                            className="font-serif text-[#6BAED6] mb-4"
                            style={{ fontFamily: "'Merriweather', serif" }}
                        >
                            "La novela del verano" de Emily Henry
                        </h3>
                        <p className="mb-6 font-sans text-[#0C1E3C] leading-relaxed">
                            Acompáñanos en una sesión de diálogo abierto, preguntas y
                            reflexiones sobre esta inolvidable novela.
                        </p>
                        <div
                            className="mb-6 text-[#9D7A6D]"
                            style={{ fontFamily: "'Merriweather', serif" }}
                        >
                            <span className="block">📅 15 de junio de 2025</span>
                            <span className="block">⏰ 4:00 p.m</span>
                            <span className="block">📍 Biblioteca Central</span>
                        </div>
                        <button
                            onClick={() => handleOpenForm("Debate Literario: La novela del verano")}
                            className="inline-block bg-[#0C1E3C] text-[#FDF6E3] px-6 py-3 rounded-md font-semibold hover:bg-[#FDF6E3] hover:text-[#0C1E3C] transition-colors duration-300"
                        >
                            Inscribirse Ahora
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center transition-opacity duration-1000 delay-300 opacity-100">
                        <img
                            src="img/eventos-noticias/event.jpeg"
                            alt="Evento destacado"
                            className="max-h-72 w-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/* Sección: Eventos del Club */}
            <section ref={eventosSectionRef} className="w-screen p-6 bg-[#A3C7E6] shadow-md py-10 mb-0">
                <h3
                    className="font-serif font-bold text-2xl text-[#0C1E3C] uppercase tracking-widest mb-6 text-center"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    EVENTOS DEL CLUB
                </h3>
                {/* Controles de filtro */}
                <div className="flex justify-center mb-6 gap-4 flex-wrap">
                    <select
                        className="font-sans text-base p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BAED6] text-[#0C1E3C] bg-[#D3CFEA]"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    >
                        <option value="all">Todos los eventos</option>
                        <option value="next7days">Próximos 7 días</option>
                        <option value="thismonth">Este mes</option>
                        <option value="upcoming">Próximamente (futuros)</option>
                        <option value="past">Pasados</option>
                    </select>

                    <select
                        className="font-sans text-base p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BAED6] text-[#0C1E3C] bg-[#D3CFEA]"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="all">Todos los tipos</option>
                        <option value="Club de lectura general">
                            Club de lectura general
                        </option>
                        <option value="Lectura temática">Lectura temática</option>
                        <option value="Reunión virtual">Reunión virtual</option>
                        <option value="Reunión presencial">Reunión presencial</option>
                        <option value="Charla con autor/a">Charla con autor/a</option>
                        <option value="Taller de escritura">Taller de escritura</option>
                        <option value="Actividades para jóvenes o niños">
                            Actividades para jóvenes o niños
                        </option>
                    </select>
                </div>

                {/* Grid de eventos filtrados */}
                <div className="max-w-7xl mx-auto">
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                            {filteredEvents.map((evento, index) => (
                                <div
                                    key={index}
                                    className="relative bg-[#FDF6E3] p-4 rounded-lg text-[#0C1E3C] flex flex-col justify-between hover:scale-105 transition-transform duration-300
                                        shadow-[0_4px_10px_rgba(12,30,60,0.2)] hover:shadow-[0_4px_15px_rgba(12,30,60,0.6)]"
                                >
                                    {evento.etiqueta && (
                                        <span className="absolute top-2 right-2 bg-[#F4C3D6] text-[#0C1E3C] px-2 py-0.5 text-xs rounded-md font-semibold">
                                            {evento.etiqueta}
                                        </span>
                                    )}
                                    <img
                                        src={evento.img}
                                        alt={evento.titulo}
                                        className="rounded-md mb-4 object-cover w-full h-40"
                                    />
                                    <h3 className="font-sans font-bold text-xl mb-2 text-[#0C1E3C]">
                                        {evento.titulo}
                                    </h3>
                                    <p className="mb-2 font-sans text-base leading-relaxed text-[#0C1E3C]">
                                        {evento.descripcion}
                                    </p>
                                    <p className="font-sans italic font-bold text-[#0C1E3C] mb-4">
                                        Fecha:
                                        {new Date(evento.fecha).toLocaleDateString("es-ES", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                        .
                                    </p>
                                    <button
                                        onClick={() => handleOpenForm(evento.titulo)}
                                        className="self-start bg-[#0C1E3C] text-[#FDF6E3] px-4 py-2 rounded-md font-semibold hover:bg-[#D3CFEA] hover:text-[#0C1E3C] transition-colors duration-300"
                                    >
                                        {evento.boton}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-[#0C1E3C] text-lg mt-8">
                            No hay eventos que coincidan con los filtros seleccionados.
                        </p>
                    )}
                </div>
            </section>


            {/* Sección: Noticias del Club */}
            <section className="w-screen bg-[#F4C3D6] p-6 shadow-md flex-grow py-10 mt-0">
                <h3
                    className="font-serif font-bold text-2xl text-[#0C1E3C] uppercase tracking-widest mb-10 text-center"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    Noticias del Club
                </h3>

                <div className="max-w-7xl mx-auto">
                    {/* Noticia destacada */}
                    <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#D3CFEA] via-[#FDF6E3] to-[#A3C7E6] rounded-xl shadow-lg overflow-hidden border-2 border-[#1E3A5F] mb-10 animate-pulse-light">
                        <div className="p-6 flex flex-col justify-center md:w-2/3">
                            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
                                📚 Recomendaciones de Mayo
                            </h1>
                            <h2 className="text-lg text-[#6BAED6] font-semibold mb-3">
                                ¡Lo que todos están leyendo este mes!
                            </h2>
                            <p className="text-[#0C1E3C] mb-4 leading-relaxed">
                                Conoce los libros más votados por el club este mes. Lecturas
                                ideales para disfrutar en las tardes de verano.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center p-4">
                            <img
                                src="/img/eventos-noticias/noticia1.png"
                                alt="Recomendaciones de mayo"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Otras noticias */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
                        <div className="bg-[#FFFFFF] border-l-4 border-[#6BAED6] p-4 rounded-md shadow-sm hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-[#1E3A5F] mb-2">
                                📘 Nuevo Club de Lectura Juvenil
                            </h3>
                            <p className="text-[#0C1E3C] mb-3">
                                Una propuesta fresca para los jóvenes lectores que desean explorar
                                nuevas historias.
                            </p>
                        </div>
                        <div className="bg-[#FFFFFF] border-l-4 border-[#9D7A6D] p-4 rounded-md shadow-sm hover:scale-105 transition-transform duration-300">
                            <h3 className="font-bold text-[#1E3A5F] mb-2">
                                🌙 Noche de Poesía
                            </h3>
                            <p className="text-[#0C1E3C] mb-3">
                                Un resumen de los mejores versos compartidos bajo el cielo
                                estrellado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <EventFormModal
                show={showFormModal}
                onClose={handleCloseForm}
                eventTitle={selectedEventTitle}
            />
        </main>
    );
};

export default EventosNoticiasClub;