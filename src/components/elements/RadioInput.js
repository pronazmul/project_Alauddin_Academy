export default function RadioInput({
  name,
  options,
  handleChange,
  values,
  errors,
  label = false,
  errorMessage = false,
  required = false,
}) {
  return (
    <div className='space-y-2'>
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
      <div className='flex space-x-4 '>
        {options &&
          options.map((value) => (
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                name={name}
                onChange={handleChange}
                id={value}
                value={value}
                className='text-active focus:ring-0 rounded-md w-5 h-5'
                required={required}
              />
              <label
                for={value}
                className='text-xs font-bold text-primaryLight cursor-pointer shadow-sm capitalize'
              >
                {value}
              </label>
            </div>
          ))}
        {errorMessage && values[name] && errors && errors[name] && (
          <span className='text-xs text-danger'>{errors[name]}</span>
        )}
      </div>
    </div>
  )
}
