import allStudents from "../data/estudiantes.json"

import { Link } from "react-router-dom"

function StudentsList() {
  return (
    <div>
      
      <h3>Lista de estudiantes</h3>

      {allStudents.map((cadaEstudiante) => {
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