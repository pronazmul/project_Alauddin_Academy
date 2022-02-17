import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function ProtectedRoute() {
  const location = useLocation()
  const user = localStorage.getItem('loggedInUser')
    ? JSON.parse(localStorage.getItem('loggedInUser'))
    : {}
  return user && user.email ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  )
}
