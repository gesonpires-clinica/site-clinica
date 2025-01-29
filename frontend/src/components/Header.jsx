import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto p-4">
        <ul className="flex gap-6">
          <li><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link to="/services" className="text-blue-600 hover:text-blue-800">Serviços</Link></li>
          <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">Contato</Link></li>
          <li><Link to="/booking" className="text-blue-600 hover:text-blue-800">Agendamentos</Link></li>

        </ul>
      </nav>
    </header>
  );
}