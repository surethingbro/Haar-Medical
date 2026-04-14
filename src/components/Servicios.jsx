import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const dataTratamientos = [
  {
    id: 1,
    titulo: 'Tratamientos Capilares',
    videoUrl: './Restauracion-Capilar.mp4',
    servicios: [
      'Consulta Médica Capilar', 'Kit anticaida',
      'Mesoterapia Capilar', 'Microinjerto Capilar (Técnica FUE)',
      'Exosomas', 'Microinjerto de Ceja',
      'Sueroterapia con NAD +Dutasateride', 'Microinjerto De Barba',
      'Kit de Cuidado de Barba', 'Estimulación de Barba',
    ]
  },

  {
    id: 2,
    titulo: 'Tratamientos Faciales',
    videoUrl: './rnmd.mp4',
    servicios: [
      'Rinomodelación', 'Toxina Cuello',
      'Labios con Ácido Hialurónico', 'Bruxismo',
      'Ojeras con Ácido Hialurónico','Mentón con Ácido Hialurónico',
      'Bioestimulación de Contorno de Ojos','Marcaje Mandibular',
      'Bótox','Bioestimuladores',
      'Biorremodeladores'
    ]
  },

  {
    id: 3,
    titulo: 'Tratamientos Corporales',
    videoUrl: './corp.mp4',
    servicios: [
      'Hidrolipoclasia', 'Enzimas recombinantes',
      'Aumento de pantorrilla con Ácido Hialurónico'
    ]

  },

  {
    id: 4,
    titulo: 'Salud Estética Masculina',
    videoUrl: './estética.mp4',
    servicios: [
        'Testosterona Shot', 'Escrotox',
        'Engrosamiento con Ácido Hialurónico', 'Gluteos con Ácido Hialurónico',
        'Aumento de hombro'
    ]
  }
];

export const Servicios = () => {
  return (
    // SECCIÓN PRINCIPAL: Fondo oscuro y padding
    <section id= "servicios" className=" text-white py-16 px-4  md:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-mont-semibold mb-12 md:mb-16 tracking-wider">
          NUESTROS SERVICIOS
        </h1>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // Damos una altura mínima al Swiper para evitar que colapse si el contenido es pequeño
          className="w-full min-h-[450px]"

          onSlideChange={(swiper) => {
            const activeVideo = swiper.slides[swiper.activeIndex].querySelector('video');
            if (activeVideo) {
              activeVideo.play();
            }
          }}
        >
          {dataTratamientos.map((tratamiento) => (
            <SwiperSlide key={tratamiento.id} className="bg-transparent">
              {/*Grid de 1 columna en móvil, 2 en tablets/desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-6xl mx-auto px-10 md:px-20 py-10">
                
                {/*  Columna izquierda: video  */}
                <div className="flex justify-center md:justify-end">
                  {/* Aspect-ratio cuadrado, bordes redondeados, sombra y overflow hidden */}
                  <div className="w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-black">

                    <video
                      autoplay
                      loop
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >

                      <source src={tratamiento.videoUrl} type="video/mp4" />
                      Lo sentimos, el video no puede ser mostrado en este momento.
                    </video>
                  </div>
                </div>

                {/* lado derecho, texto */}
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-mont-regular font-bold mb-8 text-primarylight tracking-tight">
                    {tratamiento.titulo}
                  </h2>
                  
                  {/* Lista de servicios (quiero morirme) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-srv">
                    {tratamiento.servicios.map((servicio, index) => (
                      <li key={index} className="flex items-start">
                        
                        <span className="text-base md:text-lg leading-snug">{servicio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};