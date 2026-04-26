import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    return (
        <section id="inicio" className='flex flex-col xsm:flex-row items-center justify-center'>
            
            {/* Columna texto */}
            <div className="px-5 text-center py-5 sm:px-10 xmd:px-20 flex flex-col items-center">
                <h1 className='text-sm xsm:text-[1.188rem] sm:text-2xl xmd:text-3xl xl:text-[2.75rem] xl:mt-4 2xl:text-[3.5rem] xxl:text-[5.5rem] xxxl:text-[7.5rem] font-mont-medium text-white uppercase'>
                    Más que estética, <br/>
                    <span className="font-bold px-3">es confianza.</span>
                </h1>

                <p className='font-mont-regular text-white text-[0.5rem] xsm:text-[0.813rem] sm:text-xs xmd:text-base xl:text-2xl 2xl:text-3xl xxl:text-5xl xxxl:text-7xl xl:mt-4 mt-2 px-3 w-fit'>
                    Recupera tu seguridad con tratamientos pensados para ti
                </p>

                <div className='py-2.5 xsm:py-4 sm:py-5 xl:py-10 2xl:py-12 xxl:py-15 xxxl:py-20'>
                    <a href="#contacto" className='cita-btn'>Agenda tu cita</a>
                </div>

                <img
                    src={inicio}
                    alt=""
                    aria-hidden="true"
                    className='xsm:w-[6rem] w-[4.8rem] sm:w-[10rem] xl:w-[15rem] 2xl:w-[20rem] xxl:w-[30rem] xxxl:w-[40rem] mx-auto'
                />
            </div>

            {/* Columna video */}
            <div className='xsm:py-auto xsm:px-2 mx-auto'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    className='hero-video mt-3 object-cover rounded-[15px] overflow-hidden shadow-[0_2px_2px_rgba(0,0,0,0.15)] py-2 px-2'
                >
                    <source src={vid} type="video/mp4" />
                </video>
            </div>

        </section>
    )
}