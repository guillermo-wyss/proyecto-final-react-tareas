# Proyecto Final React – Lista de Tareas

Aplicación web desarrollada con **React + Vite** que permite gestionar una lista de tareas.
El proyecto implementa enrutamiento, estado global, consumo de API externa, persistencia
local y estilos modulares.

---

## 🚀 Funcionalidades
- Agregar tareas
- Marcar tareas como completadas
- Eliminar tareas
- Borrar todas las tareas
- Persistencia de datos en `localStorage`
- Frase motivacional obtenida desde una API externa
- Navegación sin recarga entre pantallas

---

## 🧠 Tecnologías utilizadas
- **React + Vite**
- **React Router DOM v6**
- **Zustand** (estado global)
- **CSS Modules**
- **Fetch API**

---

## 🗂 Estructura del proyecto

```text
src/
├── components/        # Componentes reutilizables
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── *.module.css
│
├── pages/             # Pantallas por ruta
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── *.module.css
│
├── hooks/             # Custom hooks
│   └── useTaskForm.js
│
├── store/             # Estado global (Zustand)
│   └── taskStore.js
│
├── services/          # Consumo de APIs externas
│   └── api.js
│
├── App.jsx            # Componente principal
├── main.jsx           # Punto de entrada de la aplicación
└── index.css          # Estilos globales (opcional)

🔀 Rutas

/ → Pantalla de inicio con consumo de API externa

/tareas → Gestión de tareas (CRUD completo)

🌐 Consumo de API

Se consume una API pública para mostrar una frase motivacional en la pantalla de inicio.
Se implementa manejo de:

estado de carga (loading)

manejo de errores (error)

renderizado condicional

El objetivo del consumo de API es demostrar el uso de servicios externos y la gestión
de estados asíncronos en React.

💾 Persistencia de datos

Las tareas se almacenan en localStorage, permitiendo que la información se mantenga
al recargar la página o cerrar el navegador.
La lógica de persistencia se gestiona directamente desde el store de Zustand.

▶️ Instalación y ejecución

Para instalar las dependencias y ejecutar el proyecto en modo desarrollo:

npm install
npm run dev

📦 Build para producción
npm run build


Este comando genera la versión optimizada de la aplicación para su despliegue en producción.

✍️ Autor

Guillermo Wyss
Proyecto desarrollado como trabajo práctico final en React.



