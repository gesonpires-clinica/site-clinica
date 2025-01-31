import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "/favicon.ico"; // Importando o favicon como logo

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo e Nome */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Clínica Mariane Bach" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-semibold text-blue-900">Clínica Mariane Bach</span>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Contato
              </Link>
            </li>
          </ul>

          {/* Ícone do WhatsApp Desktop */}
          <a
            href="https://wa.me/5548991228184"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </nav>

        {/* Menu Mobile (Tela Cheia) */}
        <div
          className={`fixed inset-0 bg-white transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col justify-center items-center z-40`}
        >
          <button
            className="absolute top-5 right-5 text-blue-900"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          <ul className="space-y-6 text-center">
            <li>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 text-xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 text-xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 text-xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/5548991228184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-green-600 text-xl"
              >
                <FaWhatsapp className="w-6 h-6" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Adicionando margem ao conteúdo abaixo da header fixa */}
      <main className="pt-20 md:pt-24"></main>
    </>
  );
}
