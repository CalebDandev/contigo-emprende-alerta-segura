
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CloudLightning, Shield, ArrowRight } from 'lucide-react';

interface GameIntroProps {
  onStart: () => void;
}

const GameIntro: React.FC<GameIntroProps> = ({ onStart }) => {
  return (
    <Card className="border-0 shadow-none text-center">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-bcp-blue text-white pb-16 pt-12 px-8">
        <div className="mx-auto mb-6 bg-white/10 p-4 rounded-full inline-flex">
          <CloudLightning className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold mb-3">Tormenta Inminente</CardTitle>
        <p className="text-blue-100 text-lg">
          Tu negocio está creciendo... pero algo se avecina.<br />
          ¿Estás preparado para lo inesperado?
        </p>
      </CardHeader>
      
      <CardContent className="-mt-10 relative z-10 px-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-xl mb-4 text-bcp-blue">¡Pon a prueba tu capacidad de resiliencia!</h3>
          
          <p className="text-gray-600 mb-6">
            En este desafío, tomarás decisiones críticas para preparar, enfrentar y recuperar tu negocio
            ante una crisis inesperada. Cada elección impactará en tu economía, la confianza de tus clientes
            y la moral de tu equipo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold flex items-center text-blue-700">
                <Shield className="h-4 w-4 mr-2" />
                Preparación
              </h4>
              <p className="text-sm text-gray-600">5 rondas para prepararte antes de la crisis</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold flex items-center text-red-700">
                <CloudLightning className="h-4 w-4 mr-2" />
                Crisis
              </h4>
              <p className="text-sm text-gray-600">3 rondas enfrentando eventos críticos</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold flex items-center text-green-700">
                <ArrowRight className="h-4 w-4 mr-2" />
                Recuperación
              </h4>
              <p className="text-sm text-gray-600">2 rondas para reconstruir tu negocio</p>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-amber-800 mb-2">Consejo clave:</h4>
            <p className="text-amber-700 text-sm">
              "Elige sabiamente. Cada acción puede marcar la diferencia cuando la tormenta llegue.
              La resiliencia no es evitar las crisis, sino estar preparado para enfrentarlas."
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-center pb-8">
        <Button 
          onClick={onStart} 
          size="lg"
          className="bg-gradient-bcp text-white px-8 py-6 text-lg"
        >
          Comenzar Desafío <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameIntro;
