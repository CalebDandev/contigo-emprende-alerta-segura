
import React from 'react';
import { FileText, Video, BookOpen, Users } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="h-8 w-8 text-bcp-blue" />,
      title: "Guías de preparación",
      description: "Descarga guías detalladas para diferentes tipos de emergencias",
      linkText: "Ver guías"
    },
    {
      icon: <Video className="h-8 w-8 text-bcp-blue" />,
      title: "Tutoriales en video",
      description: "Aprende con nuestros videos instructivos sobre gestión de riesgos",
      linkText: "Ver videos"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-bcp-blue" />,
      title: "Plantillas útiles",
      description: "Accede a plantillas para documentar y gestionar emergencias",
      linkText: "Descargar plantillas"
    },
    {
      icon: <Users className="h-8 w-8 text-bcp-blue" />,
      title: "Comunidad de emprendedores",
      description: "Conecta con otros emprendedores para compartir experiencias",
      linkText: "Unirte (Próximamente)"
    }
  ];

  return (
    <section className="bcp-section bg-white">
      <div className="bcp-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Recursos para emprendedores</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a herramientas gratuitas que te ayudarán a fortalecer la resiliencia de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bcp-card flex flex-col h-full"
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
              <a 
                href="#" 
                className="text-bcp-blue font-medium flex items-center hover:underline mt-auto"
              >
                {resource.linkText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
