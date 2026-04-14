export const Inicio = () => {
    return (
        <section id="inicio" className="flex justify-between items-start text-[white] py-[80px] px-[60px] flex-wrap">
            <div className="flex-1 max-w-[1000px] mr-[40px] pl-[30px]">
                <h1 className="inicio-h1">Más que estética, <span className="font-bold">es confianza.</span> </h1>
                <p className="inicio-p">Recupera tu seguridad con tratamientos pensados para ti.</p>
            
            <div className="text-center mt-[30px]">
                <a href="#contacto" className="cita-btn">Agenda tu cita</a>
            </div>
            <img src="./inicio-icon.png" alt="Ícono de inicio" className="max-h-[130px] h-auto w-auto block ml-auto mr-auto mt-[5px] w-[100px]"/>
            </div>

            <video autoPlay loop muted className="intro-vid">
                <source src="./Intro-1.mp4" type="video/mp4" />
                Lo sentimos, no se puede mostrar el video en este momento.
            </video>

        </section>
    )
}
