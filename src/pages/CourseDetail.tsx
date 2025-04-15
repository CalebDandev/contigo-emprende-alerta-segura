
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModuleView from '../components/modules/ModuleView';
import { ChevronRight, Home, BookOpen } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-4">
          <div className="bcp-container">
            <nav className="flex py-2 text-sm mb-2" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-500 hover:text-bcp-blue flex items-center">
                    <Home className="h-3 w-3 mr-1" />
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <span className="text-gray-400 mx-1"><ChevronRight className="h-4 w-4" /></span>
                </li>
                <li>
                  <a href="/recursos" className="text-gray-500 hover:text-bcp-blue flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    <span>Módulos</span>
                  </a>
                </li>
                <li>
                  <span className="text-gray-400 mx-1"><ChevronRight className="h-4 w-4" /></span>
                </li>
                <li className="text-bcp-blue font-medium" aria-current="page">
                  Conoce los procesos clave
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="bcp-container py-8">
          <ModuleView />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
