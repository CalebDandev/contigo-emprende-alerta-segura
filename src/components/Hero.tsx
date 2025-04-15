
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, FileCheck, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-bcp text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4fd2ab62-4be0-4ae5-bbd2-dca25ed41e1b.png')] bg-cover bg-center opacity-20"></div>
      <div className="bcp-container relative z-10">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Escudo BCP
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Una plataforma que te ayuda a proteger tu emprendimiento de los fenómenos naturales
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start bg-white/10 rounded-lg p-3">
                <Target className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Conocer tu perfil de riesgo</h3>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 rounded-lg p-3">
                <FileCheck className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Crear un plan de contingencia paso a paso</h3>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 rounded-lg p-3">
                <ShieldCheck className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Misiones aplicadas a tu negocio</h3>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 rounded-lg p-3">
                <Award className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Puntos de resiliencia para beneficios exclusivos</h3>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 rounded-lg p-3 md:col-span-2">
                <Users className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Red de colaboración entre emprendedores y voluntarios BCP</h3>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/evaluacion" className="bcp-button-primary flex items-center">
                Evalúa tu negocio 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/recursos" className="bg-white text-bcp-blue font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center">
                Módulos gratuitos
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
                    Diagnóstico Rápido
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    ¿Sabes si tu negocio está preparado para enfrentar una emergencia? Responde este breve cuestionario y descubre tu nivel de resiliencia.
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-bcp-danger mr-2"></div>
                      <div className="font-medium">Tu negocio podría estar en riesgo</div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-bcp-warning mr-2"></div>
                      <div className="font-medium">En proceso de preparación</div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-bcp-success mr-2"></div>
                      <div className="font-medium">Negocio protegido</div>
                    </div>
                  </div>
                  
                  <Link to="/evaluacion" className="bcp-button-primary w-full block text-center">
                    Iniciar diagnóstico gratuito
                  </Link>
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
