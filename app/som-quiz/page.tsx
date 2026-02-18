import { Metadata } from 'next'
import { Brain, Trophy, Target, Zap, CheckCircle, XCircle, RefreshCw, Clock } from 'lucide-react'
import QuizComponent from './components/QuizComponent'

export const metadata: Metadata = {
  title: 'SOM-Quiz: Test Interactivo IA - SOM FP',
  description: 'Pon a prueba tus conocimientos de Sistemas Operativos y Mantenimiento con nuestro quiz interactivo con feedback inteligente.',
  keywords: 'quiz, test, IA, SOM, SMR, examen, práctica',
}

export default function QuizPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-electric-blue to-purple-500 rounded-full p-4">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SOM-Quiz <span className="text-electric-blue">IA Powered</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pon a prueba tus conocimientos con nuestro sistema inteligente de aprendizaje. 
            Recibe feedback personalizado y mejora tus habilidades en SOM.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-dark rounded-lg p-6">
              <Target className="h-8 w-8 text-electric-blue mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">25 Preguntas</h3>
              <p className="text-gray-400 text-sm">Cubre todo el temario de SOM</p>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Feedback IA</h3>
              <p className="text-gray-400 text-sm">Explicaciones inteligentes</p>
            </div>
            <div className="glass-dark rounded-lg p-6">
              <Trophy className="h-8 w-8 text-neon-green mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Certificado</h3>
              <p className="text-gray-400 text-sm">Obtén tu resultado final</p>
            </div>
          </div>
        </div>

        {/* Quiz Component */}
        <QuizComponent />

        {/* Tips Section */}
        <section className="mt-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="h-6 w-6 text-electric-blue mr-3" />
              Consejos para el Quiz
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Lee cada pregunta cuidadosamente</h4>
                    <p className="text-gray-400 text-sm">La IA detectará si necesitas ayuda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Aprende de tus errores</h4>
                    <p className="text-gray-400 text-sm">El feedback te ayudará a mejorar</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">No hay límite de tiempo</h4>
                    <p className="text-gray-400 text-sm">Tómate el tiempo que necesites</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Puedes repetir el quiz</h4>
                    <p className="text-gray-400 text-sm">Practica cuantas veces quieras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
