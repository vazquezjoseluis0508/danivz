import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-500">
              DANIVZ
            </div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">
              SERVICIO TÉCNICO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Mis Servicios
            </a>
            <a href="#trabajos" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Mis Trabajos
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-blue-500">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">2302-693788</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mis Servicios
              </a>
              <a 
                href="#trabajos" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mis Trabajos
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex items-center space-x-2 text-blue-600 pt-2 border-t border-gray-200">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">2302-693788</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header