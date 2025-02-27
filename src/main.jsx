import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
// ! ESTA CONFIGURACION ES OBLIGATORIA PARA EMPEZAR A USAR EL SISTEMA DE RUTAS DE react-router-dom

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
