
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bcp-blue text-white">
      <div className="bcp-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contigo Emprendedor</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sobre el programa</a></li>
              <li><a href="#" className="hover:underline">Capacitaciones</a></li>
              <li><a href="#" className="hover:underline">Herramientas</a></li>
              <li><a href="#" className="hover:underline">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cuentas</a></li>
              <li><a href="#" className="hover:underline">Préstamos</a></li>
              <li><a href="#" className="hover:underline">Seguros</a></li>
              <li><a href="#" className="hover:underline">Inversiones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
              <li><a href="#" className="hover:underline">Reclamos</a></li>
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
