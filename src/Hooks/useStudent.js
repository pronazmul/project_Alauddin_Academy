import React from 'react'
import { StudentContex } from './../contexts/StudentContext'

export default function useStudent() {
  return React.useContext(StudentContex)
}
