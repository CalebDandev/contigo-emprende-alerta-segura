
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  UserCheck, 
  Star, 
  FileImage, 
  FileVideo,
  Calendar, 
  Book, 
  Award, 
  MessageCircle, 
  Filter,
  ThumbsUp,
  Eye,
  MessageSquare,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import LeaderboardSection from '../components/game/LeaderboardSection';

const Proyectos = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const activeProjects = [
    {
      id: 'project-1',
      title: 'Plan de contingencia para desastres naturales',
      description: 'Desarrollar un plan integral de respuesta ante sismos y otros fenómenos naturales que afecten las operaciones del negocio.',
      category: 'Prevención',
      difficulty: 'Intermedio',
      requiredCourse: 'Fundamentos de resiliencia empresarial',
      mentor: {
        name: 'Roberto Gómez',
        image: null,
        specialty: 'Resiliencia Financiera'
      },
      participants: 15,
      dueDate: '2025-05-15',
      progress: 40,
      reward: 100,
      solesCost: 0,
      status: 'en progreso',
      updates: [
        {
          type: 'image',
          title: 'Mapa de riesgos completado',
          date: '2025-04-10',
          author: 'María López',
          content: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          likes: 7,
          comments: 3
        }
      ]
    },
    {
      id: 'project-2',
      title: 'Optimización de cadena de suministro resiliente',
      description: 'Identificar proveedores alternativos y crear planes de respaldo para mantener las operaciones durante interrupciones en la cadena de suministro.',
      category: 'Operaciones',
      difficulty: 'Avanzado',
      requiredCourse: 'Planificación financiera para crisis',
      mentor: {
        name: 'Carmen Rodríguez',
        image: null,
        specialty: 'Gestión de Crisis'
      },
      participants: 8,
      dueDate: '2025-05-30',
      progress: 25,
      reward: 150,
      solesCost: 0,
      status: 'en progreso',
      updates: []
    }
  ];

  const availableProjects = [
    {
      id: 'project-3',
      title: 'Digitalización de procesos clave',
      description: 'Identificar y digitalizar procesos manuales críticos para permitir la continuidad del negocio durante situaciones de aislamiento o restricción de movimiento.',
      category: 'Innovación',
      difficulty: 'Intermedio',
      requiredCourse: 'Fundamentos de resiliencia empresarial',
      mentor: {
        name: 'Ana María Huamán',
        image: null,
        specialty: 'Innovación y Adaptación'
      },
      participants: 0,
      dueDate: null,
      progress: 0,
      reward: 120,
      solesCost: 50,
      status: 'disponible',
      updates: []
    },
    {
      id: 'project-4',
      title: 'Creación de fondo de emergencia',
      description: 'Desarrollar un plan financiero para establecer un fondo de emergencia que cubra al menos 3 meses de operaciones en caso de crisis.',
      category: 'Financiero',
      difficulty: 'Básico',
      requiredCourse: 'Planificación financiera para crisis',
      mentor: {
        name: 'Roberto Gómez',
        image: null,
        specialty: 'Resiliencia Financiera'
      },
      participants: 0,
      dueDate: null,
      progress: 0,
      reward: 80,
      solesCost: 30,
      status: 'disponible',
      updates: []
    }
  ];

  const completedProjects = [
    {
      id: 'project-5',
      title: 'Manual de protocolo de emergencias',
      description: 'Elaboración de un manual con protocolos claros para diferentes tipos de emergencias que puedan afectar el negocio.',
      category: 'Prevención',
      difficulty: 'Básico',
      requiredCourse: 'Fundamentos de resiliencia empresarial',
      mentor: {
        name: 'Carmen Rodríguez',
        image: null,
        specialty: 'Gestión de Crisis'
      },
      participants: 12,
      completedDate: '2025-03-20',
      reward: 75,
      status: 'completado',
      updates: [
        {
          type: 'file',
          title: 'Manual final',
          date: '2025-03-18',
          author: 'Juan Pérez',
          content: 'manual_emergencias.pdf',
          likes: 15,
          comments: 7
        },
        {
          type: 'video',
          title: 'Presentación del proyecto',
          date: '2025-03-19',
          author: 'Juan Pérez',
          content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          likes: 22,
          comments: 9
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-bcp-blue mb-2">Proyectos</h1>
              <p className="text-gray-600 max-w-xl">
                Aplica lo aprendido en proyectos prácticos con la guía de mentores y gana Soles de Resiliencia al completarlos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Buscar proyectos..." 
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <Button className="bg-gradient-bcp">
                <Filter className="mr-2 h-4 w-4" /> Filtrar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="active">Mis proyectos</TabsTrigger>
                  <TabsTrigger value="available">Disponibles</TabsTrigger>
                  <TabsTrigger value="completed">Completados</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  {activeProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {activeProjects.map(project => (
                        <Card key={project.id} className="overflow-hidden">
                          <CardHeader>
                            <div className="flex justify-between">
                              <Badge className="mb-2 bg-blue-100 text-blue-800 border-blue-200 self-start">
                                {project.category}
                              </Badge>
                              <Badge variant="outline" className="mb-2 bg-amber-50 text-amber-800 border-amber-200">
                                <Award className="mr-1 h-3 w-3" /> {project.reward} Soles
                              </Badge>
                            </div>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Avatar className="h-8 w-8 mr-2">
                                    <AvatarFallback className="bg-bcp-blue text-white">
                                      {project.mentor.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-sm font-medium">{project.mentor.name}</p>
                                    <p className="text-xs text-gray-500">{project.mentor.specialty}</p>
                                  </div>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>Entrega: {new Date(project.dueDate).toLocaleDateString('es-ES')}</span>
                                </div>
                              </div>

                              <div className="flex flex-col space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span>Progreso</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                  <div 
                                    className="bg-bcp-blue h-2 rounded-full" 
                                    style={{width: `${project.progress}%`}}
                                  ></div>
                                </div>
                              </div>

                              {project.updates.length > 0 && (
                                <div className="border-t border-gray-100 pt-4 mt-2">
                                  <h4 className="font-medium text-sm mb-3">Actualizaciones recientes</h4>
                                  {project.updates.map((update, idx) => (
                                    <div key={idx} className="flex items-start space-x-3 mb-3">
                                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                                        {update.type === 'image' ? (
                                          <FileImage className="h-4 w-4 text-blue-700" />
                                        ) : update.type === 'video' ? (
                                          <FileVideo className="h-4 w-4 text-blue-700" />
                                        ) : (
                                          <Book className="h-4 w-4 text-blue-700" />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                          <p className="text-sm font-medium">{update.title}</p>
                                          <span className="text-xs text-gray-500">{update.date}</span>
                                        </div>
                                        {update.type === 'image' && (
                                          <div className="mb-2 rounded-lg overflow-hidden">
                                            <img 
                                              src={update.content} 
                                              alt={update.title} 
                                              className="w-full h-40 object-cover"
                                            />
                                          </div>
                                        )}
                                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                                          <span className="flex items-center">
                                            <ThumbsUp className="h-3 w-3 mr-1" /> {update.likes}
                                          </span>
                                          <span className="flex items-center">
                                            <MessageSquare className="h-3 w-3 mr-1" /> {update.comments}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{project.participants} Participantes</span>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" /> Ver detalles
                              </Button>
                              <Button size="sm">
                                <MessageCircle className="h-4 w-4 mr-1" /> Actualizar
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                      <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-bcp-blue" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Aún no tienes proyectos activos</h3>
                      <p className="text-gray-500 mb-6 max-w-md mx-auto">
                        Únete a un proyecto disponible para comenzar a aplicar lo aprendido y ganar Soles de Resiliencia.
                      </p>
                      <Button>Explorar proyectos disponibles</Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="available">
                  <div className="grid grid-cols-1 gap-6">
                    {availableProjects.map(project => (
                      <Card key={project.id} className="overflow-hidden">
                        <CardHeader>
                          <div className="flex justify-between">
                            <Badge className="mb-2 bg-blue-100 text-blue-800 border-blue-200 self-start">
                              {project.category}
                            </Badge>
                            <div className="flex space-x-2">
                              <Badge variant="outline" className="mb-2 bg-green-50 text-green-800 border-green-200">
                                <Award className="mr-1 h-3 w-3" /> +{project.reward} Soles
                              </Badge>
                              <Badge variant="outline" className="mb-2 bg-amber-50 text-amber-800 border-amber-200">
                                <Award className="mr-1 h-3 w-3" /> Costo: {project.solesCost} Soles
                              </Badge>
                            </div>
                          </div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback className="bg-bcp-blue text-white">
                                    {project.mentor.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">{project.mentor.name}</p>
                                  <p className="text-xs text-gray-500">{project.mentor.specialty}</p>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Book className="h-4 w-4 mr-1" />
                                <span>Requiere: {project.requiredCourse}</span>
                              </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                              <div className="flex items-start">
                                <UserCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-medium text-blue-800">Mentoría personalizada</h4>
                                  <p className="text-xs text-blue-600">El mentor te guiará durante todo el proyecto para asegurar su éxito.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center">
                            <Badge variant="outline" className="bg-gray-50 text-gray-700">
                              {project.difficulty}
                            </Badge>
                          </div>
                          <Button>
                            <Users className="h-4 w-4 mr-1" /> Unirse al proyecto
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="grid grid-cols-1 gap-6">
                    {completedProjects.map(project => (
                      <Card key={project.id} className="overflow-hidden">
                        <CardHeader>
                          <div className="flex justify-between">
                            <Badge className="mb-2 bg-blue-100 text-blue-800 border-blue-200 self-start">
                              {project.category}
                            </Badge>
                            <Badge variant="outline" className="mb-2 bg-green-50 text-green-800 border-green-200">
                              <Award className="mr-1 h-3 w-3" /> +{project.reward} Soles ganados
                            </Badge>
                          </div>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback className="bg-bcp-blue text-white">
                                    {project.mentor.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">{project.mentor.name}</p>
                                  <p className="text-xs text-gray-500">{project.mentor.specialty}</p>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Completado: {new Date(project.completedDate).toLocaleDateString('es-ES')}</span>
                              </div>
                            </div>

                            <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex items-start">
                              <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-medium text-green-800">¡Proyecto completado!</h4>
                                <p className="text-xs text-green-600">Has ganado {project.reward} Soles de Resiliencia por este proyecto.</p>
                              </div>
                            </div>

                            {project.updates.length > 0 && (
                              <div className="border-t border-gray-100 pt-4 mt-2">
                                <h4 className="font-medium text-sm mb-3">Entregables del proyecto</h4>
                                {project.updates.map((update, idx) => (
                                  <div key={idx} className="flex items-start space-x-3 mb-4">
                                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                                      {update.type === 'image' ? (
                                        <FileImage className="h-4 w-4 text-blue-700" />
                                      ) : update.type === 'video' ? (
                                        <FileVideo className="h-4 w-4 text-blue-700" />
                                      ) : (
                                        <Book className="h-4 w-4 text-blue-700" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between mb-1">
                                        <p className="text-sm font-medium">{update.title}</p>
                                        <span className="text-xs text-gray-500">{update.date}</span>
                                      </div>
                                      {update.type === 'video' && (
                                        <div className="mb-2 rounded-lg overflow-hidden">
                                          <iframe 
                                            width="100%" 
                                            height="200" 
                                            src={update.content} 
                                            title={update.title}
                                            className="border-0 rounded"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      )}
                                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                                        <span className="flex items-center">
                                          <ThumbsUp className="h-3 w-3 mr-1" /> {update.likes}
                                        </span>
                                        <span className="flex items-center">
                                          <MessageSquare className="h-3 w-3 mr-1" /> {update.comments}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{project.participants} Participantes</span>
                          </div>
                          <Button variant="outline">
                            <Eye className="h-4 w-4 mr-1" /> Ver certificado
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-amber-500" />
                  Mis Soles de Resiliencia
                </h3>
                
                <div className="text-center py-4">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100 mb-3">
                    <div className="text-3xl font-bold text-amber-600">250</div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Soles acumulados hasta ahora</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Cursos completados</span>
                    <span className="font-medium">150 soles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Proyectos completados</span>
                    <span className="font-medium">75 soles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Evaluaciones</span>
                    <span className="font-medium">25 soles</span>
                  </div>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Total</span>
                    <span>250 soles</span>
                  </div>
                </div>
                
                <Link to="/plan">
                  <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50">
                    Ver recompensas disponibles
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6">
                <LeaderboardSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
