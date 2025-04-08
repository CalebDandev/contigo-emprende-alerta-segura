
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Award, 
  Bookmark, 
  FileText, 
  Briefcase,
  Lock,
  AlertCircle,
  CheckCircle,
  Shield,
  Cpu,
  Book,
  Zap,
  Terminal,
  Database
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface RewardsSectionProps {
  userCoins: number;
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ userCoins }) => {
  const handleClaimReward = (rewardId: string, rewardTitle: string, cost: number) => {
    if (userCoins >= cost) {
      toast({
        title: "¡Recompensa desbloqueada!",
        description: `Has obtenido: ${rewardTitle}`,
        variant: "default",
      });
    } else {
      toast({
        title: "Acceso denegado",
        description: `Necesitas ${cost - userCoins} AlertaCoins más para esta herramienta`,
        variant: "destructive",
      });
    }
  };

  const rewards = [
    {
      id: "cert1",
      title: "Manual de Contingencia",
      description: "Documento técnico con estrategias de mitigación de crisis empresariales.",
      icon: <FileText className="h-8 w-8 text-blue-400" />,
      cost: 50,
      color: "border-blue-800 bg-blue-950",
      textColor: "text-blue-400",
      category: "Documentación"
    },
    {
      id: "curso1",
      title: "Toolkit de Resiliencia",
      description: "Suite de herramientas digitales para análisis de vulnerabilidades en tu modelo de negocio.",
      icon: <Terminal className="h-8 w-8 text-purple-400" />,
      cost: 75,
      color: "border-purple-800 bg-purple-950",
      textColor: "text-purple-400",
      category: "Herramientas"
    },
    {
      id: "toolkit1",
      title: "Bug Bounty Emprendedor",
      description: "Participa en el programa de recompensas por identificar riesgos en tu propio negocio.",
      icon: <Briefcase className="h-8 w-8 text-green-400" />,
      cost: 100,
      color: "border-green-800 bg-green-950",
      textColor: "text-green-400",
      category: "Premium"
    },
    {
      id: "ment1",
      title: "Exploit de Mercado",
      description: "Una sesión personalizada con un experto para identificar oportunidades de crecimiento en crisis.",
      icon: <Database className="h-8 w-8 text-amber-400" />,
      cost: 200,
      color: "border-amber-800 bg-amber-950",
      textColor: "text-amber-400",
      category: "Premium"
    },
    {
      id: "capital1",
      title: "Capital Semilla",
      description: "Acceso a fondos de inversión para implementar tu plan de contingencia.",
      icon: <Cpu className="h-8 w-8 text-red-400" />,
      cost: 500,
      color: "border-red-800 bg-red-950",
      textColor: "text-red-400",
      category: "Elite"
    }
  ];

  const categorizedRewards = {
    "Documentación": rewards.filter(r => r.category === "Documentación"),
    "Herramientas": rewards.filter(r => r.category === "Herramientas"),
    "Premium": rewards.filter(r => r.category === "Premium"),
    "Elite": rewards.filter(r => r.category === "Elite")
  };

  return (
    <>
      <div className="mb-6 p-5 bg-yellow-900/30 border border-yellow-800/50 rounded-lg flex items-center">
        <Terminal className="h-8 w-8 text-yellow-500 mr-4" />
        <div>
          <h3 className="font-semibold text-yellow-400 mb-1">Terminal de Comandos</h3>
          <p className="text-yellow-200/70">
            Accede a herramientas y recursos especiales completando desafíos. Aumenta tu arsenal para enfrentar cualquier contingencia empresarial.
          </p>
        </div>
      </div>

      {Object.entries(categorizedRewards).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            {category === "Documentación" && <Book className="mr-2 text-blue-400" size={20} />}
            {category === "Herramientas" && <Terminal className="mr-2 text-purple-400" size={20} />}
            {category === "Premium" && <Shield className="mr-2 text-green-400" size={20} />}
            {category === "Elite" && <Award className="mr-2 text-red-400" size={20} />}
            {category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((reward) => {
              const isAvailable = userCoins >= reward.cost;
              
              return (
                <div 
                  key={reward.id} 
                  className={`border rounded-xl p-4 flex flex-col h-full 
                    ${reward.color} 
                    ${!isAvailable ? 'opacity-70' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-gray-900 border border-gray-800">
                      {reward.icon}
                    </div>
                    {isAvailable ? (
                      <Badge className="bg-green-900/30 text-green-400 border-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" /> Disponible
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-gray-900/30 text-gray-400 border-gray-800">
                        <Lock className="h-3 w-3 mr-1" /> Encriptado
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className={`font-bold text-lg mb-2 ${reward.textColor}`}>{reward.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{reward.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-400">{reward.cost} AlertaCoins</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleClaimReward(reward.id, reward.title, reward.cost)}
                    disabled={!isAvailable}
                    className={`w-full ${!isAvailable 
                      ? 'bg-gray-800 text-gray-400' 
                      : 'bg-purple-900 hover:bg-purple-800 text-white'}`}
                  >
                    {isAvailable ? 'Desbloquear herramienta' : `Necesitas ${reward.cost - userCoins} AlertaCoins`}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-5 bg-blue-900/30 border border-blue-800/50 rounded-lg">
        <h3 className="font-semibold text-blue-400 mb-2">Terminal de Comandos</h3>
        <div className="flex gap-2 bg-gray-900 border border-gray-700 p-3 rounded font-mono">
          <span className="text-gray-500">$</span>
          <input type="text" placeholder="Ingresa código de acceso" className="bg-transparent border-none text-gray-300 w-full outline-none" />
          <Button variant="outline" size="sm" className="border-blue-800 text-blue-400 hover:bg-blue-900/20">
            Ejecutar
          </Button>
        </div>
      </div>
    </>
  );
};

export default RewardsSection;
