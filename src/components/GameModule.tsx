
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Star, 
  Gift, 
  BookOpen, 
  Coins,
  Zap,
  Rocket,
  Lightbulb,
  Flag
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
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("juegos");

  const shieldLevels = [
    { id: 1, name: "Escudo Semilla", description: "Emprendedor en formación", icon: <Shield className="h-8 w-8 text-bcp-blue" /> },
    { id: 2, name: "Escudo Brote", description: "Preparando la tierra", icon: <Shield className="h-8 w-8 text-green-600" /> },
    { id: 3, name: "Escudo Fortaleza", description: "Resistencia operativa", icon: <Shield className="h-8 w-8 text-amber-600" /> },
    { id: 4, name: "Escudo Visión", description: "Planificación avanzada", icon: <Shield className="h-8 w-8 text-purple-600" /> },
    { id: 5, name: "Escudo Impacto", description: "Liderazgo en crisis", icon: <ShieldCheck className="h-8 w-8 text-red-600" /> },
    { id: 6, name: "Escudo Sol Naciente", description: "Emprendedor resiliente certificado", icon: <ShieldCheck className="h-8 w-8 text-bcp-orange" /> },
  ];

  useEffect(() => {
    // Simular carga de datos del usuario
    setTimeout(() => {
      setUserCoins(50);
      setProgress(65);
    }, 500);
  }, []);

  const handleEarnCoins = (amount: number) => {
    setUserCoins(prev => prev + amount);
    toast({
      title: "¡Felicitaciones!",
      description: `Has ganado ${amount} Soles de Resiliencia`,
      variant: "default",
    });

    // Actualizar nivel si es necesario
    if (userCoins + amount >= 100 && userLevel === 1) {
      setUserLevel(2);
      toast({
        title: "¡Has desbloqueado un nuevo escudo!",
        description: "Has alcanzado el Escudo Brote: Preparando la tierra",
        variant: "default",
      });
    }
  };

  const currentShield = shieldLevels.find(shield => shield.id === userLevel) || shieldLevels[0];

  return (
    <div className="bcp-section">
      <div className="bcp-container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Zona Resiliente BCP</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prepara tu emprendimiento para cualquier situación mientras aprendes y te diviertes. 
            Supera desafíos, gana Soles de Resiliencia y desbloquea escudos que te convierten en un emprendedor resiliente.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="bg-gradient-bcp text-white rounded-full h-16 w-16 flex items-center justify-center">
                  {currentShield.icon}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-bcp-orange text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold border-2 border-white">
                  {userLevel}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">
                  {currentShield.name}
                </h3>
                <p className="text-sm text-gray-500">{currentShield.description}</p>
                <div className="flex items-center mt-1">
                  <Progress value={progress} className="w-32 md:w-48 h-2" />
                  <span className="ml-2 text-sm text-gray-600">{progress}%</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-amber-50 py-2 px-4 rounded-lg">
              <Flag className="text-amber-500 mr-2" size={20} />
              <span className="font-medium text-amber-800">{userCoins} Soles de Resiliencia</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <Rocket className="mx-auto text-bcp-blue mb-1" size={24} />
              <p className="text-sm">2 Rutas Resilientes</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <Lightbulb className="mx-auto text-green-600 mb-1" size={24} />
              <p className="text-sm">1 Escudo desbloqueado</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <Zap className="mx-auto text-purple-600 mb-1" size={24} />
              <p className="text-sm">Racha de 3 días</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-center">
              <Gift className="mx-auto text-bcp-orange mb-1" size={24} />
              <p className="text-sm">1 Recompensa disponible</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="juegos" onValueChange={setActiveTab} value={activeTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="juegos">Desafíos</TabsTrigger>
            <TabsTrigger value="recompensas">Arsenal</TabsTrigger>
            <TabsTrigger value="perfil">Mi Perfil</TabsTrigger>
            <TabsTrigger value="ranking">Ranking</TabsTrigger>
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
