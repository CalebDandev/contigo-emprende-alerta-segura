
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface Metric {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface GameMetricsProps {
  metrics: Metric[];
}

const GameMetrics: React.FC<GameMetricsProps> = ({ metrics }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Estado de tu Negocio</h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className={`p-1 rounded-full ${metric.color.replace('bg-', 'bg-opacity-20 ')}`}>
                  <div className={`${metric.color} rounded-full p-1`}>
                    {metric.icon}
                  </div>
                </div>
                <span className="text-sm font-medium ml-2">{metric.name}</span>
              </div>
              <span className={`text-sm font-medium 
                ${metric.value >= 70 ? 'text-green-600' : 
                metric.value >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
                {metric.value}%
              </span>
            </div>
            <Progress 
              value={metric.value} 
              className={`h-2 ${
                metric.value >= 70 ? 'bg-green-100' : 
                metric.value >= 40 ? 'bg-amber-100' : 'bg-red-100'
              }`}
              indicatorClassName={
                metric.value >= 70 ? 'bg-green-500' : 
                metric.value >= 40 ? 'bg-amber-500' : 'bg-red-500'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMetrics;
