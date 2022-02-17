import { CloudUploadIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function ImageInput() {
  const [preview, setPreview] = useState(null)
  const imageHandler = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className=' w-full flex flex-col justify-center space-y-2'>
      <h3 className='text-xs text-primaryLight font-black'>StudentsPhoto</h3>
      <div className='text-primaryLight flex  justify-center items-center space-x-6'>
        <div>
          <label
            htmlFor='avatar'
            style={{ cursor: 'pointer', display: 'inline-block' }}
          >
            <CloudUploadIcon className='h-12 w-12 bg-primaryLight bg-opacity-80 p-2 text-primary hover:text-active rounded-md hover:animate-bounce' />
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
          {true && (
            <img
              src={`${preview ? preview : './images/avatar.png'}`}
              alt='Profile'
              className='rounded w-20 h-20 border border-gray-200 object-cover block'
            />
          )}
        </div>
      </div>
    </div>
  )
}
