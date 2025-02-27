import './App.css'

import About from './pages/About'
import HomePage from './pages/HomePage'
import Location from './pages/Location'
import NotFound from './pages/NotFound'

// al usar sistemas de rutas, App funciona como organizador de páginas/rutas

import { Routes, Route, Link } from 'react-router-dom'
import StudentsList from './pages/StudentsList'
import StudentDetails from './pages/StudentDetails'

function App() {

  return (
    <>
     
      {/* <HomePage />
      <About />
      <Location /> */}

      <h2>esto siempre se ve</h2>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">Sobre nosotros</Link>
        <br />
        <Link to="/lugar/sede">Info de Lugar</Link>
        <br />
        <Link to="/all-students">todos los estudiantes</Link>
        
      </nav>

      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/lugar/sede" element={ <Location /> } />
        <Route path="/all-students" element={ <StudentsList />} />
        {/* Parametros dinamicos */}
        <Route path="/estudiante/:userId/:username" element={ <StudentDetails />} />
  

        <Route path="*" element={ <NotFound /> }/>

      </Routes>

    </>
  )
}

export default App
