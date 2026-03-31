import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Analytics from './components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domina SOM: Tu guía definitiva para 1º de SMR',
  description: 'Aprende Sistemas Operativos y Mantenimiento de forma interactiva. Temario completo para 1º de SMR con quizzes, recursos y guías paso a paso.',
  keywords: 'SOM, SMR, FP, sistemas operativos, mantenimiento, informática, educación',
  authors: [{ name: 'SOM FP' }],
  verification: {
    google: 'S6xkJ0Rj1nAj584psh71pj5jcXEWlFoIXkdXQSTNsDE',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Domina SOM: Tu guía definitiva para 1º de SMR',
    description: 'Aprende Sistemas Operativos y Mantenimiento de forma interactiva',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'SOM FP - Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen gradient-bg">
          <Navigation />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
