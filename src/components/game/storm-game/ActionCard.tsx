
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

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
}

const ActionCard: React.FC<ActionCardProps> = ({ action, onSelect, disabled = false }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
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
        
        <div className="grid grid-cols-3 gap-2 text-xs mt-4">
          <div className="flex items-center justify-center">
            <span className="mr-1">Economía:</span>
            {action.impact.economy > 0 ? (
              <div className="text-green-600 flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.economy}
              </div>
            ) : (
              <div className="text-red-600 flex items-center">
                <ArrowDown className="h-3 w-3 mr-0.5" />
                {Math.abs(action.impact.economy)}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-center">
            <span className="mr-1">Confianza:</span>
            {action.impact.trust > 0 ? (
              <div className="text-green-600 flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.trust}
              </div>
            ) : (
              <div className="text-red-600 flex items-center">
                <ArrowDown className="h-3 w-3 mr-0.5" />
                {Math.abs(action.impact.trust)}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-center">
            <span className="mr-1">Moral:</span>
            {action.impact.morale > 0 ? (
              <div className="text-green-600 flex items-center">
                <ArrowUp className="h-3 w-3 mr-0.5" />
                {action.impact.morale}
              </div>
            ) : (
              <div className="text-red-600 flex items-center">
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
          variant="outline"
          disabled={disabled}
          className="w-full border-gray-300 hover:bg-gray-100 hover:text-gray-800"
        >
          Seleccionar acción
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActionCard;
