
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, ChevronDown, Bot, User, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
  isQuestion?: boolean;
}

interface BusinessEvaluation {
  businessType: string;
  location: string;
  employees: string;
  digitalLevel: string;
  supplierDependency: string;
  cashFlow: string;
  previousEmergencies: string;
  contingencyPlan: string;
}

const EvaluationChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [evaluation, setEvaluation] = useState<BusinessEvaluation>({
    businessType: '',
    location: '',
    employees: '',
    digitalLevel: '',
    supplierDependency: '',
    cashFlow: '',
    previousEmergencies: '',
    contingencyPlan: ''
  });
  const [isEvaluationComplete, setIsEvaluationComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Questions sequence for business evaluation
  const evaluationQuestions = [
    {
      question: '¡Hola! Soy el Cuy BCP, tu asistente digital para evaluar la resiliencia de tu negocio. Para empezar, ¿cuál es el tipo de tu negocio?',
      field: 'businessType',
      options: ['Tienda minorista', 'Restaurante/Comida', 'Servicios profesionales', 'Manufactura/Producción', 'Tecnología/Digital', 'Otro']
    },
    {
      question: 'Gracias. ¿En qué región está ubicado tu negocio?',
      field: 'location',
      options: ['Lima', 'Arequipa', 'Trujillo', 'Cusco', 'Piura', 'Otra región']
    },
    {
      question: '¿Cuántos empleados tiene tu negocio?',
      field: 'employees',
      options: ['Solo yo (1)', '2-5 empleados', '6-20 empleados', '21-50 empleados', 'Más de 50 empleados']
    },
    {
      question: '¿Cuál es el nivel de digitalización de tu negocio?',
      field: 'digitalLevel',
      options: ['Bajo (Sin presencia digital o muy básica)', 'Medio (Redes sociales, correo electrónico para negocio)', 'Alto (Web, ventas online, operaciones digitalizadas)']
    },
    {
      question: '¿Qué nivel de dependencia tienes de tus proveedores?',
      field: 'supplierDependency',
      options: ['Baja (Múltiples proveedores alternativos)', 'Media (Algunos proveedores alternativos)', 'Alta (Pocos o un solo proveedor crítico)']
    },
    {
      question: '¿Cómo calificarías tu capacidad de flujo de caja actual?',
      field: 'cashFlow',
      options: ['Crítica (Sin reservas para emergencias)', 'Limitada (Hasta 1 mes de operaciones)', 'Adecuada (2-3 meses de operaciones)', 'Sólida (Más de 3 meses de operaciones)']
    },
    {
      question: '¿Tu negocio ha enfrentado alguna emergencia significativa anteriormente?',
      field: 'previousEmergencies',
      options: ['Sí', 'No']
    },
    {
      question: '¿Cuentas actualmente con algún plan de contingencia para tu negocio?',
      field: 'contingencyPlan',
      options: ['Ninguno', 'Básico (Algunas medidas sencillas)', 'Parcial (Plan para algunas áreas)', 'Completo (Plan integral documentado)']
    }
  ];
  
  useEffect(() => {
    // Inicia la conversación automáticamente después de un pequeño retraso
    setTimeout(() => {
      addBotMessage(evaluationQuestions[0].question, evaluationQuestions[0].options);
    }, 500);
  }, []);
  
  const addBotMessage = (content: string, options?: string[], delay = 1000) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        content,
        sender: 'bot',
        timestamp: new Date(),
        options,
        isQuestion: options ? true : false
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Procesar la respuesta del usuario
      handleUserResponse(newMessage);
    }
  };
  
  const handleOptionSelect = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: option,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Procesar la opción seleccionada
    handleUserResponse(option);
  };
  
  const handleUserResponse = (response: string) => {
    // Guardar la respuesta en el objeto de evaluación
    const currentQuestion = evaluationQuestions[currentStep];
    if (currentQuestion) {
      setEvaluation(prev => ({
        ...prev,
        [currentQuestion.field]: response
      }));
      
      // Avanzar al siguiente paso
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      
      // Si hay más preguntas, mostrar la siguiente
      if (nextStep < evaluationQuestions.length) {
        addBotMessage(evaluationQuestions[nextStep].question, evaluationQuestions[nextStep].options);
      } else {
        // Finalizar evaluación
        completeEvaluation();
      }
    }
  };
  
  const completeEvaluation = () => {
    // Mensaje de transición
    addBotMessage('Gracias por proporcionarme toda esa información. Estoy analizando tu negocio para generar un diagnóstico personalizado...');
    
    // Mensaje de análisis completo y resultados (después de un retraso para simular procesamiento)
    setTimeout(() => {
      setIsEvaluationComplete(true);
      
      // Generar análisis basado en las respuestas
      addBotMessage('¡He completado el análisis de tu negocio! Aquí está tu diagnóstico de resiliencia:', undefined, 2000);
      
      // Generar diagnóstico
      setTimeout(() => {
        generateDiagnosis();
      }, 3000);
    }, 3000);
  };
  
  const generateDiagnosis = () => {
    // Determinación del nivel de riesgo basado en las respuestas
    let riskScore = 0;
    
    // Evaluar tipo de negocio
    if (evaluation.businessType === 'Tecnología/Digital') {
      riskScore += 1; // Menor riesgo
    } else if (evaluation.businessType === 'Restaurante/Comida') {
      riskScore += 3; // Mayor riesgo
    } else {
      riskScore += 2; // Riesgo medio
    }
    
    // Evaluar digitalización
    if (evaluation.digitalLevel.startsWith('Bajo')) {
      riskScore += 3;
    } else if (evaluation.digitalLevel.startsWith('Medio')) {
      riskScore += 2;
    } else {
      riskScore += 1;
    }
    
    // Evaluar dependencia de proveedores
    if (evaluation.supplierDependency.startsWith('Alta')) {
      riskScore += 3;
    } else if (evaluation.supplierDependency.startsWith('Media')) {
      riskScore += 2;
    } else {
      riskScore += 1;
    }
    
    // Evaluar flujo de caja
    if (evaluation.cashFlow.startsWith('Crítica')) {
      riskScore += 4;
    } else if (evaluation.cashFlow.startsWith('Limitada')) {
      riskScore += 3;
    } else if (evaluation.cashFlow.startsWith('Adecuada')) {
      riskScore += 2;
    } else {
      riskScore += 1;
    }
    
    // Evaluar experiencia previa
    if (evaluation.previousEmergencies === 'No') {
      riskScore += 2;
    } else {
      riskScore += 1;
    }
    
    // Evaluar plan de contingencia
    if (evaluation.contingencyPlan === 'Ninguno') {
      riskScore += 4;
    } else if (evaluation.contingencyPlan === 'Básico (Algunas medidas sencillas)') {
      riskScore += 3;
    } else if (evaluation.contingencyPlan === 'Parcial (Plan para algunas áreas)') {
      riskScore += 2;
    } else {
      riskScore += 1;
    }
    
    // Calcular nivel de riesgo basado en puntuación total
    const totalPossiblePoints = 19; // Suma máxima posible
    const riskPercentage = (riskScore / totalPossiblePoints) * 100;
    
    let riskLevel = '';
    let riskColor = '';
    
    if (riskPercentage >= 75) {
      riskLevel = 'Alto';
      riskColor = 'bg-red-500';
    } else if (riskPercentage >= 50) {
      riskLevel = 'Medio';
      riskColor = 'bg-yellow-500';
    } else {
      riskLevel = 'Bajo';
      riskColor = 'bg-green-500';
    }
    
    // Añadir mensaje con tarjeta de resultados
    const diagnosisMessage: Message = {
      id: Date.now().toString(),
      content: `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div class="bg-bcp-blue p-4 text-white">
            <h4 class="font-semibold text-lg">Resultado de la evaluación</h4>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <span class="text-gray-700 font-medium">Nivel de riesgo:</span>
              <span class="${riskLevel === 'Alto' ? 'bg-red-100 text-red-800' : riskLevel === 'Medio' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'} font-medium px-3 py-1 rounded-full">${riskLevel}</span>
            </div>
            
            <div class="mb-6">
              <div class="h-4 w-full bg-gray-200 rounded-full">
                <div class="${riskColor} h-4 rounded-full" style="width: ${riskPercentage}%"></div>
              </div>
            </div>
            
            <div class="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
              <p class="font-medium mb-2">Recomendaciones principales:</p>
              <ul class="list-disc pl-5 space-y-1">
                ${evaluation.contingencyPlan === 'Ninguno' ? '<li>Desarrollar un plan de contingencia básico es fundamental para tu negocio</li>' : ''}
                ${evaluation.cashFlow.startsWith('Crítica') ? '<li>Considera estrategias para mejorar tu flujo de caja y crear un fondo de emergencias</li>' : ''}
                ${evaluation.supplierDependency.startsWith('Alta') ? '<li>Diversificar tus proveedores reduciría significativamente tu nivel de riesgo</li>' : ''}
                ${evaluation.digitalLevel.startsWith('Bajo') ? '<li>Incrementar tu presencia digital podría mejorar tu resiliencia ante crisis</li>' : ''}
              </ul>
            </div>
          </div>
        </div>
      `,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, diagnosisMessage]);
    
    // Mensaje final con cursos recomendados
    setTimeout(() => {
      addBotMessage(`Basado en tu perfil como ${evaluation.businessType.toLowerCase()} en ${evaluation.location}, te he preparado un plan de aprendizaje personalizado con módulos y cursos específicos. ¿Te gustaría verlo ahora?`, ['Ver mi plan personalizado', 'Guardar para después']);
    }, 3000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg mb-10">
      <CardHeader className="bg-bcp-blue text-white p-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border-2 border-white">
            <AvatarImage src="/assets/cuy-bcp.png" alt="Cuy BCP" />
            <AvatarFallback className="bg-bcp-orange">
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Cuy BCP</CardTitle>
            <CardDescription className="text-blue-100">Tu asistente de evaluación empresarial</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Mensajes */}
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                "flex max-w-[85%]",
                message.sender === 'user' ? "ml-auto" : "mr-auto"
              )}
            >
              {message.sender === 'bot' && (
                <Avatar className="h-8 w-8 mr-2 flex-shrink-0 mt-1">
                  <AvatarFallback className="bg-bcp-orange text-white">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "rounded-lg p-3",
                  message.sender === 'user' 
                    ? "bg-blue-500 text-white rounded-tr-none" 
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                )}
              >
                {message.content.includes('<div') ? (
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
                {message.options && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                          message.sender === 'bot'
                            ? "bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                <span className="text-xs opacity-70 block text-right mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8 ml-2 flex-shrink-0 mt-1">
                  <AvatarFallback className="bg-gray-300">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {/* Indicador de escritura */}
          {isTyping && (
            <div className="flex max-w-[85%] mr-auto">
              <Avatar className="h-8 w-8 mr-2 flex-shrink-0 mt-1">
                <AvatarFallback className="bg-bcp-orange text-white">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="border-t p-3">
        <div className="flex w-full items-center">
          <Input
            placeholder="Escribe tu mensaje aquí..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow mr-2"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isTyping}
            className="bg-bcp-blue"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {isEvaluationComplete && (
          <div className="w-full mt-3">
            <Button 
              className="w-full bg-bcp-orange hover:bg-bcp-orange/90 flex items-center justify-center gap-2"
              variant="default"
              onClick={() => window.location.href = '/plan'}
            >
              <FileText className="h-4 w-4" />
              Ver mi plan de continuidad completo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default EvaluationChatbot;
