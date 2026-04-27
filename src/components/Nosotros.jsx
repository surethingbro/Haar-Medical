import perfil from '../images/perfil.jpeg';
import acerca1 from '../images/acercaD-1.jpg';
import acerca2 from '../images/acercaD-2.jpg';

export const Nosotros = () => {
    return (
        <section id="nosotros" className="py-16 md:py-20 lg:py-24">
            <h2 className="qn-sms">¿Quiénes Somos?</h2>

            <div className="px-5 sm:px-10 md:px-16 lg:px-20 mb-10">
                <p className="font-mont-regular tracking-widest text-sm md:text-base lg:text-lg text-justify text-white">
                    Haar Medical es una clínica de medicina estética que se caracteriza por su experiencia en
                    armonización facial y restauración capilar, contando con especialistas reconocidos a nivel
                    mundial, y con el respaldo de los laboratorios mejor posicionados en el mercado dermoestético.
                </p>
            </div>

            <div className="px-5 sm:px-10 md:px-16 lg:px-20 flex flex-col lg:flex-row gap-12 items-start">

                {/* Columna de Texto */}
                <div className="flex-1 space-y-10">

                    {/* Historia — con foto a la derecha en tablet */}
                    <div className="flex flex-row gap-4 items-start">
                        <div className="flex-1">
                            <h3 className="text-center md:text-left tracking-widest text-primarylight text-xl sm:text-2xl lg:text-3xl mb-3">Historia</h3>
                            <p className="font-mont-regular tracking-widest text-sm md:text-base lg:text-lg text-justify text-white">
                                Haar se forja desde el compromiso de brindar soluciones estéticas personalizadas de alta calidad.
                                Nos enfocamos en la restauración capilar y tratamientos médicos avanzados,
                                siempre con la promesa de ofrecer excelencia tecnológica y humana.
                            </p>
                        </div>

                        {/* Foto solo en móvil y tablet — al lado de Historia */}
                        <img
                            loading="lazy"
                            className="lg:hidden w-24 md:w-48 aspect-square object-cover rounded-2xl shadow-xl flex-shrink-0"
                            src={perfil}
                            alt="Dr. Carlos Meraz"
                        />
                    </div>

                    {/* Dr. Meraz — ancho completo en tablet */}
                    <div>
                        <h3 className="text-center md:text-left tracking-widest text-primarylight text-xl sm:text-2xl lg:text-3xl mb-3">Sobre el Dr. Carlos Meraz</h3>
                        <div className="space-y-3 font-mont-regular tracking-widest text-sm md:text-base lg:text-lg text-justify text-white leading-relaxed">
                            <p>
                                El Dr. Carlos Meraz, egresado de la facultad de medicina de la Benemérita Universidad Autónoma de Puebla,
                                cuenta con diversos posgrados en medicina estética y medicina regenerativa, actualmente con maestría en
                                medicina estética, obesidad y longevidad, expedido por Instituto Panamericano de Profesionales Científicos,
                                Sociedad Mexicana Científica de Medicina Estética, y la Unión Internacional de Medicina Estética.
                            </p>
                            <p>
                                Con 13 años de experiencia en tratamientos para combatir la alopecia, armonización facial,
                                y demás tratamientos médicos estéticos no quirúrgicos.
                            </p>
                            <p>
                                Speaker de diversos laboratorios, y ganador internacional del premio RAES 2023.
                            </p>
                        </div>
                    </div>

                    {/* Imágenes clínica — móvil y tablet */}
                    <div className="lg:hidden grid grid-cols-2 gap-3">
                        <img loading="lazy" className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-xl" src={acerca1} alt="Clínica Haar Medical" />
                        <img loading="lazy" className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-xl" src={acerca2} alt="Instalaciones Haar Medical" />
                    </div>
                </div>

                {/* Columna derecha — solo desktop */}
                <div className="hidden lg:grid flex-1 grid-cols-2 gap-4 w-full lg:max-w-md">
                    <img
                        loading="lazy"
                        className="mx-auto w-full max-w-[300px] aspect-square object-cover rounded-2xl shadow-xl col-span-2"
                        src={perfil}
                        alt="Dr. Carlos Meraz"
                    />
                    <img
                        loading="lazy"
                        className="w-full h-50 object-cover rounded-2xl shadow-xl"
                        src={acerca1}
                        alt="Clínica Haar Medical"
                    />
                    <img
                        loading="lazy"
                        className="w-full h-50 object-cover rounded-2xl shadow-xl"
                        src={acerca2}
                        alt="Instalaciones Haar Medical"
                    />
                </div>

            </div>
        </section>
    )
}