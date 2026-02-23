import { useEffect, useState } from "react";
import { getServices } from "../services/api";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
      .then((res) => {
        if (res.ok) setServices(res.data || []);
      })
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  const processSteps = [
    { number: '01', title: 'Descubrimiento', description: 'Entiendo tus necesidades y visión.' },
    { number: '02', title: 'Planificación', description: 'Creo una estrategia detallada.' },
    { number: '03', title: 'Diseño & Desarrollo', description: 'Desarrollo con actualizaciones constantes.' },
    { number: '04', title: 'Testing & Launch', description: 'Pruebas y despliegue final.' },
    { number: '05', title: 'Soporte', description: 'Soporte y mantenimiento continuo.' }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header centered">
          <span className="section-badge">Qué ofrezco</span>
          <h2 className="section-title">Servicios Profesionales</h2>
          <p className="section-description">
            Soluciones completas de desarrollo web adaptadas a tus necesidades
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.is_featured ? 'featured' : ''}`}>
              {service.is_featured ? (<div className="featured-badge">Más Popular</div>) : null}
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {(service.service_features || []).map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h3 className="process-title">Mi Proceso de Trabajo</h3>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
