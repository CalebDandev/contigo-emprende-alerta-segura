
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PracticalChallenges from '../components/PracticalChallenges';
import RoadmapSection from '../components/RoadmapSection';
import MentorshipSection from '../components/MentorshipSection';
import ChatbotAssistant from '../components/ChatbotAssistant';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Alerta Segura: Tu aliado ante emergencias</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Una plataforma integral diseñada para emprendedores que desean fortalecer la resiliencia de sus negocios.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-bcp-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Evaluación</h3>
                <p className="text-gray-600 mb-4">Conoce el nivel de preparación de tu negocio ante emergencias.</p>
                <Link to="/evaluacion" className="text-bcp-blue font-medium hover:underline flex items-center">
                  Iniciar evaluación <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-bcp-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aprendizaje</h3>
                <p className="text-gray-600 mb-4">Accede a cursos especializados para fortalecer la resiliencia de tu negocio.</p>
                <Link to="/plan" className="text-bcp-blue font-medium hover:underline flex items-center">
                  Ver cursos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-bcp-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proyectos</h3>
                <p className="text-gray-600 mb-4">Participa en proyectos prácticos con la guía de mentores asignados.</p>
                <Link to="/proyectos" className="text-bcp-blue font-medium hover:underline flex items-center">
                  Explorar proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <PracticalChallenges />
        <RoadmapSection />
        <MentorshipSection />
        <Features />
        <Resources />
        <Testimonials />
        <CTA />
      </main>
      <ChatbotAssistant />
      <Footer />
    </div>
  );
};

export default Index;
