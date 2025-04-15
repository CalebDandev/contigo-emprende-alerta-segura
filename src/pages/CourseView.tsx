
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  PlayCircle,
  FileText,
  ClipboardCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Download,
  MessageSquare,
  Award,
  Bookmark
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '@/components/ui/badge';

interface CourseParams {
  courseId: string;
}

const CourseView: React.FC = () => {
  const { courseId } = useParams<CourseParams>();
  const [activeTab, setActiveTab] = useState("material");
  const [progress, setProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState(1);
  
  // Simulated course data
  const course = {
    id: 1,
    title: "Conoce los procesos clave de tu negocio",
    description: "Identifica qué actividades son esenciales para que tu negocio siga funcionando.",
    instructor: "Carlos Paredes",
    instructorRole: "Especialista en Continuidad de Negocio",
    instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    duration: "45 min",
    level: "Nivel Inicial",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    progress: 25,
    sections: [
      {
        id: 1, 
        title: "Introducción a los procesos de negocio",
        completed: true,
        duration: "5 min",
        type: "video"
      },
      {
        id: 2,
        title: "Identificando actividades esenciales",
        completed: false,
        duration: "15 min",
        type: "video"
      },
      {
        id: 3,
        title: "Guía: Mapeo de procesos críticos",
        completed: false,
        type: "pdf",
        size: "2.3 MB"
      },
      {
        id: 4,
        title: "Evaluación de prioridades",
        completed: false,
        duration: "10 min",
        type: "quiz"
      },
      {
        id: 5,
        title: "Ejercicio práctico",
        completed: false,
        duration: "15 min",
        type: "activity"
      }
    ]
  };

  useEffect(() => {
    // Simulate loading course progress
    setProgress(course.progress);
  }, [course.id]);

  const activeSection = course.sections.find(section => section.id === activeSectionId) || course.sections[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-4">
          <div className="bcp-container">
            <nav className="flex items-center text-sm">
              <Link to="/cursos" className="flex items-center text-gray-600 hover:text-bcp-blue">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a cursos
              </Link>
            </nav>
          </div>
        </div>

        {/* Course Header */}
        <section className="bg-gradient-bcp text-white py-10">
          <div className="bcp-container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-1">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center mb-2">
                    <span className="text-sm">Progreso del curso</span>
                    <span className="ml-auto text-sm">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-white/30" />
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <img 
                        src={course.instructorImage} 
                        alt={course.instructor} 
                        className="h-12 w-12 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{course.instructor}</h3>
                        <p className="text-sm text-gray-600">{course.instructorRole}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Continuar
                      </Button>
                      <Button variant="outline">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-8">
          <div className="bcp-container">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="material">Material del curso</TabsTrigger>
                    <TabsTrigger value="discusion">Discusión</TabsTrigger>
                    <TabsTrigger value="recursos">Recursos</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="material" className="space-y-6">
                    {/* Current Section Display */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h2 className="text-xl font-bold">{activeSection.title}</h2>
                          <Badge variant="outline" className={`
                            ${activeSection.type === 'video' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                              activeSection.type === 'pdf' ? 'bg-red-50 text-red-700 border-red-200' :
                              activeSection.type === 'quiz' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                              'bg-green-50 text-green-700 border-green-200'}
                          `}>
                            {activeSection.type === 'video' ? 'Video' : 
                             activeSection.type === 'pdf' ? 'Documento PDF' : 
                             activeSection.type === 'quiz' ? 'Cuestionario' : 'Actividad'}
                          </Badge>
                        </div>
                        
                        {activeSection.duration && (
                          <p className="text-sm text-gray-600 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Duración: {activeSection.duration}
                          </p>
                        )}
                        {activeSection.size && (
                          <p className="text-sm text-gray-600 flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            Tamaño: {activeSection.size}
                          </p>
                        )}
                      </div>
                      
                      {/* Content based on section type */}
                      {activeSection.type === 'video' && (
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[400px] flex items-center justify-center">
                          <PlayCircle className="h-20 w-20 text-bcp-blue" />
                        </div>
                      )}
                      
                      {activeSection.type === 'pdf' && (
                        <div className="border border-gray-200 rounded-lg p-4 text-center">
                          <FileText className="h-16 w-16 text-red-500 mx-auto mb-4" />
                          <p className="text-gray-700 mb-4">
                            Guía de mapeo de procesos críticos para PYMES
                          </p>
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Descargar PDF
                          </Button>
                        </div>
                      )}
                      
                      {activeSection.type === 'quiz' && (
                        <div>
                          <p className="text-gray-700 mb-6">
                            En este breve cuestionario, evaluaremos tu comprensión sobre la identificación y priorización de procesos de negocio.
                          </p>
                          
                          <div className="space-y-6">
                            <div className="border border-gray-200 rounded-lg p-4">
                              <h3 className="font-medium mb-3">1. ¿Cuál de los siguientes NO es un criterio para determinar si un proceso es crítico?</h3>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="radio" id="q1-a" name="q1" className="mr-3" />
                                  <label htmlFor="q1-a">Impacto financiero</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="radio" id="q1-b" name="q1" className="mr-3" />
                                  <label htmlFor="q1-b">Popularidad del proceso entre los empleados</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="radio" id="q1-c" name="q1" className="mr-3" />
                                  <label htmlFor="q1-c">Satisfacción del cliente</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="radio" id="q1-d" name="q1" className="mr-3" />
                                  <label htmlFor="q1-d">Requisitos legales</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex justify-end">
                            <Button>Verificar respuestas</Button>
                          </div>
                        </div>
                      )}
                      
                      {activeSection.type === 'activity' && (
                        <div>
                          <p className="text-gray-700 mb-6">
                            En esta actividad práctica, crearás un mapa básico de procesos críticos para tu negocio utilizando la plantilla proporcionada.
                          </p>
                          
                          <ol className="list-decimal pl-5 space-y-4 mb-6">
                            <li>Descarga la plantilla de mapeo de procesos</li>
                            <li>Identifica hasta 5 procesos críticos de tu negocio</li>
                            <li>Califica cada uno según los criterios explicados en el video</li>
                            <li>Sube tu documento completado para recibir retroalimentación</li>
                          </ol>
                          
                          <div className="flex gap-4">
                            <Button variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Descargar plantilla
                            </Button>
                            <Button>
                              Subir actividad completada
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
                        <Button 
                          variant="outline" 
                          disabled={activeSectionId === 1}
                          onClick={() => setActiveSectionId(Math.max(1, activeSectionId - 1))}
                        >
                          <ChevronLeft className="h-4 w-4 mr-2" />
                          Anterior
                        </Button>
                        
                        <Button
                          disabled={activeSectionId === course.sections.length}
                          onClick={() => setActiveSectionId(Math.min(course.sections.length, activeSectionId + 1))}
                        >
                          Siguiente
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="discusion">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h2 className="text-xl font-bold mb-4">Discusión del curso</h2>
                      <p className="text-gray-600 mb-6">
                        Comparte tus dudas o comentarios con el instructor y otros estudiantes del curso.
                      </p>
                      
                      <div className="border border-gray-200 rounded-lg p-6 mb-6">
                        <textarea 
                          placeholder="Escribe tu pregunta o comentario aquí..."
                          className="w-full border border-gray-300 rounded-md p-3 mb-4 h-32"
                        ></textarea>
                        <div className="flex justify-end">
                          <Button>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Publicar comentario
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-center text-gray-500">Aún no hay comentarios en este curso. ¡Sé el primero en participar!</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="recursos">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                      <h2 className="text-xl font-bold mb-4">Recursos adicionales</h2>
                      <p className="text-gray-600 mb-6">
                        Material complementario para profundizar en los temas del curso.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="h-6 w-6 text-red-500 mr-3" />
                            <div>
                              <h3 className="font-medium">Guía completa de procesos de negocio</h3>
                              <p className="text-sm text-gray-500">PDF • 4.2 MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="h-6 w-6 text-green-500 mr-3" />
                            <div>
                              <h3 className="font-medium">Plantilla de análisis de impacto</h3>
                              <p className="text-sm text-gray-500">Excel • 850 KB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <PlayCircle className="h-6 w-6 text-blue-500 mr-3" />
                            <div>
                              <h3 className="font-medium">Caso de éxito: Bodega "La Prosperidad"</h3>
                              <p className="text-sm text-gray-500">Video • 12:45 min</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Ver video
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <h2 className="font-bold">Contenido del curso</h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-gray-600">
                        <span>{course.sections.filter(s => s.completed).length}</span> de <span>{course.sections.length}</span> completados
                      </p>
                      <p className="text-sm font-medium">{progress}%</p>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <ul className="divide-y divide-gray-200">
                    {course.sections.map((section) => (
                      <li 
                        key={section.id}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${section.id === activeSectionId ? 'bg-blue-50' : ''}`}
                        onClick={() => setActiveSectionId(section.id)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            {section.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <div className={`h-5 w-5 rounded-full border ${section.id === activeSectionId ? 'border-blue-500' : 'border-gray-300'}`} />
                            )}
                          </div>
                          <div className="ml-3 flex-1">
                            <p className={`text-sm font-medium ${section.completed ? 'text-green-600' : section.id === activeSectionId ? 'text-blue-700' : 'text-gray-900'}`}>
                              {section.title}
                            </p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              {section.type === 'video' && <PlayCircle className="h-3 w-3 mr-1" />}
                              {section.type === 'pdf' && <FileText className="h-3 w-3 mr-1" />}
                              {section.type === 'quiz' && <ClipboardCheck className="h-3 w-3 mr-1" />}
                              {section.type === 'activity' && <FileText className="h-3 w-3 mr-1" />}
                              
                              {section.duration && <span>{section.duration}</span>}
                              {section.size && <span>{section.size}</span>}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-amber-50 border-t border-amber-200">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-amber-500 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-amber-800">Certificado del curso</h3>
                        <p className="text-xs text-amber-700">Disponible al completar el 100% del contenido</p>
                      </div>
                    </div>
                  </div>
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

export default CourseView;
