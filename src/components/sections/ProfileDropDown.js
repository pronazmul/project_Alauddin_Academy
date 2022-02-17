import { Menu, Transition } from '@headlessui/react'
import { LogoutIcon, UserCircleIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import useAuth from './../../Hooks/useAuth'

export default function ProfileDropDown({ children }) {
  const { logout } = useAuth()
  return (
    <Menu as='div' className='relative inline-block'>
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute z-10 mt-1 right-0 w-40 origin-top-right bg-secondaryLight rounded-md shadow-lg'>
          <div className='p-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-primary  text-white' : 'text-primary'
                  } flex rounded-md items-center w-full p-2 text-sm space-x-4`}
                >
                  <span>
                    <UserCircleIcon className='h-5 w-5' />
                  </span>
                  <span>Profile</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout()}
                  className={`${
                    active ? 'bg-primary  text-white' : 'text-primary'
                  } flex rounded-md items-center w-full p-2 text-sm space-x-4`}
                >
                  <span>
                    <LogoutIcon className='h-5 w-5' />
                  </span>
                  <span>Logout</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
