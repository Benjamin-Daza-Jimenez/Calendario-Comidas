import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Principal from './pages/Principal.tsx'
import PrevVerRecetas from './pages/PrevVerRecetas.tsx'
import NuevaReceta from './pages/NuevaReceta.tsx'
import IniciarSesion from './pages/IniciarSesion.tsx'
import Registro from './pages/Registro.tsx'
import Desayuno from './pages/RecetasDesayuno.tsx'
import Almuerzo from './pages/RecetasAlmuerzo.tsx'
import Cena from './pages/RecetasCena.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Definición de rutas
const router = createBrowserRouter([
  {
    path: '/', // Ruta principal
    element: <App />, // Componente principal de la aplicación
    errorElement: <div>Error al cargar la aplicación</div>, // Componente de error
    children: [
      {
        index: true, // Ruta por defecto
        element: <Principal />, // Componente para la ruta principal
      },
      {
        path: 'calendario', // Ruta para CAlendario
        element: <Principal />, // Componente para Calendario
      },
      {
        path: 'filtro-recetas', // Ruta para ver recetas previas
        element: <PrevVerRecetas />, // Componente para ver recetas previas
      },
      {
        path: 'nueva-receta', // Ruta para crear una nueva receta
        element: <NuevaReceta />, // Componente para crear una nueva receta
      },
      {
        path: 'iniciar-sesion',
        element: <IniciarSesion />
      },
      {
        path: 'registro',
        element: <Registro />
      },
      {
        path: 'filtro-recetas/recetas-desayuno',
        element: <Desayuno />
      },
      {
        path: 'filtro-recetas/recetas-almuerzo',
        element: <Almuerzo />
      },
      {
        path: 'filtro-recetas/recetas-cena',
        element: <Cena />
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);