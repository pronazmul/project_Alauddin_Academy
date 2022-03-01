import { CloudUploadIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { AvatarByLetter } from './AvatarByLetter'
import { filterImage } from './../utilities/helperFunctions'

export default function ImageInput({ values, id }) {
  const [preview, setPreview] = useState(values?.avatar || null)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const imageHandler = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }
  const avatarUploadHandler = async () => {
    setLoading(true)
    try {
      let checkImage = filterImage(file)
      if (checkImage) {
        let data = new FormData()
        data.append('avatar', file)
        let config = {
          method: 'post',
          url: `https://alauddinapi.pronazmul.com/api/v1/students/${id}/upload`,
          headers: {
            'content-type': 'multipart/form-data',
          },
          data: data,
        }
        await axios(config)
        setLoading(false)
        toast.success('Profile Updated Successfully!')
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <div className=' w-full flex flex-col justify-center space-y-2'>
      <h3 className='text-xs text-primaryLight font-black'>Update Profile</h3>
      <div className='text-primaryLight flex  justify-center items-center space-x-6'>
        <div>
          <label
            htmlFor='avatar'
            style={{ cursor: 'pointer', display: 'inline-block' }}
          >
            <CloudUploadIcon className='h-10 w-10 bg-primaryLight bg-opacity-80 p-2 text-primary hover:text-active rounded-md hover:animate-bounce' />
          </label>
          <input
            className='hidden'
            id='avatar'
            onChange={imageHandler}
            name='avatar'
            type='file'
          />
        </div>
        <div>
          {preview ? (
            <img
              src={`${preview ? preview : './images/avatar.png'}`}
              alt='Profile'
              className='rounded w-20 h-20 border border-gray-200 object-cover block'
            />
          ) : (
            <div className='h-12 w-12 mx-auto'>
              <AvatarByLetter word={values['name']} />
            </div>
          )}
        </div>
        <div className='col-span-full'>
          <button
            onClick={avatarUploadHandler}
            type='button'
            className={`btn-primary bg-active text-white hover:bg-opacity-80  text-sm transition duration-300 ease-in-out ${
              loading || !file ? 'cursor-not-allowed ' : 'cursor-pointer '
            }`}
          >
            {loading ? 'Processing...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  )
}
