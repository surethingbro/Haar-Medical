import logo from '../images/header-logo.png';
import vid from '../Videos/Intro-1.mp4';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav aria-label="Navegación principal"
        className="bg-primarylight shadow-lg sticky top-0 left-0 w-full z-10">

        <div className="flex items-center justify-between py-3 sm:py-5 sm:px-10 px-4">
          <img src={logo} alt="Haar Medical" className="hidden md:block w-[10rem] lg:w-[13.75rem]" />
          <ul className="hidden md:flex list-none items-center gap-x-6 lg:gap-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-a">{label}</a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="block w-5 h-0.5 bg-primarydark" />
            <span className="block w-5 h-0.5 bg-primarydark" />
            <span className="block w-5 h-0.5 bg-primarydark" />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-20 bg-black transition-opacity duration-300
          ${menuOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <div className={`md:hidden fixed top-0 right-0 h-full w-64 z-30 bg-primarylight shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <img src={logo} alt='Haar Medical' className='w-32 mx-auto mt-6 mb-2' />

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-primarydark text-2xl font-bold"
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <ul className="list-none flex flex-col mt-16 px-6">
          {navLinks.map(({ href, label }, i) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`nav-a block py-4 ${i < navLinks.length - 1 ? 'border-b border-btn' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 px-6">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            className="w-full rounded-lg object-cover shadow-md"
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};