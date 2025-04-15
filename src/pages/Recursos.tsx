
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Video, Bookmark, Download, ExternalLink } from 'lucide-react';
import RoadmapSection from '../components/RoadmapSection';
import { Link } from 'react-router-dom';

const Recursos = () => {
  const resources = [
    {
      category: "Guías y manuales",
      icon: <FileText className="h-6 w-6 text-bcp-blue" />,
      items: [
        {
          title: "Manual de primeros auxilios para emergencias",
          description: "Guía básica de primeros auxilios para situaciones de emergencia en negocios.",
          type: "PDF",
          size: "2.3 MB"
        },
        {
          title: "Guía de preparación ante desastres naturales",
          description: "Recomendaciones específicas para diferentes tipos de desastres naturales.",
          type: "PDF",
          size: "4.1 MB"
        },
        {
          title: "Lista de verificación de seguridad para comercios",
          description: "Checklist completo para evaluar la seguridad física de tu local comercial.",
          type: "PDF",
          size: "1.8 MB"
        }
      ]
    },
    {
      category: "Videos educativos",
      icon: <Video className="h-6 w-6 text-bcp-blue" />,
      items: [
        {
          title: "Cómo elaborar un plan de evacuación",
          description: "Tutorial paso a paso para crear un plan de evacuación efectivo para tu negocio.",
          duration: "8:42 min"
        },
        {
          title: "Respuesta rápida ante emergencias",
          description: "Técnicas y procedimientos para responder rápidamente ante situaciones críticas.",
          duration: "12:15 min"
        },
        {
          title: "Recuperación financiera después de un desastre",
          description: "Consejos expertos para la gestión financiera post-emergencia.",
          duration: "15:30 min"
        }
      ]
    },
    {
      category: "Plantillas y formatos",
      icon: <Bookmark className="h-6 w-6 text-bcp-blue" />,
      items: [
        {
          title: "Plantilla de plan de continuidad de negocio",
          description: "Documento editable para desarrollar un plan completo de continuidad.",
          type: "DOCX",
          size: "320 KB"
        },
        {
          title: "Formato de inventario de activos críticos",
          description: "Hoja de cálculo para registrar y valorar los activos importantes del negocio.",
          type: "XLSX",
          size: "250 KB"
        },
        {
          title: "Directorio de contactos de emergencia",
          description: "Plantilla para organizar los contactos esenciales durante una crisis.",
          type: "DOCX",
          size: "180 KB"
        }
      ]
    }
  ];

  // Updated course names and descriptions
  const courses = [
    {
      id: 1,
      title: "Conoce los procesos clave de tu negocio",
      description: "Identifica qué actividades son esenciales para que tu negocio siga funcionando.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Inicial",
      completed: true,
      duration: "45 min"
    },
    {
      id: 2,
      title: "Protege lo más importante",
      description: "Asegura tus recursos clave como maquinaria, inventario, proveedores y personal.",
      image: "https://images.unsplash.com/photo-1551703466-989478b447fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Inicial",
      completed: true,
      duration: "50 min"
    },
    {
      id: 3,
      title: "Crea un fondo de emergencia",
      description: "Ahorra dinero para poder enfrentar imprevistos sin afectar tus operaciones.",
      image: "https://images.unsplash.com/photo-1593672755342-741a7f868732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Intermedio",
      completed: false,
      duration: "60 min"
    },
    {
      id: 4,
      title: "Digitaliza tu información importante",
      description: "Usa herramientas digitales para respaldar datos, registros de clientes y documentos clave.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Intermedio",
      completed: false,
      duration: "55 min"
    },
    {
      id: 5,
      title: "Prepara un plan de comunicación en emergencias",
      description: "Define cómo avisar a tus clientes, proveedores y equipo si ocurre una emergencia.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Avanzado",
      completed: false,
      duration: "65 min"
    },
    {
      id: 6,
      title: "Planifica cómo continuar operando y reabastecerte",
      description: "Organiza cómo seguir vendiendo, produciendo o prestando servicios tras una emergencia.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      level: "Nivel Avanzado",
      completed: false,
      duration: "70 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="bcp-container">
            <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="text-gray-500 hover:text-bcp-blue">Inicio</Link>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <Link to="/" className="text-gray-500 hover:text-bcp-blue">Contigo Emprendedor</Link>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li className="text-bcp-blue font-medium" aria-current="page">
                  Cursos y Recursos
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Roadmap Section with updated courses */}
        {/* Here we ensure we pass the correct props */}
        <RoadmapSection courses={courses} />
        
        {/* Resources Section */}
        <section className="bcp-section bg-white">
          <div className="bcp-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Recursos para emprendedores</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accede a materiales educativos gratuitos para fortalecer la resiliencia de tu negocio ante emergencias
              </p>
            </div>
            
            <div className="space-y-12">
              {resources.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    {category.icon}
                    <span className="ml-3">{category.category}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bcp-card flex flex-col h-full">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          <p className="text-gray-600 mt-2 mb-4">{item.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="text-sm text-gray-500">
                            {item.type && `${item.type} · `}
                            {item.size && item.size}
                            {item.duration && item.duration}
                          </div>
                          
                          <button className="flex items-center text-bcp-blue hover:underline font-medium">
                            {category.category.includes("Videos") ? (
                              <>
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Ver video
                              </>
                            ) : (
                              <>
                                <Download className="h-4 w-4 mr-1" />
                                Descargar
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-semibold mb-2">¿Necesitas recursos específicos?</h3>
                  <p className="text-gray-700">
                    Si requieres información adicional o herramientas específicas para tu tipo de negocio, nuestro equipo de especialistas puede ayudarte.
                  </p>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <a href="#" className="bcp-button-primary inline-block">
                    Solicitar asesoría
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recursos;
