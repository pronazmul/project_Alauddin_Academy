import { XCircleIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
export default function DeleteStudent({ modalHandler, id }) {
  const [loading, setLoading] = React.useState(false)
  const deleteStudent = async () => {
    try {
      setLoading(true)
      await axios.delete(
        `https://alauddin-academy.herokuapp.com/api/v1/students/${id}`
      )
      setLoading(false)
      toast.success('Student Deleted Successfully')
      modalHandler()
    } catch (error) {
      setLoading(false)
      toast.error('Failed to Delete Student')
      modalHandler()
    }
  }

  return (
    <div className='space-y-3'>
      <XCircleIcon className='text-danger h-16 w-16 mx-auto' />
      <h1 className='text-xl font-bold text-primary'>Are You Sure?</h1>
      <p className='text-sm text-secondary'>
        This Process can not be rollback Again!
      </p>

      <div className='space-x-2'>
        <button
          onClick={modalHandler}
          className={`text-sm text-white btn-primary bg-success hover:bg-opacity-80 transition-all duration-200 ease-in-out `}
          type='submit'
        >
          Cancel
        </button>
        <button
          onClick={deleteStudent}
          className={`text-sm text-white btn-primary bg-danger hover:bg-opacity-80 transition-all duration-200 ease-in-out `}
          type='submit'
        >
          {loading ? 'Loading...' : 'Confirm'}
        </button>
      </div>
    </div>
  )
}
