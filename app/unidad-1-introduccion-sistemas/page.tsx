import { Metadata } from 'next'
import { Cpu, HardDrive, Settings, Zap, ArrowRight, Monitor, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unidad 1: Introducción a Sistemas - SOM FP',
  description: 'Aprende los fundamentos de hardware y software, el ciclo CPU, BIOS/UEFI y drivers. Todo lo necesario para 1º de SMR.',
  keywords: 'hardware, software, CPU, BIOS, UEFI, drivers, SOM, SMR',
}

export default function Unidad1Page() {
  const topics = [
    {
      title: 'Hardware vs Software',
      description: 'Diferencias fundamentales entre componentes físicos y programas',
      icon: Monitor,
      content: [
        'Hardware: Componentes físicos del ordenador',
        'Software: Programas y sistemas operativos',
        'Interacción entre ambos niveles',
        'Ejemplos prácticos y casos de uso'
      ]
    },
    {
      title: 'Ciclo CPU: Fetch-Decode-Execute',
      description: 'El corazón del procesador y su funcionamiento',
      icon: Cpu,
      content: [
        'Fetch: Recuperación de instrucciones',
        'Decode: Decodificación de operaciones',
        'Execute: Ejecución de instrucciones',
        'Ciclos de reloj y velocidad de procesamiento'
      ]
    },
    {
      title: 'Firmware y BIOS/UEFI',
      description: 'Software básico de arranque del sistema',
      icon: Shield,
      content: [
        'BIOS: Basic Input/Output System',
        'UEFI: Unified Extensible Firmware Interface',
        'Funciones de arranque y POST',
        'Configuración y actualización del firmware'
      ]
    },
    {
      title: 'Drivers',
      description: 'El puente entre sistema operativo y hardware',
      icon: Settings,
      content: [
        'Función de los controladores',
        'Tipos de drivers más comunes',
        'Instalación y actualización',
        'Resolución de problemas comunes'
      ]
    }
  ]

  const cpuCycle = [
    { phase: 'FETCH', description: 'La CPU busca la siguiente instrucción en la memoria', color: 'bg-blue-500' },
    { phase: 'DECODE', description: 'La instrucción se decodifica para entender qué hacer', color: 'bg-purple-500' },
    { phase: 'EXECUTE', description: 'Se ejecuta la operación correspondiente', color: 'bg-green-500' }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unidad 1: Introducción a Sistemas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fundamentos esenciales de hardware y software que necesitas dominar para convertirte en un técnico de sistemas profesional.
          </p>
        </div>

        {/* CPU Cycle Visualization */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Cpu className="mr-3 h-8 w-8 text-electric-blue" />
              Ciclo CPU: Fetch-Decode-Execute
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cpuCycle.map((cycle, index) => (
                <div key={index} className="relative">
                  <div className={`${cycle.color} rounded-lg p-6 text-white h-full`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{cycle.phase}</h3>
                    </div>
                    <p className="text-white text-opacity-90">{cycle.description}</p>
                    {index < cpuCycle.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-electric-blue" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Topics Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Conceptos Fundamentales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="glass-dark rounded-xl p-8 hover:neon-glow transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-electric-blue bg-opacity-20 rounded-lg p-3 mr-4">
                    <topic.icon className="h-8 w-8 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{topic.title}</h3>
                    <p className="text-gray-400">{topic.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {topic.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Comparison Table */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Chip className="mr-3 h-8 w-8 text-electric-blue" />
              Hardware vs Software: Comparativa
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-electric-blue font-semibold">Característica</th>
                    <th className="py-4 px-6 text-blue-400 font-semibold">Hardware</th>
                    <th className="py-4 px-6 text-purple-400 font-semibold">Software</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6 text-gray-300">Naturaleza</td>
                    <td className="py-4 px-6 text-gray-400">Físico, tangible</td>
                    <td className="py-4 px-6 text-gray-400">Lógico, intangible</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6 text-gray-300">Ejemplos</td>
                    <td className="py-4 px-6 text-gray-400">CPU, RAM, Disco</td>
                    <td className="py-4 px-6 text-gray-400">Windows, Linux, Apps</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6 text-gray-300">Actualización</td>
                    <td className="py-4 px-6 text-gray-400">Reemplazo físico</td>
                    <td className="py-4 px-6 text-gray-400">Instalación/Update</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Degradación</td>
                    <td className="py-4 px-6 text-gray-400">Desgaste físico</td>
                    <td className="py-4 px-6 text-gray-400">Obsolescencia lógica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BIOS/UEFI Deep Dive */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-blue-400" />
                BIOS
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Sistema básico de entrada/salida</li>
                <li>• Interfaz legacy (texto)</li>
                <li>• Arranque tradicional (MBR)</li>
                <li>• Limitaciones de tamaño (2TB)</li>
                <li>• Menos seguro por defecto</li>
              </ul>
            </div>
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-purple-400" />
                UEFI
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Interfaz extendible unificada</li>
                <li>• Interfaz gráfica moderna</li>
                <li>• Arranque moderno (GPT)</li>
                <li>• Soporte para discos grandes</li>
                <li>• Mayor seguridad (Secure Boot)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Quieres poner a prueba tus conocimientos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Resuelve nuestro quiz interactivo sobre conceptos de sistemas
            </p>
            <a
              href="/som-quiz"
              className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Probar Quiz de Hardware
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
