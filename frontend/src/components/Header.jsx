import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp
import logo from "/favicon.ico"; // Importando o favicon como logo

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        {/* Logo e Nome da Clínica */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Clínica Mariane Bach"
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-xl font-semibold text-blue-900">
            Clínica Mariane Bach
          </span>
        </div>
        {/* Links de Navegação */}

        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contato
            </Link>
          </li>
        </ul>
        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/5548991228184"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="w-5 h-5" />
          
        </a>
      </nav>
    </header>
  );
}
