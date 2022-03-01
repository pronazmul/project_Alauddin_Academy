import axios from 'axios'
import React from 'react'
export const AuthContex = React.createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(null)
  const [user, setUser] = React.useState({})

  const login = async (values) => {
    try {
      setLoading(true)
      let config = {
        method: 'post',
        url: 'https://alauddinapi.pronazmul.com/api/v1/users/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { email: values.email, password: values.password },
      }
      let {
        data: { data, status },
      } = await axios(config)
      if (status === 'success') {
        setSuccess('Login Successful')
        setUser(data)
        setLoading(false)
        localStorage.setItem('loggedInUser', JSON.stringify(data))
      }
    } catch (error) {
      setLoading(false)
      setError('Authentication Failed!')
    }
  }

  const logout = () => {
    localStorage.removeItem('loggedInUser')
    setUser({})
  }
  const values = {
    loading,
    error,
    success,
    user,
    setUser,
    login,
    logout,
  }
  React.useEffect(() => {
    const user = localStorage.getItem('loggedInUser')
      ? JSON.parse(localStorage.getItem('loggedInUser'))
      : {}
    setUser(user)
  }, [])
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>
}
export default AuthProvider
