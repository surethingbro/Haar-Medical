import inicio from '../images/inicio-icon.png';
import vid from '../images/Intro-1.mp4'

export const Inicio = () => {
    return (
        <section id="inicio" className='flex flex-row '>
            <div className="bg-red-900 px-5 text-center py-5 ">
                <h1 className='text-sm font-mont-medium '>Más que estética, <br/>
                <span className=" bg-red-400 font-bold px-3">es confianza.</span> </h1>
                
                <p className='text-[0.5rem] bg-blue-400 mt-2 px-3 w-fit px-2'>
                    Recupera tu seguridad con tratamientos pensados para ti 
                </p>

            </div>

            <video autoPlay loop muted className='bg-blue-400 rounded-[15px] py-2 w-50 h-50'>
                <source src={vid} type="video/mp4" />
                Lo sentimos, no se puede mostrar el video en este momento.
            </video>

        </section>
    )
}

    
