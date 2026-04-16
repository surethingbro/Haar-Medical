import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    return (
        <section id="inicio" className='flex flex-row  '>
            <div className=" px-5 text-center py-5 ">
                <h1 className='text-sm font-mont-medium text-white'>Más que estética, <br/>
                <span className=" font-bold px-3">es confianza.</span> </h1>
                
                <p className='font-mont-regular text-white text-[0.5rem] mt-2 px-3 w-fit px-2'>
                    Recupera tu seguridad con tratamientos pensados para ti 
                </p>

                <div className='text-center py-2.5'>
                    <a href="#contacto" className='cita-btn'>Agenda tu cita</a>
                </div>

                <img src={inicio} alt="Inicio" className='w-[4.8rem] mx-auto' />
            </div>

            <video autoPlay loop muted className='object-cover rounded-[15px] shadow-[0_2px_2px_rgba(0,0,0,0.15)] py-2 px-2 w-50 h-50'>
                <source src={vid} type="video/mp4" />
                Lo sentimos, no se puede mostrar el video en este momento.
            </video>

        </section>
    )
}

    
