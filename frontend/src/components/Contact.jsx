import { useState } from 'react';
import { sendContact } from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await sendContact(formData);


      setStatus({
        type: 'success',
        message: response?.message || '¡Mensaje enviado exitosamente!'
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || 'Error al enviar el mensaje.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header centered">
          <span className="section-badge">Contáctame</span>
          <h2 className="section-title">Trabajemos Juntos</h2>
          <p className="section-description">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Información de Contacto</h3>
            <p className="contact-info-text">
              Estoy disponible para freelance y colaboraciones.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <a href="mailto:luisjlopez594@gmail.com">luisjlopez594@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Teléfono</h4>
                  <a href="tel:+584121910661">+58 412 191 0661</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Ubicación</h4>
                  <span>Puerto Ordaz, Venezuela</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Redes Sociales</h4>
              <div className="social-icons">
                <a href="https://github.com/#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
