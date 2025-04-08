
import React from 'react';
import { ArrowRight, Award, Gamepad2 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-bcp-blue text-white py-16">
      <div className="bcp-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protege tu negocio hoy mismo</h2>
            <p className="text-lg text-blue-100 max-w-xl">
              Únete a miles de emprendedores que ya están preparados para enfrentar cualquier emergencia con un plan personalizado.
            </p>
            
            <div className="mt-6 bg-white/10 rounded-lg p-4 flex items-start">
              <Award className="h-10 w-10 text-amber-300 mr-4 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-1">¡Nuevo! Aprende jugando</h3>
                <p className="text-blue-100 text-sm">
                  Gana AlertaCoins, desbloquea logros y obtén recompensas mientras aprendes a proteger tu negocio.
                  ¡Comienza a jugar ahora!
                </p>
                <a href="/gamificacion" className="inline-flex items-center mt-3 text-amber-300 hover:text-amber-200 transition-colors">
                  <Gamepad2 className="mr-1 h-4 w-4" />
                  <span className="font-medium">Descubrir juegos</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/evaluacion" className="bcp-button-primary whitespace-nowrap">
              Evaluar mi negocio
              <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </a>
            <a href="/recursos" className="bg-white text-bcp-blue font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
              Ver recursos gratuitos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
