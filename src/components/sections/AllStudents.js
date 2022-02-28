import { PlusIcon, UsersIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import DataTable from '../elements/DataTable'
import Loader from './../elements/Loader'

export default function AllStudents() {
  const [loading, setLoading] = React.useState(false)
  const [students, setStudents] = React.useState([])
  const [reloadStudent, setreloadStudent] = React.useState(false)
  const studentReloader = () => setreloadStudent(!reloadStudent)

  React.useEffect(() => {
    async function fechData() {
      try {
        setLoading(true)
        let { data } = await axios.get(
          'https://alauddin-academy.herokuapp.com/api/v1/students'
        )
        console.log(data)
        setStudents(data.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('Failed to load Students')
      }
    }
    fechData()
  }, [reloadStudent])

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <UsersIcon className='h-9 w-9 p-2 bg-primary text-white rounded-full' />
          <h2 className='text-lg font-bold text-primary'>All Students</h2>
        </div>
        <div>
          <NavLink
            to='?tab=add_student'
            className='bg-primary text-white shadow flex rounded-md items-center w-full p-2 text-sm space-x-2'
          >
            <span>
              <PlusIcon className='h-5 w-5' />
            </span>
            <span>Add Student</span>
          </NavLink>
        </div>
      </div>
      <div className='mt-4 bg-primary text-primaryLight rounded'>
        {loading ? (
          <div className='rounded'>
            <Loader />
          </div>
        ) : (
          students && (
            <DataTable
              data={students}
              studentReloader={studentReloader}
              columns={[
                'avatar',
                'name',
                'class',
                'bloodGroup',
                'studentPhone',
                'address',
              ]}
            />
          )
        )}
      </div>
    </div>
  )
}
