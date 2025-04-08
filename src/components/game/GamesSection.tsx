
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from "@/components/ui/slider";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Brain,
  ServerCrash,
  TrendingUp,
  Building,
  Lightbulb,
  ShieldAlert,
  Network,
  Lock,
  Hexagon,
  Flag,
  Code,
  FileCode,
  Cpu
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface GamesSectionProps {
  onEarnCoins: (amount: number) => void;
}

const GamesSection: React.FC<GamesSectionProps> = ({ onEarnCoins }) => {
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [categoryFilter, setcategoryFilter] = useState<string[]>([]);
  
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

  const modules = [
    {
      id: "module1",
      name: "Defensa Básica",
      description: "Fundamentos de resiliencia empresarial",
      progress: 80,
      complete: true,
      challenges: 5,
      challengesComplete: 4,
      icon: <ShieldAlert className="h-6 w-6 text-green-400" />
    },
    {
      id: "module2",
      name: "Análisis de Amenazas",
      description: "Identificación y evaluación de riesgos",
      progress: 40,
      complete: false,
      challenges: 6,
      challengesComplete: 2,
      icon: <ServerCrash className="h-6 w-6 text-yellow-400" />
    },
    {
      id: "module3",
      name: "Continuidad Avanzada",
      description: "Estrategias de recuperación y continuidad",
      progress: 0,
      complete: false,
      challenges: 7,
      challengesComplete: 0,
      locked: true,
      icon: <Network className="h-6 w-6 text-blue-400" />
    },
    {
      id: "module4",
      name: "Resiliencia Financiera",
      description: "Protección de activos y flujo de caja",
      progress: 0,
      complete: false,
      challenges: 6,
      challengesComplete: 0,
      locked: true,
      icon: <TrendingUp className="h-6 w-6 text-red-400" />
    },
  ];
  
  const games = [
    {
      id: "trivia1",
      moduleId: "module1",
      title: "Firewall Empresarial",
      description: "Identificar y mitigar vulnerabilidades en tu modelo de negocio ante disrupciones.",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      difficulty: "Fácil",
      points: 10,
      category: "Conceptual",
      time: "5 min",
      reward: "15 AlertaCoins",
      color: "border-blue-800 bg-blue-950",
      textColor: "text-blue-400"
    },
    {
      id: "sim1",
      moduleId: "module1",
      title: "Exploit de Crisis",
      description: "Explota vulnerabilidades en un escenario de crisis empresarial y observa su impacto.",
      icon: <ServerCrash className="h-8 w-8 text-red-400" />,
      difficulty: "Intermedio",
      points: 25,
      category: "Simulación",
      time: "10 min",
      reward: "25 AlertaCoins",
      color: "border-red-800 bg-red-950",
      textColor: "text-red-400"
    },
    {
      id: "quiz1",
      moduleId: "module1",
      title: "SQL: Salva tu Quebrada Lógica",
      description: "Responde consultas técnicas sobre la lógica de continuidad de negocio.",
      icon: <FileCode className="h-8 w-8 text-green-400" />,
      difficulty: "Fácil",
      points: 15,
      category: "Quiz",
      time: "7 min",
      reward: "20 AlertaCoins",
      color: "border-green-800 bg-green-950",
      textColor: "text-green-400"
    },
    {
      id: "sim2",
      moduleId: "module2",
      title: "Shell de Resiliencia",
      description: "Construye un negocio resiliente ejecutando comandos contra distintas amenazas.",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      difficulty: "Avanzado",
      points: 40,
      category: "Práctica",
      time: "15 min",
      reward: "30 AlertaCoins",
      color: "border-purple-800 bg-purple-950",
      textColor: "text-purple-400"
    },
    {
      id: "quiz2",
      moduleId: "module2",
      title: "Ingeniería de Soluciones",
      description: "Resuelve problemas de negocio aplicando pensamiento creativo ante crisis.",
      icon: <Cpu className="h-8 w-8 text-yellow-400" />,
      difficulty: "Intermedio",
      points: 30,
      category: "CTF",
      time: "12 min",
      reward: "25 AlertaCoins",
      color: "border-yellow-800 bg-yellow-950",
      textColor: "text-yellow-400"
    }
  ];

  const filteredGames = games.filter(game => {
    // Aplicar filtros si hay alguno seleccionado
    if (difficultyFilter.length > 0 && !difficultyFilter.includes(game.difficulty)) {
      return false;
    }
    if (categoryFilter.length > 0 && !categoryFilter.includes(game.category)) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Módulos */}
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white flex items-center">
            <Hexagon className="mr-2 text-purple-400" size={20} strokeWidth={1.5} />
            Módulos de Entrenamiento
          </h3>
          <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
            {modules.filter(m => m.complete).length}/{modules.length} Completados
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className={`border rounded-xl p-4 flex flex-col 
              ${module.locked 
                ? 'border-gray-700 bg-gray-900/50 opacity-70' 
                : 'border-purple-800/50 bg-gray-800'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 rounded-lg bg-gray-900 border border-gray-700">
                  {module.icon}
                </div>
                {module.complete ? (
                  <Badge className="bg-green-900 text-green-400 border-green-800">
                    Completado
                  </Badge>
                ) : module.locked ? (
                  <Badge variant="outline" className="border-gray-700">
                    <Lock className="h-3 w-3 mr-1" /> Bloqueado
                  </Badge>
                ) : (
                  <Badge className="bg-blue-900 text-blue-400 border-blue-800">
                    En progreso
                  </Badge>
                )}
              </div>
              
              <h3 className={`font-bold text-lg mb-1 ${module.locked ? 'text-gray-400' : 'text-white'}`}>
                {module.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{module.description}</p>
              
              <div className="mt-auto space-y-3">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progreso</span>
                  <span>{module.challengesComplete}/{module.challenges} desafíos</span>
                </div>
                <Progress value={module.progress} className="h-2 bg-gray-700" />
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`w-full mt-2 ${module.locked 
                    ? 'bg-gray-800 border-gray-700 text-gray-400' 
                    : 'bg-purple-900/30 border-purple-800 text-purple-400 hover:bg-purple-900'}`}
                  disabled={module.locked}
                >
                  {module.locked 
                    ? "Requiere nivel superior" 
                    : module.complete 
                      ? "Revisitar módulo" 
                      : "Continuar"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desafíos */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white flex items-center">
            <Flag className="mr-2 text-red-400" size={20} />
            Desafíos Disponibles
          </h3>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              Filtrar
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              Ordenar
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGames.map((game) => (
            <div 
              key={game.id} 
              className={`border ${game.color} rounded-xl p-4 flex flex-col h-full transition-all hover:border-opacity-100 hover:shadow-md hover:shadow-${game.textColor}/10`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-gray-900 border border-gray-800 shadow-sm">
                  {game.icon}
                </div>
                {completedGames.includes(game.id) ? (
                  <Badge className="bg-green-900/30 text-green-400 border-green-800">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Flag Capturada
                  </Badge>
                ) : (
                  <Badge variant="outline" className={`bg-opacity-20 ${game.color} ${game.textColor}`}>
                    {game.points} pts
                  </Badge>
                )}
              </div>
              
              <h3 className={`font-bold text-lg mb-2 ${game.textColor}`}>{game.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{game.description}</p>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-4">
                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                  <Clock className="h-3 w-3 mx-auto mb-1" />
                  <span>{game.time}</span>
                </div>
                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                  <span className={
                    game.difficulty === 'Fácil' ? 'text-green-400' :
                    game.difficulty === 'Intermedio' ? 'text-yellow-400' : 'text-red-400'
                  }>
                    {game.difficulty}
                  </span>
                </div>
                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                  <span>{game.category}</span>
                </div>
              </div>
              
              <Button 
                onClick={() => handleStartGame(game.id, game.title)}
                disabled={completedGames.includes(game.id)}
                className={`w-full ${completedGames.includes(game.id) 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-purple-900 hover:bg-purple-800 text-white'}`}
              >
                {completedGames.includes(game.id) ? 'Completado' : 'Iniciar Desafío'}
                {!completedGames.includes(game.id) && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-400 mb-4">¡Nuevos desafíos cada semana! Vuelve pronto para descubrir más módulos.</p>
        <Button variant="outline" className="border-purple-800 text-purple-400 hover:bg-purple-900/20">
          Ver todos los desafíos
        </Button>
      </div>
    </div>
  );
};

export default GamesSection;
