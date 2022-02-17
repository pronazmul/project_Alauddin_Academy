import axios from 'axios'
import React from 'react'
export const StudentContex = React.createContext()

const StudentProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [student, setStudent] = React.useState({})
  const [students, setStudents] = React.useState([])

  const createNewStudent = async (values) => {
    setLoading(true)
    try {
      console.log(`...values`, values)
      let config = {
        method: 'post',
        url: 'https://alauddin-academy.herokuapp.com/api/v1/students',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { ...values },
      }
      await axios(config)
      setLoading(false)
      setSuccess('Student Added Successfull!')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  const getStudentByID = async (id) => {}

  const values = {
    loading,
    error,
    success,
    setError,
    setSuccess,
    student,
    students,
    createNewStudent,
    getStudentByID,
  }
  //   React.useEffect(() => {}, [])

  return (
    <StudentContex.Provider value={values}>{children}</StudentContex.Provider>
  )
}
export default StudentProvider
