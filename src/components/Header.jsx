import logo from '../images/header-logo.png';

export const Header = () => {
  return (
    <nav className="bg-primarylight shadow-lg flex items-center justify-between py-3 sm:py-5 sm:px-10 px-4 fixed top-0 left-0 w-full">
            <img className="w-[4.8rem] sm:w-[10rem] md:w-[10rem] lg:w-[13.75rem]" src={logo} alt="Logo"/>

            <div className="flex items-center text-black ">
              <ul className="list-none flex items-center md:gap-x-6 lg:gap-x-8 xl:gap-x-15">
                <li> <a href="#inicio" className="nav-a">Inicio</a> </li>
                <li> <a href="#nosotros" className="nav-a">Nosotros</a> </li>
                <li> <a href="#servicios" className="nav-a">Servicios</a> </li>
                <li> <a href="#contacto" className="nav-a">Contacto</a> </li>
                </ul>

            </div>
    </nav>

  );
};