# 🌐 Sitio Web Personal – Proyecto UNEG

Plantilla web personal de estilo **minimalista y profesional**, desarrollada como proyecto académico para la asignatura **Desarrollo Web** en la **Universidad Nacional Experimental de Guayana (UNEG)**.

El sitio presenta información personal, servicios profesionales, portafolio de proyectos y un formulario de contacto, con una interfaz moderna, responsive y orientada a buenas prácticas de desarrollo web.

---

## ✨ Características Principales

- Diseño moderno y minimalista  
- Totalmente responsive (desktop, tablet y mobile)  
- Animaciones suaves y efectos visuales sutiles  
- Estructura HTML5 semántica  
- Estilos CSS organizados y reutilizables  
- Interactividad con JavaScript  
- Preparado para conexión con backend y base de datos  
- Chat virtual demostrativo  

---

## 🧩 Secciones del Sitio

- **Hero / Landing** – Presentación principal  
- **Sobre Mí** – Perfil y habilidades técnicas  
- **Servicios** – Servicios profesionales ofrecidos  
- **Portafolio** – Proyectos desarrollados  
- **Contacto** – Formulario e información de contacto  
- **Chat Virtual** – Asistente interactivo (demo)  

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5  
- CSS3  
- JavaScript  
- Font Awesome  
- Google Fonts  

### Backend (preparado)
- Node.js  
- Express  
- Sequelize ORM  
- MySQL  

---

## 📁 Estructura del Proyecto

```
PROYECTO_CV/
│
├── backend/
│ ├── sequelize/
│ ├── src/
│ │ ├── config/
│ │ │ └── database.ts
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── app.ts
│ ├── .env
│ ├── .sequelizerc
│ ├── package.json
│ └── tsconfig.json
│
└── frontend/
├── src/
│ ├── components/
│ ├── resources/
│ ├── services/
│ ├── styles/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── vite.config.js
├── package.json
```

---

## 🚀 Configuración del Proyecto (Backend)

Inicialización de Sequelize:

```bash
npx sequelize-cli init
```

Ejecución de migraciones:

```bash
npx sequelize-cli db:migrate
```

Generación y ejecución de seeders:

```bash
npx sequelize-cli seed:generate --name seed-portfolio-data
npx sequelize-cli db:seed:all
```

---

## 🎓 Contexto Académico

- **Proyecto:** Sitio Web Personal  
- **Asignatura:** Desarrollo Web  
- **Semestre:** 2025-II 
- **Profesora:** Karla Lopez  
- **Universidad:** UNEG (Universidad Nacional Experimental de Guayana)  
- **Año:** 2025  

---

## 📄 Licencia

Proyecto desarrollado con fines **educativos y académicos**.  
Uso libre para prácticas y aprendizaje.

---

✨ *Proyecto elaborado como parte del proceso de formación profesional en desarrollo web.*
