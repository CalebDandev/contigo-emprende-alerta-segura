
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameModule from '../components/GameModule';

const Gamificacion = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-900 py-8">
          <div className="bcp-container">
            <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-purple-400">Inicio</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-purple-400">Contigo Emprendedor</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li className="text-purple-400 font-medium" aria-current="page">
                  Alerta Hack
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <GameModule />
      </main>
      <Footer />
    </div>
  );
};

export default Gamificacion;
