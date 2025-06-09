"use client";
import React, { useState, useEffect } from "react";

// Definimos los tipos de las props para el componente EventFormModal
interface EventFormModalProps {
  show: boolean; // Indica si el modal debe mostrarse
  onClose: () => void; // Función para cerrar el modal
  eventTitle: string; // Título del evento para mostrar en el formulario
}

// Tipamos correctamente el componente funcional de React (FC)
const EventFormModal: React.FC<EventFormModalProps> = ({ show, onClose, eventTitle }) => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: "",
    evento: eventTitle, // Inicializamos el campo 'evento' con el título del evento recibido
  });

  // Estado para el manejo del estado del envío del formulario (si se envió, mensaje, si hay error)
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: "",
    isError: false,
  });

  // useEffect para actualizar el campo 'evento' en formData si el 'eventTitle' cambia.
  // Esto es útil si el modal se reutiliza para diferentes eventos sin desmontarse.
  useEffect(() => {
    setFormData((prev) => ({ ...prev, evento: eventTitle }));
  }, [eventTitle]); // Se ejecuta cada vez que eventTitle cambia

  // Tipamos la función handleChange para manejar cambios en los campos de entrada y textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Extraemos el nombre y el valor del campo que cambió
    setFormData((prev) => ({ ...prev, [name]: value })); // Actualizamos el estado formData
  };

  // Función para manejar el envío del formulario, tipada para un evento de formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Establecemos el estado de envío a 'Enviando...'
    setFormStatus({ submitted: true, message: "Enviando...", isError: false });

    try {
      // Simulación de una llamada a la API o envío de datos al backend
      // En un entorno real, aquí harías una llamada 'fetch' o 'axios'
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Espera 1.5 segundos para simular una respuesta

      // Si la simulación es exitosa, establecemos el mensaje de éxito
      setFormStatus({
        submitted: true,
        message: "¡Gracias por tu interés! Te contactaremos pronto.",
        isError: false,
      });

      // Opcional: Limpiar el formulario después de un envío exitoso
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        comentarios: "",
        evento: eventTitle, // Mantenemos el título del evento para futuras aperturas si el modal no se cierra completamente
      });
    } catch (error: any) {
      // Si ocurre un error durante el envío, capturamos el mensaje de error
      setFormStatus({
        submitted: true,
        message: error.message || "Hubo un error al enviar tu solicitud.", // Muestra el error específico o un mensaje genérico
        isError: true,
      });
    }
  };

  // Si 'show' es falso, el modal no se renderiza (escondido)
  if (!show) {
    return null;
  }

  return (
    // Contenedor principal del modal: fondo oscuro semitransparente que cubre toda la pantalla
    // Ahora con degradado de Azul Noche a Blanco Lunar
    <div className="fixed inset-0 bg-gradient-to-br from-[#0C1E3C] to-[#FDF6E3] bg-opacity-80 flex items-center justify-center z-50 p-4">
      {/* Contenedor del contenido del modal: estilo de la tarjeta del formulario */}
      <div className="bg-[#FDF6E3] p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        {/* Botón para cerrar el modal (la 'x') */}
        <button
          onClick={() => {
            onClose(); // Cierra el modal
            setFormStatus({ submitted: false, message: "", isError: false }); // Resetea el estado del formulario al cerrar
          }}
          className="absolute top-3 right-3 text-[#0C1E3C] hover:text-[#D3CFEA] text-2xl font-bold"
        >
          &times; {/* Carácter 'x' estilizado */}
        </button>

        {/* Título del formulario, mostrando el evento al que se registra */}
        <h2
          className="font-serif font-bold text-2xl text-[#0C1E3C] text-center mb-6"
          style={{ fontFamily: "'Cinzel', serif" }} // Aplica la fuente personalizada
        >
          Registro para: {eventTitle}
        </h2>

        {/* Área para mostrar mensajes de estado (éxito o error) después del envío */}
        {formStatus.submitted && (
          <p
            className={`mb-4 text-center ${
              formStatus.isError ? "text-red-600" : "text-green-600" // Cambia el color del texto según si es error o éxito
            }`}
          >
            {formStatus.message}
          </p>
        )}

        {/* Botón de "Cerrar" que aparece solo si el formulario fue enviado exitosamente y sin errores */}
        {!formStatus.isError && formStatus.submitted && (
          <div className="text-center mb-4">
            <button
              onClick={() => {
                onClose(); // Cierra el modal
                setFormStatus({ submitted: false, message: "", isError: false }); // Resetea el estado para la próxima vez
              }}
              className="bg-[#0C1E3C] text-[#FDF6E3] px-6 py-3 rounded-md font-semibold hover:bg-[#FDF6E3] hover:text-[#0C1E3C] transition-colors duration-300"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* Formulario de entrada de datos: solo se muestra si el formulario NO ha sido enviado exitosamente */}
        {!(formStatus.submitted && !formStatus.isError) && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            {/* Agrega espacio vertical entre elementos del formulario */}
            <div>
              <label htmlFor="nombre" className="block text-[#0C1E3C] text-sm font-bold mb-2">
                Nombre Completo:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required // Campo obligatorio
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C1E3C] leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#0C1E3C] text-sm font-bold mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required // Campo obligatorio
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C1E3C] leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-[#0C1E3C] text-sm font-bold mb-2">
                Número de Teléfono (Opcional):
              </label>
              <input
                type="tel" // Tipo de entrada para teléfono
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C1E3C] leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label htmlFor="comentarios" className="block text-[#0C1E3C] text-sm font-bold mb-2">
                Comentarios Adicionales (Opcional):
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                rows={3} // Número de filas visibles
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0C1E3C] leading-tight focus:outline-none focus:shadow-outline bg-white"
              ></textarea>
            </div>
            {/* Campo oculto para enviar el nombre del evento junto con los otros datos */}
            <input type="hidden" name="evento" value={formData.evento} />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#0C1E3C] text-[#FDF6E3] px-6 py-3 rounded-md font-semibold hover:bg-[#FDF6E3] hover:text-[#0C1E3C] transition-colors duration-300 w-full"
                // Deshabilita el botón si el formulario ya se envió correctamente (para evitar envíos duplicados)
                disabled={formStatus.submitted && !formStatus.isError}
              >
                {/* Texto del botón cambia según el estado del formulario */}
                {formStatus.submitted && !formStatus.isError ? "Enviado" : "Enviar Registro"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventFormModal;