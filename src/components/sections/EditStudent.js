import { useFormik } from 'formik'
import SelectOption from '../elements/SelectOption'
import { StudentRegistrationSchema } from '../validationSchemas/yupSchema'
import TextInput from './../elements/TextInput'
import RadioInput from './../elements/RadioInput'
export default function EditStudent({ id }) {
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
      console.log(JSON.stringify(values, null, 2))
      // setLoading(true)
      // try {
      //   let truthyValues = truthyValuesFromObject(values)
      //   let config = {
      //     method: 'post',
      //     url: 'https://alauddin-academy.herokuapp.com/api/v1/students',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     data: { ...truthyValues },
      //   }
      //   await axios(config)
      //   toast.success('Student Added Successfull!')
      //   setLoading(false)
      // } catch (error) {
      //   toast.success('Failed to add Student!')
      //   setLoading(false)
      // }
    },
  })

  const { handleChange, handleSubmit, errors, values } = formik
  return (
    <div>
      <div className='bg-primary rounded'>
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
              options={['male', 'female', 'other']}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
