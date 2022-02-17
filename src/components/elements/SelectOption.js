export default function SelectOption({
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
      <select
        onChange={handleChange}
        name={name}
        placeholder={`Enter your ${name}`}
        className={`input-box ${values[name] && !errors[name] && 'success'}`}
        required={required}
      >
        <option value=''>Select {name}</option>
        {options &&
          options.map((value) => (
            <option className='capitalize' value={value}>
              {value}
            </option>
          ))}
      </select>
      {errorMessage && values[name] && errors && errors[name] && (
        <span className='text-xs text-danger'>{errors[name]}</span>
      )}
    </div>
  )
}
