import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    
    return (
        <section id="inicio" className='flex items-center justify-center '>
            <div className=" px-5 text-center py-5 sm:px-10 xmd:px-20 flex-col">
                <h1 className='text-sm  xsm:text-[1.188rem] xmd:text-3xl sm:text-2xl text-center xl:text-[2.75rem] xl:mt-4 2xl:text-[3.5rem] xxl:text-[5.5rem] xxl:mt-15 font-mont-medium text-white uppercase'>Más que estética, <br/>
                <span className=" font-bold px-3">es confianza.</span> </h1>
                
                <p className='font-mont-regular text-white text-center text-[0.5rem] xsm:text-[0.813rem] sm:text-xs xmd:text-base xl:text-2xl 2xl:text-3xl xxl:text-5xl xl:mt-4 mt-2 px-3 w-fit px-2'>
                    Recupera tu seguridad con tratamientos pensados para ti 
                </p>

                <div className='text-center py-2.5 xsm:py-4 sm:py-5 xl:py-10 2xl:py-12 xxl:py-15'>
                    <a href="#contacto" className='cita-btn'>Agenda tu cita</a>
                </div>

                <img src={inicio} alt="Inicio" className=' xsm:w-[6rem] w-[4.8rem] sm:w-[10rem] xl:w-[15rem] 2xl:w-[20rem] xxl:w-[30rem] mx-auto' />
            </div>

            <div className=' xsm:py-auto xsm:px-2 mx-auto'>
            <video autoPlay loop muted className='xsm:w-60 xsm:h-65 sm:w-70 sm:h-75 xl:h-115 xl:w-90 2xl:w-115 2xl:h-130 xxl:h-200 xxl:w-160 mt-3 object-cover rounded-[15px] overflow-hidden shadow-[0_2px_2px_rgba(0,0,0,0.15)] py-2 px-2 w-50 h-50'>
                <source src={vid} type="video/mp4" />
                Lo sentimos, no se puede mostrar el video en este momento.
            </video>
            </div>

        </section>
    )
}

    
