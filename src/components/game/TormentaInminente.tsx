
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CloudLightning, 
  Star, 
  PlayCircle,
  BadgeCheck,
  AlertCircle
} from 'lucide-react';
import StormGame from './storm-game/StormGame';
import { toast } from '@/hooks/use-toast';

interface TormentaInminenteProps {
  onEarnCoins: (amount: number) => void;
}

const TormentaInminente: React.FC<TormentaInminenteProps> = ({ onEarnCoins }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  
  const handleGameComplete = (points: number) => {
    onEarnCoins(points);
    setIsPlaying(false);
    setHasPlayed(true);
    
    toast({
      title: "¡Desafío completado!",
      description: `Has ganado ${points} Soles de Resiliencia`,
    });
  };
  
  const handleStartGame = () => {
    setIsPlaying(true);
  };
  
  const handleCloseGame = () => {
    setIsPlaying(false);
  };
  
  if (isPlaying) {
    return (
      <div className="w-full py-4">
        <StormGame onComplete={handleGameComplete} onClose={handleCloseGame} />
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-6 md:p-8 flex-1">
            <div className="inline-flex items-center bg-white/70 rounded-full px-3 py-1 text-sm text-bcp-blue font-medium mb-4">
              <Star className="h-4 w-4 mr-1 text-amber-500" />
              Juego Destacado
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-bcp-blue mb-3">
              Tormenta Inminente: Desafío Empresarial
            </h2>
            
            <p className="text-gray-600 mb-6">
              Prepara, enfrenta y recupera tu negocio ante una crisis inesperada. 
              Tu misión: tomar decisiones clave antes, durante y después de la tormenta.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <BadgeCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Preparación estratégica</span>
                  <p className="text-sm text-gray-500">5 rondas para anticiparte a la crisis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BadgeCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Respuesta táctica</span>
                  <p className="text-sm text-gray-500">3 rondas enfrentando eventos críticos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BadgeCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Reconstrucción resiliente</span>
                  <p className="text-sm text-gray-500">2 rondas para recuperar tu negocio</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={handleStartGame}
                className="bg-gradient-bcp hover:bg-opacity-90 text-white"
                size="lg"
              >
                {hasPlayed ? "Jugar de nuevo" : "Iniciar desafío"} <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              
              {hasPlayed && (
                <Button variant="outline" size="lg" className="border-bcp-blue text-bcp-blue">
                  Ver certificado
                </Button>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-2/5 p-6 md:p-0">
            <div className="relative aspect-square md:aspect-auto md:h-full w-full bg-blue-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-bcp-blue">
                <CloudLightning className="h-24 w-24 text-white opacity-30" />
              </div>
              <div className="absolute inset-0 bg-[url('placeholder.svg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-amber-800 mb-1">¿Por qué este desafío es importante?</h3>
            <p className="text-amber-700">
              Los emprendedores resilientes tienen 21% más probabilidades de superar una crisis económica, según estudios. 
              Este juego te ayudará a desarrollar habilidades de gestión de crisis, anticipación y recuperación efectiva, 
              mientras aprendes sobre las mejores prácticas empresariales para situaciones inesperadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TormentaInminente;
