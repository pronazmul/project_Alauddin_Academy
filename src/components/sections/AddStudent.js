import React from 'react'
import axios from 'axios'
import { UsersIcon } from '@heroicons/react/solid'
import { useFormik } from 'formik'
import RadioInput from '../elements/RadioInput'
import SelectOption from '../elements/SelectOption'
import TextInput from '../elements/TextInput'
import { StudentRegistrationSchema } from '../validationSchemas/yupSchema'
import { toast } from 'react-toastify'
import { truthyValuesFromObject } from '../utilities/helperFunctions'

export default function AddStudent() {
  const [loading, setLoading] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      class: '',
      section: '',
      email: '',
      gender: '',
      bloodGroup: '',
      studentPhone: '',
      roll: '',
      fathersName: '',
      fathersProfession: '',
      mothersName: '',
      mothersProfession: '',
      parentsPhone: '',
      address: '',
    },
    validationSchema: StudentRegistrationSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        let truthyValues = truthyValuesFromObject(values)
        let config = {
          method: 'post',
          url: 'https://alauddin-academy.herokuapp.com/api/v1/students',
          headers: {
            'Content-Type': 'application/json',
          },
          data: { ...truthyValues },
        }
        await axios(config)
        toast.success('Student Added Successfull!')
        setLoading(false)
      } catch (error) {
        toast.success('Failed to add Student!')
        setLoading(false)
      }
    },
  })

  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div className='p-4'>
      <div className='flex items-center space-x-4'>
        <UsersIcon className='h-9 w-9 p-2 bg-primary text-white rounded-full' />
        <h2 className='text-lg font-bold text-primary'>Add New Student</h2>
      </div>
      <div className='bg-primary p-4 rounded mt-4'>
        <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
          <div className='col-span-full md:col-span-2'>
            <TextInput
              name='name'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
              required
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <SelectOption
              name='class'
              options={['8', '9', '10', '11', '12']}
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
              required
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <SelectOption
              name='section'
              options={['a', 'b', 'c', 'd']}
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
              required
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='email'
              type='email'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <RadioInput
              name='gender'
              options={['male', 'female']}
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
              required
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <SelectOption
              name='bloodGroup'
              options={['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-']}
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='studentPhone'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='roll'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='fathersName'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='fathersProfession'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='mothersName'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='mothersProfession'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='parentsPhone'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
            />
          </div>
          <div className='col-span-full md:col-span-1'>
            <TextInput
              name='address'
              type='text'
              handleChange={handleChange}
              values={values}
              errors={errors}
              label
              errorMessage
              required
            />
          </div>
          <div className='col-span-full'>
            <button
              className='btn-primary bg-active text-white hover:bg-opacity-80  text-sm transition duration-300 ease-in-out'
              type='submit'
            >
              {loading ? 'Loading...' : 'Add Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
