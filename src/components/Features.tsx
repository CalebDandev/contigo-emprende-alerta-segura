
import React from 'react';
import { ShieldAlert, AlertCircle, ArrowUpCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-bcp-blue" />,
      title: "Prevención y preparación",
      description: "Identifica acciones preventivas específicas para tu negocio antes de que ocurra una emergencia."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-bcp-orange" />,
      title: "Durante la emergencia",
      description: "Guía paso a paso de las acciones críticas a tomar mientras enfrentas una situación de crisis."
    },
    {
      icon: <ArrowUpCircle className="h-10 w-10 text-bcp-success" />,
      title: "Recuperación del negocio",
      description: "Estrategias claras para recuperar la operatividad de tu negocio en el menor tiempo posible."
    }
  ];

  return (
    <section className="bcp-section bg-white">
      <div className="bcp-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Protege la continuidad de tu negocio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Con Alerta Segura obtendrás un plan personalizado para proteger tu negocio ante cualquier emergencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bcp-card flex flex-col items-center text-center p-8 transition-transform hover:scale-105"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
