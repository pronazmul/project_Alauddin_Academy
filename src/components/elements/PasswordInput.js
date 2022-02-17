import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import React from 'react'

export default function PasswordInput({
  name,
  handleChange,
  values,
  errors,
  label = false,
  errorMessage = false,
  required = false,
}) {
  const [passwordType, setPasswordType] = React.useState('password')
  return (
    <>
      <div className='space-y-2 relative'>
        {label && (
          <label className='capitalize text-xs font-semibold text-primaryLight flex items-center space-x-1'>
            {required ? (
              <>
                <span>{name}</span>
                <span className='text-xs text-danger'>*</span>
              </>
            ) : (
              <span>{name}</span>
            )}
          </label>
        )}
        <span className='absolute right-2 top-6'>
          {passwordType === 'password' ? (
            <EyeOffIcon
              onClick={() => setPasswordType('text')}
              className='h-5 w-5 text-secondary'
            />
          ) : (
            <EyeIcon
              onClick={() => setPasswordType('password')}
              className='h-5 w-5 text-secondary'
            />
          )}
        </span>
        <input
          onChange={handleChange}
          type={passwordType}
          name={name}
          placeholder={`Enter your ${name}`}
          className={`input-box ${values[name] && !errors[name] && 'success'}`}
          required={required}
          autoComplete='on'
        />
        {errorMessage && values[name] && errors && errors[name] && (
          <span className='text-xs text-danger'>{errors[name]}</span>
        )}
      </div>
    </>
  )
}
