
import React, { useState } from 'react';
import { 
  Building2, MapPin, Store, Truck, Users, Wallet, 
  Shield, AlertTriangle, ChevronRight, ChevronLeft 
} from 'lucide-react';

const RiskAssessmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    location: '',
    employees: '',
    digitalLevel: '',
    supplierDependency: '',
    cashFlow: '',
    previousEmergencies: '',
    contingencyPlan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // For demo purposes, go to next step to show results
    nextStep();
  };

  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-bcp-blue">Información del negocio</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Tipo de negocio</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Store className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="businessType" 
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="retail">Tienda minorista</option>
                    <option value="food">Restaurante/Comida</option>
                    <option value="service">Servicios profesionales</option>
                    <option value="manufacturing">Manufactura/Producción</option>
                    <option value="tech">Tecnología/Digital</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Ubicación del negocio</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="location" 
                    value={formData.location}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una región</option>
                    <option value="lima">Lima</option>
                    <option value="arequipa">Arequipa</option>
                    <option value="trujillo">Trujillo</option>
                    <option value="cusco">Cusco</option>
                    <option value="piura">Piura</option>
                    <option value="other">Otra región</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Número de empleados</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="employees" 
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="solo">Solo yo (1)</option>
                    <option value="micro">2-5 empleados</option>
                    <option value="small">6-20 empleados</option>
                    <option value="medium">21-50 empleados</option>
                    <option value="large">Más de 50 empleados</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                type="button" 
                onClick={nextStep}
                className="bcp-button-primary"
              >
                Siguiente
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-bcp-blue">Operaciones y finanzas</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nivel de digitalización del negocio</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="digitalLevel" 
                      value="low" 
                      checked={formData.digitalLevel === 'low'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Bajo (Sin presencia digital o muy básica)</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="digitalLevel" 
                      value="medium" 
                      checked={formData.digitalLevel === 'medium'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Medio (Redes sociales, correo electrónico para negocio)</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="digitalLevel" 
                      value="high" 
                      checked={formData.digitalLevel === 'high'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Alto (Web, ventas online, operaciones digitalizadas)</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Dependencia de proveedores</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Truck className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="supplierDependency" 
                    value={formData.supplierDependency}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="low">Baja (Múltiples proveedores alternativos)</option>
                    <option value="medium">Media (Algunos proveedores alternativos)</option>
                    <option value="high">Alta (Pocos o un solo proveedor crítico)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Capacidad de flujo de caja</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Wallet className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="cashFlow" 
                    value={formData.cashFlow}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="critical">Crítica (Sin reservas para emergencias)</option>
                    <option value="limited">Limitada (Hasta 1 mes de operaciones)</option>
                    <option value="adequate">Adecuada (2-3 meses de operaciones)</option>
                    <option value="strong">Sólida (Más de 3 meses de operaciones)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-all flex items-center"
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                Anterior
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="bcp-button-primary"
              >
                Siguiente
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-bcp-blue">Experiencia y preparación</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">¿Ha sufrido tu negocio alguna emergencia anteriormente?</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="previousEmergencies" 
                      value="yes" 
                      checked={formData.previousEmergencies === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Sí</span>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="previousEmergencies" 
                      value="no" 
                      checked={formData.previousEmergencies === 'no'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">¿Cuentas actualmente con algún plan de contingencia?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Shield className="w-5 h-5 text-gray-400" />
                  </div>
                  <select 
                    name="contingencyPlan" 
                    value={formData.contingencyPlan}
                    onChange={handleInputChange}
                    className="bcp-input pl-10"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="none">Ninguno</option>
                    <option value="basic">Básico (Algunas medidas sencillas)</option>
                    <option value="partial">Parcial (Plan para algunas áreas)</option>
                    <option value="complete">Completo (Plan integral documentado)</option>
                  </select>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-bcp-orange mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">¿Por qué es importante esta información?</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Estos datos nos ayudarán a generar un perfil de riesgo personalizado y recomendaciones específicas para tu negocio. Toda la información es confidencial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-all flex items-center"
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                Anterior
              </button>
              <button 
                type="submit"
                className="bcp-button-primary"
              >
                Generar perfil de riesgo
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="animate-fade-in text-center">
            <div className="mb-6 text-bcp-orange">
              <Shield className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-bcp-blue">
              ¡Tu perfil de riesgo está listo!
            </h3>
            <p className="mb-8 text-gray-600">
              Hemos generado un análisis personalizado para tu negocio y un plan de continuidad.
            </p>
            
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-bcp-blue p-4 text-white">
                <h4 className="font-semibold">Resultado de la evaluación</h4>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-700 font-medium">Nivel de riesgo:</span>
                  <span className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full">Medio</span>
                </div>
                
                <div className="mb-6">
                  <div className="h-4 w-full bg-gray-200 rounded-full">
                    <div className="h-4 bg-bcp-warning rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <a 
                  href="/plan" 
                  className="bcp-button-primary w-full text-center block"
                >
                  Ver plan de continuidad
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    const progress = (step / 4) * 100;
    
    return (
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Información</span>
          <span>Operaciones</span>
          <span>Preparación</span>
          <span>Resultado</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-bcp-blue rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section className="bcp-section bg-gray-50">
      <div className="bcp-container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-bcp-blue mb-4">Evalúa el riesgo de tu negocio</h2>
          <p className="text-gray-600">
            Completa este formulario para recibir un diagnóstico personalizado y un plan de continuidad a medida
          </p>
        </div>
        
        {renderProgressBar()}
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            {renderFormStep()}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessmentForm;
