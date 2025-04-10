
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  File, 
  FileText, 
  Download,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageSquare,
  HelpCircle,
  User
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CourseView = () => {
  const { courseId } = useParams();
  const [activeModule, setActiveModule] = useState(1);
  const [activePage, setActivePage] = useState(1);
  
  // Mock course data - in a real app, you would fetch this based on the courseId
  const courseData = {
    id: 'curso-1',
    title: 'Fundamentos de resiliencia empresarial',
    description: 'Conceptos básicos para preparar tu negocio ante situaciones adversas.',
    progress: 35,
    instructor: 'Carlos Rodríguez',
    instructorRole: 'Especialista en Gestión de Crisis',
    duration: '2 horas',
    lastUpdate: '10 de abril, 2025',
    modules: [
      {
        id: 1,
        title: 'Introducción a la resiliencia empresarial',
        completed: true,
        pages: [
          { id: 1, title: 'Bienvenida al curso', type: 'video', duration: '5:20', completed: true },
          { id: 2, title: '¿Qué es la resiliencia empresarial?', type: 'content', duration: '8 min', completed: true },
          { id: 3, title: 'Importancia para tu negocio', type: 'content', duration: '6 min', completed: true },
          { id: 4, title: 'Cuestionario inicial', type: 'quiz', questions: 5, completed: true }
        ]
      },
      {
        id: 2,
        title: 'Identificación de riesgos potenciales',
        completed: false,
        pages: [
          { id: 1, title: 'Tipos de riesgos empresariales', type: 'video', duration: '7:45', completed: true },
          { id: 2, title: 'Riesgos específicos por sector', type: 'content', duration: '10 min', completed: true },
          { id: 3, title: 'Herramientas para mapeo de riesgos', type: 'interactive', duration: '12 min', completed: false },
          { id: 4, title: 'Actividad práctica: Mapa de riesgos', type: 'activity', duration: '15 min', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Planes de contingencia básicos',
        completed: false,
        pages: [
          { id: 1, title: 'Elementos de un plan de contingencia', type: 'video', duration: '8:30', completed: false },
          { id: 2, title: 'Plantillas y ejemplos', type: 'download', size: '2.3 MB', completed: false },
          { id: 3, title: 'Adaptación a tu negocio', type: 'content', duration: '9 min', completed: false },
          { id: 4, title: 'Evaluación intermedia', type: 'quiz', questions: 8, completed: false }
        ]
      },
      {
        id: 4,
        title: 'Comunicación de crisis',
        completed: false,
        pages: [
          { id: 1, title: 'Principios de comunicación efectiva', type: 'video', duration: '6:15', completed: false },
          { id: 2, title: 'Plantillas de comunicados', type: 'download', size: '1.8 MB', completed: false },
          { id: 3, title: 'Simulación de crisis', type: 'interactive', duration: '20 min', completed: false }
        ]
      },
      {
        id: 5,
        title: 'Recuperación y mejora continua',
        completed: false,
        pages: [
          { id: 1, title: 'Fases de recuperación', type: 'content', duration: '7 min', completed: false },
          { id: 2, title: 'Indicadores de seguimiento', type: 'content', duration: '8 min', completed: false },
          { id: 3, title: 'Implementación práctica', type: 'activity', duration: '25 min', completed: false },
          { id: 4, title: 'Certificación final', type: 'quiz', questions: 10, completed: false }
        ]
      }
    ]
  };

  const currentModule = courseData.modules.find(module => module.id === activeModule) || courseData.modules[0];
  const currentPage = currentModule.pages.find(page => page.id === activePage) || currentModule.pages[0];
  
  const totalPages = courseData.modules.reduce((total, module) => total + module.pages.length, 0);
  const completedPages = courseData.modules.reduce((total, module) => {
    return total + module.pages.filter(page => page.completed).length;
  }, 0);
  
  const overallProgress = Math.round((completedPages / totalPages) * 100);

  const navigateToNextPage = () => {
    const currentModuleIndex = courseData.modules.findIndex(m => m.id === activeModule);
    const currentPageIndex = currentModule.pages.findIndex(p => p.id === activePage);
    
    if (currentPageIndex < currentModule.pages.length - 1) {
      // Next page in the same module
      setActivePage(currentModule.pages[currentPageIndex + 1].id);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      // First page of the next module
      setActiveModule(courseData.modules[currentModuleIndex + 1].id);
      setActivePage(courseData.modules[currentModuleIndex + 1].pages[0].id);
    }
  };

  const navigateToPrevPage = () => {
    const currentModuleIndex = courseData.modules.findIndex(m => m.id === activeModule);
    const currentPageIndex = currentModule.pages.findIndex(p => p.id === activePage);
    
    if (currentPageIndex > 0) {
      // Previous page in the same module
      setActivePage(currentModule.pages[currentPageIndex - 1].id);
    } else if (currentModuleIndex > 0) {
      // Last page of the previous module
      const prevModule = courseData.modules[currentModuleIndex - 1];
      setActiveModule(prevModule.id);
      setActivePage(prevModule.pages[prevModule.pages.length - 1].id);
    }
  };

  const getIconForPageType = (type) => {
    switch(type) {
      case 'video': return <PlayCircle className="h-4 w-4" />;
      case 'content': return <FileText className="h-4 w-4" />;
      case 'quiz': return <MessageSquare className="h-4 w-4" />;
      case 'activity': return <User className="h-4 w-4" />;
      case 'download': return <Download className="h-4 w-4" />;
      case 'interactive': return <HelpCircle className="h-4 w-4" />;
      default: return <File className="h-4 w-4" />;
    }
  };

  // Simulate page content based on type
  const renderPageContent = () => {
    switch(currentPage.type) {
      case 'video':
        return (
          <div className="aspect-video bg-gray-800 rounded-lg mb-8 overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <PlayCircle className="h-16 w-16 text-white/60 mx-auto mb-4" />
                <p className="text-white text-lg">Video: {currentPage.title}</p>
                <p className="text-white/70">Duración: {currentPage.duration}</p>
              </div>
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="prose max-w-none mb-8">
            <h2>{currentPage.title}</h2>
            <p>
              La resiliencia empresarial es la capacidad de una organización para anticipar, prepararse, responder y adaptarse 
              a cambios incrementales y disrupciones repentinas para sobrevivir y prosperar. En el contexto de pequeños 
              emprendimientos, esto significa tener la capacidad de recuperarse rápidamente de situaciones adversas, como 
              desastres naturales, crisis económicas o cambios en el mercado.
            </p>
            <p>
              Los negocios resilientes se caracterizan por:
            </p>
            <ul>
              <li>Capacidad de adaptación al cambio</li>
              <li>Redundancia en sistemas críticos</li>
              <li>Planificación previa para diferentes escenarios</li>
              <li>Cultura organizacional que fomenta la innovación y flexibilidad</li>
              <li>Sistemas de alerta temprana</li>
            </ul>
            <p>
              Desarrollar estas capacidades permitirá a tu negocio no solo sobrevivir en tiempos difíciles, sino incluso 
              encontrar oportunidades de crecimiento durante las crisis.
            </p>
          </div>
        );
      case 'quiz':
        return (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Cuestionario: {currentPage.title}</h3>
            <p className="mb-4">Este cuestionario consta de {currentPage.questions} preguntas y evaluará tu comprensión de los conceptos clave de este módulo.</p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="font-medium mb-2">1. ¿Cuál de las siguientes NO es una característica de un negocio resiliente?</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="q1a" name="q1" className="mr-2" />
                    <label htmlFor="q1a">Flexibilidad operativa</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="q1b" name="q1" className="mr-2" />
                    <label htmlFor="q1b">Planificación de contingencia</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="q1c" name="q1" className="mr-2" />
                    <label htmlFor="q1c">Resistencia al cambio</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="q1d" name="q1" className="mr-2" />
                    <label htmlFor="q1d">Diversificación de recursos</label>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="font-medium mb-2">2. ¿Por qué es importante tener un plan de resiliencia para tu negocio?</p>
                {/* More quiz questions would be here */}
              </div>
            </div>
            <Button className="w-full">Enviar respuestas</Button>
          </div>
        );
      case 'download':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 flex flex-col items-center text-center">
            <FileText className="h-16 w-16 text-bcp-blue mb-4" />
            <h3 className="text-xl font-bold mb-2">{currentPage.title}</h3>
            <p className="mb-4">Este recurso descargable contiene plantillas y ejemplos que podrás utilizar en tu negocio.</p>
            <p className="text-sm text-gray-600 mb-6">Formato: PDF • Tamaño: {currentPage.size}</p>
            <Button className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Descargar material
            </Button>
          </div>
        );
      default:
        return (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">{currentPage.title}</h3>
            <p>Contenido de tipo {currentPage.type}.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="bcp-container">
            <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-500 hover:text-bcp-blue">Inicio</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <a href="/" className="text-gray-500 hover:text-bcp-blue">Contigo Emprendedor</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <a href="/" className="text-gray-500 hover:text-bcp-blue">Cursos</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li className="text-bcp-blue font-medium" aria-current="page">
                  {courseData.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="bg-bcp-blue text-white py-6">
          <div className="bcp-container">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">{courseData.title}</h1>
                <p className="text-blue-100">{courseData.description}</p>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center">
                <div className="mr-8">
                  <div className="text-sm text-blue-200 mb-1">Progreso general</div>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-blue-900 rounded-full mr-3">
                      <div 
                        className="h-full bg-white rounded-full" 
                        style={{ width: `${overallProgress}%` }} 
                      />
                    </div>
                    <span className="text-sm font-medium">{overallProgress}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Instructor</div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-800 rounded-full mr-2 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">{courseData.instructor}</div>
                      <div className="text-blue-200 text-xs">{courseData.instructorRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bcp-container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar navigation */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-bcp-blue" />
                    Contenido del curso
                  </h3>
                </div>
                
                <ScrollArea className="h-[calc(100vh-400px)] lg:h-[calc(100vh-300px)]">
                  <div className="p-4 space-y-6">
                    {courseData.modules.map((module) => (
                      <div key={module.id} className="space-y-3">
                        <div className={`flex items-center space-x-3 p-2 rounded ${activeModule === module.id ? 'bg-blue-50 text-bcp-blue' : ''}`}>
                          {module.completed ? 
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> :
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                          }
                          <button 
                            onClick={() => {
                              setActiveModule(module.id);
                              setActivePage(module.pages[0].id);
                            }}
                            className="font-medium text-left"
                          >
                            {module.title}
                          </button>
                        </div>
                        
                        {activeModule === module.id && (
                          <div className="pl-10 space-y-2">
                            {module.pages.map((page) => (
                              <button
                                key={page.id}
                                onClick={() => setActivePage(page.id)}
                                className={`flex items-center text-sm py-1 pl-2 w-full text-left rounded ${activePage === page.id ? 'bg-blue-100' : ''}`}
                              >
                                <span className="mr-2 text-gray-500">
                                  {getIconForPageType(page.type)}
                                </span>
                                <span className={`flex-grow ${page.completed ? 'text-gray-500' : ''}`}>
                                  {page.title}
                                </span>
                                {page.completed && (
                                  <CheckCircle className="h-3 w-3 text-green-500 ml-2" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Duración: {courseData.duration}</span>
                    </div>
                    <div>
                      Actualizado: {courseData.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold mb-3">Recursos adicionales</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-bcp-blue hover:underline">
                      <Download className="h-4 w-4 mr-2" />
                      Guía completa PDF
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-bcp-blue hover:underline">
                      <FileText className="h-4 w-4 mr-2" />
                      Plantillas y formatos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-bcp-blue hover:underline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Foro de preguntas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">{currentPage.title}</h2>
                  <Badge variant="outline" className="flex items-center">
                    {getIconForPageType(currentPage.type)}
                    <span className="ml-1 capitalize">{currentPage.type}</span>
                  </Badge>
                </div>
                
                <div className="mb-8">
                  {renderPageContent()}
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <Button 
                    variant="outline"
                    onClick={navigateToPrevPage}
                    disabled={activeModule === 1 && activePage === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <Button 
                    onClick={navigateToNextPage}
                    className="flex items-center"
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-8">
                <Tabs defaultValue="discussion">
                  <TabsList className="w-full grid grid-cols-3 mb-4">
                    <TabsTrigger value="discussion">Discusión</TabsTrigger>
                    <TabsTrigger value="notes">Mis notas</TabsTrigger>
                    <TabsTrigger value="resources">Recursos</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="discussion" className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4">Discusión del tema</h3>
                    <div className="mb-4">
                      <p className="text-gray-600 mb-4">
                        Comparte tus dudas o comentarios sobre este tema con otros participantes y el instructor.
                      </p>
                      <textarea 
                        className="w-full border border-gray-300 rounded-lg p-3" 
                        rows={3} 
                        placeholder="Escribe tu comentario o pregunta..."
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <Button>Publicar comentario</Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">María González</div>
                          <div className="text-sm text-gray-500">Hace 2 días</div>
                        </div>
                        <p className="text-gray-600">
                          Excelente material. Me gustaría saber si estos conceptos aplican igual para negocios pequeños o principalmente
                          son para empresas medianas.
                        </p>
                        <div className="mt-3 pl-4 border-l-2 border-gray-300">
                          <div className="flex justify-between mb-1">
                            <div className="font-medium text-bcp-blue">Carlos Rodríguez (Instructor)</div>
                            <div className="text-sm text-gray-500">Hace 1 día</div>
                          </div>
                          <p className="text-gray-600">
                            Hola María, los conceptos son adaptables a negocios de cualquier tamaño. En la sección 2.3 veremos
                            ejemplos específicos para microempresas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notes" className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4">Mis notas</h3>
                    <p className="text-gray-600 mb-4">
                      Toma notas para recordar puntos importantes de este tema. Estas notas son privadas y solo tú puedes verlas.
                    </p>
                    <textarea 
                      className="w-full border border-gray-300 rounded-lg p-3" 
                      rows={6} 
                      placeholder="Escribe tus notas aquí..."
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline">Guardar notas</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="resources" className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold mb-4">Recursos de aprendizaje</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center p-2 border-b border-gray-100">
                        <FileText className="h-5 w-5 text-bcp-blue mr-3" />
                        <span className="flex-grow">Guía completa de resiliencia empresarial</span>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
                      </li>
                      <li className="flex items-center p-2 border-b border-gray-100">
                        <PlayCircle className="h-5 w-5 text-bcp-blue mr-3" />
                        <span className="flex-grow">Video: Ejemplos reales de negocios resilientes</span>
                        <Button variant="outline" size="sm">Ver</Button>
                      </li>
                      <li className="flex items-center p-2">
                        <FileText className="h-5 w-5 text-bcp-blue mr-3" />
                        <span className="flex-grow">Plantilla: Evaluación de riesgos</span>
                        <Button variant="outline" size="sm">XLSX</Button>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseView;
