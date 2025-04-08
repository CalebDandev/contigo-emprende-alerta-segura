
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Award, 
  BookOpen, 
  FileText, 
  Briefcase,
  Lock,
  AlertCircle,
  CheckCircle,
  Shield,
  Lightbulb,
  Rocket
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
        title: "No tienes suficientes Soles de Resiliencia",
        description: `Necesitas ${cost - userCoins} Soles más para esta recompensa`,
        variant: "destructive",
      });
    }
  };

  const rewards = [
    {
      id: "cert1",
      title: "Certificado Digital de Resiliencia",
      description: "Certificado oficial de Emprendedor Resiliente avalado por BCP.",
      icon: <FileText className="h-8 w-8 text-bcp-blue" />,
      cost: 50,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-bcp-blue"
    },
    {
      id: "curso1",
      title: "Curso Premium: Finanzas en Crisis",
      description: "Acceso al curso premium 'Estrategias financieras ante crisis empresariales'.",
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      cost: 75,
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: "toolkit1",
      title: "Kit Emprendedor Resiliente",
      description: "Participa en el sorteo mensual de un kit con herramientas para tu negocio.",
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      cost: 100,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700"
    },
    {
      id: "ment1",
      title: "Mentoría de Contingencia",
      description: "Una hora de mentoría con un especialista en resiliencia empresarial.",
      icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
      cost: 200,
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700"
    },
    {
      id: "capital1",
      title: "Capital Semilla Resiliente",
      description: "Participa en la convocatoria para capital semilla de S/. 1,000 para tu negocio.",
      icon: <Rocket className="h-8 w-8 text-red-600" />,
      cost: 500,
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700"
    }
  ];

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Arsenal del Emprendedor Resiliente</h2>
        <p className="text-gray-600">Utiliza tus Soles de Resiliencia para desbloquear recursos que fortalecerán tu negocio.</p>
      </div>

      <div className="mb-6 p-5 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
        <AlertCircle className="h-8 w-8 text-amber-500 mr-4 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-amber-800 mb-1">¿Cómo conseguir más Soles de Resiliencia?</h3>
          <p className="text-amber-700">
            Completa desafíos, mantén una racha diaria de aprendizaje y comparte tu perfil con otros emprendedores para ganar más Soles.
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
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-amber-600 mr-1" />
                  <span className="font-medium text-amber-600">{reward.cost} Soles de Resiliencia</span>
                </div>
              </div>
              
              <Button 
                onClick={() => handleClaimReward(reward.id, reward.title, reward.cost)}
                disabled={!isAvailable}
                className={`w-full ${!isAvailable ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-bcp hover:bg-opacity-90'}`}
              >
                {isAvailable ? 'Reclamar recompensa' : `Te faltan ${reward.cost - userCoins} Soles`}
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
