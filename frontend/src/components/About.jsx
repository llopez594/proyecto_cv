import { useEffect, useRef, useState } from "react";
import { getAbout } from "../services/api";
import profileImg from "../resources/profile.png";

const About = () => {
  const skillsRef = useRef(null);
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getAbout()
      .then((res) => {
        if (res.ok) {
          setAbout(res.data.about);
          setSkills(res.data.skills || []);
        }
      })
      .catch((err) => {
        console.error("Error loading about:", err);
      });
  }, []);

  useEffect(() => {
    if (!skills.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const progress = bar.getAttribute('data-progress');
              bar.style.width = progress + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  if (!about) return null;

  /* const skills = [
    { name: 'HTML5 & CSS3', icon: 'fa-html5', progress: 95 },
    { name: 'JavaScript', icon: 'fa-js', progress: 90 },
    { name: 'React.js', icon: 'fa-react', progress: 85 },
    { name: 'Node.js', icon: 'fa-node', progress: 80 },
    { name: 'Bases de Datos', icon: 'fa-database', progress: 85 },
    { name: 'Git & GitHub', icon: 'fa-git-alt', progress: 90 }
  ]; */

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">Conóceme</span>
          <h2 className="section-title">Sobre Mí</h2> */}
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="about-img-wrapper">
              <img
                //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                src={profileImg}
                alt="Perfil"
                className="about-img"
              />
              <div className="about-img-border"></div>
            </div>
            <div className="about-card floating">
              <i className="fas fa-code"></i>
              <span>{about.role_label}</span>
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">{about.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: about.description }} />

            <h4 className="skills-title">Habilidades Técnicas</h4>
            <div className="skills-grid" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-icon">
                    <i className={`fab ${skill.icon}`}></i>
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-progress={skill.skill_level}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="values-title">Valores y Enfoque</h4>
            <div className="values-list">
              <div className="value-item">
                <i className="fas fa-check-circle"></i>
                <div><strong>Calidad sobre cantidad:</strong> Cada línea de código importa.</div>
              </div>
              <div className="value-item">
                <i className="fas fa-check-circle"></i>
                <div><strong>Aprendizaje continuo:</strong> Siempre en búsqueda de nuevas tecnologías.</div>
              </div>
              <div className="value-item">
                <i className="fas fa-check-circle"></i>
                <div><strong>Colaboración:</strong> Trabajo en equipo para mejores resultados.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
