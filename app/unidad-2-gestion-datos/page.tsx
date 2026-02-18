import { Metadata } from 'next'
import { Binary, Calculator, HardDrive, Cpu, ArrowRight, Zap, Database } from 'lucide-react'
import BinaryConverter from './components/BinaryConverter'
import UnitConverter from './components/UnitConverter'

export const metadata: Metadata = {
  title: 'Unidad 2: Gestión de Datos - SOM FP',
  description: 'Aprende sistemas de numeración binario y hexadecimal, unidades de medida KB vs KiB, y representación de la información.',
  keywords: 'binario, hexadecimal, unidades de medida, KB, KiB, conversión, SOM, SMR',
}

export default function Unidad2Page() {
  const numberSystems = [
    {
      title: 'Sistema Binario',
      base: 'Base 2',
      digits: '0, 1',
      description: 'Usado internamente por los ordenadores',
      examples: ['1010 = 10', '1111 = 15', '10000 = 16'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sistema Decimal',
      base: 'Base 10',
      digits: '0-9',
      description: 'Sistema que usamos daily',
      examples: ['10 = 10', '15 = 15', '16 = 16'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sistema Hexadecimal',
      base: 'Base 16',
      digits: '0-9, A-F',
      description: 'Común en programación y direcciones de memoria',
      examples: ['A = 10', 'F = 15', '10 = 16'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const storageUnits = [
    { unit: 'Byte (B)', bytes: 1, description: '8 bits, carácter básico' },
    { unit: 'Kilobyte (KB)', bytes: 1000, description: 'Decimal: 1,000 bytes' },
    { unit: 'Kibibyte (KiB)', bytes: 1024, description: 'Binario: 1,024 bytes' },
    { unit: 'Megabyte (MB)', bytes: 1000000, description: 'Decimal: 1,000,000 bytes' },
    { unit: 'Mebibyte (MiB)', bytes: 1048576, description: 'Binario: 1,048,576 bytes' },
    { unit: 'Gigabyte (GB)', bytes: 1000000000, description: 'Decimal: 1,000,000,000 bytes' },
    { unit: 'Gibibyte (GiB)', bytes: 1073741824, description: 'Binario: 1,073,741,824 bytes' },
  ]

  const conversionTable = [
    { decimal: '0', binary: '0000', hexadecimal: '0' },
    { decimal: '1', binary: '0001', hexadecimal: '1' },
    { decimal: '2', binary: '0010', hexadecimal: '2' },
    { decimal: '3', binary: '0011', hexadecimal: '3' },
    { decimal: '4', binary: '0100', hexadecimal: '4' },
    { decimal: '5', binary: '0101', hexadecimal: '5' },
    { decimal: '6', binary: '0110', hexadecimal: '6' },
    { decimal: '7', binary: '0111', hexadecimal: '7' },
    { decimal: '8', binary: '1000', hexadecimal: '8' },
    { decimal: '9', binary: '1001', hexadecimal: '9' },
    { decimal: '10', binary: '1010', hexadecimal: 'A' },
    { decimal: '11', binary: '1011', hexadecimal: 'B' },
    { decimal: '12', binary: '1100', hexadecimal: 'C' },
    { decimal: '13', binary: '1101', hexadecimal: 'D' },
    { decimal: '14', binary: '1110', hexadecimal: 'E' },
    { decimal: '15', binary: '1111', hexadecimal: 'F' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unidad 2: Gestión de Datos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Domina los sistemas de numeración y las unidades de medida esenciales para entender cómo los ordenadores procesan y almacenan información.
          </p>
        </div>

        {/* Number Systems Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Sistemas de Numeración
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {numberSystems.map((system, index) => (
              <div key={index} className="glass-dark rounded-xl p-8 hover:neon-glow transition-all duration-300">
                <div className={`bg-gradient-to-br ${system.color} rounded-lg p-4 mb-6`}>
                  <h3 className="text-xl font-bold text-white">{system.title}</h3>
                  <p className="text-white text-opacity-90">{system.base}</p>
                </div>
                <p className="text-gray-400 mb-4">{system.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Dígitos: {system.digits}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-electric-blue">Ejemplos:</p>
                  {system.examples.map((example, i) => (
                    <p key={i} className="text-gray-300 font-mono">{example}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion Table */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Calculator className="mr-3 h-8 w-8 text-electric-blue" />
              Tabla de Conversión Rápida
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-blue-400 font-semibold">Decimal</th>
                    <th className="py-4 px-6 text-green-400 font-semibold">Binario (4 bits)</th>
                    <th className="py-4 px-6 text-purple-400 font-semibold">Hexadecimal</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionTable.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 hover:bg-opacity-50 transition-colors">
                      <td className="py-3 px-6 text-gray-300 font-mono">{row.decimal}</td>
                      <td className="py-3 px-6 text-gray-300 font-mono">{row.binary}</td>
                      <td className="py-3 px-6 text-gray-300 font-mono">{row.hexadecimal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Converters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Herramientas Interactivas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Binary className="mr-3 h-6 w-6 text-green-400" />
                Conversor Binario ↔ Decimal
              </h3>
              <BinaryConverter />
            </div>
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="mr-3 h-6 w-6 text-purple-400" />
                Conversor de Unidades
              </h3>
              <UnitConverter />
            </div>
          </div>
        </section>

        {/* Storage Units Comparison */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <HardDrive className="mr-3 h-8 w-8 text-electric-blue" />
              Unidades de Almacenamiento: KB vs KiB
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Sistema Decimal (KB, MB, GB)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1 KB = 1,000 bytes</li>
                  <li>• 1 MB = 1,000,000 bytes</li>
                  <li>• 1 GB = 1,000,000,000 bytes</li>
                  <li>• Usado por fabricantes de almacenamiento</li>
                  <li>• Base matemática estándar</li>
                </ul>
              </div>
              <div className="glass-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Sistema Binario (KiB, MiB, GiB)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1 KiB = 1,024 bytes (2¹⁰)</li>
                  <li>• 1 MiB = 1,048,576 bytes (2²⁰)</li>
                  <li>• 1 GiB = 1,073,741,824 bytes (2³⁰)</li>
                  <li>• Usado por sistemas operativos</li>
                  <li>• Base en potencias de 2</li>
                </ul>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-electric-blue font-semibold">Unidad</th>
                    <th className="py-4 px-6 text-gray-400 font-semibold">Bytes Exactos</th>
                    <th className="py-4 px-6 text-gray-400 font-semibold">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {storageUnits.map((unit, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 hover:bg-opacity-50 transition-colors">
                      <td className="py-3 px-6 text-white font-semibold">{unit.unit}</td>
                      <td className="py-3 px-6 text-gray-300 font-mono">{unit.bytes.toLocaleString()}</td>
                      <td className="py-3 px-6 text-gray-400">{unit.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="mr-3 h-6 w-6 text-blue-400" />
                Ejemplo: Memoria RAM
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>Un módulo de <span className="text-electric-blue font-semibold">8 GB</span> realmente contiene:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Decimal: 8,000,000,000 bytes (lo que dice el fabricante)</li>
                  <li>• Binario: 7,450,580,596 bytes (lo que ve Windows)</li>
                  <li>• Diferencia: ~549 MB (6.8% menos)</li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">
                  Por eso tu 8 GB de RAM aparece como 7.45 GB en el sistema
                </p>
              </div>
            </div>
            
            <div className="glass-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="mr-3 h-6 w-6 text-yellow-400" />
                Conversión Rápida
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="font-semibold text-electric-blue">Reglas prácticas:</p>
                <ul className="space-y-2">
                  <li>• Binario → Decimal: Suma de potencias de 2</li>
                  <li>• Decimal → Binario: Divisiones sucesivas por 2</li>
                  <li>• Binario → Hex: Agrupa de 4 en 4 bits</li>
                  <li>• Hex → Binario: Cada dígito = 4 bits</li>
                </ul>
                <div className="bg-gray-800 rounded p-4 mt-4">
                  <p className="font-mono text-sm">
                    1010 1100₂ = AC₁₆ = 172₁₀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para practicar conversiones?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Pon a prueba tus conocimientos con nuestro quiz interactivo
            </p>
            <a
              href="/som-quiz"
              className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Probar Quiz de Conversión
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
