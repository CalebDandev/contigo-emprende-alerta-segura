
import React from 'react';
import { Shield, FileCheck, AlertTriangle, Lightbulb, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PracticalChallenges = () => {
  const challenges = [
    {
      id: 'plan-emergencia',
      title: 'Plan de Emergencia',
      description: 'Desarrolla un plan de emergencia si se interrumpe tu cadena de suministros.',
      category: 'Prevención',
      difficulty: 'Intermedio',
      reward: 50,
      icon: <Shield className="h-6 w-6 text-bcp-blue" />,
      timeEstimate: '45 minutos',
      location: 'Online'
    },
    {
      id: 'protocolos',
      title: 'Protocolos de Contingencia',
      description: 'Implementa protocolos para eventos naturales comunes en tu zona.',
      category: 'Seguridad',
      difficulty: 'Avanzado',
      reward: 75,
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      timeEstimate: '60 minutos',
      location: 'Online'
    },
    {
      id: 'inventario',
      title: 'Asegura tu Inventario',
      description: 'Asegura tu inventario ante un corte de luz prolongado.',
      category: 'Operaciones',
      difficulty: 'Básico',
      reward: 40,
      icon: <FileCheck className="h-6 w-6 text-green-600" />,
      timeEstimate: '30 minutos',
      location: 'Online'
    }
  ];

  return (
    <section className="bcp-section bg-white py-16">
      <div className="bcp-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Desafíos Prácticos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Completa retos reales aplicados a tu negocio para incrementar su resiliencia ante situaciones de crisis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bcp-card flex flex-col h-full border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  {challenge.icon}
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-800">
                  {challenge.category}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{challenge.description}</p>
              
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-1" />
                  <span>{challenge.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{challenge.location}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">
                    Tiempo estimado: {challenge.timeEstimate}
                  </span>
                  <span className="text-sm font-medium text-amber-600 flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    {challenge.reward} Soles de Resiliencia
                  </span>
                </div>
                
                <Button className="w-full bg-gradient-bcp">Comenzar desafío</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-bcp-blue text-bcp-blue">
            Ver todos los desafíos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticalChallenges;
