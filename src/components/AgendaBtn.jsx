export const AgendaBtn = () => {
  const phone = "529981559329";
  const message = encodeURIComponent("Hola, me gustaría agendar una cita.");
  const waLink = 'https://wa.me/' + phone + '?text=' + message;
    
  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <a 
      href= "#servicios" 
      onclick = {handleScroll}
      rel="noopener noreferrer" 
      className="group relative flex justify-center items-center flex-col text-center no-underline font-bold cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_10px_10px_rgba(0,0,0,0.1)]
        bg-[#BBC7D5] text-[#213246] hover:bg-[linear-gradient(135deg,#213246_0%,#5A6A83_70%,#918670_100%)] hover:text-white
        /* --- TAMAÑOS AJUSTADOS (UN POCO MÁS PEQUEÑOS EN PANTALLA NORMAL) --- */
        py-0.5 px-2.5 xsm:py-1.5 sm:py-[0.55rem] xl:py-[0.85rem] /* Reducido el grosor vertical */
        text-[11px] xsm:text-xs sm:text-xs xl:text-lg 2xl:text-3xl xxl:text-5xl xxxl:text-8xl /* Escala de texto suavizada */
        rounded-md xl:rounded-xl 2xl:rounded-2xl xxl:rounded-[25px] xxxl:rounded-[40px]
        leading-normal"
    >
      {/* Tooltip */}
      <span className="absolute top-0 text-[11px] sm:text-[13px] bg-[#BBC7D5] text-[#213246] py-[3px] px-[6px] rounded-[4px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] whitespace-nowrap
        group-hover:-top-[38px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:bg-[linear-gradient(135deg,#213246_0%,#5A6A83_70%,#918670_100%)] group-hover:text-white
        before:absolute before:content-[''] before:h-[6px] before:w-[6px] before:bg-[#BBC7D5] before:-bottom-[2px] before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:before:bg-[#213246]"
      >
        ¡Agenda ya!
      </span>

      {/* Texto del botón */}
      <span className="group-hover:[text-shadow:0px_-1px_0px_rgba(0,0,0,0.2)]">
        Agenda tu cita
      </span>
    </a>
  );
};