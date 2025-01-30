export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contato */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="mb-2">clinicaneuromarianebach@gmail.com</p>
              <p>(48) 99122-8184</p>
            </div>
  
            {/* Links Rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="/services" className="hover:text-blue-400">Serviços</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contato</a></li>
              </ul>
            </div>
  
            {/* Redes Sociais */}
<div>
  <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/seuPerfil"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400"
    >
      Facebook
    </a>
    <a
      href="https://www.instagram.com/bachmariane/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400"
    >
      Instagram
    </a>
  </div>
</div>

          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; 2025 Clínica Mariane Bach. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }