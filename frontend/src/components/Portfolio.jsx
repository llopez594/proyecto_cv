import { useState, useEffect } from "react";
import { getProjects } from "../services/api";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    getProjects()
      .then((res) => {
        const data = res.data;

        setProjects(data);
        setFilteredProjects(data);

        const uniqueCategories = Array.from(
          new Map(
            data
              .filter(p => p.category_slug)
              .map(p => [
                p.category_slug,
                { slug: p.category_slug, name: p.category_name }
              ])
          ).values()
        );

        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error al cargar los proyectos");
        setLoading(false);
      });
  }, []);

  // Filtro por categoría
  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(p => p.category_slug === filter)
      );
    }
  };

  // Loading
  if (loading) {
    return (
      <section id="portafolio" className="portfolio">
        <div className="container">
          <p>Cargando proyectos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portafolio" className="portfolio">
      <div className="container">
        <div className="section-header centered">
          <span className="section-badge">Mis trabajos</span>
          <h2 className="section-title">Portafolio de Proyectos</h2>
          <p className="section-description">
            Explora algunos de los proyectos en los que he trabajado
          </p>
        </div>

        {error && <p className="error-message">{error}</p>}

        {/* Filtros */}
        <div className="portfolio-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            Todos
          </button>

          {categories.map((category) => (
            <button
              key={category.slug}
              className={`filter-btn ${activeFilter === category.slug ? "active" : ""}`}
              onClick={() => handleFilter(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image_url} alt={project.title} />

                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3 class="portfolio-overlay-title">{project.title}</h3>
                    <p class="portfolio-overlay-desc">{project.short_description}</p>
                    <div class="portfolio-overlay-tags">
                      {project.tags.map((tag) => (
                        <span>{tag.name}</span>
                      ))}
                    </div>
                    <div className="portfolio-overlay-links">
                      {project.demo_url && (
                        <a href={project.demo_url} target="_blank" rel="noreferrer">
                          Demo
                        </a>
                      )}
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-info">
                <div className="portfolio-category">
                  {project.category_name}
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">
                  {project.short_description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No hay proyectos en esta categoría.</p>
          </div>
        )}

        <div className="portfolio-cta">
          <p>¿Interesado en trabajar juntos?</p>
          <a href="#contacto" className="btn btn-primary">
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
