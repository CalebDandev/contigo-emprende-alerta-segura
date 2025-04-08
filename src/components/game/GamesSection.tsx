
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
  Shield,
  Zap,
  Rocket
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import TormentaInminente from './TormentaInminente';

interface GamesSectionProps {
  onEarnCoins: (amount: number) => void;
}

const GamesSection: React.FC<GamesSectionProps> = ({ onEarnCoins }) => {
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      title: "Desafío Rápido: Finanzas Resilientes",
      description: "Responde preguntas clave sobre cómo proteger las finanzas de tu negocio ante emergencias.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      difficulty: "Escudo Semilla",
      time: "5 min",
      reward: "15 Soles",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
      type: "Desafío Rápido"
    },
    {
      id: "sim1",
      title: "Simulación Express: Crisis Económica",
      description: "Toma decisiones financieras ante una crisis económica y observa su impacto en tu negocio.",
      icon: <Zap className="h-8 w-8 text-red-500" />,
      difficulty: "Escudo Brote",
      time: "10 min",
      reward: "25 Soles",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700",
      type: "Simulación Express"
    },
    {
      id: "quiz1",
      title: "Ruta en Crisis: Continuidad Operativa",
      description: "Recorre el camino para mantener tu negocio funcionando durante una emergencia.",
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      difficulty: "Escudo Fortaleza",
      time: "15 min",
      reward: "30 Soles",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      type: "Ruta en Crisis"
    },
    {
      id: "sim2",
      title: "Simulación Express: Falla de Proveedores",
      description: "Enfrenta un escenario donde tus proveedores principales fallan y debes encontrar soluciones.",
      icon: <Building className="h-8 w-8 text-green-500" />,
      difficulty: "Escudo Brote",
      time: "12 min",
      reward: "20 Soles",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700",
      type: "Simulación Express"
    },
    {
      id: "quiz2",
      title: "Desafío Rápido: Soluciones Creativas",
      description: "Responde este quiz sobre soluciones innovadoras ante crisis empresariales.",
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      difficulty: "Escudo Semilla",
      time: "8 min",
      reward: "15 Soles",
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
      type: "Desafío Rápido"
    },
    {
      id: "ruta1",
      title: "Ruta en Crisis: Ciberseguridad",
      description: "Aprende a proteger los datos de tu negocio mientras superas diferentes niveles de desafíos.",
      icon: <Shield className="h-8 w-8 text-bcp-blue" />,
      difficulty: "Escudo Visión",
      time: "20 min",
      reward: "35 Soles",
      color: "bg-blue-50 border-blue-200", 
      textColor: "text-bcp-blue",
      type: "Ruta en Crisis"
    }
  ];

  // Filter games by type
  const filteredGames = activeFilter === 'all' 
    ? games 
    : games.filter(game => game.type.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <>
      {/* Featured game - Tormenta Inminente */}
      <TormentaInminente onEarnCoins={onEarnCoins} />
      
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-2 md:mb-0">Otros Desafíos</h2>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-xs ${activeFilter === 'all' ? 'bg-gray-100' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-xs ${activeFilter === 'desafío' ? 'bg-gray-100' : ''}`}
            onClick={() => setActiveFilter('desafío')}
          >
            Desafíos Rápidos
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-xs ${activeFilter === 'simulación' ? 'bg-gray-100' : ''}`}
            onClick={() => setActiveFilter('simulación')}
          >
            Simulaciones
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-xs ${activeFilter === 'ruta' ? 'bg-gray-100' : ''}`}
            onClick={() => setActiveFilter('ruta')}
          >
            Rutas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <div 
            key={game.id} 
            className={`${game.color} border rounded-xl p-5 flex flex-col h-full transition-all hover:shadow-md`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/80 shadow-sm">
                {game.icon}
              </div>
              <Badge variant="outline" className="bg-white/70 text-gray-700">
                {game.type}
              </Badge>
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
              className={`w-full ${completedGames.includes(game.id) ? 'bg-gray-300' : 'bg-gradient-bcp'}`}
            >
              {completedGames.includes(game.id) ? (
                <><CheckCircle2 className="mr-2 h-4 w-4" /> Completado</>
              ) : (
                <>Iniciar Desafío <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 mb-4">¡Nuevos desafíos cada semana! Regresa pronto para descubrir más rutas resilientes.</p>
        <Button variant="outline" className="border-bcp-blue text-bcp-blue">
          Ver historial de desafíos
        </Button>
      </div>
    </>
  );
};

export default GamesSection;
