import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import Loader from './components/elements/Loader'
import Dashboard from './components/screens/Dashboard'
import Login from './components/screens/Login'

export default function App() {
  const [preLoader, setPreLoader] = useState(true)
  const handlePreLoader = () => setPreLoader(false)

  useEffect(() => {
    window.addEventListener('load', handlePreLoader)
    if (preLoader) {
      return () => window.removeEventListener('load', handlePreLoader)
    } else {
      return false
    }
  }, [preLoader])

  return (
    <Routes>
      <Route path='/' element={preLoader ? <Loader /> : <Login />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path='/dashboard'
          element={preLoader ? <Loader /> : <Dashboard />}
        />
      </Route>
      <Route path='*' element={<Login />} />
    </Routes>
  )
}
