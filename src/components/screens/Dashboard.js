import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import Toaster from '../elements/Toaster'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import AddStudent from '../sections/AddStudent'
import AllStudents from '../sections/AllStudents'
import Overview from '../sections/Overview'

const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('tab') || 'overview'
  const renderSection = (section) => {
    switch (section) {
      case 'overview':
        return <Overview />
      case 'all_students':
        return <AllStudents />
      case 'add_student':
        return <AddStudent />
      default:
        return <Overview />
    }
  }

  React.useEffect(() => {
    if (!user?.email) {
      navigate('/')
    } else {
      return false
    }
  }, [user])

  return (
    <div className='h-screen mediumScreen lg:dextopScreen relative'>
      <Toaster />
      <div className='header bg-white shadow'>
        <Header />
      </div>
      <div className='hidden lg:block sidebar bg-primary'>
        <Sidebar />
      </div>
      <div className='content'>{renderSection(redirect)}</div>
      <div className='footer bg-white shadow'>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
