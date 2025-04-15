import React from 'react';
import { 
  Star, 
  Gift, 
  Tag, 
  Award, 
  Medal, 
  Ticket,
  ShieldCheck,
  Trophy,
  Shield
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Beneficios de puntos de resiliencia</h2>
        <p className="text-gray-600">
          Acumula puntos de resiliencia mientras fortaleces tu negocio y canjéalos por beneficios exclusivos
        </p>
      </div>
      
      <Tabs defaultValue="experiencia" className="w-full">
        <TabsList className="mb-6 grid grid-cols-3">
          <TabsTrigger value="experiencia">Experiencia Contigo</TabsTrigger>
          <TabsTrigger value="sorteos">Sorteos</TabsTrigger>
          <TabsTrigger value="descuentos">Descuentos</TabsTrigger>
        </TabsList>

        <TabsContent value="experiencia">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-amber-200">
              <CardHeader className="bg-amber-50 pb-3">
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                  Niveles de Emprendedor Resiliente
                </CardTitle>
                <CardDescription>
                  Desbloquea niveles exclusivos mientras acumulas puntos de resiliencia
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-gray-400 mr-2" />
                    <span><strong>Nivel Semilla:</strong> 0-50 puntos de resiliencia</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span><strong>Nivel Brote:</strong> 51-150 puntos de resiliencia</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-amber-600 mr-2" />
                    <span><strong>Nivel Fortaleza:</strong> 151-300 puntos de resiliencia</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-bcp-orange mr-2" />
                    <span><strong>Nivel Sol Naciente:</strong> 301+ puntos de resiliencia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50 pb-3">
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  Acceso Exclusivo
                </CardTitle>
                <CardDescription>
                  Desbloquea experiencias especiales según tu nivel
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Medal className="h-5 w-5 text-bcp-blue mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Mentoría personalizada</strong> con especialistas en gestión de crisis</span>
                  </li>
                  <li className="flex items-start">
                    <Medal className="h-5 w-5 text-bcp-blue mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Eventos exclusivos</strong> de networking con otros emprendedores resilientes</span>
                  </li>
                  <li className="flex items-start">
                    <Medal className="h-5 w-5 text-bcp-blue mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Talleres prácticos</strong> de continuidad de negocio con certificado BCP</span>
                  </li>
                  <li className="flex items-start">
                    <Medal className="h-5 w-5 text-bcp-blue mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Acceso anticipado</strong> a nuevas herramientas y recursos premium</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sorteos">
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center">
                <Ticket className="h-5 w-5 text-green-600 mr-2" />
                Sorteos Mensuales para Emprendedores
              </CardTitle>
              <CardDescription>
                Cada 100 puntos de resiliencia equivalen a un boleto para nuestros sorteos mensuales
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center mb-3">
                    <Trophy className="h-8 w-8 text-amber-500 mr-3" />
                    <div>
                      <h3 className="text-lg font-bold text-amber-800">🥇 Primer Premio</h3>
                      <p className="text-amber-700">Cada fin de mes</p>
                    </div>
                  </div>
                  <p className="text-amber-900 font-semibold text-lg mb-2">
                    Bono de S/1,000 para mejoras en tu negocio
                  </p>
                  <p className="text-amber-700">
                    Invierte en proteger mejor tu negocio o en recuperarte de un imprevisto
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Medal className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800">🥈 Segundo Premio</h3>
                      <p className="text-blue-700">Cada fin de mes</p>
                    </div>
                  </div>
                  <p className="text-blue-900 font-semibold text-lg mb-2">
                    Kit de emergencia premium
                  </p>
                  <p className="text-blue-700">
                    Incluye extintor, botiquín completo de primeros auxilios y radio de emergencia
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-6 border border-gray-200">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Gift className="h-5 w-5 mr-2 text-bcp-blue" />
                  ¿Cómo participar?
                </h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Acumula puntos de resiliencia completando cursos y actividades</li>
                  <li>Por cada 100 puntos, obtienes automáticamente un boleto para el sorteo</li>
                  <li>Los ganadores son anunciados el último día de cada mes</li>
                  <li>¡Mientras más puntos acumules, más posibilidades tienes de ganar!</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="descuentos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-blue-50 pb-3">
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 text-bcp-blue mr-2" />
                  50 puntos de resiliencia
                </CardTitle>
                <CardDescription>Descuentos básicos</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>10% de descuento en seguros para tu negocio</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Asesoría financiera gratuita (30 min)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Acceso a recursos premium por 1 mes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50 pb-3">
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 text-green-600 mr-2" />
                  150 puntos de resiliencia
                </CardTitle>
                <CardDescription>Descuentos intermedios</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>20% de descuento en seguros para tu negocio</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Comisiones reducidas en transacciones BCP</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Curso completo de gestión financiera gratis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-amber-50 pb-3">
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 text-amber-600 mr-2" />
                  300 puntos de resiliencia
                </CardTitle>
                <CardDescription>Descuentos premium</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>30% de descuento en seguros completos</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Tasas preferenciales en préstamos</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                    <span>Plan de consultoría personalizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BenefitsSection;
