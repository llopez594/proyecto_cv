const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Disponible para proyectos</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Construyendo</span>
            <span className="title-line">experiencias</span>
            <span className="title-line accent">digitales</span>
          </h1>
          <p className="hero-subtitle">
            Desarrollador web full-stack especializado en crear soluciones
            innovadoras que transforman ideas en realidad digital.
          </p>
          <div className="hero-cta">
            <a href="#portafolio" className="btn btn-primary">
              Ver Proyectos
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactar
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Años experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Clientes felices</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-wrapper">
            <div className="hero-img-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
              alt="Desarrollo Web"
              className="hero-img"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
