# React + TypeScript + Vite - To Do App

## 📝 About the Project
A modern and responsive **To Do App** built using **React + TypeScript + Vite**, connected to **MockAPI** for real backend simulation.  
The app allows users to manage tasks with full **CRUD** operations and a smooth drag-and-drop interface.
save in api and local storage 
---

## 🚀 Features
- ➕ **Add tasks** with instant API saving (POST to MockAPI).
- ✏️ **Edit tasks** and update them in the API (PUT request).
- 🗑️ **Delete tasks** directly from the API (DELETE request).
- 👁️ **Show/Hide tasks** locally.
- 🎯 **Set task priorities** (High / Medium / Low) with colored indicators.
- 🔄 **Reorder tasks** with drag & drop using **@hello-pangea/dnd**.
- 🎨 **Responsive design** using Tailwind CSS + Material UI.

---

## 🛠️ Tech Stack
- ⚛ **React 19**
- 📜 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🎭 **Material UI**
- 📦 **@hello-pangea/dnd**
- 🛣 **React Router DOM**
- 🌐 **MockAPI** (for backend simulation)

---

## 📡 API Integration
The app is connected to **MockAPI** to simulate a backend server:  
- **GET**: Fetch all tasks when the page loads.
- **POST**: Add a new task.
- **PUT**: Edit/update a task.
- **DELETE**: Remove a task.

API Base URL Example:  
```bash
# React + TypeScript + Vite - To Do App

## 📝 About the Project
A modern and responsive **To Do App** built using **React + TypeScript + Vite**, connected to **MockAPI** for real backend simulation.  
The app allows users to manage tasks with full **CRUD** operations and a smooth drag-and-drop interface.

---

## 🚀 Features
- ➕ **Add tasks** with instant API saving (POST to MockAPI).
- ✏️ **Edit tasks** and update them in the API (PUT request).
- 🗑️ **Delete tasks** directly from the API (DELETE request).
- 👁️ **Show/Hide tasks** locally.
- 🎯 **Set task priorities** (High / Medium / Low) with colored indicators.
- 🔄 **Reorder tasks** with drag & drop using **@hello-pangea/dnd**.
- 🎨 **Responsive design** using Tailwind CSS + Material UI.

---

## 🛠️ Tech Stack
- ⚛ **React 19**
- 📜 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🎭 **Material UI**
- 📦 **@hello-pangea/dnd**
- 🛣 **React Router DOM**
- 🌐 **MockAPI** (for backend simulation)

---

## 📡 API Integration
The app is connected to **MockAPI** to simulate a backend server:  
- **GET**: Fetch all tasks when the page loads.
- **POST**: Add a new task.
- **PUT**: Edit/update a task.
- **DELETE**: Remove a task.

API Base URL Example:  
```bash
https://<your-mockapi-id>.mockapi.io/api/r1/users
https://<your-mockapi-id>.mockapi.io/api/r1/tasks




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
