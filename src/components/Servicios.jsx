import React from 'react';

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
    <section id="servicios" className="text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-mont-semibold mb-12 md:mb-16 tracking-wider">
          NUESTROS SERVICIOS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataTratamientos.map((tratamiento, index) => (
            <div
              key={tratamiento.id}
              className="bg-[#2a3545] rounded-2xl p-5 shadow-lg flex flex-col gap-4"
            >
              {/* Number */}
              <span className="text-4xl font-bold text-primarylight opacity-80">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Video */}
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={tratamiento.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-primarylight tracking-tight">
                {tratamiento.titulo}
              </h2>

              {/* Services list */}
              <ul className="flex flex-col gap-1.5 text-sm text-white/80">
                {tratamiento.servicios.map((servicio, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primarylight shrink-0" />
                    <span>{servicio}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
