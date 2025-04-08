
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy,
  Medal, 
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

const LeaderboardSection: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<'week' | 'month' | 'all'>('week');
  
  const leaderboardData = {
    week: [
      { rank: 1, name: "Isabel Mendoza", points: 532, change: "up" },
      { rank: 2, name: "Carlos Rodríguez", points: 487, change: "same" },
      { rank: 3, name: "María Gutiérrez", points: 456, change: "up" },
      { rank: 4, name: "José Peralta", points: 423, change: "down" },
      { rank: 5, name: "Ana Carrión", points: 412, change: "up" },
      { rank: 6, name: "Marcos Delgado", points: 389, change: "down" },
      { rank: 7, name: "Roberto Chávez", points: 375, change: "same" },
      { rank: 8, name: "Sebastián García", points: 354, change: "up" },
      { rank: 9, name: "Lucía Benavides", points: 343, change: "down" },
      { rank: 10, name: "Tú", points: 326, change: "up", isUser: true },
    ],
    month: [
      { rank: 1, name: "Carlos Rodríguez", points: 1242, change: "up" },
      { rank: 2, name: "Isabel Mendoza", points: 1187, change: "down" },
      { rank: 3, name: "Roberto Chávez", points: 976, change: "up" },
      { rank: 4, name: "María Gutiérrez", points: 923, change: "down" },
      { rank: 5, name: "José Peralta", points: 845, change: "same" },
      { rank: 6, name: "Lucía Benavides", points: 789, change: "up" },
      { rank: 7, name: "Marcos Delgado", points: 754, change: "down" },
      { rank: 8, name: "Ana Carrión", points: 732, change: "down" },
      { rank: 9, name: "Sebastián García", points: 687, change: "up" },
      { rank: 15, name: "Tú", points: 543, change: "up", isUser: true },
    ],
    all: [
      { rank: 1, name: "Carlos Rodríguez", points: 5432, change: "same" },
      { rank: 2, name: "Roberto Chávez", points: 4987, change: "up" },
      { rank: 3, name: "Isabel Mendoza", points: 4576, change: "down" },
      { rank: 4, name: "María Gutiérrez", points: 4123, change: "up" },
      { rank: 5, name: "José Peralta", points: 3986, change: "down" },
      { rank: 6, name: "Lucía Benavides", points: 3754, change: "up" },
      { rank: 7, name: "Ana Carrión", points: 3421, change: "same" },
      { rank: 8, name: "Marcos Delgado", points: 3265, change: "down" },
      { rank: 9, name: "Sebastián García", points: 2987, change: "up" },
      { rank: 24, name: "Tú", points: 2143, change: "up", isUser: true },
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

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-xl">Tabla de Clasificación</h3>
        <div className="flex space-x-2">
          <Button 
            variant={timeFrame === 'week' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('week')}
          >
            Semana
          </Button>
          <Button 
            variant={timeFrame === 'month' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('month')}
          >
            Mes
          </Button>
          <Button 
            variant={timeFrame === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTimeFrame('all')}
          >
            General
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 bg-bcp-blue text-white flex items-center">
          <Trophy className="h-5 w-5 mr-2" />
          <span className="font-semibold">Las mejores puntuaciones</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Posición</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Emprendedor</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">AlertaCoins</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Cambio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((user) => (
                <tr 
                  key={user.rank} 
                  className={`${user.isUser ? 'bg-blue-50' : ''} hover:bg-gray-50`}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    {user.rank <= 3 ? (
                      <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full
                        ${user.rank === 1 ? 'bg-amber-100 text-amber-800' :
                          user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                          'bg-orange-100 text-orange-800'}
                      `}>
                        <Medal className="h-5 w-5" />
                      </div>
                    ) : (
                      <span className="text-gray-600">{user.rank}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
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
        
        <div className="px-4 py-3 bg-gray-50 text-center">
          <Button variant="outline" size="sm">Ver ranking completo</Button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
        <p className="text-bcp-blue mb-2">¡Juega más y sube en el ranking para desbloquear recompensas exclusivas!</p>
        <Button>Ver desafíos disponibles</Button>
      </div>
    </div>
  );
};

export default LeaderboardSection;
