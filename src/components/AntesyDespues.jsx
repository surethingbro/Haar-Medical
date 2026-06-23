import { useState } from 'react';
import Cabello_1 from "../images/Cabello-1.png";
import Cabello_2 from "../images/Cabello-2.png";
import Cabello_3 from "../images/Cabello-3.png";
import Cabello_4 from "../images/Cabello-4.png";
import Cabello_5 from "../images/Cabello-5.png";
import Cabello_6 from "../images/Cabello-6.png";
import Cabello_7 from "../images/Cabello-7.png";
import Cabello_8 from "../images/Cabello-8.png";
import Cabello_9 from "../images/Cabello-9.png";
import Cabello_10 from "../images/Cabello-10.png";
import Cabello_11 from "../images/Cabello-11.png";
import Cabello_12 from "../images/Cabello-12.png";
import Cabello_13 from "../images/Cabello-13.png";
import Cabello_15 from "../images/Cabello-15.png";

const imagenes = [
  Cabello_1, Cabello_2, Cabello_3, Cabello_4, Cabello_5,
  Cabello_6, Cabello_7, Cabello_8, Cabello_9, Cabello_10,
  Cabello_11, Cabello_12, Cabello_13, Cabello_15,
];

// Dividimos las 15 imágenes en 2 filas
const filaUno = imagenes.slice(0, 8);   // 8 imágenes -> se mueve a la izquierda
const filaDos = imagenes.slice(8, 15);  // 7 imágenes -> se mueve a la derecha

export const AntesyDespues = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null); // índice global o null

  // Duplicamos cada fila para el loop infinito
  const filaUnoLoop = [...filaUno, ...filaUno];
  const filaDosLoop = [...filaDos, ...filaDos];

  const abrirImagen = (img) => {
    const indexGlobal = imagenes.indexOf(img);
    setImagenSeleccionada(indexGlobal);
  };

  const cerrarModal = () => setImagenSeleccionada(null);

  const siguienteImagen = (e) => {
    e.stopPropagation();
    setImagenSeleccionada((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = (e) => {
    e.stopPropagation();
    setImagenSeleccionada((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  const renderFila = (lista, direccion) => (
    <div
      className={`flex w-max ${direccion === 'izquierda' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
      style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
    >
      {lista.map((img, i) => (
        <div
          key={i}
          onClick={() => abrirImagen(img)}
          className="flex-shrink-0 w-72 h-44 sm:w-80 sm:h-48 md:w-96 md:h-56 mx-3 rounded-xl overflow-hidden cursor-pointer
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_25px_rgba(232,225,214,0.5)] hover:z-10"
        >
          <img
            src={img}
            alt="Antes y después"
            className="w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="antes-despues" className="py-16 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-[#E8E1D6] tracking-wider">
        ANTES Y DESPUÉS
      </h2>

      {/* Contenedor de las 2 filas */}
      <div
        className="flex flex-col gap-4 md:gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full overflow-hidden">
          {renderFila(filaUnoLoop, 'izquierda')}
        </div>
        <div className="relative w-full overflow-hidden">
          {renderFila(filaDosLoop, 'derecha')}
        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      {imagenSeleccionada !== null && (
        <div
          onClick={cerrarModal}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-4 cursor-pointer"
        >
          <button
            onClick={cerrarModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-[#E8E1D6] transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>

          <button
            onClick={anteriorImagen}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center
              hover:bg-white/20 transition-colors"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={imagenes[imagenSeleccionada]}
            alt={`Antes y después ${imagenSeleccionada + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain cursor-default"
          />

          <button
            onClick={siguienteImagen}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center
              hover:bg-white/20 transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {imagenSeleccionada + 1} / {imagenes.length}
          </span>
        </div>
      )}
    </section>
  );
};
