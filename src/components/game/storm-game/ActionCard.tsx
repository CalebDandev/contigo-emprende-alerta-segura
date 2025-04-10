
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Check } from 'lucide-react';

interface Action {
  id: string;
  title: string;
  description: string;
  impact: {
    economy: number;
    trust: number;
    morale: number;
  };
  category: string;
  icon: React.ReactNode;
}

interface ActionCardProps {
  action: Action;
  onSelect: () => void;
  disabled?: boolean;
  isSelected?: boolean;
}

const ActionCard: React.FC<ActionCardProps> = ({ action, onSelect, disabled = false, isSelected = false }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-200 border ${isSelected ? 'border-blue-400 shadow-md ring-2 ring-blue-200' : 'border-gray-200 hover:shadow-md'} ${disabled && !isSelected ? 'opacity-60' : ''}`}>
      <CardContent className="p-4">
        <div className="flex gap-4 mb-3">
          <div className="bg-white shadow-sm rounded-lg p-2 flex-shrink-0">
            {action.icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{action.title}</h3>
            <p className="text-sm text-gray-600">{action.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs mt-4 bg-gray-50 p-2 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500 mb-1">Economía</span>
            {action.impact.economy > 0 ? (
              <div className="text-green-600 flex items-center font-medium">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.economy}
              </div>
            ) : (
              <div className="text-red-600 flex items-center font-medium">
                <ArrowDown className="h-3 w-3 mr-0.5" />
                {Math.abs(action.impact.economy)}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500 mb-1">Confianza</span>
            {action.impact.trust > 0 ? (
              <div className="text-green-600 flex items-center font-medium">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.trust}
              </div>
            ) : (
              <div className="text-red-600 flex items-center font-medium">
                <ArrowDown className="h-3 w-3 mr-0.5" />
                {Math.abs(action.impact.trust)}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500 mb-1">Moral</span>
            {action.impact.morale > 0 ? (
              <div className="text-green-600 flex items-center font-medium">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.morale}
              </div>
            ) : (
              <div className="text-red-600 flex items-center font-medium">
                <ArrowDown className="h-3 w-3 mr-0.5" />
                {Math.abs(action.impact.morale)}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-3 flex justify-center">
        <Button 
          onClick={onSelect}
          variant={isSelected ? "default" : "outline"}
          disabled={disabled && !isSelected}
          className={`w-full ${isSelected ? 'bg-gradient-bcp' : 'border-gray-300 hover:bg-gray-100 hover:text-gray-800'}`}
        >
          {isSelected ? (
            <>
              <Check className="mr-1 h-4 w-4" /> Acción seleccionada
            </>
          ) : (
            'Seleccionar acción'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActionCard;
