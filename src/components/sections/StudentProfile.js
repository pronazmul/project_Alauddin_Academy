import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { AvatarByLetter } from '../elements/AvatarByLetter'

export default function StudentProfile({ modalHandler, id }) {
  const [loading, setLoading] = React.useState(false)
  const [student, setStudent] = React.useState({})

  React.useEffect(() => {
    async function fechData() {
      try {
        setLoading(true)
        let { data } = await axios.get(
          `https://alauddin-academy.herokuapp.com/api/v1/students/${id}`
        )
        setStudent(data.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('Failed to load Student')
        modalHandler()
      }
    }
    fechData()
  }, [])

  return (
    <div className='bg-white px-4 py-6'>
      {loading ? (
        <div className='flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-active'></div>
        </div>
      ) : student ? (
        <div className='space-y-6'>
          {student.avatar ? (
            <img
              className='h-32 w-32 rounded-full border-2 border-active mx-auto'
              src={student.avatar && student.avatar}
              alt='Student profie'
            />
          ) : (
            <div className='h-20 w-20 rounded-full border-2 border-active mx-auto'>
              <AvatarByLetter word={student.name} />
            </div>
          )}
          <table class='table-auto min-w-full divide-y divide-gray-200 rounded-2xl overflow'>
            <tbody className='divide-y divide-gray-200 bg-primaryLight bg-opacity-5'>
              <tr>
                <td className='text-sm font-bold text-secondary'>Name</td>
                <td>:</td>
                <td>{student?.name || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Class</td>
                <td>:</td>
                <td>{student?.class || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Gender</td>
                <td>:</td>
                <td>{student?.gender || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Phone</td>
                <td>:</td>
                <td>{student?.studentPhone || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>
                  Blood Group
                </td>
                <td>:</td>
                <td>{student?.bloodGroup || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Section</td>
                <td>:</td>
                <td>{student?.section || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Email</td>
                <td>:</td>
                <td>{student?.email || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Roll</td>
                <td>:</td>
                <td>{student?.roll || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>
                  Father Name
                </td>
                <td>:</td>
                <td>{student?.fathersName || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>
                  Father Profession
                </td>
                <td>:</td>
                <td>{student?.fathersProfession || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>
                  Mother Name{' '}
                </td>
                <td>:</td>
                <td>{student?.mothersName || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>
                  Mother Profession
                </td>
                <td>:</td>
                <td>{student?.mothersProfession || ''}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold text-secondary'>Address</td>
                <td>:</td>
                <td>{student?.address || ''}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h3>NO Data Fond</h3>
      )}
      <button
        onClick={modalHandler}
        className={`text-sm text-white btn-primary bg-active hover:bg-opacity-80 transition-all duration-200 ease-in-out `}
      >
        Close
      </button>
    </div>
  )
}

//   name: '',
//   class: '',
//   gender: '',
//   studentPhone: '',
//   section: '',
//   email: '',
//   bloodGroup: '',
//   roll: '',
//   fathersName: '',
//   fathersProfession: '',
//   mothersName: '',
//   mothersProfession: '',
//   parentsPhone: '',
//   address: '',
