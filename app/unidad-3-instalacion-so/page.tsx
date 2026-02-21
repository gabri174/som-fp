import { Metadata } from 'next'
import { Monitor, HardDrive, Shield, Terminal, CheckCircle, AlertTriangle, ArrowRight, Terminal as Linux, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unidad 3: Instalación de Sistemas Operativos - SOM FP',
  description: 'Aprende a instalar Windows y Linux, tipos de licencias, sistemas de archivos NTFS vs EXT4, y gestión de particiones.',
  keywords: 'Windows, Linux, instalación, licencias, NTFS, EXT4, particiones, SOM, SMR',
}

export default function Unidad3Page() {
  const installationSteps = [
    {
      title: 'Preparación del Sistema',
      description: 'Verificación de requisitos y backup',
      icon: Shield,
      steps: [
        'Comprobar compatibilidad de hardware',
        'Realizar backup de datos importantes',
        'Verificar espacio en disco disponible',
        'Descargar imagen ISO del sistema operativo'
      ]
    },
    {
      title: 'Creación de Medio de Instalación',
      description: 'USB booteable o DVD de instalación',
      icon: HardDrive,
      steps: [
        'Descargar Rufus o herramienta similar',
        'Seleccionar archivo ISO',
        'Configurar partición (GPT/MBR)',
        'Iniciar proceso de creación'
      ]
    },
    {
      title: 'Proceso de Instalación',
      description: 'Pasos durante la instalación',
      icon: Monitor,
      steps: [
        'Arrancar desde medio de instalación',
        'Seleccionar idioma y configuración regional',
        'Particionar el disco duro',
        'Instalar sistema y configurar usuario'
      ]
    },
    {
      title: 'Post-Instalación',
      description: 'Configuración y optimización',
      icon: Terminal,
      steps: [
        'Instalar drivers actualizados',
        'Configurar red y conexión',
        'Instalar software esencial',
        'Realizar actualizaciones del sistema'
      ]
    }
  ]

  const licenseTypes = [
    {
      type: 'Propietario (EULA)',
      description: 'Software con restricciones de uso',
      icon: Shield,
      features: [
        'Requiere compra de licencia',
        'Código fuente cerrado',
        'Restricciones de modificación',
        'Soporte técnico oficial',
        'Ejemplos: Windows, Microsoft Office'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Open Source (GPL)',
      description: 'Software libre y de código abierto',
      icon: Linux,
      features: [
        'Gratis para uso y distribución',
        'Código fuente accesible',
        'Permite modificación',
        'Comunidad de desarrollo',
        'Ejemplos: Linux, LibreOffice'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'Freeware',
      description: 'Software gratuito con restricciones',
      icon: CheckCircle,
      features: [
        'Uso gratuito',
        'Código fuente cerrado',
        'Sin costo de licencia',
        'Limitaciones de uso',
        'Ejemplos: Adobe Reader, Skype'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Shareware',
      description: 'Software de prueba con limitaciones',
      icon: AlertTriangle,
      features: [
        'Período de prueba gratuito',
        'Funcionalidades limitadas',
        'Requiere pago después del trial',
        'Popups de registro',
        'Ejemplos: WinRAR, antivirus de prueba'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const fileSystems = [
    {
      name: 'NTFS',
      fullName: 'New Technology File System',
      system: 'Windows',
      features: [
        'Soporte para archivos grandes (>4GB)',
        'Compresión de archivos nativa',
        'Permisos y seguridad avanzados',
        'Journaling para recuperación',
        'Compatible con Windows nativamente'
      ],
      limitations: [
        'No compatible nativo con Linux',
        'Requiere drivers para lectura en macOS',
        'Mayor uso de recursos'
      ],
      color: 'text-blue-400'
    },
    {
      name: 'EXT4',
      fullName: 'Fourth Extended Filesystem',
      system: 'Linux',
      features: [
        'Alto rendimiento en Linux',
        'Journaling robusto',
        'Soporte para archivos grandes (16TB)',
        'Estabilidad y fiabilidad',
        'Código abierto'
      ],
      limitations: [
        'No compatible con Windows',
        'Requiere drivers para macOS',
        'Menos herramientas gráficas'
      ],
      color: 'text-green-400'
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unidad 3: Instalación de Sistemas Operativos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Domina el proceso de instalación de Windows y Linux, tipos de licencias y sistemas de archivos esenciales para el mantenimiento de sistemas.
          </p>
        </div>

        {/* Installation Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Proceso de Instalación
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
                <div className="bg-electric-blue bg-opacity-20 rounded-lg p-3 mb-4 inline-block">
                  <step.icon className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
                <ul className="space-y-2">
                  {step.steps.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* License Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Tipos de Licencias de Software
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {licenseTypes.map((license, index) => (
              <div key={index} className="glass-dark rounded-xl p-8 hover:neon-glow transition-all duration-300">
                <div className={`bg-gradient-to-br ${license.color} rounded-lg p-4 mb-6`}>
                  <div className="flex items-center">
                    <license.icon className="h-8 w-8 text-white mr-3" />
                    <h3 className="text-xl font-bold text-white">{license.type}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{license.description}</p>
                <ul className="space-y-3">
                  {license.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* File Systems Comparison */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <HardDrive className="mr-3 h-8 w-8 text-electric-blue" />
              Sistemas de Archivos: NTFS vs EXT4
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {fileSystems.map((fs, index) => (
                <div key={index} className="glass-dark rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gray-800 rounded-lg p-3 mr-4`}>
                      <div className={`text-2xl font-bold ${fs.color}`}>
                        {index === 0 ? 'W' : 'L'}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${fs.color}`}>{fs.name}</h3>
                      <p className="text-gray-400 text-sm">{fs.fullName}</p>
                      <p className="text-gray-500 text-xs">Sistema: {fs.system}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Características:</h4>
                    <ul className="space-y-2">
                      {fs.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Limitaciones:</h4>
                    <ul className="space-y-2">
                      {fs.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Guides */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Guías de Instalación Detalladas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-dark rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gray-800 rounded-lg p-3 mr-4">
                  <div className="text-blue-400 text-2xl font-bold">W</div>
                </div>
                <h3 className="text-2xl font-bold text-white">Windows 11</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Requisitos Mínimos:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Procesador: 1 GHz o más rápido</li>
                    <li>• RAM: 4 GB o más</li>
                    <li>• Almacenamiento: 64 GB o más</li>
                    <li>• TPM 2.0 y UEFI</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Pasos Clave:</h4>
                  <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                    <li>Crear USB booteable con Media Creation Tool</li>
                    <li>Configurar BIOS para arranque UEFI</li>
                    <li>Seleccionar instalación personalizada</li>
                    <li>Particionar disco (GPT recomendado)</li>
                    <li>Configurar cuenta Microsoft o local</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Linux className="h-8 w-8 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Ubuntu 22.04</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold mb-2">Requisitos Mínimos:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Procesador: 2 GHz dual core</li>
                    <li>• RAM: 4 GB recomendados</li>
                    <li>• Almacenamiento: 25 GB o más</li>
                    <li>• Conexión a internet</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold mb-2">Pasos Clave:</h4>
                  <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                    <li>Descargar ISO y crear USB con balenaEtcher</li>
                    <li>Arrancar en modo live desde USB</li>
                    <li>Ejecutar "Install Ubuntu"</li>
                    <li>Configurar particiones (EXT4 + swap)</li>
                    <li>Crear usuario y contraseña</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partition Management */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Gestión de Particiones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">MBR (Legacy)</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Máximo 4 particiones primarias</li>
                  <li>• Soporte hasta 2TB</li>
                  <li>• Compatible con BIOS</li>
                  <li>• Estructura simple</li>
                </ul>
              </div>
              <div className="glass-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">GPT (Moderno)</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Hasta 128 particiones</li>
                  <li>• Soporte hasta 9.4ZB</li>
                  <li>• Requiere UEFI</li>
                  <li>• Mayor fiabilidad</li>
                </ul>
              </div>
              <div className="glass-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Herramientas</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Windows: Disk Management</li>
                  <li>• Linux: GParted</li>
                  <li>• Multiplataforma: MiniTool</li>
                  <li>• Profesional: Acronis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Herramientas Open Source Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Herramientas Open Source para Instalación
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Software gratuito y de código abierto para facilitar la instalación y gestión de sistemas operativos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ventoy */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">Ventoy</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Crea USBs booteables multiboot. Puedes agregar múltiples ISOs y elegir cuál arrancar al inicio.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Soporta 1000+ ISOs</li>
                <li>✅ Arranque Legacy y UEFI</li>
                <li>✅ Persistencia de datos</li>
                <li>✅ Totalmente gratuito</li>
              </ul>
              <a
                href="https://www.ventoy.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar Ventoy
              </a>
            </div>

            {/* Rufus */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">Rufus</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Utilidad para crear USBs booteables desde Windows. Rápido, fiable y muy popular.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Muy rápido y eficiente</li>
                <li>✅ Soporta ISOs e imágenes</li>
                <li>✅ Verificación de integridad</li>
                <li>✅ Gratuito y open source</li>
              </ul>
              <a
                href="https://rufus.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar Rufus
              </a>
            </div>

            {/* BalenaEtcher */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">BalenaEtcher</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Herramienta multiplataforma para flashear imágenes en USBs y tarjetas SD.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Windows, macOS, Linux</li>
                <li>✅ Interfaz muy intuitiva</li>
                <li>✅ Validación automática</li>
                <li>✅ Open source</li>
              </ul>
              <a
                href="https://www.balena.io/etcher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar BalenaEtcher
              </a>
            </div>

            {/* GParted */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">GParted</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Editor de particiones gratuito para Linux. Permite redimensionar, mover y gestionar particiones.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Gestión completa de particiones</li>
                <li>✅ Soporta múltiples filesystems</li>
                <li>✅ Live CD/USB disponible</li>
                <li>✅ 100% open source</li>
              </ul>
              <a
                href="https://gparted.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar GParted
              </a>
            </div>

            {/* Clonezilla */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">Clonezilla</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Solución de clonación y backup de particiones. Ideal para despliegues masivos.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Clonado de sistemas completos</li>
                <li>✅ Backup y restauración</li>
                <li>✅ Soporte multicasting</li>
                <li>✅ Software libre</li>
              </ul>
              <a
                href="https://clonezilla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar Clonezilla
              </a>
            </div>

            {/* Universal USB Installer */}
            <div className="glass-dark rounded-xl p-6 hover:neon-glow transition-all duration-300">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-white">Universal USB Installer</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Crea USBs booteables para distribuciones Linux desde Windows de forma sencilla.
              </p>
              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                <li>✅ Soporta 200+ distros</li>
                <li>✅ Persistencia configurable</li>
                <li>✅ Actualizaciones automáticas</li>
                <li>✅ Gratuito</li>
              </ul>
              <a
                href="https://www.pendrivelinux.com/universal-usb-installer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric-blue hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Descargar UUI
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para practicar la instalación?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Pon a prueba tus conocimientos con nuestro quiz interactivo sobre instalación de sistemas operativos
            </p>
            <a
              href="/som-quiz"
              className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <Terminal className="mr-2 h-5 w-5" />
              Probar Quiz de Instalación
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
