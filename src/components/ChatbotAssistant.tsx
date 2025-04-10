
import React, { useState } from 'react';
import { MessageCircle, Send, X, ChevronUp, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy el Cuy BCP, tu asistente digital. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      // Simulación de respuesta del bot después de un breve retraso
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Gracias por tu mensaje. ¿Hay algo más en lo que pueda ayudarte con tu emprendimiento?',
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button 
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-bcp-blue shadow-lg hover:bg-bcp-blue/90 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 flex flex-col h-[500px] max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="bg-bcp-blue text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src="/assets/cuy-bcp.png" alt="Cuy BCP" />
                <AvatarFallback className="bg-orange-500">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Cuy BCP</h3>
                <p className="text-xs text-blue-100">Asistente digital</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-blue-600/50"
              onClick={toggleChat}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex max-w-[80%] mb-2",
                  message.sender === 'user' ? "ml-auto" : "mr-auto"
                )}
              >
                {message.sender === 'bot' && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback className="bg-orange-500">
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
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 block text-right mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarFallback className="bg-gray-300">
                      U
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="border-t p-3 flex items-center">
            <Input
              placeholder="Escribe tu mensaje aquí..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow mr-2"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-bcp-blue"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
