
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, ArrowRight, Check, CloudLightning, Clock, Coins, Heart, LineChart, Shield, Trophy, Users, HelpCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import GameIntro from './GameIntro';
import ActionCard from './ActionCard';
import GameMetrics from './GameMetrics';
import GameResult from './GameResult';

interface StormGameProps {
  onComplete: (points: number) => void;
  onClose: () => void;
}

type GamePhase = 'intro' | 'preparation' | 'crisis' | 'recovery' | 'result';

interface GameMetric {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface Action {
  id: string;
  title: string;
  description: string;
  impact: {
    economy: number;
    trust: number;
    morale: number;
  };
  category: 'finance' | 'operations' | 'people' | 'marketing' | 'tech';
  icon: React.ReactNode;
}

interface Event {
  id: string;
  title: string;
  description: string;
  category: 'finance' | 'operations' | 'people' | 'marketing' | 'tech';
  severity: 'low' | 'medium' | 'high';
}

const StormGame: React.FC<StormGameProps> = ({ onComplete, onClose }) => {
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [round, setRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(5);
  const [availableActions, setAvailableActions] = useState<Action[]>([]);
  const [selectedActions, setSelectedActions] = useState<Action[]>([]);
  const [metrics, setMetrics] = useState({
    economy: 100,
    trust: 100,
    morale: 100,
  });
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [actionsPerRound, setActionsPerRound] = useState(2);
  const [gameScore, setGameScore] = useState(0);
  const [achievements, setAchievements] = useState<string[]>([]);

  const calculateScore = () => {
    return Math.round((metrics.economy + metrics.trust + metrics.morale) / 3);
  };

  const preparationActions: Action[] = [
    {
      id: "prep1",
      title: "Fondo de Emergencia",
      description: "Crear un fondo para cubrir 3 meses de gastos operativos",
      impact: { economy: -5, trust: 5, morale: 3 },
      category: "finance",
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      id: "prep2",
      title: "Plan de Comunicación",
      description: "Establecer canales de comunicación alternativos con clientes y equipo",
      impact: { economy: -2, trust: 8, morale: 5 },
      category: "marketing",
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    {
      id: "prep3",
      title: "Capacitar al Equipo",
      description: "Entrenar a tu personal en gestión de crisis y roles alternativos",
      impact: { economy: -5, trust: 3, morale: 10 },
      category: "people",
      icon: <Heart className="h-8 w-8 text-red-500" />
    },
    {
      id: "prep4",
      title: "Automatizar Procesos",
      description: "Implementar herramientas digitales para procesos críticos",
      impact: { economy: -10, trust: 5, morale: 5 },
      category: "tech",
      icon: <LineChart className="h-8 w-8 text-purple-500" />
    },
    {
      id: "prep5",
      title: "Diversificar Proveedores",
      description: "Identificar y establecer relaciones con proveedores alternativos",
      impact: { economy: -3, trust: 5, morale: 2 },
      category: "operations",
      icon: <Coins className="h-8 w-8 text-amber-500" />
    },
    {
      id: "prep6",
      title: "Seguro de Negocio",
      description: "Contratar un seguro que cubra interrupciones del negocio",
      impact: { economy: -7, trust: 8, morale: 3 },
      category: "finance",
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
  ];

  const recoveryActions: Action[] = [
    {
      id: "rec1",
      title: "Campaña de Confianza",
      description: "Comunicar los aprendizajes y mejoras a tus clientes",
      impact: { economy: -3, trust: 15, morale: 5 },
      category: "marketing",
      icon: <Heart className="h-8 w-8 text-red-500" />
    },
    {
      id: "rec2",
      title: "Innovación de Servicios",
      description: "Desarrollar nuevas ofertas que respondan a la realidad post-crisis",
      impact: { economy: -5, trust: 10, morale: 8 },
      category: "operations",
      icon: <LineChart className="h-8 w-8 text-purple-500" />
    },
    {
      id: "rec3",
      title: "Análisis Financiero",
      description: "Revisar y reajustar el plan financiero para recuperación",
      impact: { economy: 12, trust: 3, morale: 2 },
      category: "finance",
      icon: <Coins className="h-8 w-8 text-amber-500" />
    },
    {
      id: "rec4",
      title: "Reconocimiento al Equipo",
      description: "Implementar un programa de reconocimiento por la resiliencia mostrada",
      impact: { economy: -2, trust: 5, morale: 15 },
      category: "people",
      icon: <Trophy className="h-8 w-8 text-green-500" />
    },
  ];

  const crisisEvents: Event[] = [
    {
      id: "crisis1",
      title: "Caída de Sistemas",
      description: "Tus sistemas informáticos han fallado. ¿Cómo responderás?",
      category: "tech",
      severity: "medium"
    },
    {
      id: "crisis2",
      title: "Crisis de Liquidez",
      description: "Un cliente importante ha retrasado un pago considerable. ¿Qué harás?",
      category: "finance",
      severity: "high"
    },
    {
      id: "crisis3",
      title: "Problema con Proveedor",
      description: "Tu proveedor principal ha dejado de operar sin previo aviso.",
      category: "operations",
      severity: "medium"
    },
    {
      id: "crisis4",
      title: "Crisis de Reputación",
      description: "Ha surgido una queja viral sobre tu servicio en redes sociales.",
      category: "marketing",
      severity: "high"
    },
    {
      id: "crisis5",
      title: "Conflicto en el Equipo",
      description: "Ha surgido un conflicto importante entre miembros clave del equipo.",
      category: "people",
      severity: "medium"
    },
  ];

  const triggerRandomEvent = () => {
    const randomIndex = Math.floor(Math.random() * crisisEvents.length);
    setCurrentEvent(crisisEvents[randomIndex]);
    
    const eventResponses = generateEventResponses(crisisEvents[randomIndex]);
    setAvailableActions(eventResponses);
    setSelectedActions([]);
  };

  const generateEventResponses = (event: Event): Action[] => {
    const basicResponses: Action[] = [
      {
        id: `response-basic-${event.category}`,
        title: "Respuesta Básica",
        description: "Atender la situación con los recursos disponibles",
        impact: { economy: -10, trust: -5, morale: -5 },
        category: event.category,
        icon: <AlertCircle className="h-8 w-8 text-amber-500" />
      }
    ];
    
    const hasPrepared = selectedActions.some(action => action.category === event.category);
    
    if (hasPrepared) {
      basicResponses.push({
        id: `response-prepared-${event.category}`,
        title: "Respuesta Preparada",
        description: "Implementar el plan de contingencia que preparaste",
        impact: { economy: 5, trust: 10, morale: 10 },
        category: event.category,
        icon: <Check className="h-8 w-8 text-green-500" />
      });
    }
    
    basicResponses.push({
      id: `response-creative-${event.category}`,
      title: "Solución Creativa",
      description: "Intentar una aproximación innovadora al problema",
      impact: { 
        economy: hasPrepared ? -5 : -15, 
        trust: hasPrepared ? 5 : 0, 
        morale: hasPrepared ? 8 : -3 
      },
      category: event.category,
      icon: <CloudLightning className="h-8 w-8 text-purple-500" />
    });
    
    return basicResponses;
  };

  const handleSelectAction = (action: Action) => {
    if (selectedActions.length >= actionsPerRound) {
      toast({
        title: "¡Acciones limitadas!",
        description: `Solo puedes elegir ${actionsPerRound} acciones por ronda.`,
        variant: "destructive",
      });
      return;
    }
    
    setSelectedActions(prev => [...prev, action]);
    
    setMetrics(prev => ({
      economy: Math.max(0, Math.min(100, prev.economy + action.impact.economy)),
      trust: Math.max(0, Math.min(100, prev.trust + action.impact.trust)),
      morale: Math.max(0, Math.min(100, prev.morale + action.impact.morale)),
    }));
    
    setAvailableActions(prev => prev.filter(a => a.id !== action.id));
    
    toast({
      title: "¡Acción seleccionada!",
      description: action.title,
    });
  };

  const handleNextRound = () => {
    // Corregido: Solo validamos las acciones seleccionadas después de la intro
    if (phase !== 'intro' && selectedActions.length < actionsPerRound && phase !== 'result') {
      toast({
        title: "Acciones pendientes",
        description: `Debes seleccionar ${actionsPerRound} acciones para continuar.`,
        variant: "destructive",
      });
      return;
    }
    
    if (round < totalRounds) {
      setRound(prev => prev + 1);
      setSelectedActions([]);
      
      if (phase === 'crisis') {
        triggerRandomEvent();
      }
    } else {
      if (phase === 'intro') {
        // Inicializar la fase de preparación con acciones disponibles
        setPhase('preparation');
        setAvailableActions(preparationActions);
        setSelectedActions([]);
        setRound(1);
      } else if (phase === 'preparation') {
        setPhase('crisis');
        setTotalRounds(3);
        setRound(1);
        triggerRandomEvent();
      } else if (phase === 'crisis') {
        setPhase('recovery');
        setTotalRounds(2);
        setRound(1);
        setAvailableActions(recoveryActions);
        setSelectedActions([]);
      } else if (phase === 'recovery') {
        setGameScore(calculateScore());
        setPhase('result');
      }
    }
  };

  const getPhaseInfo = () => {
    switch (phase) {
      case 'intro':
        return {
          title: "Tormenta Inminente",
          description: "Tu negocio está creciendo... pero algo se avecina. ¿Estás preparado para lo inesperado?"
        };
      case 'preparation':
        return {
          title: "Fase de Preparación",
          description: "Elige sabiamente. Cada acción puede marcar la diferencia cuando la tormenta llegue."
        };
      case 'crisis':
        return {
          title: "¡La Crisis ha Llegado!",
          description: currentEvent?.description || "Es hora de enfrentar los desafíos con lo que has preparado."
        };
      case 'recovery':
        return {
          title: "Fase de Recuperación",
          description: "La tormenta está pasando. Es momento de reconstruir y aprender."
        };
      case 'result':
        return {
          title: "Resultados",
          description: "Sobreviviste a la tormenta. No todos los días son fáciles, pero hoy estás más fuerte que ayer."
        };
      default:
        return {
          title: "Tormenta Inminente",
          description: "Prepárate para enfrentar desafíos inesperados en tu negocio."
        };
    }
  };

  const phaseInfo = getPhaseInfo();

  const formattedMetrics = [
    {
      name: "Economía",
      value: metrics.economy,
      icon: <Coins className="h-4 w-4" />,
      color: "bg-amber-500"
    },
    {
      name: "Confianza",
      value: metrics.trust,
      icon: <Heart className="h-4 w-4" />,
      color: "bg-red-500"
    },
    {
      name: "Moral",
      value: metrics.morale,
      icon: <Users className="h-4 w-4" />,
      color: "bg-green-500"
    }
  ];

  const isActionSelected = (actionId: string) => {
    return selectedActions.some(action => action.id === actionId);
  };

  // Cuando cambiamos de fase, llenar las acciones disponibles
  useEffect(() => {
    if (phase === 'preparation') {
      setAvailableActions(preparationActions);
    } else if (phase === 'recovery') {
      setAvailableActions(recoveryActions);
    }
  }, [phase]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {phase === 'intro' ? (
        <GameIntro onStart={handleNextRound} />
      ) : phase === 'result' ? (
        <GameResult 
          metrics={metrics} 
          score={gameScore} 
          achievements={achievements}
          onClose={onClose} 
        />
      ) : (
        <Card className="border-0 shadow-none">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl text-bcp-blue">{phaseInfo.title}</CardTitle>
                <CardDescription className="mt-2 text-gray-700">{phaseInfo.description}</CardDescription>
              </div>
              <Badge 
                variant="outline" 
                className={`font-semibold px-3 py-1 
                  ${phase === 'preparation' ? 'bg-blue-100 text-blue-700 border-blue-300' : 
                  phase === 'crisis' ? 'bg-red-100 text-red-700 border-red-300' : 
                  'bg-green-100 text-green-700 border-green-300'}`}
              >
                {phase === 'preparation' ? 'Preparación' : 
                 phase === 'crisis' ? 'Crisis' : 
                 'Recuperación'}
              </Badge>
            </div>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-bcp-blue mr-1" />
                <span className="text-sm font-medium">Ronda {round} de {totalRounds}</span>
              </div>
              
              <Progress className="h-2 flex-grow" value={(round / totalRounds) * 100} />
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <GameMetrics metrics={formattedMetrics} showDescription={true} />
            
            <div className="flex justify-between items-center mt-6 mb-3">
              <h3 className="font-semibold text-lg">
                {phase === 'preparation' ? 'Acciones de preparación disponibles' : 
                 phase === 'crisis' ? `Respuesta a: ${currentEvent?.title}` :
                 'Acciones de recuperación disponibles'}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                <HelpCircle className="h-4 w-4 mr-1 text-blue-500" />
                Selecciona {actionsPerRound} acciones
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  Debes seleccionar <strong>{actionsPerRound} acciones</strong> en esta ronda. 
                  Cada acción afectará tus métricas de Economía, Confianza y Moral.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {availableActions.map(action => (
                <ActionCard 
                  key={action.id} 
                  action={action} 
                  onSelect={() => handleSelectAction(action)}
                  disabled={selectedActions.length >= actionsPerRound}
                  isSelected={false}
                />
              ))}
              {selectedActions.length > 0 && selectedActions.map(action => (
                <ActionCard 
                  key={action.id} 
                  action={action} 
                  onSelect={() => {/* Already selected */}}
                  disabled={false}
                  isSelected={true}
                />
              ))}
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Progreso de selección</h3>
              <div className="flex items-center">
                <div className="flex-grow mr-4">
                  <Progress 
                    value={(selectedActions.length / actionsPerRound) * 100} 
                    className="h-3"
                    indicatorClassName="bg-bcp-blue"
                  />
                </div>
                <div className="text-sm font-medium">
                  {selectedActions.length} de {actionsPerRound} acciones
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="border-t bg-gray-50 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <span className={`mr-1 font-medium ${selectedActions.length < actionsPerRound ? 'text-amber-600' : 'text-green-600'}`}>
                {selectedActions.length}
              </span> 
              de {actionsPerRound} acciones seleccionadas
              {selectedActions.length < actionsPerRound && (
                <AlertCircle className="h-4 w-4 text-amber-500 ml-1" />
              )}
            </div>
            
            <Button 
              onClick={handleNextRound}
              disabled={selectedActions.length < actionsPerRound}
              className={`bg-gradient-bcp ${selectedActions.length < actionsPerRound ? 'opacity-70' : ''}`}
            >
              {round < totalRounds ? 'Siguiente Ronda' : 'Siguiente Fase'} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default StormGame;
