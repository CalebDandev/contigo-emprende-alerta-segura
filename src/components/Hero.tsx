
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-bcp text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4fd2ab62-4be0-4ae5-bbd2-dca25ed41e1b.png')] bg-cover bg-center opacity-20"></div>
      <div className="bcp-container relative z-10">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <div className="inline-block bg-bcp-orange text-white px-4 py-1 rounded-full text-sm mb-4">
              Nueva herramienta
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contigo Emprendedor<br />
              <span className="text-bcp-orange">Alerta Segura</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Protege tu negocio ante emergencias con un plan personalizado que te ayudará a prevenir, actuar y recuperarte.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/evaluacion" className="bcp-button-primary flex items-center">
                Evalúa tu negocio 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/recursos" className="bg-white text-bcp-blue font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center">
                Recursos gratuitos
                <ShieldCheck className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slide-in">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-bcp-blue p-4 text-white">
                  <h3 className="font-semibold text-xl flex items-center">
                    <ShieldCheck className="mr-2" />
                    Alerta Segura
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-bcp-danger mr-2"></div>
                    <div className="font-medium">Alto riesgo</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-bcp-warning mr-2"></div>
                    <div className="font-medium">Medio riesgo</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-bcp-success mr-2"></div>
                    <div className="font-medium">Bajo riesgo</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg mt-4">
                    <p className="text-sm text-gray-700">
                      Evalúa y conoce el nivel de preparación de tu negocio ante emergencias.
                    </p>
                  </div>
                  <button className="bcp-button-primary w-full mt-4">
                    Iniciar diagnóstico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
