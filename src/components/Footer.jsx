import logo from '../images/header-logo.png';

export const Footer = () => {
  return (
    <footer className="relative bg-secondary text-primarylight">

      {/* Contenido del footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Haar Medical" className="w-36 md:w-40" />
          </div>

          {/* Info central */}
          <div className="text-center text-sm md:text-base space-y-1">
            <p>Calle Lago Alberto 367, 11320 Miguel Hidalgo CDMX, México</p>
            <p>Polanco, CDMX</p>
            <a href="tel:5612614417" className="block text-accent hover:underline">
              56 1261 4417
            </a>
            <a href="mailto:contacto@haarmedical.com" className="block text-accent hover:underline">
              contacto@haarmedical.com
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-3 flex-shrink-0">

            <a
              href="https://www.facebook.com/HaarMedicalOficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primarydark transition-colors"
            >
              <svg className="w-5 h-5 fill-secondary" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-0.55 0-1 0.45-1 1v2h3v3h-3v6.95c5.05-0.5 9-4.76 9-9.95Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/haar_medical/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primarydark transition-colors"
            >
              <svg className="w-5 h-5 fill-secondary" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056 0.01 4.122 0.06 1.065 0.05 1.79 0.217 2.428 0.465 0.66 0.254 1.216 0.598 1.772 1.153 0.555 0.556 0.899 1.113 1.153 1.772 0.247 0.637 0.415 1.363 0.465 2.428 0.05 1.066 0.06 1.405 0.06 4.122s-0.01 3.056-0.06 4.122c-0.05 1.065-0.218 1.79-0.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-0.637 0.247-1.363 0.415-2.428 0.465-1.066 0.05-1.405 0.06-4.122 0.06s-3.056-0.01-4.122-0.06c-1.065-0.05-1.79-0.218-2.428-0.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-0.248-0.637-0.415-1.363-0.465-2.428C2.013 15.056 2 14.717 2 12s0.01-3.056 0.06-4.122c0.05-1.066 0.217-1.79 0.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c0.638-0.248 1.362-0.415 2.428-0.465C8.944 2.013 9.283 2 12 2Zm0 1.802c-2.67 0-2.986 0.01-4.04 0.058-0.976 0.045-1.505 0.207-1.858 0.344-0.466 0.182-0.8 0.398-1.15 0.748-0.35 0.35-0.566 0.683-0.748 1.15-0.137 0.353-0.3 0.882-0.344 1.857-0.048 1.055-0.058 1.37-0.058 4.041 0 2.67 0.01 2.986 0.058 4.04 0.045 0.976 0.207 1.505 0.344 1.858 0.182 0.466 0.399 0.8 0.748 1.15 0.35 0.35 0.683 0.566 1.15 0.748 0.353 0.137 0.882 0.3 1.857 0.344 1.054 0.048 1.37 0.058 4.041 0.058 2.67 0 2.987-0.01 4.04-0.058 0.976-0.045 1.505-0.207 1.858-0.344 0.466-0.182 0.8-0.398 1.15-0.748 0.35-0.35 0.566-0.683 0.748-1.15 0.137-0.353 0.3-0.882 0.344-1.857 0.048-1.055 0.058-1.37 0.058-4.041 0-2.67-0.01-2.986-0.058-4.04-0.045-0.976-0.207-1.505-0.344-1.858a3.097 3.097 0 0 0-0.748-1.15 3.098 3.098 0 0 0-1.15-0.748c-0.353-0.137-0.882-0.3-1.857-0.344-1.055-0.048-1.37-0.058-4.041-0.058Zm0 4.595a5.603 5.603 0 1 1 0 11.206 5.603 5.603 0 0 1 0-11.206Zm0 1.802a3.801 3.801 0 1 0 0 7.602 3.801 3.801 0 0 0 0-7.602Zm6.406-2.16a1.296 1.296 0 1 1-2.592 0 1.296 1.296 0 0 1 2.592 0Z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@haar_medical"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primarydark transition-colors"
            >
              <svg className="w-5 h-5 fill-secondary" viewBox="0 0 24 24">
                <path d="M16.6 5.82s0.51 0.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-0.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88 0.09-3.24-1.48Z" />
              </svg>
            </a>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-primarylight/20 mt-8 pt-5 text-center text-xs text-primarylight/60 space-y-1">
          <p>
            Todos los derechos reservados &ndash; <a href="/privacidad" className="text-accent hover:underline">Política de Privacidad</a>
          </p>
          <p>COFEPRIS: 2621052002A00050</p>
        </div>

      </div>
    </footer>
  );
};
