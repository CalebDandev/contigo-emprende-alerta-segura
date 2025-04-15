
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, Star, ArrowRight, Play, Clock, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Course {
  id: number | string;
  title: string;
  description: string;
  image?: string;
  level?: string;
  completed?: boolean;
  duration: string;
  instructor?: string;
  badge?: string;
  progress?: number;
  timeEstimate?: string;
  requiredPoints?: number;
  prerequisite?: string;
}

interface RoadmapSectionProps {
  courses?: Course[];
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ courses }) => {
  // Use props.courses if provided, otherwise use default courses
  const unlockedCourses = courses ? courses.filter(c => c.completed !== false).slice(0, 1) : [
    {
      id: 'modulo-1',
      title: 'Conoce los procesos clave',
      description: 'Identifica qué mantiene vivo tu negocio',
      progress: 0,
      timeEstimate: '2 horas',
      instructor: 'Carlos Rodríguez',
      badge: 'Explorador Novato',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const lockedCourses = [
    {
      id: 'modulo-2',
      title: 'Protege lo más importante',
      description: 'Cuida maquinaria, stock y personal clave',
      timeEstimate: '1.5 horas',
      instructor: 'María González',
      badge: 'Guardián de Primera Clase',
      requiredPoints: 50,
      prerequisite: 'modulo-1'
    },
    {
      id: 'modulo-3',
      title: 'Crea un fondo de emergencia',
      description: 'Ahorra para emergencias',
      timeEstimate: '1.5 horas',
      instructor: 'Ana Martínez',
      badge: 'Tesorero Astuto',
      requiredPoints: 100,
      prerequisite: 'modulo-2'
    },
    {
      id: 'modulo-4',
      title: 'Digitaliza tu información',
      description: 'Usa herramientas digitales',
      timeEstimate: '2 horas',
      instructor: 'Roberto Sánchez',
      badge: 'Mago Digital',
      requiredPoints: 150,
      prerequisite: 'modulo-3'
    },
    {
      id: 'modulo-5',
      title: 'Prepara un plan de comunicación',
      description: 'Prepara cómo avisar a todos',
      timeEstimate: '1.5 horas',
      instructor: 'Laura Torres',
      badge: 'Comandante en Jefe',
      requiredPoints: 200,
      prerequisite: 'modulo-4'
    },
    {
      id: 'modulo-6',
      title: 'Planifica tu continuidad',
      description: 'Organiza cómo seguir trabajando',
      timeEstimate: '2 horas',
      instructor: 'Pedro Alonso',
      badge: 'Estratega Relámpago',
      requiredPoints: 250,
      prerequisite: 'modulo-5'
    }
  ];

  const getPrerequisiteText = (moduleId) => {
    const prerequisiteModule = [...unlockedCourses, ...lockedCourses].find(c => c.id === moduleId);
    return prerequisiteModule ? prerequisiteModule.title : 'Módulo previo';
  };

  return (
    <section className="bcp-section bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Ruta de Aprendizaje</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a módulos especializados que te ayudarán a fortalecer tu negocio. Desbloquea nuevos módulos a medida que completas los anteriores.
          </p>
        </div>

        <div className="mb-8">
          <div className="bg-bcp-blue/10 rounded-lg p-6 text-center mb-8">
            <p className="text-bcp-blue font-medium">Formas parte de los 10 primeros en Lima. Continúa ganando puntos para obtener beneficios exclusivos BCP</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-bcp-blue" />
            Módulos Disponibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unlockedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Shield className="h-3 w-3 mr-1" />
                          {course.badge}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-bold text-white">{course.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-bcp-blue mr-2" />
                      <span className="text-sm">{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm">{course.timeEstimate || course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progreso</span>
                        <span className="font-medium">{course.progress || 0}%</span>
                      </div>
                      <Progress value={course.progress || 0} className="h-2" />
                    </div>
                    
                    <Link to={`/curso/${course.id}`}>
                      <Button className="w-full bg-bcp-blue">{course.progress && course.progress > 0 ? 'Continuar módulo' : 'Comenzar módulo'}</Button>
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
            Próximos Módulos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedCourses.map((course) => (
              <div key={course.id} className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                <div className="flex flex-col gap-2 mb-4">
                  <Badge variant="outline" className="w-fit bg-amber-50 text-amber-800 border-amber-200">
                    <Lock className="h-3 w-3 mr-1" /> {course.requiredPoints} puntos de resiliencia
                  </Badge>
                  
                  {course.prerequisite && (
                    <Badge variant="outline" className="w-fit bg-blue-50 text-blue-800 border-blue-200">
                      Requiere: {getPrerequisiteText(course.prerequisite)}
                    </Badge>
                  )}
                  
                  <Badge variant="outline" className="w-fit bg-green-50 text-green-800 border-green-200">
                    <Shield className="h-3 w-3 mr-1" />
                    {course.badge}
                  </Badge>
                </div>
                
                <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.timeEstimate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-bcp-blue flex items-center">
              <Award className="h-6 w-6 mr-2 text-bcp-orange" />
              Completa todos los módulos para obtener:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <Shield className="h-8 w-8 text-bcp-blue mr-4" />
                <div>
                  <h4 className="font-medium">Certificado digital de "Emprendedor Resiliente"</h4>
                  <p className="text-sm text-gray-600">Compártelo en tus redes profesionales</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <ShieldCheck className="h-8 w-8 text-bcp-orange mr-4" />
                <div>
                  <h4 className="font-medium">Acceso al mercado solidario</h4>
                  <p className="text-sm text-gray-600">Ofrece productos post-desastre con QR a tu historia de resiliencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
