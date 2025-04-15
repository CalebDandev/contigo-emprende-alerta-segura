
import React, { useState } from 'react';
import { 
  Store, 
  Search, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  Tag, 
  Star, 
  Filter, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MercadoSolidario = () => {
  const [activeCategory, setActiveCategory] = useState('featured');
  const [displayCount, setDisplayCount] = useState(6);
  const [expandedFilters, setExpandedFilters] = useState(true);

  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  const featuredBusinesses = [
    {
      id: 1,
      name: "Panadería La Esperanza",
      location: "San Juan de Lurigancho, Lima",
      emergencyType: "Inundación",
      story: "María y su familia perdieron todo su equipo de panadería tras la inundación de marzo. Con la ayuda de la comunidad, están reconstruyendo su horno artesanal.",
      image: "https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "María Huamán",
      products: ["Pan artesanal", "Pasteles", "Empanadas"],
      rating: 4.8,
      needsHelp: ["Horno industrial", "Materiales de construcción"],
      featured: true,
      category: "Alimentos"
    },
    {
      id: 2,
      name: "Textiles Andinos",
      location: "Arequipa",
      emergencyType: "Deslizamiento",
      story: "Juana perdió su taller de tejido en un deslizamiento. Ahora trabaja desde un pequeño espacio temporal, pero sus diseños siguen siendo maravillosos.",
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Juana Mamani",
      products: ["Chalinas", "Bolsos", "Mantas"],
      rating: 4.9,
      needsHelp: ["Máquina de coser", "Materiales"],
      featured: true,
      category: "Artesanía"
    },
    {
      id: 3,
      name: "Restaurante El Tambo",
      location: "Trujillo, La Libertad",
      emergencyType: "Incendio",
      story: "Carlos perdió su restaurante en un incendio. Con el apoyo de los clientes está operando desde un local provisional y espera reconstruir pronto.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Carlos Mendoza",
      products: ["Comida criolla", "Menú ejecutivo", "Postres"],
      rating: 4.7,
      needsHelp: ["Menaje", "Equipo de cocina"],
      featured: true,
      category: "Alimentos"
    },
    {
      id: 4,
      name: "Mueblería Los Cedros",
      location: "Pucallpa, Ucayali",
      emergencyType: "Inundación",
      story: "Roberto vio su taller de carpintería inundado durante la temporada de lluvias. Ahora trabaja con herramientas prestadas para mantener a su familia.",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Roberto Sánchez",
      products: ["Mesas", "Sillas", "Estantes"],
      rating: 4.5,
      needsHelp: ["Herramientas eléctricas", "Madera"],
      featured: false,
      category: "Muebles"
    },
    {
      id: 5,
      name: "Vivero Florecer",
      location: "Huaraz, Ancash",
      emergencyType: "Sequía",
      story: "Patricia perdió gran parte de su inventario debido a una sequía prolongada. Ahora ofrece plantas resistentes y servicios de jardinería.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Patricia Flores",
      products: ["Plantas", "Macetas", "Abono"],
      rating: 4.6,
      needsHelp: ["Sistema de riego", "Semillas"],
      featured: false,
      category: "Jardinería"
    },
    {
      id: 6,
      name: "Calzados Martínez",
      location: "Trujillo, La Libertad",
      emergencyType: "Robo",
      story: "Luis sufrió un robo que llevó a la pérdida de su maquinaria. Con persistencia ha logrado mantener su producción de calzado a menor escala.",
      image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Luis Martínez",
      products: ["Zapatos", "Sandalias", "Botas"],
      rating: 4.4,
      needsHelp: ["Máquina de coser industrial", "Cuero"],
      featured: false,
      category: "Calzado"
    },
    {
      id: 7,
      name: "Dulces Regionales",
      location: "Cusco",
      emergencyType: "Pandemia",
      story: "Teresa perdió su punto de venta turístico durante la pandemia. Ahora ofrece dulces típicos por envío y busca recuperar su clientela.",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Teresa Quispe",
      products: ["Majarblanco", "Chocotejas", "Turrones"],
      rating: 4.9,
      needsHelp: ["Equipamiento de cocina", "Envases"],
      featured: false,
      category: "Alimentos"
    },
    {
      id: 8,
      name: "Taller Mecánico Ramos",
      location: "Lima",
      emergencyType: "Incendio",
      story: "Pedro vio su taller mecánico destruido por un incendio eléctrico. Con mucho esfuerzo ha logrado adquirir algunas herramientas básicas para seguir trabajando.",
      image: "https://images.unsplash.com/photo-1632823471565-1ecda1565243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      owner: "Pedro Ramos",
      products: ["Reparación mecánica", "Cambio de aceite", "Alineación"],
      rating: 4.7,
      needsHelp: ["Gata hidráulica", "Herramientas especializadas"],
      featured: false,
      category: "Servicios"
    }
  ];

  const categories = [
    { id: "featured", name: "Destacados", icon: <Star className="h-5 w-5" /> },
    { id: "alimentos", name: "Alimentos y Bebidas", icon: <Store className="h-5 w-5" /> },
    { id: "artesania", name: "Artesanía", icon: <Heart className="h-5 w-5" /> },
    { id: "muebles", name: "Muebles y Hogar", icon: <ShoppingBag className="h-5 w-5" /> },
    { id: "servicios", name: "Servicios", icon: <Tag className="h-5 w-5" /> },
    { id: "otros", name: "Otros Negocios", icon: <Store className="h-5 w-5" /> }
  ];

  const regions = [
    "Lima", "Arequipa", "La Libertad", "Cusco", "Piura", "Ancash", 
    "Lambayeque", "Callao", "Junín", "Cajamarca", "Ucayali"
  ];

  const emergencyTypes = [
    "Inundación", "Deslizamiento", "Incendio", "Sequía", 
    "Terremoto", "Huaico", "Pandemia"
  ];

  const businesses = activeCategory === 'featured' ? 
    featuredBusinesses.filter(business => business.featured) : 
    featuredBusinesses.filter(business => business.category.toLowerCase() === activeCategory || activeCategory === 'otros');

  const visibleBusinesses = businesses.slice(0, displayCount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-bcp text-white py-12 md:py-20">
        <div className="bcp-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Mercado Solidario BCP</h1>
              <p className="text-lg md:text-xl mb-6">
                Apoya a los emprendedores que están recuperándose de situaciones de emergencia. 
                Compra sus productos, comparte sus historias y sé parte de su camino hacia la resiliencia.
              </p>
              <div className="flex space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-bcp-blue hover:bg-gray-100">
                  ¿Cómo funciona?
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                  Registrar mi negocio
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1564974288343-7cce73c4978a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Mercado Solidario" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="bcp-container">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Buscar por nombre, producto o ubicación..." 
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Región
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" className="flex items-center gap-2" onClick={toggleFilters}>
                  <Filter className="h-4 w-4" />
                  Filtros
                  {expandedFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Extended Filters */}
            {expandedFilters && (
              <div className="bg-gray-50 p-4 rounded-md mb-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Región</h3>
                    <div className="space-y-1 max-h-40 overflow-y-auto pr-2">
                      {regions.map(region => (
                        <div key={region} className="flex items-center">
                          <input type="checkbox" id={`region-${region}`} className="mr-2" />
                          <label htmlFor={`region-${region}`} className="text-sm">{region}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Tipo de emergencia</h3>
                    <div className="space-y-1">
                      {emergencyTypes.map(type => (
                        <div key={type} className="flex items-center">
                          <input type="checkbox" id={`emergency-${type}`} className="mr-2" />
                          <label htmlFor={`emergency-${type}`} className="text-sm">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Necesita ayuda con</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="equipment" className="mr-2" />
                        <label htmlFor="equipment" className="text-sm">Equipamiento</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="materials" className="mr-2" />
                        <label htmlFor="materials" className="text-sm">Materiales</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="rebuilding" className="mr-2" />
                        <label htmlFor="rebuilding" className="text-sm">Reconstrucción</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="tools" className="mr-2" />
                        <label htmlFor="tools" className="text-sm">Herramientas</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">Limpiar filtros</Button>
                  <Button>Aplicar filtros</Button>
                </div>
              </div>
            )}
            
            {/* Categories */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="w-full bg-transparent p-0 flex flex-wrap justify-start border-b border-gray-200 mb-6">
                {categories.map(category => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`flex items-center px-4 py-2 mr-2 mb-2 rounded-full text-sm font-medium transition-all
                      ${activeCategory === category.id ? 'bg-bcp-blue text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Business Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBusinesses.map(business => (
              <Card key={business.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={business.image} 
                    alt={business.name}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-500">
                    {business.emergencyType}
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{business.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                      <span className="text-sm font-medium">{business.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    {business.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 mb-4">{business.story}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium uppercase text-gray-500 mb-1">Productos y servicios</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.products.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-medium uppercase text-gray-500 mb-1">Necesita ayuda con</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.needsHelp.map((need, idx) => (
                        <Badge key={idx} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm">
                    Por: <span className="font-medium">{business.owner}</span>
                  </div>
                  <Button variant="outline" className="flex items-center text-bcp-blue border-bcp-blue">
                    Ver detalles
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {displayCount < businesses.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setDisplayCount(displayCount + 6)}
              >
                Cargar más negocios
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-blue-50 p-8 rounded-xl mt-16 border border-blue-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">¿Tu negocio fue afectado por una emergencia?</h2>
                <p className="text-blue-700">
                  Regístrate en el Mercado Solidario BCP y recibe apoyo de la comunidad. Podrás vender tus productos,
                  contar tu historia y acceder a recursos especiales para recuperar tu negocio.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <Button className="bg-bcp-blue hover:bg-bcp-blue/90" size="lg">Registrar mi negocio</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MercadoSolidario;
