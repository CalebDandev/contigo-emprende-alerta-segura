
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
  CheckCircle,
  Hexagon,
  Flag,
  Code,
  Terminal,
  Gift
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
      title: "Primera Flag",
      description: "Completaste tu primer desafío de aprendizaje",
      icon: <Flag className="h-6 w-6 text-green-400" />,
      isUnlocked: true,
      color: "bg-green-950 border-green-800"
    },
    {
      id: "consistente",
      title: "Persistencia",
      description: "Mantén una racha de 5 días seguidos de actividad",
      icon: <Calendar className="h-6 w-6 text-purple-400" />,
      isUnlocked: false,
      progress: 60,
      color: "bg-purple-950 border-purple-800"
    },
    {
      id: "prevencion",
      title: "Root Access",
      description: "Completa todos los desafíos del módulo básico",
      icon: <Terminal className="h-6 w-6 text-blue-400" />,
      isUnlocked: false,
      progress: 40,
      color: "bg-blue-950 border-blue-800"
    },
    {
      id: "rapido",
      title: "Respuesta 0-Day",
      description: "Completa un simulador de crisis en tiempo récord",
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      isUnlocked: false,
      progress: 25,
      color: "bg-yellow-950 border-yellow-800"
    },
    {
      id: "academico",
      title: "Ingeniería Social",
      description: "Completa 5 cursos de la plataforma",
      icon: <Code className="h-6 w-6 text-red-400" />,
      isUnlocked: false,
      progress: 20,
      color: "bg-red-950 border-red-800"
    }
  ];

  const nextLevel = {
    level: userLevel + 1,
    name: userLevel === 1 ? "Defensor Digital" : "Estratega Resiliente",
    shieldName: userLevel === 1 ? "Plata" : "Oro",
    coinsNeeded: userLevel === 1 ? 100 : 250,
    benefits: [
      "Acceso a módulos avanzados",
      "Nuevas herramientas de análisis",
      "Insignia exclusiva en el perfil"
    ]
  };

  const stats = [
    { icon: <Trophy className="text-yellow-400" />, value: "2", label: "Desafíos completados" },
    { icon: <Star className="text-blue-400" />, value: "3", label: "Racha actual (días)" },
    { icon: <Award className="text-purple-400" />, value: "1/5", label: "Logros desbloqueados" },
    { icon: <Zap className="text-yellow-500" />, value: userCoins.toString(), label: "AlertaCoins totales" },
    { icon: <Clock className="text-green-400" />, value: "35min", label: "Tiempo activo" }
  ];

  const levelTitles = ["Iniciado", "Defensor Digital", "Estratega Resiliente", "Guardian Empresarial", "Maestro de Contingencia"];
  const shieldTypes = ["Bronce", "Plata", "Oro", "Platino", "Diamante"];

  return (
    <div className="space-y-8">
      {/* Perfil principal */}
      <div className="bg-gradient-to-r from-gray-900 to-purple-950 border border-purple-800/50 rounded-xl p-6 shadow-md shadow-purple-900/20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl flex items-center justify-center border border-purple-700">
              <Hexagon className="h-12 w-12 text-purple-400" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium border border-purple-700">
              {userLevel}
            </div>
          </div>
          
          <div className="flex-grow space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Usuario_1337</h3>
              <p className="text-purple-400">{shieldTypes[userLevel-1]} • {levelTitles[userLevel-1]}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:w-3/4">
              <div className="bg-gray-900 border border-gray-800 rounded p-2 text-center">
                <div className="text-yellow-400 font-medium">{userCoins}</div>
                <div className="text-xs text-gray-400">AlertaCoins</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded p-2 text-center">
                <div className="text-green-400 font-medium">2/5</div>
                <div className="text-xs text-gray-400">Módulos</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded p-2 text-center">
                <div className="text-blue-400 font-medium">5</div>
                <div className="text-xs text-gray-400">Desafíos</div>
              </div>
            </div>
            
            <div className="flex gap-2 justify-center md:justify-start">
              <Button size="sm" variant="outline" className="border-purple-800 text-purple-400 hover:bg-purple-900/20">
                Editar perfil
              </Button>
              <Button size="sm" onClick={handleShareProfile} className="bg-purple-900 hover:bg-purple-800">
                <Share2 className="mr-2 h-3 w-3" /> Compartir
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Estadísticas generales */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="mx-auto w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full mb-2">
              {stat.icon}
            </div>
            <div className="font-bold text-xl text-white">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Progresión y siguiente nivel */}
      <div className="bg-gradient-to-r from-blue-950 to-purple-950 text-white rounded-xl p-6 border border-blue-800/50 shadow-md shadow-blue-900/10">
        <h3 className="font-semibold text-xl mb-1 flex items-center">
          <Shield className="mr-2 h-5 w-5 text-blue-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Progresión de Escudo
          </span>
        </h3>
        
        <div className="flex items-center mt-3 mb-4">
          <Progress value={progress} className="flex-grow h-2.5 bg-gray-700" />
          <span className="ml-2 text-sm text-gray-300">{progress}%</span>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Próximo nivel: {nextLevel.name}</h4>
            <Badge className="bg-gray-800 text-gray-300 border-gray-700">
              Escudo de {nextLevel.shieldName}
            </Badge>
          </div>
          
          <div className="flex items-center">
            <div className="h-1.5 bg-gray-700 flex-grow rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                style={{ width: `${(userCoins / nextLevel.coinsNeeded) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-300">{userCoins}/{nextLevel.coinsNeeded} AlertaCoins</span>
          </div>
          
          <div className="mt-4 text-sm bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h5 className="font-medium mb-2 text-blue-300">Beneficios del siguiente escudo:</h5>
            <ul className="space-y-1">
              {nextLevel.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Logros */}
      <div>
        <h3 className="font-semibold text-xl mb-4 flex items-center text-white">
          <Gift className="mr-2 h-5 w-5 text-yellow-500" />
          Logros desbloqueados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`${achievement.color} border rounded-lg p-4 flex items-center ${achievement.isUnlocked ? '' : 'opacity-80'}`}
            >
              <div className={`p-2 rounded-lg bg-gray-900 border border-gray-800`}>
                {achievement.icon}
              </div>
              <div className="ml-3 flex-grow">
                <h4 className="font-medium text-white">{achievement.title}</h4>
                <p className="text-sm text-gray-400">{achievement.description}</p>
                
                {!achievement.isUnlocked && achievement.progress !== undefined && (
                  <div className="flex items-center mt-1">
                    <Progress value={achievement.progress} className="h-1.5 flex-grow bg-gray-700" />
                    <span className="ml-2 text-xs text-gray-500">{achievement.progress}%</span>
                  </div>
                )}
              </div>
              
              {achievement.isUnlocked ? (
                <Badge className="bg-green-900/30 text-green-400 border-green-800">
                  Desbloqueado
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-gray-900/30 text-gray-400 border-gray-800">
                  Encriptado
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Acciones y compartir */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Button variant="outline" className="border-blue-800 text-blue-400 hover:bg-blue-900/20">
          Ver todos los logros
        </Button>
        <Button className="bg-purple-900 hover:bg-purple-800">
          <Hexagon className="mr-2 h-4 w-4" strokeWidth={1.5} /> Ver mis módulos
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
