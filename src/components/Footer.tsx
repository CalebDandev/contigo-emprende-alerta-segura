
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Shield, BookOpen, Users, FileText, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bcp-blue text-white">
      <div className="bcp-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contigo Emprendedor</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/evaluacion" className="hover:underline flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Evaluación de Resiliencia
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="hover:underline flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Plan de Capacitación
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="hover:underline flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Recursos y Herramientas
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:underline flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Comunidad Resiliente
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Soluciones para Emprendedores</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cuenta Negocios Emprendedor</a></li>
              <li><a href="#" className="hover:underline">Préstamos para Emergencias</a></li>
              <li><a href="#" className="hover:underline">Seguros para tu Negocio</a></li>
              <li><a href="#" className="hover:underline">Asesoría Financiera Personalizada</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <Headphones className="h-4 w-4 mr-2" />
                  Centro de Ayuda 24/7
                </a>
              </li>
              <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:underline">Reportar una emergencia</a></li>
              <li><a href="#" className="hover:underline">Oficinas y agentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-bcp-orange transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-bcp-orange transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-bcp-orange transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-bcp-orange transition-colors">
                <Youtube />
              </a>
              <a href="#" className="hover:text-bcp-orange transition-colors">
                <Linkedin />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contáctanos</h4>
              <p>Teléfono: 01-311-9898</p>
              <p>Email: contacto@bcp.com.pe</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-6 text-sm">
          <p>&copy; 2025 Banco de Crédito del Perú. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
            <a href="#" className="hover:underline">Términos y Condiciones</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Políticas de Cookies</a>
            <a href="#" className="hover:underline">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
