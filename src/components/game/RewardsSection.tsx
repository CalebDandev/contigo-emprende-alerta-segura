
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
  CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface RewardsSectionProps {
  userCoins: number;
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ userCoins }) => {
  const handleClaimReward = (rewardId: string, rewardTitle: string, cost: number) => {
    if (userCoins >= cost) {
      toast({
        title: "¡Recompensa reclamada!",
        description: `Has obtenido: ${rewardTitle}`,
        variant: "default",
      });
    } else {
      toast({
        title: "No tienes suficientes AlertaCoins",
        description: `Necesitas ${cost - userCoins} AlertaCoins más para esta recompensa`,
        variant: "destructive",
      });
    }
  };

  const rewards = [
    {
      id: "cert1",
      title: "Certificado Digital",
      description: "Certificado oficial de Emprendedor Preparado por BCP.",
      icon: <FileText className="h-8 w-8 text-bcp-blue" />,
      cost: 50,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-bcp-blue"
    },
    {
      id: "curso1",
      title: "Curso Premium",
      description: "Acceso al curso premium 'Estrategias ante crisis financieras'.",
      icon: <Bookmark className="h-8 w-8 text-purple-600" />,
      cost: 75,
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: "toolkit1",
      title: "Kit Emprendedor",
      description: "Participa en el sorteo mensual de un kit con materiales y herramientas.",
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      cost: 100,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700"
    },
    {
      id: "ment1",
      title: "Mentoría Personalizada",
      description: "Una hora de mentoría con un especialista en continuidad de negocio.",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      cost: 200,
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700"
    },
    {
      id: "capital1",
      title: "Capital Semilla",
      description: "Participa en la convocatoria para capital semilla de S/. 1,000.",
      icon: <Gift className="h-8 w-8 text-red-600" />,
      cost: 500,
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700"
    }
  ];

  return (
    <>
      <div className="mb-6 p-5 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
        <AlertCircle className="h-8 w-8 text-amber-500 mr-4" />
        <div>
          <h3 className="font-semibold text-amber-800 mb-1">¿Cómo conseguir más AlertaCoins?</h3>
          <p className="text-amber-700">
            Completa juegos y desafíos, mantén racha diaria de aprendizaje y comparte tu perfil con otros emprendedores.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => {
          const isAvailable = userCoins >= reward.cost;
          
          return (
            <div 
              key={reward.id} 
              className={`${reward.color} border rounded-xl p-5 flex flex-col h-full transition-all ${isAvailable ? 'hover:shadow-md' : 'opacity-80'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-white/80 shadow-sm">
                  {reward.icon}
                </div>
                {isAvailable ? (
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    <CheckCircle className="h-3 w-3 mr-1" /> Disponible
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                    <Lock className="h-3 w-3 mr-1" /> Bloqueado
                  </Badge>
                )}
              </div>
              
              <h3 className={`font-bold text-lg mb-2 ${reward.textColor}`}>{reward.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{reward.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-amber-600">{reward.cost} AlertaCoins</span>
              </div>
              
              <Button 
                onClick={() => handleClaimReward(reward.id, reward.title, reward.cost)}
                disabled={!isAvailable}
                className={`w-full ${!isAvailable ? 'bg-gray-300 cursor-not-allowed' : 'bg-bcp-blue hover:bg-bcp-blue/90'}`}
              >
                {isAvailable ? 'Reclamar recompensa' : `Te faltan ${reward.cost - userCoins} AlertaCoins`}
              </Button>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-bcp-blue mb-2">¿Tienes un código promocional?</h3>
        <div className="flex gap-2">
          <input type="text" placeholder="Ingresa tu código aquí" className="bcp-input flex-grow" />
          <Button variant="outline" className="border-bcp-blue text-bcp-blue">
            Canjear
          </Button>
        </div>
      </div>
    </>
  );
};

export default RewardsSection;
