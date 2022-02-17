import { SearchIcon } from '@heroicons/react/solid'

export default function SearchBox({ placeholder, value, setValue }) {
  return (
    <div className='relative'>
      <SearchIcon className='absolute h-5 w-5 rounded-full  text-primary top-2 left-1 ' />
      <input
        type='text'
        name='search'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-full p-2 rounded placeholder:text-primary text-primary placeholder:text-sm text-sm focus:outline-none pl-8 bg-primaryLight'
      />
    </div>
  )
}
