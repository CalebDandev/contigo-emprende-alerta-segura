
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: number;
  content: string;
  sender: 'bot' | 'user';
  delay?: number;
}

interface KututuChatProps {
  onMissionComplete: () => void;
}

const KututuChat: React.FC<KututuChatProps> = ({ onMissionComplete }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Pre-defined conversation script
  const conversationScript = [
    {
      id: 1,
      content: "¡Hola! 👋 ¿Lista para tu primera misión? Hoy vamos a descomponer uno de los procesos más importantes de tu negocio paso a paso. ¿Te animas? 💪🍇",
      sender: 'bot',
      response: "¡Sí, claro!",
      delay: 500
    },
    {
      id: 2,
      content: "¡Buenísimo! 😊 Primero dime, ¿qué proceso quieres detallar? Puede ser por ejemplo: producción de vino, venta a clientes o envío de pedidos.",
      sender: 'bot',
      response: "Producción de vino artesanal",
      delay: 1000
    },
    {
      id: 3,
      content: "Excelente elección 🍷 Vamos a escribir juntos los pasos clave de ese proceso. Dime, ¿cuál es el primer paso que haces cuando comienzas a producir vino?",
      sender: 'bot',
      response: "Seleccionar las uvas",
      delay: 1000
    },
    {
      id: 4,
      content: "Perfecto. ¿Y qué haces justo después de eso?",
      sender: 'bot',
      response: "Lavo y desinfecto las uvas",
      delay: 800
    },
    {
      id: 5,
      content: "¡Muy bien! ¿Y el siguiente paso?",
      sender: 'bot',
      response: "Extraigo el jugo de las uvas con el prensado",
      delay: 800
    },
    {
      id: 6,
      content: "¡Ya estás armando tu proceso! 🍇 ¿Qué viene después?",
      sender: 'bot',
      response: "Fermentación del jugo con levadura",
      delay: 800
    },
    {
      id: 7,
      content: "¿Y luego?",
      sender: 'bot',
      response: "Reposo por varias semanas",
      delay: 600
    },
    {
      id: 8,
      content: "¡Esto se está viendo como una receta de éxito! 💫 ¿Qué haces cuando termina el reposo?",
      sender: 'bot',
      response: "Filtrado y embotellado",
      delay: 1000
    },
    {
      id: 9,
      content: "¿Y tienes un último paso?",
      sender: 'bot',
      response: "Etiquetado y almacenado",
      delay: 600
    },
    {
      id: 10,
      content: "🎉 ¡Misión cumplida! 🧩 ¡Gran trabajo! Has ganado +20 puntos por documentar un proceso clave de tu negocio 💪✨",
      sender: 'bot',
      response: "",
      delay: 1500
    }
  ];
  
  // Scroll to bottom of message container when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Add initial message when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([conversationScript[0]]);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    const userMessage = {
      id: Date.now(),
      content: inputMessage,
      sender: 'user' as 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Get the next bot message from script
    if (currentStep < conversationScript.length - 1) {
      const nextStep = currentStep + 1;
      
      setTimeout(() => {
        setMessages(prev => [...prev, conversationScript[nextStep]]);
        setCurrentStep(nextStep);
      }, conversationScript[nextStep].delay);
    } else {
      // Mission completed
      setMissionCompleted(true);
      toast({
        title: "¡Misión completada!",
        description: "Has ganado 20 puntos de resiliencia",
        variant: "success",
      });
    }
  };
  
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-bcp-blue p-4 text-white flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src="/assets/cuy-bcp.png" />
          <AvatarFallback className="bg-bcp-orange text-white">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Kututu</h3>
          <p className="text-xs text-blue-100">Asistente de Escudo BCP</p>
        </div>
        <Badge className="ml-auto bg-green-500">Misión 1: Paso a paso</Badge>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-bcp-orange text-white">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
            
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-bcp-blue text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: message.content.replace(/:\w+:/g, match => {
                // Simple emoji replacement for demonstration
                const emojiMap: {[key: string]: string} = {
                  ':raised_hand_with_fingers_splayed:': '👋',
                  ':muscle:': '💪',
                  ':grapes:': '🍇',
                  ':smile:': '😊',
                  ':wine_glass:': '🍷',
                  ':dizzy:': '💫',
                  ':tada:': '🎉',
                  ':jigsaw:': '🧩',
                  ':sparkles:': '✨'
                };
                return emojiMap[match] || match;
              })}} />
            </div>
            
            {message.sender === 'user' && (
              <Avatar className="h-8 w-8 ml-2">
                <AvatarFallback className="bg-gray-300">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t bg-white">
        {missionCompleted ? (
          <Button className="w-full" onClick={onMissionComplete}>
            Finalizar módulo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <div className="flex">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-grow mr-2"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <Button onClick={handleSendMessage} disabled={inputMessage.trim() === ''}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KututuChat;
