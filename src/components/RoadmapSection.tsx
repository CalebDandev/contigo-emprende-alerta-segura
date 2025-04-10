
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, Star, ArrowRight } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'curso-2',
      title: 'Planificación financiera para crisis',
      description: 'Estrategias para gestionar tus finanzas y mantener liquidez en momentos difíciles.',
      progress: 30,
      modules: 4,
      timeEstimate: '1.5 horas',
      category: 'Financiero',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      category: 'Liderazgo'
    },
    {
      id: 'curso-4',
      title: 'Adaptación de modelos de negocio',
      description: 'Pivotando tu negocio en función de escenarios cambiantes.',
      requiredCoins: 180,
      modules: 5,
      timeEstimate: '2.5 horas',
      category: 'Estrategia'
    }
  ];

  return (
    <section className="bcp-section bg-gray-50 py-16">
      <div className="bcp-container">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unlockedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" /> Disponible
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-800">
                      {course.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                  
                  <div className="mt-2 mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{course.modules} módulos</span>
                    <span>Duración: {course.timeEstimate}</span>
                  </div>
                  
                  <Link to={`/curso/${course.id}`}>
                    <Button className="w-full mt-auto">
                      {course.progress > 0 ? 'Continuar curso' : 'Comenzar curso'}
                    </Button>
                  </Link>
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
                  
                  <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-5">
                    <Badge variant="outline" className="mb-2 bg-amber-50 text-amber-800 border-amber-200">
                      <Lock className="h-3 w-3 mr-1" /> {course.requiredCoins} Soles para desbloquear
                    </Badge>
                    
                    <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{course.modules} módulos</span>
                      <span>Duración: {course.timeEstimate}</span>
                    </div>
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
      </div>
    </section>
  );
};

export default RoadmapSection;
