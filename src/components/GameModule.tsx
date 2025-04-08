
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck,
  Star, 
  Zap, 
  Hexagon, 
  Layers,
  Code,
  Flag,
  Lock,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import GamesSection from './game/GamesSection';
import RewardsSection from './game/RewardsSection';
import ProfileSection from './game/ProfileSection';
import LeaderboardSection from './game/LeaderboardSection';

const GameModule = () => {
  const [userCoins, setUserCoins] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [userShield, setUserShield] = useState('Bronce');
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("juegos");
  const [completedModules, setCompletedModules] = useState(0);

  useEffect(() => {
    // Simular carga de datos del usuario
    setTimeout(() => {
      setUserCoins(50);
      setProgress(65);
      setCompletedModules(2);
    }, 500);
  }, []);

  const handleEarnCoins = (amount: number) => {
    setUserCoins(prev => prev + amount);
    toast({
      title: "¡Desafío completado!",
      description: `Has ganado ${amount} AlertaCoins`,
      variant: "default",
    });

    // Actualizar nivel y escudo si es necesario
    if (userCoins + amount >= 100 && userLevel === 1) {
      setUserLevel(2);
      setUserShield('Plata');
      toast({
        title: "¡Subiste de nivel!",
        description: "Has alcanzado el nivel 2: Defensor Digital",
        variant: "default",
      });
    }
  };

  const getLevelName = (level: number): string => {
    const levels = [
      "Iniciado", 
      "Defensor Digital", 
      "Estratega Resiliente", 
      "Guardian Empresarial", 
      "Maestro de Contingencia"
    ];
    return levels[level - 1] || "Maestro Supremo";
  };

  const getShieldColor = (shield: string): string => {
    switch(shield) {
      case 'Bronce': return 'text-amber-600';
      case 'Plata': return 'text-gray-400';
      case 'Oro': return 'text-amber-400';
      case 'Platino': return 'text-blue-300';
      case 'Diamante': return 'text-purple-400';
      default: return 'text-gray-600';
    }
  };

  const getShieldIcon = (shield: string) => {
    const color = getShieldColor(shield);
    switch(shield) {
      case 'Bronce': return <Shield className={color} />;
      case 'Plata': return <Shield className={color} />;
      case 'Oro': return <Shield className={color} />;
      case 'Platino': return <ShieldCheck className={color} />;
      case 'Diamante': return <ShieldCheck className={color} />;
      default: return <Shield className={color} />;
    }
  };

  return (
    <div className="bcp-section bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="bcp-container">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-2">
            <Hexagon className="text-purple-500 h-12 w-12" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Alerta Hack: Desafío Emprendedor
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fortalece tu resiliencia empresarial superando desafíos técnicos. 
            Gana AlertaCoins, desbloquea escudos y conviértete en un Maestro de Contingencia.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg shadow-purple-900/20 p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg h-16 w-16 flex items-center justify-center">
                  {getShieldIcon(userShield)}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium border border-gray-700">
                  {userLevel}
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h3 className="font-semibold text-lg text-purple-400">
                    {userShield} <span className="text-gray-300">• {getLevelName(userLevel)}</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <Progress value={progress} className="w-32 md:w-48 h-2 bg-gray-700" />
                  <span className="ml-2 text-sm text-gray-400">{progress}%</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-900 py-2 px-4 rounded-lg border border-gray-700">
              <Zap className="text-yellow-500 mr-2" size={20} />
              <span className="font-medium text-yellow-400">{userCoins} AlertaCoins</span>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-4">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Hexagon className="mx-auto text-purple-500 mb-1" size={24} strokeWidth={1.5} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">{completedModules}</span>
                Módulos
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Trophy className="mx-auto text-yellow-500 mb-1" size={24} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">2</span>
                Logros
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Star className="mx-auto text-blue-400 mb-1" size={24} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">3</span>
                Racha
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Flag className="mx-auto text-red-400 mb-1" size={24} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">5</span>
                Flags
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Layers className="mx-auto text-green-400 mb-1" size={24} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">850</span>
                Pts. Totales
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 text-center">
              <Code className="mx-auto text-cyan-400 mb-1" size={24} />
              <p className="text-xs text-gray-400">
                <span className="block text-sm text-white">1</span>
                Recompensas
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-blue-900 flex items-center justify-center mr-2">
                  <Code className="h-4 w-4 text-blue-300" />
                </div>
                <div>
                  <span className="text-xs text-gray-400">Próximo desafío</span>
                  <h4 className="font-medium text-white">Hackea la Incertidumbre: Análisis de Escenarios</h4>
                </div>
              </div>
              <Button variant="outline" className="hidden md:flex bg-gray-800 border-gray-600 hover:bg-gray-700">
                Iniciar Desafío
              </Button>
            </div>
            <div className="mt-3 md:hidden">
              <Button variant="outline" className="w-full bg-gray-800 border-gray-600 hover:bg-gray-700">
                Iniciar Desafío
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="juegos" onValueChange={setActiveTab} value={activeTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-gray-800 border border-gray-700">
            <TabsTrigger value="juegos" className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300">
              Desafíos
            </TabsTrigger>
            <TabsTrigger value="recompensas" className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300">
              Arsenal
            </TabsTrigger>
            <TabsTrigger value="perfil" className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300">
              Mi Perfil
            </TabsTrigger>
            <TabsTrigger value="ranking" className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300">
              Ranking
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="juegos">
            <GamesSection onEarnCoins={handleEarnCoins} />
          </TabsContent>
          
          <TabsContent value="recompensas">
            <RewardsSection userCoins={userCoins} />
          </TabsContent>
          
          <TabsContent value="perfil">
            <ProfileSection userCoins={userCoins} userLevel={userLevel} progress={progress} />
          </TabsContent>
          
          <TabsContent value="ranking">
            <LeaderboardSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameModule;
