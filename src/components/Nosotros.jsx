export const Nosotros = () => {
    return(
        <section id = "nosotros">
            <h1 className="qn-sms">¿Quiénes Somos?</h1>
            
            <div className="px-20 mb-10">
                <p className="font-mont-regular tracking-widest text-base md:text-lg text-justify text-white"> 
                Haar Medical es una clínica de medicina estética que se caracteriza por su experiencia en
                armonización facial y restauración capilar, contando con especialistas reconocidos a nivel
                mundial, y con el respaldo de los laboratorios mejor posicionados en el mercado dermoestético.
                </p>                
            </div>

            <div className="px-6 px-20 flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Columna de Texto */}
                <div className="flex-1 space-y-12">
                    <div>
                        <h2 className="text-center md:text-left tracking-widest text-primarylight text-3xl mb-4">Historia</h2>
                        <p className="font-mont-regular tracking-widest text-base md:text-lg text-justify text-white">
                            Haar se forja desde el compromiso de brindar soluciones estéticas personalizadas de alta calidad. 
                            Nos enfocamos en la restauración capilar y tratamientos médicos avanzados, 
                            siempre con la promesa de ofrecer excelencia tecnológica y humana.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-center md:text-left tracking-widest text-primarylight text-3xl md:text-3xl mb-4">Sobre el Dr. Carlos Meraz</h2>
                        
                        <p className="tracking-widest mt-4 font-mont-regular text-base text-justify md:text-lg text-white leading-relaxed">
                            El Dr. Carlos Meraz, egresado de la facultad de medicina de la Benemerita Universidad Autónoma de Puebla, cuenta con diversos posgrados en medicina estética y 
                            medicina regenerativa, actualmente con maestría en medicina estética, obesidad y longevidad, expedido por Instituto Panamericano de Profesionales Cientificos, 
                            Sociedad Mexicana Cientifica de Medicina Estética, y la Unión Internacional de Medicina Estética. 
                            <br/>
                            <br/>

                            Con 13 años de experiencia en tratamientos para combatir la alopecia, armonización facial, y de más tratamientos médicos 
                            estéticos no quirúrgicos.

                            <br/>
                            <br/>

                            Speaker de diversos laboratorios, y ganador internacional del premio RAES 2023 
                        </p>
                    </div>
                </div>

                {/* Columna de Imágenes  */}
                <div className="flex-1 grid grid-cols-2 gap-4 w-full lg:max-w-md">
                    <img className="mx-auto w-full max-w-[300px] aspect-square object-cover rounded-2xl shadow-xl col-span-2" src="./perfil.jpeg" alt="Dr. Meraz" />
                    <img className="w-full h-50 object-cover rounded-2xl shadow-xl" src="./acercaD-1.jpg" alt="Clínica 1" />
                    <img className="w-full h-50 object-cover rounded-2xl shadow-xl" src="./acercaD-2.jpg" alt="Clínica 2" />
                </div>
                
            </div>

            </section>
    )
}