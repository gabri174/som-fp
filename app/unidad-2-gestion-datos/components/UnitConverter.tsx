'use client'

import { useState } from 'react'

export default function UnitConverter() {
  const [inputValue, setInputValue] = useState('')
  const [inputUnit, setInputUnit] = useState('bytes')
  const [outputUnit, setOutputUnit] = useState('KB')

  const units = {
    'bytes': { name: 'Bytes', multiplier: 1 },
    'KB': { name: 'Kilobytes (KB)', multiplier: 1000 },
    'KiB': { name: 'Kibibytes (KiB)', multiplier: 1024 },
    'MB': { name: 'Megabytes (MB)', multiplier: 1000000 },
    'MiB': { name: 'Mebibytes (MiB)', multiplier: 1048576 },
    'GB': { name: 'Gigabytes (GB)', multiplier: 1000000000 },
    'GiB': { name: 'Gibibytes (GiB)', multiplier: 1073741824 },
  }

  const convert = (value: string, from: string, to: string): string => {
    const num = parseFloat(value)
    if (isNaN(num) || num < 0) return 'Entrada inválida'
    
    const bytes = num * units[from as keyof typeof units].multiplier
    const result = bytes / units[to as keyof typeof units].multiplier
    
    return result.toLocaleString('es-ES', { 
      maximumFractionDigits: 6,
      useGrouping: true 
    })
  }

  const result = convert(inputValue, inputUnit, outputUnit)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Valor
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ej: 1024"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Unidad de entrada
          </label>
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          >
            {Object.entries(units).map(([key, unit]) => (
              <option key={key} value={key}>{unit.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Convertir a
        </label>
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
        >
          {Object.entries(units).map(([key, unit]) => (
            <option key={key} value={key}>{unit.name}</option>
          ))}
        </select>
      </div>

      <div className="glass-dark rounded-lg p-6">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">Resultado:</p>
          <p className="text-2xl font-bold text-electric-blue">
            {inputValue} {units[inputUnit as keyof typeof units].name}
          </p>
          <div className="my-4">
            <div className="w-full h-px bg-gray-700"></div>
          </div>
          <p className="text-2xl font-bold text-neon-green">
            {result} {units[outputUnit as keyof typeof units].name}
          </p>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-2">Conversiones rápidas:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button
              onClick={() => {
                setInputValue('1024')
                setInputUnit('bytes')
                setOutputUnit('KiB')
              }}
              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
            >
              1024 bytes → KiB
            </button>
            <button
              onClick={() => {
                setInputValue('1')
                setInputUnit('GB')
                setOutputUnit('GiB')
              }}
              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
            >
              1 GB → GiB
            </button>
            <button
              onClick={() => {
                setInputValue('8')
                setInputUnit('GB')
                setOutputUnit('bytes')
              }}
              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
            >
              8 GB → bytes
            </button>
            <button
              onClick={() => {
                setInputValue('1')
                setInputUnit('MiB')
                setOutputUnit('MB')
              }}
              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
            >
              1 MiB → MB
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
