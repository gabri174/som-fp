'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Brain, Trophy, Clock, Target, Zap, RefreshCw } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: 'fácil' | 'medio' | 'difícil'
}

interface UserAnswer {
  questionId: number
  selectedOption: number
  isCorrect: boolean
  timeSpent: number
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "¿Qué es un driver en un sistema informático?",
    options: [
      "Un programa que gestiona la memoria RAM",
      "Un traductor entre el sistema operativo y el hardware",
      "Un antivirus para proteger el sistema",
      "Un editor de texto para programar"
    ],
    correctAnswer: 1,
    explanation: "¡Casi! Recuerda que el driver es el traductor entre el SO y el dispositivo físico. Permite que el sistema operativo pueda comunicarse con componentes específicos como tarjetas gráficas, impresoras, etc.",
    category: "Hardware y Software",
    difficulty: "fácil"
  },
  {
    id: 2,
    question: "¿Cuál es el orden correcto del ciclo de procesamiento de la CPU?",
    options: [
      "Execute-Fetch-Decode",
      "Fetch-Decode-Execute",
      "Decode-Fetch-Execute",
      "Fetch-Execute-Decode"
    ],
    correctAnswer: 1,
    explanation: "¡Correcto! El ciclo CPU sigue siempre: 1) Fetch: busca la instrucción, 2) Decode: la interpreta, 3) Execute: la ejecuta. Este ciclo se repite millones de veces por segundo.",
    category: "Hardware y Software",
    difficulty: "medio"
  },
  {
    id: 3,
    question: "¿Qué diferencia principal hay entre BIOS y UEFI?",
    options: [
      "UEFI es más moderno y seguro que BIOS",
      "BIOS soporta discos más grandes que UEFI",
      "UEFI solo funciona con Linux",
      "No hay diferencia, son lo mismo"
    ],
    correctAnswer: 0,
    explanation: "¡Exacto! UEFI es la evolución moderna de BIOS: interfaz gráfica mejor, soporte para discos >2TB, arranque seguro (Secure Boot) y mayor velocidad de arranque.",
    category: "Hardware y Software",
    difficulty: "medio"
  },
  {
    id: 4,
    question: "Convierte el número binario 1010 a decimal",
    options: [
      "8",
      "10",
      "12",
      "14"
    ],
    correctAnswer: 1,
    explanation: "¡Casi! Para convertir binario a decimal: 1010₂ = (1×2³) + (0×2²) + (1×2¹) + (0×2⁰) = 8 + 0 + 2 + 0 = 10₁₀. Recuerda: de derecha a izquierda son potencias de 2: 2⁰, 2¹, 2², 2³...",
    category: "Gestión de Datos",
    difficulty: "fácil"
  },
  {
    id: 5,
    question: "¿Cuántos bytes hay en un Kibibyte (KiB)?",
    options: [
      "1000 bytes",
      "1024 bytes",
      "1048 bytes",
      "1000 bytes"
    ],
    correctAnswer: 1,
    explanation: "¡Correcto! 1 KiB = 1024 bytes (2¹⁰). La diferencia clave: KB (Kilobyte) = 1000 bytes (decimal), KiB (Kibibyte) = 1024 bytes (binario). Los fabricantes de almacenamiento usan KB, los sistemas operativos usan KiB.",
    category: "Gestión de Datos",
    difficulty: "medio"
  },
  {
    id: 6,
    question: "¿Qué sistema de archivos usa Windows por defecto?",
    options: [
      "EXT4",
      "FAT32",
      "NTFS",
      "HFS+"
    ],
    correctAnswer: 2,
    explanation: "¡Perfecto! NTFS (New Technology File System) es el sistema de archivos nativo de Windows. Ofrece características avanzadas como compresión, permisos detallados y journaling para recuperación de datos.",
    category: "Instalación de SO",
    difficulty: "fácil"
  },
  {
    id: 7,
    question: "¿Qué tipo de software es Linux?",
    options: [
      "Software propietario con pago",
      "Shareware de prueba limitada",
      "Open Source bajo licencia GPL",
      "Freeware básico"
    ],
    correctAnswer: 2,
    explanation: "¡Excelente! Linux es Open Source bajo licencia GPL (General Public License). Esto significa: código fuente accesible, gratis para usar/modificar/distribuir, y libertad para estudiarlo y mejorarlo.",
    category: "Instalación de SO",
    difficulty: "medio"
  },
  {
    id: 8,
    question: "¿Cuál es el propósito principal del POST durante el arranque?",
    options: [
      "Cargar el sistema operativo",
      "Verificar que el hardware funciona correctamente",
      "Instalar drivers automáticamente",
      "Configurar la red"
    ],
    correctAnswer: 1,
    explanation: "¡Correcto! POST (Power-On Self-Test) es el primer diagnóstico que realiza la BIOS/UEFI al encenderse. Verifica componentes críticos: CPU, RAM, tarjetas, etc. Si hay error, emite pitidos o mensajes específicos.",
    category: "Hardware y Software",
    difficulty: "medio"
  },
  {
    id: 9,
    question: "Convierte 15 decimal a hexadecimal",
    options: [
      "A",
      "B",
      "C",
      "F"
    ],
    correctAnswer: 3,
    explanation: "¡Casi! 15₁₀ = F₁₆. En hexadecimal: 0-9 son iguales, 10=A, 11=B, 12=C, 13=D, 14=E, 15=F. Es muy usado en programación y direcciones de memoria.",
    category: "Gestión de Datos",
    difficulty: "medio"
  },
  {
    id: 10,
    question: "¿Qué requiere Secure Boot en UEFI?",
    options: [
      "Que todos los drivers estén firmados digitalmente",
      "Que el disco duro sea SSD",
      "Que haya más de 4GB de RAM",
      "Que Windows esté actualizado"
    ],
    correctAnswer: 0,
    explanation: "¡Exacto! Secure Boot requiere que el bootloader y drivers estén firmados digitalmente. Esto previene malware en el arranque. Puede causar problemas con Linux (requiere firmar o desactivar Secure Boot).",
    category: "Hardware y Software",
    difficulty: "difícil"
  }
]

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now())

  const currentQuestionData = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return
    setSelectedAnswer(optionIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const timeSpent = Date.now() - questionStartTime
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer

    const userAnswer: UserAnswer = {
      questionId: currentQuestionData.id,
      selectedOption: selectedAnswer,
      isCorrect,
      timeSpent
    }

    setUserAnswers([...userAnswers, userAnswer])
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setQuestionStartTime(Date.now())
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setUserAnswers([])
    setQuizCompleted(false)
    setStartTime(Date.now())
    setQuestionStartTime(Date.now())
  }

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length
    return {
      correct: correctAnswers,
      total: quizQuestions.length,
      percentage: Math.round((correctAnswers / quizQuestions.length) * 100)
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-neon-green'
    if (percentage >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return '¡Excelente! Eres un experto en SOM'
    if (percentage >= 70) return '¡Muy bien! Tienes sólidos conocimientos'
    if (percentage >= 50) return '¡Bien! Sigue estudiando para mejorar'
    return '¡Sigue practicando! Repasa los conceptos básicos'
  }

  const totalTime = Math.round((Date.now() - startTime) / 1000)

  if (quizCompleted) {
    const score = calculateScore()
    
    return (
      <div className="glass rounded-2xl p-8">
        <div className="text-center mb-8">
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Quiz Completado</h2>
          <div className={`text-5xl font-bold mb-2 ${getScoreColor(score.percentage)}`}>
            {score.percentage}%
          </div>
          <p className="text-xl text-gray-300 mb-6">
            {score.correct} de {score.total} respuestas correctas
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Tiempo total: {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
          </p>
          <p className="text-lg text-white mb-8">
            {getScoreMessage(score.percentage)}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Resumen de respuestas:</h3>
          {userAnswers.map((answer, index) => {
            const question = quizQuestions.find(q => q.id === answer.questionId)
            return (
              <div key={answer.questionId} className="glass-dark rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">
                      {index + 1}. {question?.question}
                    </p>
                    <p className="text-sm text-gray-400">
                      Tu respuesta: {question?.options[answer.selectedOption]}
                    </p>
                    {!answer.isCorrect && (
                      <p className="text-sm text-neon-green">
                        Correcta: {question?.options[question?.correctAnswer]}
                      </p>
                    )}
                  </div>
                  <div className="ml-4">
                    {answer.isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-neon-green" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-400" />
                    )}
                  </div>
                </div>
                {!answer.isCorrect && (
                  <div className="mt-3 p-3 bg-gray-800 rounded border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-300">
                      <Brain className="inline h-4 w-4 text-yellow-400 mr-2" />
                      {question?.explanation}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleRestartQuiz}
            className="inline-flex items-center px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Repetir Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="glass rounded-2xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">
            Pregunta {currentQuestion + 1} de {quizQuestions.length}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(progress)}% completado
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-electric-blue to-neon-green h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-electric-blue bg-opacity-20 text-electric-blue rounded-full text-sm">
              {currentQuestionData.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              currentQuestionData.difficulty === 'fácil' ? 'bg-neon-green bg-opacity-20 text-neon-green' :
              currentQuestionData.difficulty === 'medio' ? 'bg-yellow-400 bg-opacity-20 text-yellow-400' :
              'bg-red-400 bg-opacity-20 text-red-400'
            }`}>
              {currentQuestionData.difficulty}
            </span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {Math.floor((Date.now() - startTime) / 1000)}s
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6">
          {currentQuestionData.question}
        </h3>
      </div>

      {/* Answer Options */}
      <div className="space-y-4 mb-8">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              showResult
                ? index === currentQuestionData.correctAnswer
                  ? 'border-neon-green bg-green-900 bg-opacity-20'
                  : selectedAnswer === index
                  ? 'border-red-400 bg-red-900 bg-opacity-20'
                  : 'border-gray-600 bg-gray-800'
                : selectedAnswer === index
                ? 'border-electric-blue bg-blue-900 bg-opacity-20'
                : 'border-gray-600 bg-gray-800 hover:border-electric-blue hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-white">{option}</span>
              {showResult && (
                <div>
                  {index === currentQuestionData.correctAnswer ? (
                    <CheckCircle className="h-6 w-6 text-neon-green" />
                  ) : selectedAnswer === index ? (
                    <XCircle className="h-6 w-6 text-red-400" />
                  ) : null}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showResult && (
        <div className="mb-8 p-4 rounded-lg border-l-4 bg-gray-800 ${
          selectedAnswer === currentQuestionData.correctAnswer
            ? 'border-neon-green'
            : 'border-yellow-400'
        }`}>
          <div className="flex items-start">
            <Brain className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className={`font-semibold mb-2 ${
                selectedAnswer === currentQuestionData.correctAnswer
                  ? 'text-neon-green'
                  : 'text-yellow-400'
              }`}>
                {selectedAnswer === currentQuestionData.correctAnswer ? '¡Correcto!' : '¡Casi!'}
              </p>
              <p className="text-gray-300 text-sm">
                {currentQuestionData.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between">
        <div className="text-gray-400">
          <Target className="inline h-4 w-4 mr-2" />
          <span className="text-sm">
            Tiempo en esta pregunta: {Math.round((Date.now() - questionStartTime) / 1000)}s
          </span>
        </div>
        
        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedAnswer !== null
                ? 'bg-electric-blue text-white hover:bg-blue-600 transform hover:scale-105'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Comprobar respuesta
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-8 py-3 bg-electric-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
          </button>
        )}
      </div>
    </div>
  )
}
