
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Share2, 
  Trophy, 
  Rocket, 
  ThumbsUp,
  Award,
  ShieldCheck,
  Star
} from 'lucide-react';
import GameMetrics from './GameMetrics';

interface GameResultProps {
  metrics: {
    economy: number;
    trust: number;
    morale: number;
  };
  score: number;
  achievements: string[];
  onClose: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ metrics, score, achievements, onClose }) => {
  const [showingCertificate, setShowingCertificate] = useState(false);
  
  // Get feedback based on score
  const getFeedback = () => {
    if (score >= 85) {
      return {
        title: "¡Excelente trabajo, Emprendedor Resiliente!",
        message: "Has demostrado una gran capacidad para preparar, enfrentar y recuperar tu negocio ante situaciones críticas. Las decisiones que tomaste protegieron no solo tu economía, sino también la confianza de tus clientes y la moral de tu equipo."
      };
    } else if (score >= 70) {
      return {
        title: "¡Buen trabajo!",
        message: "Has logrado mantener tu negocio a flote durante la crisis. Algunas decisiones fueron más acertadas que otras, pero en general has demostrado capacidad de adaptación y resiliencia."
      };
    } else if (score >= 50) {
      return {
        title: "Desafío superado",
        message: "Has enfrentado la crisis y sobrevivido, aunque con algunos daños. Hay espacio para mejorar tus estrategias de preparación y respuesta ante emergencias."
      };
    } else {
      return {
        title: "Has enfrentado una crisis difícil",
        message: "La tormenta fue dura y tu negocio sufrió impactos importantes. Este es un buen momento para reflexionar sobre cómo prepararse mejor para futuras crisis."
      };
    }
  };

  const feedback = getFeedback();
  
  // Format metrics for display
  const formattedMetrics = [
    {
      name: "Economía",
      value: metrics.economy,
      icon: <Star className="h-4 w-4" />,
      color: "bg-amber-500"
    },
    {
      name: "Confianza",
      value: metrics.trust,
      icon: <ThumbsUp className="h-4 w-4" />,
      color: "bg-red-500"
    },
    {
      name: "Moral",
      value: metrics.morale,
      icon: <Award className="h-4 w-4" />,
      color: "bg-green-500"
    }
  ];

  const renderCertificate = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-2">
          <div className="border-4 border-amber-600 p-8 rounded-lg bg-amber-50">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="text-bcp-blue h-16 w-16" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-bcp-blue mb-2">Certificado de Participación</h2>
              <p className="text-gray-600 mb-6">Otorgado a</p>
              <p className="text-2xl font-bold mb-6">EMPRENDEDOR RESILIENTE</p>
              <p className="text-gray-700 mb-8">
                Por completar con éxito el desafío "Tormenta Inminente" <br/>
                y demostrar habilidades de resiliencia y gestión ante crisis empresariales.
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="w-16 border-t-2 border-gray-400 mx-auto"></div>
                  <p className="text-sm mt-1">Fecha</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-2">
                    <img src="placeholder.svg" alt="Sello BCP" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-sm">Zona Resiliente BCP</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 border-t-2 border-gray-400 mx-auto"></div>
                  <p className="text-sm mt-1">Puntuación: {score}/100</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <p className="text-xs text-gray-500">ID: RSL-{Math.floor(Math.random() * 100000)}</p>
                <p className="text-xs text-gray-500">www.contigoemprendedor.bcp.com.pe</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={() => setShowingCertificate(false)}>
              Cerrar
            </Button>
            <Button className="bg-gradient-bcp">
              <Download className="mr-2 h-4 w-4" /> Descargar Certificado
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {showingCertificate && renderCertificate()}
      
      <Card className="border-0 shadow-none">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-bcp-blue text-white text-center py-10">
          <div className="mx-auto mb-6 bg-white/10 p-4 rounded-full inline-flex">
            <Trophy className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold mb-1">¡Desafío completado!</CardTitle>
          <p className="text-blue-100">
            Sobreviviste a la tormenta. No todos los días son fáciles, pero hoy estás más fuerte que ayer.
          </p>
          
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center">
            <div className="mr-3 pr-3 border-r border-white/30">
              <div className="text-3xl font-bold">{score}</div>
              <div className="text-xs text-blue-100">PUNTOS</div>
            </div>
            <div className="text-left">
              <div className="font-semibold">{getFeedback().title}</div>
              <div className="text-xs text-blue-100">
                {score >= 70 ? "¡Excelente resiliencia!" : 
                 score >= 50 ? "Buena capacidad de respuesta" : 
                 "Has resistido la crisis"}
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <h3 className="font-semibold mb-3">{feedback.title}</h3>
            <p className="text-gray-600">{feedback.message}</p>
          </div>
          
          <h3 className="font-semibold mb-3">Resultados finales</h3>
          <GameMetrics metrics={formattedMetrics} />
          
          {achievements.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Logros desbloqueados</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center">
                    <div className="bg-gradient-bcp rounded-full p-2 mr-3">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold flex items-center text-bcp-blue mb-2">
              <Rocket className="h-5 w-5 mr-2" />
              ¿Qué aprendiste?
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Este desafío representa situaciones que pueden afectar a cualquier negocio. La preparación
              anticipada, la capacidad de respuesta y las estrategias de recuperación son clave para
              construir un negocio resiliente.
            </p>
            <p className="text-sm text-gray-600">
              En BCP Contigo Emprendedor encontrarás recursos para fortalecer cada aspecto de tu negocio
              y prepararte para escenarios inesperados.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 p-5 flex flex-col sm:flex-row gap-3 justify-between">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowingCertificate(true)}
              className="text-bcp-blue border-bcp-blue"
            >
              <Award className="mr-2 h-4 w-4" />
              Ver Certificado
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Compartir
            </Button>
          </div>
          
          <Button onClick={onClose} className="bg-gradient-bcp">
            Finalizar Desafío
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default GameResult;
