import { ChevronDownIcon } from '@heroicons/react/solid'
import useAuth from '../../Hooks/useAuth'
import ProfileDropDown from '../sections/ProfileDropDown'

export default function Header() {
  const { user } = useAuth()
  return (
    <div className=' h-full flex justify-between mx-6 items-center'>
      <h2 className='text-primary font-bold text-2xl'>
        Alauddin's English Academy
      </h2>
      <ProfileDropDown>
        <div className='flex items-center cursor-pointer'>
          <img
            className='h-10 w-10 rounded-full'
            src={user.avatar ? user.avatar : './images/avatar.png'}
            alt='Admin profie'
          />
          <p className='text-xs text-secondary font-semibold pl-1'>
            {user?.name ? user.name : 'Admin'}
          </p>
          <ChevronDownIcon className='cursor-pointer h-6 w-6 rounded-full text-secondary' />
        </div>
      </ProfileDropDown>
    </div>
  )
}
