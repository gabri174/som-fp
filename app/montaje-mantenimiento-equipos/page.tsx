import { Metadata } from 'next'
import { Cpu, HardDrive, Monitor, Zap, Shield, Wrench, Settings, CheckCircle, AlertTriangle, ArrowRight, ExternalLink, Tool, Battery, Wifi } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Montaje y Mantenimiento de Equipos Informáticos | Guía Completa SMR | SOM FP',
  description: 'Aprende a montar y mantener equipos informáticos. Componentes, ensamblado, mantenimiento preventivo y correctivo. Curso completo para técnicos SMR. Herramientas y guías paso a paso.',
  keywords: 'montaje equipos informáticos, mantenimiento PC, componentes hardware, ensamblado ordenadores, SMR, técnicos informáticos, mantenimiento preventivo, reparación equipos, instalación componentes, diagnóstico fallos, limpieza ordenadores, actualización hardware, seguridad eléctrica, riesgos laborales, protección ambiental, herramientas informáticas, guía montaje PC, curso técnico hardware',
  openGraph: {
    title: 'Montaje y Mantenimiento de Equipos Informáticos | Guía Completa SMR',
    description: 'Curso completo de montaje y mantenimiento de equipos informáticos. Aprende ensamblaje, diagnóstico y reparación de PCs.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://som-fp.es/montaje-mantenimiento-equipos',
    siteName: 'SOM FP - Sistemas Operativos y Mantenimiento',
    images: [
      {
        url: 'https://som-fp.es/og-image-montaje-mantenimiento.jpg',
        width: 1200,
        height: 630,
        alt: 'Montaje y Mantenimiento de Equipos Informáticos'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Montaje y Mantenimiento de Equipos Informáticos',
    description: 'Guía completa para montar y mantener equipos informáticos. Curso SMR online.',
    images: ['https://som-fp.es/og-image-montaje-mantenimiento.jpg']
  },
  alternates: {
    canonical: 'https://som-fp.es/montaje-mantenimiento-equipos'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function MontajeMantenimientoPage() {
  const unidades = [
    {
      id: 1,
      title: 'Componentes de un Sistema Microinformático',
      description: 'Estudia todos los componentes que integran un ordenador y su importancia en el rendimiento',
      icon: Cpu,
      horas: '30 HORAS',
      temas: [
        'Placa base y chipset',
        'Procesadores (CPU)',
        'Memorias RAM',
        'Tarjetas gráficas',
        'Almacenamiento (HDD/SSD)',
        'Fuente de alimentación',
        'Cajas y ventilación'
      ],
      habilidades: [
        'Identificar componentes',
        'Conectar periféricos',
        'Verificar compatibilidad',
        'Evaluar rendimiento'
      ]
    },
    {
      id: 2,
      title: 'Análisis del Mercado de Componentes',
      description: 'Estudia los componentes, sus características y los distintos entornos donde son necesarios',
      icon: HardDrive,
      horas: '28 HORAS',
      temas: [
        'Marcas y fabricantes',
        'Relación calidad-precio',
        'Compatibilidad entre componentes',
        'Tendencias del mercado',
        'Periféricos y accesorios',
        'Presupuestos y configuraciones',
        'Actualizaciones y escalabilidad'
      ],
      habilidades: [
        'Seleccionar componentes',
        'Comparar productos',
        'Elaborar presupuestos',
        'Asesorar a clientes'
      ]
    },
    {
      id: 3,
      title: 'Electricidad de Sistemas Microinformáticos',
      description: 'Fundamentos eléctricos y seguridad en el manejo de componentes',
      icon: Zap,
      horas: '25 HORAS',
      temas: [
        'Conceptos básicos de electricidad',
        'Circuitos y alimentación',
        'Medidas de seguridad',
        'Herramientas eléctricas',
        'Protección contra sobretensiones',
        'Conexiones y cableado',
        'Normativas y certificaciones'
      ],
      habilidades: [
        'Medir voltajes',
        'Identificar fallos eléctricos',
        'Aplicar medidas de seguridad',
        'Utilizar herramientas adecuadas'
      ]
    },
    {
      id: 4,
      title: 'Riesgos Laborales y Protección Ambiental',
      description: 'Seguridad en el trabajo y gestión responsable de residuos electrónicos',
      icon: Shield,
      horas: '20 HORAS',
      temas: [
        'Normativas de seguridad',
        'Equipos de protección individual',
        'Manipulación segura de componentes',
        'Gestión de residuos electrónicos',
        'Reciclaje y sostenibilidad',
        'Ergonomía laboral',
        'Primeros auxilios informáticos'
      ],
      habilidades: [
        'Aplicar normas de seguridad',
        'Gestionar residuos',
        'Prevenir accidentes',
        'Actuar en emergencias'
      ]
    },
    {
      id: 5,
      title: 'Ensamblado de Sistemas Microinformáticos',
      description: 'Montaje completo de equipos desde cero con prácticas reales',
      icon: Wrench,
      horas: '50 HORAS',
      temas: [
        'Preparación del espacio de trabajo',
        'Instalación de placa base',
        'Montaje de procesador y disipador',
        'Instalación de módulos RAM',
        'Montaje de tarjetas y almacenamiento',
        'Conexión de cables y alimentación',
        'Configuración BIOS/UEFI',
        'Instalación de sistema operativo'
      ],
      habilidades: [
        'Montar equipos completos',
        'Configurar BIOS',
        'Instalar sistemas operativos',
        'Realizar pruebas funcionales'
      ]
    },
    {
      id: 6,
      title: 'Mantenimiento de Equipos',
      description: 'Mantenimiento preventivo y correctivo de equipos informáticos',
      icon: Settings,
      horas: '25 HORAS',
      temas: [
        'Tipos de mantenimiento',
        'Diagnóstico de fallos',
        'Limpieza de componentes',
        'Actualización de drivers',
        'Optimización del sistema',
        'Copias de seguridad',
        'Documentación técnica'
      ],
      habilidades: [
        'Realizar mantenimiento preventivo',
        'Diagnosticar problemas',
        'Reparar fallos comunes',
        'Optimizar rendimiento'
      ]
    },
    {
      id: 7,
      title: 'Aspectos Software del Mantenimiento',
      description: 'Software esencial para el mantenimiento y diagnóstico de equipos',
      icon: Monitor,
      horas: '22 HORAS',
      temas: [
        'Software de diagnóstico',
        'Herramientas de benchmarking',
        'Programas de limpieza',
        'Sistemas de monitorización',
        'Actualización de firmware',
        'Recuperación de datos',
        'Software de seguridad'
      ],
      habilidades: [
        'Usar software de diagnóstico',
        'Monitorizar sistemas',
        'Recuperar datos',
        'Mantener seguridad'
      ]
    },
    {
      id: 8,
      title: 'Nuevas Tendencias en Equipos Informáticos',
      description: 'Tecnologías emergentes y futuro del hardware informático',
      icon: Battery,
      horas: '20 HORAS',
      temas: [
        'Componentes de última generación',
        'Sistemas de refrigeración líquida',
        'Overclocking y optimización',
        'Sistemas modulares',
        'Computación cuántica',
        'Inteligencia artificial en hardware',
        'Tendencias futuras'
      ],
      habilidades: [
        'Investigar nuevas tecnologías',
        'Evaluar innovaciones',
        'Adaptarse a cambios',
        'Planificar actualizaciones'
      ]
    }
  ]

  const herramientas = [
    {
      nombre: 'Destornilladores',
      descripcion: 'Set de destornilladores Phillips, plano y torx para componentes informáticos',
      icon: Tool
    },
    {
      nombre: 'Pinzas y alicates',
      descripcion: 'Para manipular componentes pequeños y cables',
      icon: Wrench
    },
    {
      nombre: 'Limpieza',
      descripcion: 'Aire comprimido, pinceles antistáticos y productos de limpieza',
      icon: Shield
    },
    {
      nombre: 'Diagnóstico',
      description: 'Multímetro, tester de red y software de análisis',
      icon: Monitor
    },
    {
      nombre: 'Seguridad',
      descripcion: 'Pulsera antistática, guantes y gafas de protección',
      icon: Zap
    },
    {
      nombre: 'Organización',
      descripcion: 'Cajas organizadoras y etiquetas para componentes',
      icon: Settings
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header SEO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Montaje y Mantenimiento de Equipos Informáticos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Curso completo para aprender a montar, mantener y reparar equipos informáticos. 
            Conviértete en técnico especializado en hardware SMR con guías paso a paso.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-electric-blue">🔧 Montaje PC</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-electric-blue">🛠️ Mantenimiento</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-electric-blue">💻 Hardware</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-electric-blue">⚡ Diagnóstico</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-electric-blue">🎓 SMR</span>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="mb-20 glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Cpu className="mr-3 h-8 w-8 text-electric-blue" />
            Guía Completa de Montaje y Mantenimiento
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              El <strong>montaje y mantenimiento de equipos informáticos</strong> es una habilidad esencial para cualquier técnico SMR. 
              Nuestra guía completa te enseña paso a paso cómo <strong>ensamblar ordenadores</strong>, 
              realizar <strong>mantenimiento preventivo</strong> y diagnosticar fallos comunes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🔧 Montaje de Equipos</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ Selección de componentes compatibles</li>
                  <li>✅ Ensamblado paso a paso</li>
                  <li>✅ Configuración BIOS/UEFI</li>
                  <li>✅ Instalación de sistemas operativos</li>
                  <li>✅ Pruebas de funcionamiento</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🛠️ Mantenimiento</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ Limpieza de componentes</li>
                  <li>✅ Actualización de drivers</li>
                  <li>✅ Optimización del sistema</li>
                  <li>✅ Diagnóstico de fallos</li>
                  <li>✅ Reparación de hardware</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unidades Formativas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unidades Formativas del Curso
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              8 unidades temáticas para dominar completamente el montaje y mantenimiento de equipos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {unidades.map((unidad) => (
              <div key={unidad.id} className="glass-dark rounded-xl p-8 hover:neon-glow transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-electric-blue to-blue-600 rounded-lg p-4 mr-4">
                    <unidad.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{unidad.title}</h3>
                    <p className="text-sm text-gray-400">{unidad.horas}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{unidad.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Contenidos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {unidad.temas.map((tema, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-3 w-3 mr-2 text-neon-green" />
                        {tema}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Habilidades que adquirirás:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {unidad.habilidades.map((habilidad, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="h-3 w-3 mr-2 text-electric-blue" />
                        {habilidad}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Herramientas Esenciales */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Herramientas Esenciales para Técnicos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              El equipamiento necesario para montar y mantener equipos informáticos profesionalmente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {herramientas.map((herramienta, index) => (
              <div key={index} className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <herramienta.icon className="h-6 w-6 text-electric-blue mr-3" />
                  <h3 className="text-lg font-bold text-white">{herramienta.nombre}</h3>
                </div>
                <p className="text-gray-300">{herramienta.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Preguntas Frecuentes - Montaje y Mantenimiento
          </h2>
          <div className="space-y-6">
            <div className="glass-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">¿Qué necesito para empezar a montar PCs?</h3>
              <p className="text-gray-300">
                Necesitas herramientas básicas (destornilladores, pinzas), conocimientos de compatibilidad de componentes,
                y un espacio de trabajo adecuado con buena ventilación y luz.
              </p>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">¿Cuánto tiempo lleva aprender a montar equipos?</h3>
              <p className="text-gray-300">
                Con dedicación constante, puedes aprender lo básico en 2-3 meses. Para dominar completamente
                el montaje y mantenimiento, recomendamos 6-12 meses de práctica.
              </p>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">¿Es difícil encontrar trabajo como técnico SMR?</h3>
              <p className="text-gray-300">
                La demanda de técnicos especializados en hardware es alta. Empresas de reparación,
                servicios informáticos y departamentos TI buscan constantemente profesionales cualificados.
              </p>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">¿Qué certificaciones son importantes?</h3>
              <p className="text-gray-300">
                Certificaciones como CompTIA A+, Hardware de Cisco, y certificaciones de fabricantes
                (Intel, AMD) son muy valoradas en el sector del montaje y mantenimiento.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para convertirte en técnico especializado?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Pon a prueba tus conocimientos con nuestro quiz interactivo sobre montaje y mantenimiento de equipos
            </p>
            <a
              href="/som-quiz"
              className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <Cpu className="mr-2 h-5 w-5" />
              Probar Quiz de Hardware
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
