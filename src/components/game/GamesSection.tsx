
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Brain,
  ScrollText,
  TrendingUp,
  Building,
  Lightbulb,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface GamesSectionProps {
  onEarnCoins: (amount: number) => void;
}

const GamesSection: React.FC<GamesSectionProps> = ({ onEarnCoins }) => {
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  
  const handleStartGame = (gameId: string, gameTitle: string) => {
    // En una implementación real, esto abriría el juego
    // Por ahora simularemos completar el juego después de un tiempo
    toast({
      title: `Iniciando: ${gameTitle}`,
      description: "Preparando el desafío...",
    });
    
    setTimeout(() => {
      if (!completedGames.includes(gameId)) {
        setCompletedGames([...completedGames, gameId]);
        const earnedCoins = Math.floor(Math.random() * 10) + 10; // Entre 10-20 coins
        onEarnCoins(earnedCoins);
      }
    }, 3000);
  };
  
  const games = [
    {
      id: "trivia1",
      title: "Trivia de Emergencias",
      description: "Pon a prueba tus conocimientos sobre cómo actuar en situaciones críticas.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      difficulty: "Fácil",
      time: "5 min",
      reward: "15 AlertaCoins",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: "sim1",
      title: "Simulador de Crisis",
      description: "Toma decisiones ante una emergencia económica y observa sus consecuencias.",
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      difficulty: "Intermedio",
      time: "10 min",
      reward: "25 AlertaCoins",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700"
    },
    {
      id: "quiz1",
      title: "Quiz de Continuidad",
      description: "Responde preguntas sobre planes de continuidad de negocio.",
      icon: <ScrollText className="h-8 w-8 text-blue-500" />,
      difficulty: "Fácil",
      time: "7 min",
      reward: "20 AlertaCoins",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700"
    },
    {
      id: "sim2",
      title: "Constructor de Negocio",
      description: "Construye un negocio resistente contra distintos tipos de crisis.",
      icon: <Building className="h-8 w-8 text-green-500" />,
      difficulty: "Avanzado",
      time: "15 min",
      reward: "30 AlertaCoins",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700"
    },
    {
      id: "quiz2",
      title: "Desafío de Innovación",
      description: "Resuelve problemas de negocio con soluciones creativas ante crisis.",
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      difficulty: "Intermedio",
      time: "12 min",
      reward: "25 AlertaCoins",
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div 
            key={game.id} 
            className={`${game.color} border rounded-xl p-5 flex flex-col h-full transition-all hover:shadow-md`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/80 shadow-sm">
                {game.icon}
              </div>
              {completedGames.includes(game.id) && (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                  <CheckCircle2 className="h-3 w-3 mr-1" /> Completado
                </Badge>
              )}
            </div>
            
            <h3 className={`font-bold text-lg mb-2 ${game.textColor}`}>{game.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{game.description}</p>
            
            <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{game.time}</span>
              </div>
              <span className="font-medium">{game.difficulty}</span>
              <span className="font-medium text-amber-600">{game.reward}</span>
            </div>
            
            <Button 
              onClick={() => handleStartGame(game.id, game.title)}
              disabled={completedGames.includes(game.id)}
              className={`w-full ${completedGames.includes(game.id) ? 'bg-gray-300' : 'bg-bcp-blue'}`}
            >
              {completedGames.includes(game.id) ? 'Completado' : 'Iniciar Ahora'}
              {!completedGames.includes(game.id) && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 mb-4">¡Nuevos juegos cada semana! Regresa pronto para descubrir más desafíos.</p>
        <Button variant="outline" className="border-bcp-blue text-bcp-blue">
          Ver historial de juegos
        </Button>
      </div>
    </>
  );
};

export default GamesSection;
