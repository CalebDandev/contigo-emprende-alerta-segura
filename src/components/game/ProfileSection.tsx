
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Award, 
  Star, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Share2,
  Zap,
  BookOpen,
  Lightbulb,
  Shield,
  CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProfileSectionProps {
  userCoins: number;
  userLevel: number;
  progress: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ userCoins, userLevel, progress }) => {
  const handleShareProfile = () => {
    toast({
      title: "¡Enlace copiado!",
      description: "Ahora puedes compartir tu perfil con otros emprendedores",
    });
  };

  const achievements = [
    {
      id: "primero",
      title: "Primer Paso",
      description: "Completaste tu primera actividad de aprendizaje",
      icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
      isUnlocked: true,
      color: "bg-amber-50 border-amber-200"
    },
    {
      id: "consistente",
      title: "Emprendedor Consistente",
      description: "Mantén una racha de 5 días seguidos",
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
      isUnlocked: false,
      progress: 60,
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "prevencion",
      title: "Maestro de la Prevención",
      description: "Completa todos los juegos de prevención",
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      isUnlocked: false,
      progress: 40,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "rapido",
      title: "Respuesta Rápida",
      description: "Completa un simulador de crisis en tiempo récord",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      isUnlocked: false,
      progress: 25,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: "academico",
      title: "Erudito Empresarial",
      description: "Completa 5 cursos de la plataforma",
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      isUnlocked: false,
      progress: 20,
      color: "bg-green-50 border-green-200"
    }
  ];

  const nextLevel = {
    level: userLevel + 1,
    name: userLevel === 1 ? "Emprendedor Preparado" : "Emprendedor Experto",
    coinsNeeded: userLevel === 1 ? 100 : 250,
    benefits: [
      "Acceso a desafíos exclusivos",
      "Recompensas de mayor valor",
      "Posibilidad de participar en eventos presenciales"
    ]
  };

  const stats = [
    { icon: <Trophy className="text-bcp-orange" />, value: "2", label: "Desafíos completados" },
    { icon: <Star className="text-amber-500" />, value: "3", label: "Racha actual (días)" },
    { icon: <Award className="text-bcp-blue" />, value: "1/5", label: "Logros desbloqueados" },
    { icon: <TrendingUp className="text-green-600" />, value: userCoins.toString(), label: "AlertaCoins totales" },
    { icon: <Clock className="text-purple-600" />, value: "35min", label: "Tiempo de aprendizaje" }
  ];

  return (
    <div className="space-y-8">
      {/* Estadísticas generales */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border rounded-xl p-4 text-center shadow-sm">
            <div className="mx-auto w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full mb-2">
              {stat.icon}
            </div>
            <div className="font-bold text-xl">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Nivel actual y progreso */}
      <div className="bg-gradient-to-r from-bcp-blue to-bcp-lightblue text-white rounded-xl p-6 shadow-md">
        <h3 className="font-semibold text-xl mb-1">Nivel {userLevel}: {userLevel === 1 ? "Emprendedor Novato" : "Emprendedor Preparado"}</h3>
        <div className="flex items-center mt-3 mb-4">
          <Progress value={progress} className="flex-grow h-2.5 bg-white/30" />
          <span className="ml-2 text-sm">{progress}%</span>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Siguiente nivel: {nextLevel.name}</h4>
          <div className="flex items-center">
            <div className="h-1.5 bg-white/30 flex-grow rounded-full overflow-hidden">
              <div 
                className="h-full bg-white" 
                style={{ width: `${(userCoins / nextLevel.coinsNeeded) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm">{userCoins}/{nextLevel.coinsNeeded} AlertaCoins</span>
          </div>
          
          <div className="mt-4 text-sm bg-white/10 rounded-lg p-3">
            <h5 className="font-medium mb-1">Beneficios del siguiente nivel:</h5>
            <ul className="space-y-1">
              {nextLevel.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Logros */}
      <div>
        <h3 className="font-semibold text-xl mb-4">Logros</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`${achievement.color} border rounded-lg p-4 flex items-center ${achievement.isUnlocked ? '' : 'opacity-80'}`}
            >
              <div className={`p-2 rounded-lg ${achievement.isUnlocked ? 'bg-white' : 'bg-gray-100'}`}>
                {achievement.icon}
              </div>
              <div className="ml-3 flex-grow">
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                
                {!achievement.isUnlocked && achievement.progress !== undefined && (
                  <div className="flex items-center mt-1">
                    <Progress value={achievement.progress} className="h-1.5 flex-grow" />
                    <span className="ml-2 text-xs text-gray-500">{achievement.progress}%</span>
                  </div>
                )}
              </div>
              
              {achievement.isUnlocked ? (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Desbloqueado
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">
                  En progreso
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Acciones y compartir */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Button variant="outline" className="border-bcp-blue text-bcp-blue">
          Ver historial completo
        </Button>
        <Button onClick={handleShareProfile}>
          <Share2 className="mr-2 h-4 w-4" /> Compartir mi perfil
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
