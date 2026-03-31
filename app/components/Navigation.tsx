'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Cpu, BookOpen, Download, Brain, Wrench } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Inicio', icon: Cpu },
    { href: '/unidad-1-introduccion-sistemas', label: 'Unidad 1', icon: BookOpen },
    { href: '/unidad-2-gestion-datos', label: 'Unidad 2', icon: BookOpen },
    { href: '/unidad-3-instalacion-so', label: 'Unidad 3', icon: BookOpen },
    { href: '/montaje-mantenimiento-equipos', label: 'Montaje', icon: Wrench },
    { href: '/recursos', label: 'Recursos', icon: Download },
    { href: '/som-quiz', label: 'SOM-Quiz', icon: Brain },
  ]

  return (
    <nav className="glass-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="SOM FP" className="h-8 w-8 rounded" />
              <span className="font-bold text-xl text-white">SOM FP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-electric-blue hover:bg-opacity-20 transition-all duration-200"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-electric-blue hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric-blue"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-electric-blue hover:bg-opacity-20 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
