"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    // ABOUT
    await queryInterface.bulkInsert("about", [
      {
        title: "Mi Historia Profesional",
        //description: "Soy estudiante de Ingeniería en la Universidad Nacional Experimental de Guayana (UNEG), apasionado por el desarrollo web y la creación de soluciones digitales innovadoras.",
        description: "<p>Soy estudiante de Ingeniería en la Universidad Nacional Experimental de Guayana (UNEG), apasionado por el desarrollo web y la creación de soluciones digitales innovadoras.</p><p>Con más de 3 años de experiencia en desarrollo web, he trabajado en diversos proyectos que van desde sitios web corporativos hasta aplicaciones web complejas.</p>",
        role_label: "Full Stack Developer",
        created_at: new Date()
      }
    ]);

    // CATEGORIES
    await queryInterface.bulkInsert("categories", [
      {
        name: "Frontend",
        slug: "frontend",
        description: "Proyectos de desarrollo frontend",
        created_at: new Date()
      },
      {
        name: "Full-Stack",
        slug: "fullstack",
        description: "Proyectos full-stack completos",
        created_at: new Date()
      },
      {
        name: "Backend",
        slug: "backend",
        description: "APIs y servicios backend",
        created_at: new Date()
      },
      {
        name: "Ingeniería de Datos",
        slug: "data-engineering",
        description: "Proyectos de ingeniería de datos y análisis",
        created_at: new Date()
      }
    ]);

    // TAGS
    await queryInterface.bulkInsert("tags", [
      { name: "HTML5 & CSS3", slug: "html5", color: "#E34F26", icon: 'fa-html5', skill_level: 95, order_position: 1, is_skill: 1, created_at: new Date() },
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E", icon: 'fa-js', skill_level: 90, order_position: 2, is_skill: 1, created_at: new Date() },
      { name: "React.js", slug: "react", color: "#61DAFB", icon: 'fa-react', skill_level: 70, order_position: 3, is_skill: 1, created_at: new Date() },
      { name: "Node.js", slug: "nodejs", color: "#339933", icon: 'fa-node', skill_level: 80, order_position: 4, is_skill: 1, created_at: new Date() },
      { name: "Bases de Datos", slug: "database", color: "#1572B6", icon: 'fa-database', skill_level: 85, order_position: 5, is_skill: 1, created_at: new Date() },
      { name: "Git & GitHub", slug: "git", color: "#1572B6", icon: 'fa-git-alt', skill_level: 90, order_position: 6, is_skill: 1, created_at: new Date() },
      { name: "Express", slug: "express", color: "#000000", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "TypeScript", slug: "typescript", color: "#3178C6", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "MongoDB", slug: "mongodb", color: "#47A248", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "Docker", slug: "docker", color: "#2496ED", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "Python", slug: "python", color: "#3776AB", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() },
      { name: "Power BI", slug: "power-bi", color: "#F2C811", icon: null, skill_level: 0, order_position: 0, is_skill: 0, created_at: new Date() }
    ]);

    // PROJECTS
    await queryInterface.bulkInsert("projects", [
      {
        title: "E-Commerce Platform",
        slug: "ecommerce-platform",
        short_description: "Plataforma completa de comercio electrónico",
        description: "Sistema completo de ventas online con carrito, pagos y panel administrativo.",
        image_url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400",
        demo_url: null,
        github_url: null,
        category_id: 2,
        is_featured: true,
        order_position: 1,
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Sistema de Gestión",
        slug: "management",
        short_description: "CRM para gestión de clientes",
        description: "CRM empresarial para seguimiento de clientes y ventas.",
        image_url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400",
        demo_url: null,
        github_url: null,
        category_id: 2,
        is_featured: true,
        order_position: 2,
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "API RESTful",
        slug: "api-restful",
        short_description: "Backend escalable con autenticación JWT",
        description: "API robusta con autenticación JWT y documentación completa.",
        image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        demo_url: null,
        github_url: null,
        category_id: 3,
        is_featured: false,
        order_position: 3,
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Dashboard Analytics",
        slug: "dashboard-analytics",
        short_description: "Panel de control con gráficos interactivos",
        description: "Dashboard responsive con visualización de datos en tiempo real.",
        image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        demo_url: null,
        github_url: null,
        category_id: 4,
        is_featured: false,
        order_position: 4,
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Scrapers Web",
        slug: "scrapers-web",
        short_description: "Extractor de datos de sitios web",
        description: "Sistema de scraping para extraer información de páginas web.",
        image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        demo_url: null,
        github_url: null,
        category_id: 4,
        is_featured: false,
        order_position: 5,
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);

    // PROJECT_TAGS
    await queryInterface.bulkInsert("project_tags", [
      { project_id: 1, tag_id: 1 },
      { project_id: 1, tag_id: 3 },
      { project_id: 1, tag_id: 10 },

      { project_id: 2, tag_id: 1 },
      { project_id: 2, tag_id: 2 },
      { project_id: 2, tag_id: 8 }, 

      { project_id: 3, tag_id: 4 },
      { project_id: 3, tag_id: 12 },
      { project_id: 3, tag_id: 8 }, 

      { project_id: 4, tag_id: 13 },
      { project_id: 4, tag_id: 8 }, 

      { project_id: 5, tag_id: 12 },
      { project_id: 5, tag_id: 4 }, 
      { project_id: 5, tag_id: 10 }, 
    ]);

    // SERVICES
    await queryInterface.bulkInsert("services", [
    {
      icon: 'fa-laptop-code',
      title: "Desarrollo Web Frontend",
      description:
        "Creación de interfaces modernas, responsive y optimizadas usando las últimas tecnologías.",
      service_features: JSON.stringify([
        "Diseño responsive",
        "Optimización SEO",
        "Animaciones fluidas",
      ]),
      price: "Desde $300",
      is_featured: 0,
      status: 1,
      order_position: 1,
      created_at: new Date(),
    },
    {
      icon: 'fa-server',
      title: "Desarrollo Full-Stack",
      description:
        "Soluciones completas desde el frontend hasta el backend, incluyendo bases de datos y APIs.",
      service_features: JSON.stringify([
        "Frontend + Backend",
        "API RESTful",
        "Base de datos",
        "Deploy en servidor",
      ]),
      price: "Desde $800",
      is_featured: 1, 
      status: 1,
      order_position: 2,
      created_at: new Date(),
    },
    {
      icon: 'fa-mobile-alt',
      title: "Aplicaciones Web",
      description:
        "Desarrollo de aplicaciones web progresivas (PWA) que funcionan como apps nativas.",
      service_features: JSON.stringify([
        "PWA compatible",
        "Offline-first",
        "Push notifications",
      ]),
      price: "Desde $500",
      is_featured: 0,
      status: 1,
      order_position: 3,
      created_at: new Date(),
    },
    {
      icon: 'fa-tools',
      title: "Mantenimiento Web",
      description:
        "Mantenimiento continuo, actualizaciones, corrección de bugs y soporte técnico.",
      service_features: JSON.stringify([
        "Actualizaciones",
        "Corrección de bugs",
        "Soporte técnico"
      ]),
      price: "Desde $150/mes",
      is_featured: 0,
      status: 1,
      order_position: 4,
      created_at: new Date(),
    },
    {
      icon: 'fa-graduation-cap',
      title: "Consultoría & Formación",
      description:
        "Asesoría técnica, revisión de código y sesiones de formación en desarrollo web.",
      service_features: JSON.stringify([
        "Code review",
        "Mentoría 1-1",
        "Consultoría técnica"
      ]),
      price: "$50/hora",
      is_featured: 0,
      status: 1,
      order_position: 5,
      created_at: new Date(),
    },
  ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("about", null, {});
    await queryInterface.bulkDelete("project_tags", null, {});
    await queryInterface.bulkDelete("projects", null, {});
    await queryInterface.bulkDelete("tags", null, {});
    await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("services", null, {});
  }
};
