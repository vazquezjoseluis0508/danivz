import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                DANIVZ SERVICIO TÉCNICO
              </h3>
              <p className="text-gray-300">
                Carlos Daniel Vázquez
              </p>
              <p className="text-blue-400 font-medium italic mt-2">
                "Rapidez, seriedad y confianza avalan mi servicio"
              </p>
            </div>
            
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                Técnico especializado en aires acondicionados, lavadoras y electricidad doméstica.
              </p>
              <p className="text-sm">
                Más de 10 años de experiencia brindando servicios de calidad.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Información de Contacto
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">2302-693788</p>
                  <p className="text-sm text-gray-400">Disponible 24 horas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-300">General Pico - La Pampa</p>
                  <p className="text-sm text-gray-400">y zonas de influencia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-gray-300">Lunes a Sábado: 8:00 - 20:00</p>
                  <p className="text-sm text-gray-400">Emergencias: 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Mis Servicios
            </h4>
            
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Instalación de Aires Acondicionados</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Reparación de Aires Acondicionados</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Servicio Técnico en Lavadoras</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Electricidad Doméstica</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-md font-medium text-white mb-3">
                Sígueme en redes sociales
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/danivz.servicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/danivz.servicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/5492302693788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} DANIVZ Servicio Técnico. Todos los derechos reservados.</p>
              <p>Carlos Daniel Vázquez - Técnico Especializado</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="tel:2302693788"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/5492302693788"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer