
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, Star, ArrowRight, Play, FileText, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const RoadmapSection = () => {
  const unlockedCourses = [
    {
      id: 'curso-1',
      title: 'Fundamentos de resiliencia empresarial',
      description: 'Conceptos básicos para preparar tu negocio ante situaciones adversas.',
      progress: 75,
      modules: 5,
      timeEstimate: '2 horas',
      category: 'Fundamentos',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoThumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      instructor: 'Carlos Rodríguez',
      features: ['5 módulos', '8 cuestionarios', '3 descargas']
    },
    {
      id: 'curso-2',
      title: 'Planificación financiera para crisis',
      description: 'Estrategias para gestionar tus finanzas y mantener liquidez en momentos difíciles.',
      progress: 30,
      modules: 4,
      timeEstimate: '1.5 horas',
      category: 'Financiero',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      videoThumbnail: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      instructor: 'María González',
      features: ['4 módulos', '6 cuestionarios', '5 descargas']
    }
  ];
  
  const lockedCourses = [
    {
      id: 'curso-3',
      title: 'Liderazgo en tiempos de crisis',
      description: 'Aprende a guiar a tu equipo durante situaciones críticas.',
      requiredCoins: 120,
      modules: 6,
      timeEstimate: '3 horas',
      category: 'Liderazgo',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      instructor: 'Ana Martínez'
    },
    {
      id: 'curso-4',
      title: 'Adaptación de modelos de negocio',
      description: 'Pivotando tu negocio en función de escenarios cambiantes.',
      requiredCoins: 180,
      modules: 5,
      timeEstimate: '2.5 horas',
      category: 'Estrategia',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      instructor: 'Roberto Sánchez'
    }
  ];

  return (
    <section className="bcp-section bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Ruta de Aprendizaje</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a cursos especializados que te ayudarán a fortalecer tu negocio. Desbloquea nuevos módulos a medida que ganas Soles de Resiliencia.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-bcp-blue" />
            Cursos Disponibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {unlockedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={course.videoThumbnail || course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" /> Disponible
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-800">
                          {course.category}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">{course.title}</h4>
                      <p className="text-white/80 text-sm mb-4">{course.description}</p>
                      
                      <Link 
                        to={`/curso/${course.id}#video`} 
                        className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white transition-colors text-sm font-medium text-bcp-blue"
                      >
                        <Play className="h-4 w-4 mr-1" fill="currentColor" />
                        Ver introducción
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-bcp-blue" />
                      </div>
                      <div>
                        <p className="font-medium">{course.instructor}</p>
                        <p className="text-sm text-gray-500">Instructor</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        {course.timeEstimate}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div>
                        {course.features && course.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="mr-2 mb-2">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progreso</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Link to={`/curso/${course.id}`}>
                      <Button className="w-full">{course.progress > 0 ? 'Continuar curso' : 'Comenzar curso'}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Lock className="h-5 w-5 mr-2 text-gray-500" />
            Próximos en tu Ruta
          </h3>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 relative z-10">
              {lockedCourses.map((course, index) => (
                <div key={course.id} className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} relative`}>
                  <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-5 relative overflow-hidden group">
                    {course.image && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    
                    <Badge variant="outline" className="mb-2 bg-amber-50 text-amber-800 border-amber-200">
                      <Lock className="h-3 w-3 mr-1" /> {course.requiredCoins} Soles para desbloquear
                    </Badge>
                    
                    <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{course.modules} módulos</span>
                      <span>Duración: {course.timeEstimate}</span>
                    </div>
                    
                    {course.instructor && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm">Instructor: {course.instructor}</p>
                      </div>
                    )}
                  </div>
                  
                  {index !== lockedCourses.length - 1 && (
                    <div className="hidden md:flex justify-center my-4">
                      <ArrowRight className={`text-gray-400 rotate-90 md:rotate-0 ${index % 2 === 0 ? '-scale-x-100' : ''}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/recursos">
            <Button variant="outline" size="lg" className="gap-2">
              <Award className="h-4 w-4" />
              Ver todos los recursos educativos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
