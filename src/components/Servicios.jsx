import React from 'react';
import videoCapilar from '../Videos/Restauracion-Capilar.mp4';
import videoFacial from '../Videos/rnmd.mp4';
import videoCorporal from '../Videos/corp.mp4';
import videoMasculino from '../Videos/estética.mp4';

const dataTratamientos = [
  {
    id: 1,
    titulo: 'Tratamientos Capilares',
    videoUrl: videoCapilar,
    linkAgenda: 'https://youtube.com', 
    servicios: [
      'Consulta Médica Capilar', 'Kit anticaida',
      'Mesoterapia Capilar', 'Microinjerto Capilar (Técnica FUE)',
      'Exosomas', 'Microinjerto de Ceja',
      'Sueroterapia con NAD + Dutasateride', 'Microinjerto De Barba',
      'Kit de Cuidado de Barba', 'Estimulación de Barba',
    ]
  },
  {
    id: 2,
    titulo: 'Tratamientos Faciales',
    videoUrl: videoFacial,
    linkAgenda: 'https://youtube.com',
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
    videoUrl: videoCorporal,
    linkAgenda: 'https://youtube.com',
    servicios: [
      'Hidrolipoclasia', 'Enzimas recombinantes',
      'Aumento de pantorrilla con Ácido Hialurónico'
    ]
  },
  {
    id: 4,
    titulo: 'Salud Estética Masculina',
    videoUrl: videoMasculino,
    linkAgenda: 'https://youtube.com',
    servicios: [
      'Testosterona Shot', 'Escrotox',
      'Engrosamiento con Ácido Hialurónico', 'Gluteos con Ácido Hialurónico',
      'Aumento de hombro'
    ]
  }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 md:mb-16 tracking-wider text-[#E8E1D6]">
          NUESTROS SERVICIOS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {dataTratamientos.map((tratamiento, index) => (
            
            /* ================= TARJETA PADRE (.card) ================= */
            <div
              key={tratamiento.id}
              className="group relative p-[2px] rounded-2xl transition-all duration-300 bg-transparent hover:bg-[linear-gradient(135deg,#213246_0%,#5A6A83_50%,#918670_100%)] hover:shadow-[0_0_30px_1px_rgba(90,106,131,0.4)]"
            >
              
              {/* ================= TARJETA HIJA (.card2) ================= */}
              <div className="h-full bg-[#2a3545] rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 overflow-hidden group-hover:scale-[0.98] cursor-pointer">
                
                {/* Header: Número y Título */}
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-bold text-[#E8E1D6] tracking-tight max-w-[75%]">
                    {tratamiento.titulo}
                  </h2>
                  <span className="text-3xl font-extrabold text-[#BBC7D5] opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Video contenedor */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                  <video
                    src={tratamiento.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Lista de servicios */}
                <ul className="flex flex-col gap-1.5 text-sm text-white/80 flex-grow pb-16 lg:pb-14">
                  {tratamiento.servicios.map((servicio, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#BBC7D5] shrink-0" />
                      <span>{servicio}</span>
                    </li>
                  ))}
                </ul>

                {/* BOTÓN EMERGENTE */}
                <div className="absolute bottom-4 left-0 w-full px-5 z-10 translate-y-12 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={tratamiento.linkAgenda}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#E8E1D6] text-[#213246] font-bold rounded-xl text-xs uppercase tracking-wider shadow-md flex justify-center items-center gap-1.5 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95"
                  >
                    Agenda hoy mismo
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};