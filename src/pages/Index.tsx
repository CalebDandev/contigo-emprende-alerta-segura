
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, AlertCircle, Clock, BookOpen, Users } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ChatbotAssistant from '../components/ChatbotAssistant';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Emprendedor Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-6 text-center">La historia de María</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="w-full md:w-1/3">
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                          title="Historia de María" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-700 mb-4">
                      María tenía una pequeña bodega en Cañete que era su único sustento familiar. En marzo de 2023, las intensas lluvias 
                      inundaron su negocio, destruyendo su inventario y equipamiento.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      "Nunca imaginé que esto podría pasar. Lo perdí todo en un día y no sabía cómo recuperarme", cuenta María.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl text-bcp-blue mb-3">Todo cambió cuando descubrió Escudo BCP</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-bcp-blue mr-2 mt-1" />
                      <span>Aprendió a identificar riesgos específicos para su tipo de negocio</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-bcp-orange mr-2 mt-1" />
                      <span>Creó un plan de acción para situaciones de emergencia</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-bcp-success mr-2 mt-1" />
                      <span>Se preparó con recursos y estrategias de recuperación</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-lg text-gray-700 font-medium">
                  "Hoy mi negocio está protegido. Saber que estoy preparada me da tranquilidad para 
                  seguir creciendo", afirma María con confianza.
                </p>
              </div>
              
              <div className="text-center">
                <Link to="/evaluacion" className="bcp-button-primary inline-flex items-center">
                  ¿Está tu negocio preparado? Evalúalo ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Escudo BCP Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">¿Por qué Escudo BCP?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Una solución integral para proteger tu negocio antes, durante y después de una emergencia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-blue-100 items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-bcp-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Evaluación personalizada</h3>
                <p className="text-gray-700">
                  Identifica los riesgos específicos para tu tipo de negocio con nuestra herramienta de evaluación
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-orange-100 items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-bcp-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aprendizaje práctico</h3>
                <p className="text-gray-700">
                  Módulos diseñados especialmente para emprendedores con ejemplos prácticos y aplicables
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-green-100 items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comunidad de apoyo</h3>
                <p className="text-gray-700">
                  Conecta con otros emprendedores y accede a proyectos con mentores asignados por BCP
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <ChatbotAssistant />
      <Footer />
    </div>
  );
};

export default Index;
