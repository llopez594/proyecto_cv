import { useEffect, useState } from "react";
import { getAbout, getServices } from "../services/api";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [about, setAbout] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    getAbout()
      .then((res) => {
        if (res.ok) setAbout(res.data.about);
      })
      .catch(() => { });

    getServices()
      .then((res) => {
        if (res.ok) setServices(res.data || []);
      })
      .catch(() => { });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">Luis José López</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-description">
              Desarrollador web apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegación</h4>
              {/* <a href="#inicio">Inicio</a> */}
              <a href="#sobre-mi">Sobre Mí</a>
              <a href="#servicios">Servicios</a>
              <a href="#portafolio">Portafolio</a>
            </div>

            <div className="footer-column">
              <h4>Servicios</h4>
              {services.slice(0, 4).map((service) => (
                <a key={service.id} href="#servicios">
                  {service.title}
                </a>
              ))}
            </div>

            <div className="footer-column">
              <h4>Contacto</h4>
              <a href="mailto:luisjlopez594@gmail.com">Email</a>
              <a href="tel:+584121910661">Teléfono</a>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Luis José López. Todos los derechos reservados.</p>
          <p>Hecho con <i className="fas fa-heart"></i> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
