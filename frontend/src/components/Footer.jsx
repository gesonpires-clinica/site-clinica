export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 md:py-8 mt-8 md:mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contato</h3>
            <p className="text-sm md:text-base mb-2">clinicaneuromarianebach@gmail.com</p>
            <p className="text-sm md:text-base">(48) 99122-8184</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 text-sm md:text-base">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 text-sm md:text-base">Serviços</a></li>
              <li><a href="/contact" className="hover:text-blue-400 text-sm md:text-base">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Redes Sociais</h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 text-sm md:text-base"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bachmariane/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 text-sm md:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-xs md:text-sm">&copy; 2025 Clínica Mariane Bach. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
