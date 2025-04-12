
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, BookOpen, Shield, Award, Users, Store, HandHelping, Store as StoreIcon } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
          <nav className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Menú Principal</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/evaluacion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Shield className="h-5 w-5 text-bcp-blue" />
                              <div className="text-sm font-medium leading-none">Evaluación</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Evalúa la resiliencia de tu negocio con nuestro asistente virtual
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/plan" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-5 w-5 text-bcp-blue" />
                              <div className="text-sm font-medium leading-none">Cursos</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Accede a cursos especializados para fortalecer tu negocio
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/recursos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Award className="h-5 w-5 text-bcp-blue" />
                              <div className="text-sm font-medium leading-none">Recursos</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Plantillas, guías y herramientas para situaciones de crisis
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/proyectos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Users className="h-5 w-5 text-bcp-blue" />
                              <div className="text-sm font-medium leading-none">Proyectos</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comunidad de proyectos prácticos con mentores asignados
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/mercado-solidario" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <StoreIcon className="h-5 w-5 text-bcp-blue" />
                              <div className="text-sm font-medium leading-none">Mercado Solidario</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Apoya a emprendedores afectados por desastres comprando sus productos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/gamificacion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="flex items-center gap-2">
                              <Award className="h-5 w-5 text-bcp-orange" />
                              <div className="text-sm font-medium leading-none">Soles de Resiliencia</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Gana puntos y recompensas mientras aprendes a proteger tu negocio
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/evaluacion" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Evaluar mi negocio
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/proyectos" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Proyectos
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/mercado-solidario" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Mercado Solidario
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <button className="flex items-center text-gray-700 hover:text-bcp-blue">
              <Search className="h-5 w-5" />
              <span className="ml-1">Buscar</span>
            </button>
          </nav>

          {/* Login Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:border-bcp-blue transition-colors">
              <User className="h-5 w-5 mr-2" />
              <span>Mi cuenta</span>
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
            <Link to="/evaluacion" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <Shield className="h-5 w-5 mr-2 text-bcp-blue" />
              Evaluar mi negocio
            </Link>
            <Link to="/plan" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-bcp-blue" />
              Cursos
            </Link>
            <Link to="/recursos" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <Award className="h-5 w-5 mr-2 text-bcp-blue" />
              Recursos
            </Link>
            <Link to="/proyectos" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <Users className="h-5 w-5 mr-2 text-bcp-blue" />
              Proyectos
            </Link>
            <Link to="/mercado-solidario" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <StoreIcon className="h-5 w-5 mr-2 text-bcp-blue" />
              Mercado Solidario
            </Link>
            <Link to="/gamificacion" className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
              <Award className="h-5 w-5 mr-2 text-bcp-orange" />
              Soles de Resiliencia
            </Link>
            <div className="pt-2 border-t border-gray-200 mt-2">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 rounded">Mi cuenta</Link>
              <Link to="/internet-banking" className="block px-4 py-2 text-bcp-orange font-medium">Banca por Internet</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
