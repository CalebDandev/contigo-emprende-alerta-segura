
import React from 'react';
import { Users, Star, Award, Calendar, MessageCircle, Clock, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const MentorshipSection = () => {
  const mentors = [
    {
      id: 'mentor-1',
      name: 'Carmen Rodríguez',
      specialty: 'Gestión de Crisis',
      experience: 'Fundadora de 3 emprendimientos',
      rating: 4.9,
      reviews: 28,
      availability: '10 horas esta semana',
      image: null
    },
    {
      id: 'mentor-2',
      name: 'Roberto Gómez',
      specialty: 'Resiliencia Financiera',
      experience: 'Asesor financiero para PyMEs',
      rating: 4.8,
      reviews: 32,
      availability: '5 horas esta semana',
      image: null
    },
    {
      id: 'mentor-3',
      name: 'Ana María Huamán',
      specialty: 'Innovación y Adaptación',
      experience: 'Consultora de transformación digital',
      rating: 4.7,
      reviews: 18,
      availability: '8 horas esta semana',
      image: null
    }
  ];

  return (
    <section className="bcp-section bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Mentoría y Proyectos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recibe orientación de emprendedores experimentados y aplica lo aprendido en proyectos prácticos que fortalecerán tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full border border-gray-100">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 mr-4">
                  {mentor.image ? (
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                  ) : (
                    <AvatarFallback className="bg-bcp-blue text-white text-xl">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">{mentor.name}</h4>
                  <p className="text-bcp-blue">{mentor.specialty}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 text-sm">{mentor.experience}</p>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-500 mr-3">
                  <Star className="fill-amber-500 h-4 w-4" />
                  <span className="ml-1 font-medium text-gray-800">{mentor.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({mentor.reviews} reseñas)</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Clock className="h-4 w-4 mr-1 text-green-600" />
                <span>{mentor.availability}</span>
              </div>
              
              <div className="mt-auto space-y-2">
                <Button className="w-full bg-gradient-bcp">
                  <MessageCircle className="h-4 w-4 mr-2" /> Ver proyectos disponibles
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  <Calendar className="h-4 w-4 mr-2" /> Ver disponibilidad
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-3">¿Quieres iniciar un proyecto práctico?</h3>
              <p className="text-gray-700">
                Aplica lo aprendido en proyectos reales bajo la guía de un mentor asignado por BCP. Gana Soles de Resiliencia al completar tus proyectos.
              </p>
              <div className="flex items-center mt-4">
                <Badge className="mr-2 bg-green-100 text-green-800">
                  <Award className="h-3 w-3 mr-1" /> Soles de Resiliencia
                </Badge>
                <Badge className="bg-purple-100 text-purple-800">
                  <UserCheck className="h-3 w-3 mr-1" /> Mentor asignado
                </Badge>
              </div>
            </div>
            <Button size="lg" className="whitespace-nowrap">
              <Users className="h-4 w-4 mr-2" /> Solicitar un proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
