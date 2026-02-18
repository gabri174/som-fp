'use client'

import { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'

export default function BinaryConverter() {
  const [decimalInput, setDecimalInput] = useState('')
  const [binaryInput, setBinaryInput] = useState('')
  const [conversionDirection, setConversionDirection] = useState<'decimal-to-binary' | 'binary-to-decimal'>('decimal-to-binary')

  const decimalToBinary = (decimal: string): string => {
    const num = parseInt(decimal, 10)
    if (isNaN(num)) return 'Entrada inválida'
    return num.toString(2)
  }

  const binaryToDecimal = (binary: string): string => {
    if (!/^[01]+$/.test(binary)) return 'Entrada inválida'
    const num = parseInt(binary, 2)
    if (isNaN(num)) return 'Entrada inválida'
    return num.toString(10)
  }

  const handleDecimalChange = (value: string) => {
    setDecimalInput(value)
    if (conversionDirection === 'decimal-to-binary') {
      setBinaryInput(decimalToBinary(value))
    }
  }

  const handleBinaryChange = (value: string) => {
    setBinaryInput(value)
    if (conversionDirection === 'binary-to-decimal') {
      setDecimalInput(binaryToDecimal(value))
    }
  }

  const toggleDirection = () => {
    const newDirection = conversionDirection === 'decimal-to-binary' ? 'binary-to-decimal' : 'decimal-to-binary'
    setConversionDirection(newDirection)
    
    // Swap the values
    if (newDirection === 'decimal-to-binary') {
      setBinaryInput(decimalToBinary(binaryInput))
    } else {
      setDecimalInput(binaryToDecimal(decimalInput))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <button
          onClick={toggleDirection}
          className="flex items-center space-x-2 px-4 py-2 bg-electric-blue bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
        >
          <ArrowUpDown className="h-5 w-5 text-electric-blue" />
          <span className="text-electric-blue text-sm">
            {conversionDirection === 'decimal-to-binary' ? 'Decimal → Binario' : 'Binario → Decimal'}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {conversionDirection === 'decimal-to-binary' ? 'Decimal' : 'Binario'}
          </label>
          <input
            type="text"
            value={conversionDirection === 'decimal-to-binary' ? decimalInput : binaryInput}
            onChange={(e) => conversionDirection === 'decimal-to-binary' ? handleDecimalChange(e.target.value) : handleBinaryChange(e.target.value)}
            placeholder={conversionDirection === 'decimal-to-binary' ? 'Ej: 10' : 'Ej: 1010'}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {conversionDirection === 'decimal-to-binary' ? 'Binario' : 'Decimal'}
          </label>
          <div className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
            {conversionDirection === 'decimal-to-binary' ? binaryInput : decimalInput || 'Resultado'}
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-2">Ejemplos rápidos:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['5', '10', '15', '16', '31', '64', '127', '255'].map((num) => (
              <button
                key={num}
                onClick={() => {
                  if (conversionDirection === 'decimal-to-binary') {
                    handleDecimalChange(num)
                  } else {
                    handleBinaryChange(parseInt(num, 10).toString(2))
                  }
                }}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
