import { Snowflake, Zap, Wrench, Clock, Shield, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Aires Acondicionados",
      description: "Instalación, reparación y mantenimiento de equipos de aire acondicionado de todas las marcas.",
      features: ["Instalación profesional", "Reparaciones especializadas", "Mantenimiento preventivo", "Carga de gas"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Lavadoras",
      description: "Servicio técnico especializado en reparación y mantenimiento de lavadoras automáticas.",
      features: ["Diagnóstico preciso", "Repuestos originales", "Reparación en domicilio", "Garantía en trabajos"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electricidad Doméstica",
      description: "Instalaciones eléctricas, reparaciones y mantenimiento para tu hogar con total seguridad.",
      features: ["Instalaciones eléctricas", "Tableros eléctricos", "Iluminación", "Tomas y enchufes"]
    }
  ]

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapidez",
      description: "Respuesta inmediata a tu llamada"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Confianza",
      description: "Técnico certificado y experimentado"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Seriedad",
      description: "Compromiso con la calidad del servicio"
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mis Servicios Técnicos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrezco servicios técnicos especializados con más de 10 años de experiencia en el rubro. 
            Mi compromiso es brindar soluciones efectivas y duraderas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ¿Por qué elegir mi servicio?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services