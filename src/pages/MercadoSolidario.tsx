
import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Heart, MapPin, Clock, Tag, TrendingUp, ShoppingCart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MercadoSolidario = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    {
      id: 1,
      name: "Café de la Sierra",
      description: "Café orgánico de pequeños productores afectados por lluvias en Cusco",
      price: 28.50,
      discountPrice: 22.90,
      imageUrl: "https://images.unsplash.com/photo-1559525839-7b1d1a37629a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Cooperativa Cafetalera Valle Sagrado",
      location: "Cusco, Perú",
      category: "Alimentos",
      emergency: "Lluvias intensas",
      date: "Mayo 2023",
      story: "https://youtu.be/example1",
      featured: true,
    },
    {
      id: 2,
      name: "Artesanías de Puno",
      description: "Tejidos tradicionales hechos a mano por artesanas afectadas por inundaciones",
      price: 65.00,
      discountPrice: 45.00,
      imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Asociación de Artesanas Titicaca",
      location: "Puno, Perú",
      category: "Artesanía",
      emergency: "Inundaciones",
      date: "Febrero 2023",
      story: "https://youtu.be/example2",
      featured: true,
    },
    {
      id: 3,
      name: "Miel Andina",
      description: "Miel natural producida por apicultores afectados por sequías en Arequipa",
      price: 35.00,
      discountPrice: 29.90,
      imageUrl: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Colectivo Apícola Sur",
      location: "Arequipa, Perú",
      category: "Alimentos",
      emergency: "Sequía",
      date: "Enero 2023",
      story: "https://youtu.be/example3",
      featured: false,
    },
    {
      id: 4,
      name: "Chocolates de Tingo María",
      description: "Tabletas de chocolate artesanal de productores afectados por deslizamientos",
      price: 18.50,
      discountPrice: 15.90,
      imageUrl: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Asociación Chocolatera Huallaga",
      location: "Huánuco, Perú",
      category: "Alimentos",
      emergency: "Deslizamientos",
      date: "Marzo 2023",
      story: "https://youtu.be/example4",
      featured: false,
    },
    {
      id: 5,
      name: "Cerámica de Chulucanas",
      description: "Piezas de cerámica tradicional de artesanos afectados por El Niño Costero",
      price: 85.00,
      discountPrice: 69.90,
      imageUrl: "https://images.unsplash.com/photo-1565193298357-c9b980ce5866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Red de Ceramistas de Piura",
      location: "Piura, Perú",
      category: "Artesanía",
      emergency: "Inundaciones",
      date: "Abril 2023",
      story: "https://youtu.be/example5",
      featured: true,
    },
    {
      id: 6,
      name: "Textiles de Ayacucho",
      description: "Mantas y textiles tradicionales de tejedoras afectadas por heladas",
      price: 120.00,
      discountPrice: 95.00,
      imageUrl: "https://images.unsplash.com/photo-1606830733744-0ad778449672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      seller: "Tejedoras Wari",
      location: "Ayacucho, Perú",
      category: "Textiles",
      emergency: "Heladas",
      date: "Junio 2023",
      story: "https://youtu.be/example6",
      featured: false,
    }
  ];
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Mercado Solidario</h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Apoya a emprendedores afectados por desastres comprando sus productos. Tu compra ayuda a 
                recuperar sus negocios y fortalecer su resiliencia.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input 
                    type="search"
                    placeholder="Buscar productos..." 
                    className="pl-10 pr-4 py-6 bg-white text-gray-800 rounded-full w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                  <Filter className="mr-2 h-4 w-4" /> Filtrar
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList className="bg-white border border-gray-200">
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="destacados">Destacados</TabsTrigger>
                  <TabsTrigger value="alimentos">Alimentos</TabsTrigger>
                  <TabsTrigger value="artesania">Artesanía</TabsTrigger>
                  <TabsTrigger value="textiles">Textiles</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-white">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Mayor impacto
                  </Badge>
                </div>
              </div>
            
              <TabsContent value="todos" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full">
                            <Heart className="h-5 w-5 text-gray-600" />
                          </Button>
                        </div>
                        {product.featured && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-orange-500">Destacado</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                          <Tag className="h-3 w-3" />
                          <span>{product.category}</span>
                          <span className="mx-1">•</span>
                          <MapPin className="h-3 w-3" />
                          <span>{product.location}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {product.emergency}
                          </div>
                          <div className="text-gray-500 text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {product.date}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-lg font-bold text-blue-600">S/ {product.discountPrice.toFixed(2)}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">S/ {product.price.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Comprar
                          </Button>
                        </div>
                        <div className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">
                          Ver historia del emprendedor
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="destacados" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter(p => p.featured).map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full">
                            <Heart className="h-5 w-5 text-gray-600" />
                          </Button>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-orange-500">Destacado</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                          <Tag className="h-3 w-3" />
                          <span>{product.category}</span>
                          <span className="mx-1">•</span>
                          <MapPin className="h-3 w-3" />
                          <span>{product.location}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {product.emergency}
                          </div>
                          <div className="text-gray-500 text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {product.date}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-lg font-bold text-blue-600">S/ {product.discountPrice.toFixed(2)}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">S/ {product.price.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Comprar
                          </Button>
                        </div>
                        <div className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">
                          Ver historia del emprendedor
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Similar structure for the other tabs */}
              <TabsContent value="alimentos" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter(p => p.category === "Alimentos").map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      {/* Similar card structure as above */}
                      <div className="relative">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full">
                            <Heart className="h-5 w-5 text-gray-600" />
                          </Button>
                        </div>
                        {product.featured && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-orange-500">Destacado</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                          <Tag className="h-3 w-3" />
                          <span>{product.category}</span>
                          <span className="mx-1">•</span>
                          <MapPin className="h-3 w-3" />
                          <span>{product.location}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {product.emergency}
                          </div>
                          <div className="text-gray-500 text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {product.date}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-lg font-bold text-blue-600">S/ {product.discountPrice.toFixed(2)}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">S/ {product.price.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Comprar
                          </Button>
                        </div>
                        <div className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">
                          Ver historia del emprendedor
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-bcp-blue mb-8">¿Cómo funciona el Mercado Solidario?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-8 w-8 text-bcp-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Compra solidaria</h3>
                  <p className="text-gray-600">
                    Adquiere productos de emprendedores afectados por desastres naturales a precios justos.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HandHelping className="h-8 w-8 text-bcp-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Apoyo directo</h3>
                  <p className="text-gray-600">
                    El 100% del valor de tu compra llega directamente al emprendedor para su recuperación.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-bcp-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Impacto comunitario</h3>
                  <p className="text-gray-600">
                    Contribuyes a la resiliencia económica y sostenibilidad de comunidades afectadas.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-center">¿Eres un emprendedor afectado?</h3>
                <p className="text-center mb-6">
                  Si tu negocio ha sido afectado por algún desastre, puedes solicitar unirte al Mercado Solidario
                  para vender tus productos y recibir apoyo.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-bcp-blue hover:bg-blue-700">
                    Registrar mi negocio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MercadoSolidario;
