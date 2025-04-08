
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
