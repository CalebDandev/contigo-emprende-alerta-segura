
import React, { useState } from 'react';
import { 
  ShieldCheck, AlertCircle, ArrowUpCircle, 
  Download, Printer, Share2, CheckCircle 
} from 'lucide-react';

const BusinessPlan = () => {
  const [activeTab, setActiveTab] = useState('prevention');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'prevention':
        return <PreventionTab />;
      case 'during':
        return <DuringEmergencyTab />;
      case 'recovery':
        return <RecoveryTab />;
      default:
        return <PreventionTab />;
    }
  };
  
  return (
    <section className="bcp-section bg-gray-50">
      <div className="bcp-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-bcp-blue mb-4">Tu Plan de Continuidad de Negocio</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Este plan personalizado está diseñado específicamente para tu negocio. Revisa cada sección y comienza a implementar las acciones recomendadas.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Plan Header */}
          <div className="bg-bcp-blue p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Tienda Minorista - Lima</h3>
                <div className="flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Riesgo medio
                  </span>
                  <span className="ml-4 text-sm">Generado: 08 Abril, 2025</span>
                </div>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-3">
                <button className="flex items-center bg-white text-bcp-blue font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-all text-sm">
                  <Download className="h-4 w-4 mr-1" />
                  Descargar
                </button>
                <button className="flex items-center bg-white text-bcp-blue font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-all text-sm">
                  <Printer className="h-4 w-4 mr-1" />
                  Imprimir
                </button>
                <button className="flex items-center bg-white text-bcp-blue font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-all text-sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Compartir
                </button>
              </div>
            </div>
          </div>
          
          {/* Plan Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-none">
              <button 
                className={`flex items-center px-6 py-4 font-medium text-sm border-b-2 ${
                  activeTab === 'prevention' 
                    ? 'border-bcp-blue text-bcp-blue' 
                    : 'border-transparent text-gray-500 hover:text-bcp-blue'
                }`}
                onClick={() => handleTabChange('prevention')}
              >
                <ShieldCheck className="h-5 w-5 mr-2" />
                Prevención y Preparación
              </button>
              <button 
                className={`flex items-center px-6 py-4 font-medium text-sm border-b-2 ${
                  activeTab === 'during' 
                    ? 'border-bcp-blue text-bcp-blue' 
                    : 'border-transparent text-gray-500 hover:text-bcp-blue'
                }`}
                onClick={() => handleTabChange('during')}
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                Durante la Emergencia
              </button>
              <button 
                className={`flex items-center px-6 py-4 font-medium text-sm border-b-2 ${
                  activeTab === 'recovery' 
                    ? 'border-bcp-blue text-bcp-blue' 
                    : 'border-transparent text-gray-500 hover:text-bcp-blue'
                }`}
                onClick={() => handleTabChange('recovery')}
              >
                <ArrowUpCircle className="h-5 w-5 mr-2" />
                Recuperación
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

const PreventionTab = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  
  const toggleTaskComplete = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(id => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };
  
  const preventionTasks = [
    {
      id: 'p1',
      title: 'Crear un directorio de contactos de emergencia',
      description: 'Incluye números de emergencia, trabajadores clave, proveedores y clientes importantes.',
      priority: 'alta'
    },
    {
      id: 'p2',
      title: 'Realizar un inventario de activos críticos',
      description: 'Documenta equipos, inventario y documentos importantes con su ubicación.',
      priority: 'alta'
    },
    {
      id: 'p3',
      title: 'Implementar respaldo de datos',
      description: 'Establece un sistema regular de respaldo de información financiera y operativa.',
      priority: 'media'
    },
    {
      id: 'p4',
      title: 'Revisar pólizas de seguros',
      description: 'Verifica que tu seguro cubra los riesgos más probables para tu tipo de negocio.',
      priority: 'alta'
    },
    {
      id: 'p5',
      title: 'Inspeccionar instalaciones',
      description: 'Realiza revisiones para identificar riesgos estructurales o de seguridad.',
      priority: 'media'
    }
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-bcp-blue mb-2">Antes de una emergencia</h4>
        <p className="text-gray-600">
          Las siguientes acciones te ayudarán a prepararte y reducir el impacto potencial de una emergencia en tu negocio.
        </p>
      </div>
      
      <div className="space-y-4">
        {preventionTasks.map((task) => (
          <div 
            key={task.id} 
            className={`p-4 border rounded-lg transition-all ${
              completedTasks.includes(task.id) 
                ? 'bg-green-50 border-green-200' 
                : 'bg-white border-gray-200 hover:border-bcp-blue'
            }`}
          >
            <div className="flex items-start">
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={() => toggleTaskComplete(task.id)}
              >
                {completedTasks.includes(task.id) ? (
                  <CheckCircle className="h-6 w-6 text-bcp-success" />
                ) : (
                  <div className="h-6 w-6 border-2 rounded-full border-gray-300"></div>
                )}
              </div>
              <div className="ml-3">
                <div className="flex items-center">
                  <h5 className={`font-medium ${completedTasks.includes(task.id) ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h5>
                  <span className={`ml-3 text-xs px-2 py-1 rounded-full ${
                    task.priority === 'alta' 
                      ? 'bg-red-100 text-red-800' 
                      : task.priority === 'media'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    Prioridad {task.priority}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{task.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <div className="text-sm text-gray-500">
          {completedTasks.length} de {preventionTasks.length} tareas completadas
        </div>
      </div>
    </div>
  );
};

const DuringEmergencyTab = () => {
  const emergencyActions = [
    {
      title: 'Garantizar la seguridad de las personas',
      steps: [
        'Evalúa rápidamente si hay personas heridas y presta los primeros auxilios.',
        'Evacúa el local siguiendo las rutas marcadas hacia los puntos de encuentro.',
        'Realiza un conteo de colaboradores y clientes presentes.',
        'Contacta a los servicios de emergencia (bomberos, ambulancia, policía).'
      ]
    },
    {
      title: 'Proteger documentos e información crítica',
      steps: [
        'Si es seguro, recupera la caja de documentos esenciales previamente identificada.',
        'Asegura los respaldos de información digital.',
        'Protege la mercadería de mayor valor, si es posible.'
      ]
    },
    {
      title: 'Comunicación con partes interesadas',
      steps: [
        'Notifica a los trabajadores no presentes sobre la situación.',
        'Comunícate con clientes afectados por la interrupción del servicio.',
        'Informa a proveedores clave sobre posibles cambios en entregas o pagos.',
        'Activa el árbol de comunicaciones previamente establecido.'
      ]
    }
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-bcp-orange mb-2">Durante una emergencia</h4>
        <p className="text-gray-600">
          Estos son los pasos críticos a seguir durante una situación de emergencia para minimizar daños y proteger personas y activos.
        </p>
      </div>
      
      <div className="space-y-6">
        {emergencyActions.map((action, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h5 className="font-semibold">{action.title}</h5>
            </div>
            <div className="p-4">
              <ol className="list-decimal pl-5 space-y-2">
                {action.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0" />
          <div>
            <h5 className="font-medium mb-1">Recuerda:</h5>
            <p className="text-sm text-gray-700">
              La prioridad número uno siempre es la seguridad de las personas. Los bienes materiales son reemplazables, las vidas no.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecoveryTab = () => {
  const recoveryPhases = [
    {
      title: 'Fase inmediata (1-7 días)',
      actions: [
        'Contactar a la aseguradora para iniciar el proceso de reclamación.',
        'Evaluar y documentar todos los daños (fotos, videos, listas).',
        'Asegurar instalaciones para prevenir daños adicionales.',
        'Notificar a clientes sobre la interrupción y posible fecha de reanudación.',
        'Establecer operaciones provisionales si es posible.'
      ]
    },
    {
      title: 'Fase intermedia (1-4 semanas)',
      actions: [
        'Restaurar servicios básicos (electricidad, agua, comunicaciones).',
        'Recuperar o reemplazar equipos e inventario críticos.',
        'Restablecer operaciones básicas, aunque sea parcialmente.',
        'Contactar a proveedores para reorganizar entregas y pagos.',
        'Comunicar activamente a clientes sobre la situación y avances.'
      ]
    },
    {
      title: 'Fase de recuperación completa (1-6 meses)',
      actions: [
        'Volver a operaciones normales o establecer el "nuevo normal".',
        'Revisar y actualizar el plan de continuidad basado en la experiencia.',
        'Implementar mejoras identificadas durante la recuperación.',
        'Realizar capacitación adicional con el personal sobre lecciones aprendidas.',
        'Evaluar oportunidades de fortalecer la resiliencia del negocio.'
      ]
    }
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-bcp-success mb-2">Recuperación después de la emergencia</h4>
        <p className="text-gray-600">
          Sigue estos pasos estructurados para recuperar tu negocio después de una emergencia, minimizando el tiempo de inactividad.
        </p>
      </div>
      
      <div className="space-y-8">
        {recoveryPhases.map((phase, index) => (
          <div key={index}>
            <h5 className="text-lg font-medium mb-3 flex items-center">
              <span className="bg-bcp-blue text-white h-7 w-7 rounded-full flex items-center justify-center text-sm mr-2">
                {index + 1}
              </span>
              {phase.title}
            </h5>
            <div className="bg-white border border-gray-200 rounded-lg">
              <ul className="divide-y divide-gray-200">
                {phase.actions.map((action, actionIdx) => (
                  <li key={actionIdx} className="p-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-bcp-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex">
          <ArrowUpCircle className="h-6 w-6 text-bcp-success mr-3 flex-shrink-0" />
          <div>
            <h5 className="font-medium mb-1">Tu negocio puede recuperarse más fuerte</h5>
            <p className="text-sm text-gray-700">
              Muchos negocios aprovechan las emergencias como oportunidades para mejorar su modelo y operaciones. Considera qué cambios podrías implementar para hacer tu negocio más resiliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
