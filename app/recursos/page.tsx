import { Metadata } from 'next'
import { Download, FileText, Image, BookOpen, ExternalLink, CheckCircle, Clock, HardDrive, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recursos - SOM FP',
  description: 'Descarga PDFs, esquemas y recursos gratuitos para estudiar Sistemas Operativos y Mantenimiento. Todo el material para 1º de SMR.',
  keywords: 'recursos, PDF, esquemas, descargas, SOM, SMR, estudio',
}

export default function RecursosPage() {
  const resources = [
    {
      category: 'Guías de Estudio',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Guía Completa SOM',
          description: 'Resumen completo de toda la asignatura',
          type: 'PDF',
          size: '2.5 MB',
          pages: '45 páginas',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Glosario de Términos',
          description: 'Diccionario de conceptos esenciales',
          type: 'PDF',
          size: '850 KB',
          pages: '12 páginas',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Guía Rápida de Exámenes',
          description: 'Tips y estrategias para los exámenes',
          type: 'PDF',
          size: '1.2 MB',
          pages: '18 páginas',
          downloadUrl: '#',
          previewUrl: '#'
        }
      ]
    },
    {
      category: 'Esquemas Visuales',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'Esquema Hardware vs Software',
          description: 'Diagrama comparativo visual',
          type: 'PNG',
          size: '450 KB',
          resolution: '1920x1080',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Mapa Mental Sistemas de Archivos',
          description: 'NTFS vs EXT4 visual',
          type: 'SVG',
          size: '120 KB',
          resolution: 'Vectorial',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Infografía Ciclo CPU',
          description: 'Fetch-Decode-Execute explicado',
          type: 'PNG',
          size: '680 KB',
          resolution: '1920x1080',
          downloadUrl: '#',
          previewUrl: '#'
        }
      ]
    },
    {
      category: 'Herramientas Prácticas',
      icon: HardDrive,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Checklist Instalación Windows',
          description: 'Paso a paso detallado',
          type: 'PDF',
          size: '320 KB',
          pages: '8 páginas',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Script Bash para Linux',
          description: 'Automatización de tareas básicas',
          type: 'SH',
          size: '15 KB',
          lines: '200 líneas',
          downloadUrl: '#',
          previewUrl: '#'
        },
        {
          title: 'Plantilla Particionado',
          description: 'Guía de particiones óptimas',
          type: 'PDF',
          size: '580 KB',
          pages: '6 páginas',
          downloadUrl: '#',
          previewUrl: '#'
        }
      ]
    }
  ]

  const additionalResources = [
    {
      title: 'Enlaces Externos',
      description: 'Recursos recomendados de la web',
      links: [
        { name: 'Documentación Oficial Ubuntu', url: 'https://help.ubuntu.com', category: 'Documentación' },
        { name: 'Microsoft Learn Windows', url: 'https://learn.microsoft.com/windows', category: 'Documentación' },
        { name: 'VirtualBox Descarga', url: 'https://www.virtualbox.org', category: 'Software' },
        { name: 'Rufus USB Bootable', url: 'https://rufus.ie', category: 'Software' },
        { name: 'Montaje y Mantenimiento', url: '/montaje-mantenimiento-equipos', category: 'Curso' }
      ]
    },
    {
      title: 'Videos Recomendados',
      description: 'Tutoriales en español',
      links: [
        { name: 'Curso Básico Linux', url: '#', category: 'Video' },
        { name: 'Instalación Windows 11', url: '#', category: 'Video' },
        { name: 'Conceptos de Redes', url: '#', category: 'Video' },
        { name: 'Mantenimiento de Hardware', url: '#', category: 'Video' }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recursos de Aprendizaje
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descarga gratuitamente todos los materiales necesarios para dominar SOM. PDFs, esquemas, herramientas y mucho más.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-dark rounded-lg p-6 text-center">
              <FileText className="h-8 w-8 text-electric-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-400">PDFs Descargables</div>
            </div>
            <div className="glass-dark rounded-lg p-6 text-center">
              <Image className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-gray-400">Esquemas Visuales</div>
            </div>
            <div className="glass-dark rounded-lg p-6 text-center">
              <HardDrive className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-gray-400">Herramientas</div>
            </div>
            <div className="glass-dark rounded-lg p-6 text-center">
              <Download className="h-8 w-8 text-neon-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-gray-400">Gratis</div>
            </div>
          </div>
        </section>

        {/* Main Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Material de Estudio
          </h2>
          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${category.color} rounded-lg p-3 mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <div className="bg-gray-800 rounded px-2 py-1 text-xs text-gray-400">
                          {item.type}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <HardDrive className="h-4 w-4 mr-2" />
                          {item.size}
                        </div>
                        {'pages' in item && (
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            {item.pages}
                          </div>
                        )}
                        {'resolution' in item && (
                          <div className="flex items-center">
                            <Image className="h-4 w-4 mr-2" />
                            {item.resolution}
                          </div>
                        )}
                        {'lines' in item && (
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            {item.lines}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-600 transition-colors">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Recursos Adicionales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalResources.map((section, index) => (
              <div key={index} className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400 mb-6">{section.description}</p>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-center">
                        <ExternalLink className="h-4 w-4 text-electric-blue mr-3" />
                        <div>
                          <div className="text-white group-hover:text-electric-blue transition-colors">
                            {link.name}
                          </div>
                          <div className="text-xs text-gray-500">{link.category}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-electric-blue transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Tips */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-neon-green mr-3" />
              Consejos de Descarga
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Organiza tu estudio</h4>
                    <p className="text-gray-400 text-sm">Crea carpetas por temas y mantén todo ordenado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Revisa las actualizaciones</h4>
                    <p className="text-gray-400 text-sm">Los materiales se actualizan regularmente</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Estudia con método</h4>
                    <p className="text-gray-400 text-sm">Usa los esquemas para repaso rápido</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Practica con ejemplos</h4>
                    <p className="text-gray-400 text-sm">Usa las herramientas para aprendizaje práctico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas más ayuda?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Practica con nuestro quiz interactivo para reforzar tus conocimientos
            </p>
            <a
              href="/som-quiz"
              className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Probar Quiz Interactivo
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
