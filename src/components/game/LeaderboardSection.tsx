
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy,
  Medal, 
  ArrowUp,
  ArrowDown,
  Minus,
  Shield,
  User,
  UserCircle,
  Terminal
} from 'lucide-react';

const LeaderboardSection: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<'week' | 'month' | 'all'>('week');
  
  const leaderboardData = {
    week: [
      { rank: 1, name: "hex0verflow", level: 5, shield: "Diamante", points: 532, change: "up" },
      { rank: 2, name: "resilient_coder", level: 4, shield: "Platino", points: 487, change: "same" },
      { rank: 3, name: "crisis_master", level: 4, shield: "Platino", points: 456, change: "up" },
      { rank: 4, name: "defender123", level: 3, shield: "Oro", points: 423, change: "down" },
      { rank: 5, name: "backup_queen", level: 3, shield: "Oro", points: 412, change: "up" },
      { rank: 6, name: "recovery_wizard", level: 2, shield: "Plata", points: 389, change: "down" },
      { rank: 7, name: "continuity_guru", level: 2, shield: "Plata", points: 375, change: "same" },
      { rank: 8, name: "patch_expert", level: 2, shield: "Plata", points: 354, change: "up" },
      { rank: 9, name: "shield_maiden", level: 1, shield: "Bronce", points: 343, change: "down" },
      { rank: 10, name: "Tú", level: 1, shield: "Bronce", points: 326, change: "up", isUser: true },
    ],
    month: [
      { rank: 1, name: "resilient_coder", level: 5, shield: "Diamante", points: 1242, change: "up" },
      { rank: 2, name: "hex0verflow", level: 5, shield: "Diamante", points: 1187, change: "down" },
      { rank: 3, name: "continuity_guru", level: 4, shield: "Platino", points: 976, change: "up" },
      { rank: 4, name: "crisis_master", level: 4, shield: "Platino", points: 923, change: "down" },
      { rank: 5, name: "defender123", level: 3, shield: "Oro", points: 845, change: "same" },
      { rank: 6, name: "shield_maiden", level: 3, shield: "Oro", points: 789, change: "up" },
      { rank: 7, name: "recovery_wizard", level: 2, shield: "Plata", points: 754, change: "down" },
      { rank: 8, name: "backup_queen", level: 2, shield: "Plata", points: 732, change: "down" },
      { rank: 9, name: "patch_expert", level: 2, shield: "Plata", points: 687, change: "up" },
      { rank: 15, name: "Tú", level: 1, shield: "Bronce", points: 543, change: "up", isUser: true },
    ],
    all: [
      { rank: 1, name: "resilient_coder", level: 5, shield: "Diamante", points: 5432, change: "same" },
      { rank: 2, name: "continuity_guru", level: 5, shield: "Diamante", points: 4987, change: "up" },
      { rank: 3, name: "hex0verflow", level: 5, shield: "Diamante", points: 4576, change: "down" },
      { rank: 4, name: "crisis_master", level: 4, shield: "Platino", points: 4123, change: "up" },
      { rank: 5, name: "defender123", level: 4, shield: "Platino", points: 3986, change: "down" },
      { rank: 6, name: "shield_maiden", level: 3, shield: "Oro", points: 3754, change: "up" },
      { rank: 7, name: "backup_queen", level: 3, shield: "Oro", points: 3421, change: "same" },
      { rank: 8, name: "recovery_wizard", level: 3, shield: "Oro", points: 3265, change: "down" },
      { rank: 9, name: "patch_expert", level: 2, shield: "Plata", points: 2987, change: "up" },
      { rank: 24, name: "Tú", level: 1, shield: "Bronce", points: 2143, change: "up", isUser: true },
    ]
  };
  
  const currentData = leaderboardData[timeFrame];

  const changeIcon = (change: string) => {
    switch(change) {
      case 'up': 
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down': 
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default: 
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };
  
  const getShieldColor = (shield: string): string => {
    switch(shield) {
      case 'Bronce': return 'text-amber-600';
      case 'Plata': return 'text-gray-400';
      case 'Oro': return 'text-amber-400';
      case 'Platino': return 'text-blue-400';
      case 'Diamante': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center">
          <Terminal className="h-6 w-6 text-green-400 mr-2" />
          <h3 className="font-bold text-xl text-white">Tabla de Clasificación</h3>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant={timeFrame === 'week' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('week')}
            className={timeFrame === 'week' 
              ? 'bg-purple-900 text-white' 
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'}
          >
            Semana
          </Button>
          <Button 
            variant={timeFrame === 'month' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('month')}
            className={timeFrame === 'month' 
              ? 'bg-purple-900 text-white' 
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'}
          >
            Mes
          </Button>
          <Button 
            variant={timeFrame === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('all')}
            className={timeFrame === 'all' 
              ? 'bg-purple-900 text-white' 
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'}
          >
            General
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-purple-900 to-blue-900 text-white flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
          <span className="font-semibold">Hall of Fame - Maestros de la Contingencia</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Usuario</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-400">Escudo</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-400">Puntos</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-400">Cambio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {currentData.map((user) => (
                <tr 
                  key={user.rank} 
                  className={`${user.isUser ? 'bg-purple-900/20' : ''} hover:bg-gray-800/50`}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    {user.rank <= 3 ? (
                      <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full
                        ${user.rank === 1 ? 'bg-yellow-900/30 text-yellow-400' :
                          user.rank === 2 ? 'bg-gray-700/30 text-gray-300' :
                          'bg-orange-900/30 text-orange-400'}
                      `}>
                        <Medal className="h-5 w-5" />
                      </div>
                    ) : (
                      <span className="text-gray-400">{user.rank}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      {user.isUser ? (
                        <div className="h-8 w-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center text-sm font-medium text-purple-400">
                          <UserCircle className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm font-medium text-gray-400">
                          <User className="h-5 w-5" />
                        </div>
                      )}
                      <div className="ml-3">
                        <div className={`text-sm font-medium ${user.isUser ? 'text-purple-400' : 'text-gray-200'}`}>
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Nivel {user.level}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <div className="flex justify-center">
                      <Shield className={`h-5 w-5 ${getShieldColor(user.shield)}`} />
                      <span className="ml-1 text-xs text-gray-400">{user.shield}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-gray-200">
                    {user.points}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end">
                      {changeIcon(user.change)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-4 py-3 bg-gray-800 text-center">
          <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700">
            Ver ranking completo
          </Button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-purple-800/50 rounded-lg text-center">
        <p className="text-blue-300 mb-2">¡Captura más flags y sube en el ranking para desbloquear herramientas exclusivas!</p>
        <Button className="bg-purple-900 hover:bg-purple-800 text-white">
          Ver desafíos disponibles
        </Button>
      </div>
    </div>
  );
};

export default LeaderboardSection;
