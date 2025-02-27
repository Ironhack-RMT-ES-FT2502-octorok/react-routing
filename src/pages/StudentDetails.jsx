import { useParams } from "react-router-dom"
import allStudents from "../data/estudiantes.json"

function StudentDetails() {

  //1 como accedemos al valor del URL dinamico
  const parametrosDinamicos = useParams()
  console.log(parametrosDinamicos)


  //2 como, teniendo ese valor, lo buscamos en toda la data
  const foundUser = allStudents.find((cadaEstudiante) => {
    if (cadaEstudiante.id === parametrosDinamicos.userId) {
      return true
    } else {
      return false
    }
  })

  console.log(foundUser)


  //3 teniendo la data, como la renderizamos

  return (
    <div>
      
      <h3>Detalles del estudiante</h3>

      <p>{foundUser.username}</p>
      <p>curso: {foundUser.course}</p>
      <p>ciudad: {foundUser.city}</p>

    </div>
  )
}

export default StudentDetails