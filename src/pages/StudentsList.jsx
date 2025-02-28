import allStudents from "../data/estudiantes.json"

import { Link, useSearchParams } from "react-router-dom"



function StudentsList() {

  const [ searchParams, setSearchParams ] = useSearchParams()

  const handleSelectCourse = (event) => {
    console.log("seleccionando curso de: " + event.target.value)
    if (event.target.value === "") {
      setSearchParams() // si la selección es todos, limpia todos los queries
    } else {
      setSearchParams( { course: event.target.value } )
    }
  }

  const course = searchParams.get("course")
  console.log("course de query:", course)

  return (
    <div>
      
      <h3>Lista de estudiantes</h3>

      <select onChange={ handleSelectCourse }>
        <option value="">Todos</option>
        <option value="ux">UX</option>
        <option value="web">Web</option>
        <option value="data">Data</option>
      </select>

      {allStudents
      .filter((cadaEstudiante) => {
        if (course === null || cadaEstudiante.course === course) {
          //la primera condicion es para incluirlos a todos si no existe la selección (si el query es null)
          return true
        } else {
          return false
        }
      })
      .map((cadaEstudiante) => {
        return (
          <li key={cadaEstudiante.id}>
            <Link to={`/estudiante/${cadaEstudiante.id}/${cadaEstudiante.username}`}>{cadaEstudiante.username}</Link>
          </li>
        )
      })}

    </div>
  )
}

export default StudentsList