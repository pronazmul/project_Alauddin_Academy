import React from 'react'
import { AuthContex } from '../contexts/AuthContext'

export default function useAuth() {
  return React.useContext(AuthContex)
}
