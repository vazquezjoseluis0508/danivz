import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const works = [
    {
      src: "/instalacion_aire_acondicionado.webp",
      title: "Instalación de Aire Acondicionado",
      description: "Instalación profesional de equipo split en dormitorio, con conexiones eléctricas y refrigerantes según normas técnicas."
    },
    {
      src: "/reparacion_aire_acondicionado.jpg",
      title: "Reparación de Aire Acondicionado",
      description: "Reparación completa de unidad condensadora, incluyendo limpieza de filtros y verificación de sistema."
    },
    {
      src: "/reparacion_lavadora.jpg",
      title: "Reparación de Lavadora",
      description: "Servicio técnico especializado en lavadoras automáticas, diagnóstico y reparación de componentes internos."
    },
    {
      src: "/servicio_electricidad.jpg",
      title: "Instalación Eléctrica",
      description: "Instalación de tablero eléctrico con protección diferencial y llaves termomagnéticas de primera calidad."
    },
    {
      src: "/mantenimiento_electrodomesticos.jpg",
      title: "Mantenimiento Preventivo",
      description: "Mantenimiento preventivo de electrodomésticos para asegurar su óptimo funcionamiento y prolongar su vida útil."
    },
    {
      src: "/tecnico_herramientas.jpg",
      title: "Herramientas Profesionales",
      description: "Utilizo herramientas profesionales de última generación para garantizar trabajos de calidad y precisión."
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % works.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? works.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mis Trabajos Realizados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una muestra de los trabajos que he realizado con éxito. Cada proyecto es único y 
            lo abordo con la misma dedicación y profesionalismo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{work.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={works[selectedImage].src}
                  alt={works[selectedImage].title}
                  className="w-full max-h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {works[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {works[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery