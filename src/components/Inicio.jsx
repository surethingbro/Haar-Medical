import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    return (
        <section id="inicio" className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 py-4 md:py-0'>
            
            {/* Columna texto */}
            <div className="px-5 text-center py-5 sm:px-10 xmd:px-20 flex flex-col items-center">
                <h1 className='text-[clamp(1rem,3vw+0.3rem,4.5rem)] xl:mt-4 font-mont-medium text-white uppercase'>
                    Más que estética, <br/>
                    <span className="font-bold px-3">es confianza.</span>
                </h1>

                <p className='font-mont-regular text-white text-[clamp(0.7rem,1.5vw+0.3rem,3.5rem)] xl:mt-4 mt-2 px-3 w-fit'>
                    Recupera tu seguridad con tratamientos pensados para ti
                </p>

                <div className='py-[clamp(0.4rem,4vw,5rem)]'>
                    <a href="#contacto" className='cita-btn'>Agenda tu cita</a>
                </div>

                <img
                    src={inicio}
                    alt=""
                    aria-hidden="true"
                    className='w-[clamp(5rem,15vw,40rem)] mx-auto'
                />
            </div>

            {/* Columna video */}
            <div className='mx-auto flex justify-center xsm:py-auto xsm:px-2'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    className='hero-video object-cover rounded-[15px] overflow-hidden shadow-[0_2px_2px_rgba(0,0,0,0.15)] py-1 px-2 md:mt-3 md:py-2'
                >
                    <source src={vid} type="video/mp4" />
                </video>
            </div>

        </section>
    )
}