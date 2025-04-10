
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Info } from 'lucide-react';

interface Metric {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface GameMetricsProps {
  metrics: Metric[];
  showDescription?: boolean;
}

const GameMetrics: React.FC<GameMetricsProps> = ({ metrics, showDescription = false }) => {
  // Helper to get status descriptions based on metric value
  const getMetricStatus = (name: string, value: number) => {
    if (value >= 70) {
      if (name === "Economía") return "Estable y resiliente";
      if (name === "Confianza") return "Alta fidelidad de clientes";
      if (name === "Moral") return "Equipo motivado y comprometido";
      return "Excelente";
    } else if (value >= 40) {
      if (name === "Economía") return "Situación ajustada";
      if (name === "Confianza") return "Relaciones correctas";
      if (name === "Moral") return "Equipo estable";
      return "Aceptable";
    } else {
      if (name === "Economía") return "Riesgo financiero";
      if (name === "Confianza") return "Relaciones comprometidas";
      if (name === "Moral") return "Equipo desmoralizado";
      return "Crítico";
    }
  };

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
              showValue={false}
            />
            {showDescription && (
              <p className={`text-xs mt-1 
                ${metric.value >= 70 ? 'text-green-600' : 
                metric.value >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
                {getMetricStatus(metric.name, metric.value)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMetrics;
