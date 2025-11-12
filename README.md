# 📝 Proyecto Notas/Clases

Notus es una plataforma educativa diseñada como una solución universal y pública para optimizar la gestión de calificaciones académicas. La plataforma está diseñada para ofrecer una herramienta potente y fluida, enfocada exclusivamente en la administración de exámenes para docentes y tutores.

## 📌 Estado del Proyecto

### ✨ Características y Funcionalidades Clave

- Gestión de Clases Personalizadas:
  Los docentes pueden crear y personalizar sus clases de forma intuitiva, permitiendo la creación de más de una clase por docente.

- Roles Versátiles:
  Un mismo usuario puede desempeñar el rol de profesor en sus propias clases y, al mismo tiempo, ser alumno en otras, lo que aumenta la flexibilidad y adaptabilidad de la plataforma.

- Arquitectura Optimizada:
  La aplicación está construida sobre una base sólida para asegurar una experiencia de usuario fluida y un alto rendimiento.

## 🛠️ Tecnologías Utilizadas

- Frontend: React, JavaScript, TailwindCSS.

- Autenticación: [JWT]

- Despliegue: [Netlify]

- Bibliotecas: React-Hook-Form, Wouter, Zos, Zustand, Axios.

## 💡 Propósito y Alcance

Este proyecto fue desarrollado como parte de la Tecnicatura Universitaria en Programación en UTN Facultad Regional San Nicolás. El objetivo principal es servir como un proyecto integrador que demuestre la aplicación y el dominio de todas las tecnologías y metodologías de desarrollo de software aprendidas a lo largo de la carrera.

## ⚙️ 1. Requisitos previos

Antes de comenzar, asegurate de tener instalado:

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## 🧭 2. Instalación

### 🔹 Clonar el repositorio

// en la consola/bash

git clone https://github.com/usuario/nombre-del-proyecto.git
cd nombre-del-proyecto 
Creá un archivo .env con:
REACT_APP_API_URL=http://localhost:5000/api

🧪 3. Ejecución en modo desarrollo
cd frontend
npm start

🏗️ 5. Compilación (Build)

cd frontend
npm run build

🧩 6. Estructura del proyecto
├── public/               # Archivos públicos (favicon, imágenes estáticas)
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── images/            # Imágenes internas del proyecto
│   ├── pages/             # Vistas principales / páginas
│   ├── stores/            # Manejo de estado (Zustand, Redux, etc.)
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Punto de entrada de la app
│   └── index.css          # Estilos globales
│
├── .gitignore
├── eslint.config.js       # Configuración de linting
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite

  
## 👥 Miembros del Equipo

- *[Bogado, Nicolas Andrés]* 
- *[Fernandez, Tomás]* 
- *[Garrone, Santino]* 
- *[Ladner, Máximo]* 
