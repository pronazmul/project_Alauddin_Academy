import { useFormik } from 'formik'
import React from 'react'
import { LoginSchema } from '../validationSchemas/yupSchema'
import TextInput from '../elements/TextInput'
import PasswordInput from '../elements/PasswordInput'
import Toaster from '../elements/Toaster'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  const navigate = useNavigate()
  const { loading, error, success, user, login } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      login(values)
      if (success) {
        toast.success(success)
        actions.resetForm()
      }
      if (error) toast.error(error)
    },
  })

  React.useEffect(() => {
    if (user?.email) {
      navigate('/dashboard')
    } else {
      return false
    }
  }, [user])

  const { handleChange, handleSubmit, errors, values } = formik

  return (
    <div className='h-screen flex justify-center items-center px-4 md:px-0 relative'>
      <Toaster />
      <div className='w-3/4 md:2/5 lg:w-1/4 bg-primary shadow-md rounded px-8 py-8 mb-4'>
        <h1 className='font-black text-xl text-primaryLight text-center'>
          Admin Login
        </h1>
        <form className='mt-4 space-y-3' onSubmit={handleSubmit}>
          <TextInput
            name='email'
            type='email'
            handleChange={handleChange}
            values={values}
            errors={errors}
            label
            errorMessage
            required
          />
          <PasswordInput
            name='password'
            type='password'
            handleChange={handleChange}
            values={values}
            errors={errors}
            label
            errorMessage
            required
          />
          <button
            className={`text-sm text-white btn-primary bg-active hover:bg-opacity-80 transition-all duration-200 ease-in-out ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type='submit'
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
