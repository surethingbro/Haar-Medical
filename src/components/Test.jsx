import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const dataCasos = [
  {
    id: 1,
    titulo: 'Antes y después (Tratamiento Capilar)',
    imagenAntes: 'https://placehold.co/300x400/1e293b/white?text=Antes+Capilar',
    imagenDespues: 'https://placehold.co/300x400/334155/white?text=Despues+Capilar',
  },
  {
    id: 2,
    titulo: 'Antes y después (Labios)',
    imagenAntes: 'https://placehold.co/300x400/1e293b/white?text=Antes+Labios',
    imagenDespues: 'https://placehold.co/300x400/334155/white?text=Despues+Labios',
  },
  {
    id: 3,
    titulo: 'Antes y después (Rinomodelación)',
    imagenAntes: 'https://placehold.co/300x400/1e293b/white?text=Antes+Rino',
    imagenDespues: 'https://placehold.co/300x400/334155/white?text=Despues+Rino',
  },
];

export const Test = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="cita" className="text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        
        {/* 
           COLUMNA IZQUIERDA: CARRUSEL ANTES/DESPUÉS */}
        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-[500px] relative">
            
            {/* Título dinámico si usas `onSlideChange` (puedes estaticarlo o dinamizarlo como antes) */}
            <p className="text-center text-lg md:text-xl mb-6 tracking-wide font-medium">
              Antes y después (Tratamiento Capilar)
            </p>

            {/* Configuración de Swiper para mostrar 2 imágenes por slide */}
            <Swiper
              spaceBetween={20} // Espacio entre las dos imágenes del slide
              slidesPerView={1}  // Solo 1 "tarjeta de caso" por slide (cada tarjeta tiene 2 imágenes)
              navigation={{
                // Flechas personalizadas (opcional, Swiper las crea por defecto)
              }}
              modules={[Navigation]}
              className="mySwiperCasos w-full"
            >
              {dataCasos.map((caso) => (
                <SwiperSlide key={caso.id}>
                  {/* Grid interno de SwiperSlide: 2 imágenes side-by-side */}
                  <div className="grid grid-cols-2 gap-5 p-2 bg-[#2a3545] rounded-xl shadow-lg border border-slate-700">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img src={caso.imagenAntes} alt="Antes" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img src={caso.imagenDespues} alt="Después" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
        </div>

        {/* =========================================
           COLUMNA DERECHA: FORMULARIO DE CONTACTO
           ========================================= */}
        <div className="bg-[#f0f0f0] text-[#1a2533] p-10 md:p-12 rounded-2xl shadow-2xl flex flex-col items-center border-4 border-[#2a3545]">
          <h2 className="text-4xl font-bold mb-10 tracking-wider text-center">
            AGENDA TU CITA
          </h2>
          
          <form className="w-full max-w-sm space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1.5 opacity-80">Nombre</label>
              <input type="text" placeholder="NOMBRE" className="w-full p-4 border border-gray-300 rounded-lg bg-white shadow-inner focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1.5 opacity-80">Apellidos</label>
              <input type="text" placeholder="Apellidos" className="w-full p-4 border border-gray-300 rounded-lg bg-white shadow-inner focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1.5 opacity-80">Correo electrónico</label>
              <input type="email" placeholder="E-mail" className="w-full p-4 border border-gray-300 rounded-lg bg-white shadow-inner focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1.5 opacity-80">Número de Teléfono</label>
              <input type="tel" placeholder="NÚMERO DE TELÉFONO" className="w-full p-4 border border-gray-300 rounded-lg bg-white shadow-inner focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" />
            </div>

            <div className="flex justify-center pt-6">
              <button type="submit" className="bg-[#1a2533] text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-slate-700 transition shadow-md">
                Enviar
              </button>
            </div>
          </form>

          {/* ESPACIO PARA EL MAPA (REEMPLAZAR CON TU MAPA REAL) */}
          <div className="w-full mt-12 bg-white rounded-xl shadow-md p-3 border border-gray-200">
            {/* Si usas Google Maps o un componente de mapa, va aquí. Usaré un placeholder. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.3082502220364!2d-86.85154362391054!3d21.1611005807187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c040d9d0e1b%3A0xc0232468305c4883!2sCancun%2C%20Quintana%20Roo!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

      </div>

      {/* ESTILOS GLOBALES PARA LAS FLECHAS DE SWIPER (Para que sean como las de la imagen) */}
      <style jsx global>{`
        .mySwiperCasos .swiper-button-next,
        .mySwiperCasos .swiper-button-prev {
          color: white !important;
          background-color: rgba(255, 255, 255, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid white;
          top: 15%; /* Ajusta esto para subir o bajar las flechas */
        }
        .mySwiperCasos .swiper-button-next:after,
        .mySwiperCasos .swiper-button-prev:after {
          font-size: 1.2rem;
        }
        .mySwiperCasos .swiper-button-prev {
          left: -60px; /* Flecha fuera del carrusel, a la izquierda */
        }
        .mySwiperCasos .swiper-button-next {
          right: -60px; /* Flecha fuera del carrusel, a la derecha */
        }
      `}</style>
    </section>
  );
};