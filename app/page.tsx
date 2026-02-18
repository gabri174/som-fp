import Link from 'next/link'
import { Cpu, BookOpen, Download, Brain, ArrowRight, Monitor, HardDrive, Settings } from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'Hardware vs Software',
      description: 'Aprende los fundamentos del ciclo CPU: Fetch-Decode-Execute',
      icon: Monitor,
      href: '/unidad-1-introduccion-sistemas',
      color: 'from-blue-500 to-electric-blue'
    },
    {
      title: 'Gestión de Datos',
      description: 'Domina el binario, hexadecimal y unidades de medida',
      icon: HardDrive,
      href: '/unidad-2-gestion-datos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Instalación de SO',
      description: 'Guías paso a paso para Windows y Linux',
      icon: Settings,
      href: '/unidad-3-instalacion-so',
      color: 'from-green-500 to-neon-green'
    }
  ]

  const stats = [
    { label: 'Unidades', value: '3' },
    { label: 'Temas', value: '25+' },
    { label: 'Quizzes', value: 'IA Powered' },
    { label: 'Recursos', value: 'PDFs' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-dark-gray to-black opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto neon-glow">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Domina SOM: Tu guía definitiva para
                <span className="block text-electric-blue neon-text">1º de SMR</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Aprende Sistemas Operativos y Mantenimiento de forma interactiva con contenido 
                especializado para Formación Profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/som-quiz"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-electric-blue hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Probar Quiz IA
                </Link>
                <Link
                  href="/unidad-1-introduccion-sistemas"
                  className="inline-flex items-center justify-center px-8 py-3 border border-electric-blue text-base font-medium rounded-md text-electric-blue bg-transparent hover:bg-electric-blue hover:bg-opacity-10 transition-all duration-200"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Empezar Aprender
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contenido Especializado
            </h2>
            <p className="text-xl text-gray-400">
              Todo el temario de SOM organizado para un aprendizaje efectivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group"
              >
                <div className="glass-dark rounded-xl p-8 h-full transition-all duration-300 hover:transform hover:scale-105 hover:neon-glow">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-electric-blue font-medium">
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para dominar SOM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comienza con nuestro quiz interactivo o explora los recursos disponibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/som-quiz"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-gray bg-neon-green hover:bg-green-400 transition-all duration-200 transform hover:scale-105"
              >
                <Brain className="mr-2 h-5 w-5" />
                Comenzar Quiz
              </Link>
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center px-8 py-3 border border-neon-green text-base font-medium rounded-md text-neon-green bg-transparent hover:bg-neon-green hover:bg-opacity-10 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Ver Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
