import { Phone, MapPin, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Carlos Daniel Vázquez
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-100">
                Técnico Especializado en Aires Acondicionados y Electricidad
              </h2>
            </div>

            {/* Eslogan */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg md:text-xl font-medium italic text-center">
                "Rapidez, seriedad y confianza avalan mi servicio"
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-6 w-6 text-green-300" />
                <div>
                  <p className="font-semibold">Avenida San Martín Norte 849</p>
                  <p className="text-sm text-blue-100">General Pico - La Pampa, Argentina</p>
                  <a 
                    href="https://maps.google.com/?q=Avenida+San+Martín+Norte+849,+General+Pico,+La+Pampa,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-300 hover:text-green-100 underline"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-6 w-6 text-yellow-300" />
                <div>
                  <p className="font-semibold">Servicio Profesional</p>
                  <p className="text-sm text-blue-100">Técnico calificado</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="tel:2302693788"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>2302-693788</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="./tecnico_herramientas.jpg"
                alt="Carlos Daniel Vázquez - Técnico especializado"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero