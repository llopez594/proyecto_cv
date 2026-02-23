import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = [/* 'inicio', */ 'sobre-mi', 'servicios', 'portafolio', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => handleLinkClick('inicio')}>
          <span className="logo-text">Luis José López</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* <a href="#inicio" className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={() => handleLinkClick('inicio')}>Inicio</a> */}
          <a href="#sobre-mi" className={`nav-link ${activeSection === 'sobre-mi' ? 'active' : ''}`} onClick={() => handleLinkClick('sobre-mi')}>Sobre Mí</a>
          <a href="#servicios" className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`} onClick={() => handleLinkClick('servicios')}>Servicios</a>
          <a href="#portafolio" className={`nav-link ${activeSection === 'portafolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portafolio')}>Portafolio</a>
          <a href="#contacto" className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`} onClick={() => handleLinkClick('contacto')}>Contacto</a>
        </div>

        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
