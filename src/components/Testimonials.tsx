
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "El plan de continuidad que generé con Alerta Segura me ayudó a recuperar mi tienda después de las inundaciones en solo 2 semanas.",
      name: "María Rodríguez",
      business: "Tienda de abarrotes - Lima",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "Gracias a la evaluación de riesgos, identifiqué vulnerabilidades en mi negocio que nunca había considerado y pude tomar medidas preventivas.",
      name: "Carlos Mendoza",
      business: "Taller mecánico - Arequipa",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      quote: "Los recursos educativos de Contigo Emprendedor me han dado las herramientas para proteger mi inversión y capacitar a mi personal.",
      name: "Laura Herrera",
      business: "Restaurante - Trujillo",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <section className="bcp-section bg-gray-50">
      <div className="bcp-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bcp-blue mb-4">Lo que dicen nuestros emprendedores</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce cómo Alerta Segura ha ayudado a otros emprendedores a proteger sus negocios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bcp-card"
            >
              <div className="mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.25 20H10C7.79086 20 6 18.2091 6 16V13C6 10.7909 7.79086 9 10 9H13C15.2091 9 17 10.7909 17 13V28M34 20H27.75C25.5409 20 23.75 18.2091 23.75 16V13C23.75 10.7909 25.5409 9 27.75 9H30.75C32.9591 9 34.75 10.7909 34.75 13V28" stroke="#FF7800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
