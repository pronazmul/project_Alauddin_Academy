export default function TextInput({
  name,
  type,
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
      <input
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={`Enter your ${name}`}
        className={`input-box ${values[name] && !errors[name] && 'success'}`}
        required={required}
      />
      {errorMessage && values[name] && errors && errors[name] && (
        <span className='text-xs text-danger'>{errors[name]}</span>
      )}
    </div>
  )
}
