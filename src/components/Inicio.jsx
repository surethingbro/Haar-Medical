import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    
    return (
        <section id="inicio" className='flex flex-row  '>
            <div className=" px-5 text-center py-5 sm:px-10 items-center justify-center flex-col">
                <h1 className='text-sm xsm:text-[1.188rem] sm:text-2xl  font-mont-medium text-white uppercase'>Más que estética, <br/>
                <span className=" font-bold px-3">es confianza.</span> </h1>
                
                <p className='font-mont-regular text-white text-[0.5rem] xsm:text-[0.813rem] sm:text-xs mt-2 px-3 w-fit px-2'>
                    Recupera tu seguridad con tratamientos pensados para ti 
                </p>

                <div className='text-center py-2.5 xsm:py-4 sm:py-5'>
                    <a href="#contacto" className='cita-btn'>Agenda tu cita</a>
                </div>

                <img src={inicio} alt="Inicio" className=' xsm:w-[6rem] w-[4.8rem] sm:w-[10rem] mx-auto' />
            </div>

            <div className=' xsm:py-auto xsm:px-2 mx-auto items-center justify-center flex'>
            <video autoPlay loop muted className='xsm:w-60 xsm:h-65 sm:w-70 sm:h-75 mt-3 object-cover rounded-[15px] overflow-hidden shadow-[0_2px_2px_rgba(0,0,0,0.15)] py-2 px-2 w-50 h-50'>
                <source src={vid} type="video/mp4" />
                Lo sentimos, no se puede mostrar el video en este momento.
            </video>
            </div>

        </section>
    )
}

    
