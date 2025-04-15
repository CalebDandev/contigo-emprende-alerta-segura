
import React, { useState } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizSectionProps {
  onQuizComplete: (score: number, totalPoints: number) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const questions: QuizQuestion[] = [
    {
      question: '¿Qué es un proceso en un negocio?',
      options: [
        'Una tarea que hago de vez en cuando',
        'Un conjunto de actividades que ayudan a lograr un objetivo',
        'Un producto que vendo',
        'Una idea creativa'
      ],
      correctAnswer: 1
    },
    {
      question: '¿Cuál de estas opciones podría ser un proceso clave en cualquier negocio?',
      options: [
        'Organizar los archivos del celular',
        'Preparar y entregar el producto o servicio',
        'Cambiar el diseño del logo',
        'Elegir la música del local'
      ],
      correctAnswer: 1
    },
    {
      question: '¿Por qué es importante conocer tus procesos clave?',
      options: [
        'Para tener más likes en redes',
        'Para mejorar tu logo',
        'Para saber qué actividades son esenciales y no deben fallar',
        'Para cerrar el negocio'
      ],
      correctAnswer: 2
    },
    {
      question: '¿Cuál de estas frases describe mejor un proceso clave?',
      options: [
        'Algo que haría solo si tengo tiempo',
        'Algo que si se detiene, mi negocio se paraliza',
        'Algo que se hace una vez al año',
        'Algo que hace solo el contador'
      ],
      correctAnswer: 1
    },
    {
      question: '¿Qué debo hacer primero para identificar mis procesos clave?',
      options: [
        'Copiar lo que hace otro negocio',
        'Pensar qué tareas hago todos los días y son indispensables',
        'Revisar mi cuenta de Instagram',
        'Comprar más productos'
      ],
      correctAnswer: 1
    }
  ];
  
  const handleOptionSelect = (optionIndex: number) => {
    if (!showAnswer) {
      setSelectedOption(optionIndex);
    }
  };
  
  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setShowAnswer(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      
      // Awards points based on score
      const totalPoints = 50;
      if (score + 1 === questions.length) {
        toast({
          title: "¡Felicidades!",
          description: `Has ganado ${totalPoints} puntos de resiliencia`,
          variant: "success",
        });
      } else {
        toast({
          title: "¡Buen intento!",
          description: `Has ganado ${Math.floor(totalPoints * ((score + 1) / questions.length))} puntos de resiliencia`,
          variant: "default",
        });
      }
      
      onQuizComplete(score + 1, questions.length);
    }
  };
  
  if (quizCompleted) {
    return (
      <div className="text-center py-8">
        <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <Award className="h-10 w-10 text-bcp-orange" />
        </div>
        <h2 className="text-2xl font-bold mb-2">¡Quiz completado!</h2>
        <p className="text-xl mb-4">
          {score === questions.length ? (
            <span className="text-green-600 font-semibold">5/5 ¡Perfecto!</span>
          ) : (
            <span>{score}/{questions.length} Respuestas correctas</span>
          )}
        </p>
        <p className="text-gray-600 mb-6">
          {score === questions.length 
            ? "¡Felicidades! Has ganado 50 puntos de resiliencia."
            : `Has ganado ${Math.floor(50 * (score / questions.length))} puntos de resiliencia.`}
        </p>
        <Button onClick={() => onQuizComplete(score, questions.length)}>
          Continuar a la misión
        </Button>
      </div>
    );
  }
  
  const currentQ = questions[currentQuestion];
  
  return (
    <div>
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="h-8 w-8 rounded-full bg-bcp-blue text-white flex items-center justify-center mr-3">
            {currentQuestion + 1}
          </span>
          {currentQ.question}
        </h3>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border cursor-pointer flex items-center 
                ${selectedOption === index 
                  ? showAnswer 
                    ? index === currentQ.correctAnswer 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-red-50 border-red-300' 
                    : 'bg-blue-50 border-blue-300'
                  : 'bg-white border-gray-200 hover:border-gray-300'}`}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="mr-3">
                <div 
                  className={`h-6 w-6 rounded-full border flex items-center justify-center
                    ${selectedOption === index 
                      ? showAnswer 
                        ? index === currentQ.correctAnswer 
                          ? 'border-green-500 bg-green-500' 
                          : 'border-red-500 bg-red-500' 
                        : 'border-blue-500 bg-blue-500' 
                      : 'border-gray-300'}`}
                >
                  {showAnswer && selectedOption === index && (
                    index === currentQ.correctAnswer 
                      ? <CheckCircle className="h-4 w-4 text-white" />
                      : <XCircle className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>
              <span>{option}</span>
              
              {showAnswer && index === currentQ.correctAnswer && index !== selectedOption && (
                <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
        </div>
        
        {!showAnswer ? (
          <Button 
            onClick={handleCheckAnswer} 
            disabled={selectedOption === null}
          >
            Verificar respuesta
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
