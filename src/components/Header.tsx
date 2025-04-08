
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bcp-container">
        {/* Top Navigation */}
        <div className="flex justify-between py-2 text-sm border-b border-gray-100">
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-bcp-blue">Personas</Link>
            <Link to="/" className="hover:text-bcp-blue">PyMES</Link>
            <Link to="/" className="hover:text-bcp-blue">Empresas</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-bcp-blue">Español / Quechua</Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-bcp-blue">
                <span>{'>'}</span>
                <span>BCP</span>
                <span>{'>'}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-bcp-blue">
                Productos <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-bcp-blue">
                Soluciones Digitales <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-bcp-blue">
                Beneficios <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-bcp-blue">
                Ayuda y Educación <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <button className="flex items-center text-gray-700 hover:text-bcp-blue">
              <Search className="h-5 w-5" />
              <span className="ml-1">Buscar</span>
            </button>
          </nav>

          {/* Login Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:border-bcp-blue transition-colors">
              <User className="h-5 w-5 mr-2" />
              <span>Abrir cuenta</span>
            </Link>
            <Link to="/internet-banking" className="bcp-button-primary">
              Banca por Internet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded">Productos</Link>
            <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded">Soluciones Digitales</Link>
            <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded">Beneficios</Link>
            <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded">Ayuda y Educación</Link>
            <div className="pt-2 border-t border-gray-200 mt-2">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 rounded">Abrir cuenta</Link>
              <Link to="/internet-banking" className="block px-4 py-2 text-bcp-orange font-medium">Banca por Internet</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
