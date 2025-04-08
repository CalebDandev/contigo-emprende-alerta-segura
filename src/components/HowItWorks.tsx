
import React from 'react';
import { ClipboardCheck, BarChart, FileText, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación de riesgo",
      description: "Responde preguntas clave sobre tu negocio para identificar vulnerabilidades"
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Perfil de riesgo",
      description: "Recibe un análisis visual de los riesgos específicos para tu tipo de negocio"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Plan personalizado",
      description: "Obtén un plan estructurado en 3 etapas: prevención, respuesta y recuperación"
    },
    {
      icon: <Download className="h-8 w-8 text-white" />,
      title: "Implementación",
      description: "Descarga, comparte y sigue el progreso de tu plan de continuidad"
    }
  ];

  return (
    <section className="bcp-section bg-gray-50">
      <div className="bcp-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">¿Cómo funciona?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alerta Segura te guía paso a paso para crear un plan a medida para tu negocio
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-bcp-blue h-16 w-16 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/evaluacion" className="bcp-button-primary inline-flex items-center">
            Comenzar evaluación
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
