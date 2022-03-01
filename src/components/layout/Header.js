import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import useAuth from '../../Hooks/useAuth'
import Drawer from '../elements/Drawer'
import ProfileDropDown from '../sections/ProfileDropDown'
import Sidebar from './Sidebar'

export default function Header() {
  const [sidebarViewer, setsidebarViewer] = React.useState(false)
  const sidebarDialogCloser = () => setsidebarViewer(false)
  const { user } = useAuth()
  return (
    <>
      <div className=' h-full flex justify-between mx-6 items-center'>
        <h2 className='text-primary font-bold md:text-xl sm:block hidden'>
          Alauddin's English Academy
        </h2>
        <div className='sm:hidden' onClick={() => setsidebarViewer(true)}>
          <MenuIcon className='h-9 w-9 p-2 bg-primary text-white rounded-full' />
        </div>
        <ProfileDropDown>
          <div className='flex items-center cursor-pointer'>
            <img
              className='h-10 w-10 rounded-full'
              src={user.avatar ? user.avatar : './images/aladdin.jpeg'}
              alt='Admin profie'
            />
            <p className='text-xs text-secondary font-semibold pl-1'>
              {user?.name ? user.name : 'Admin'}
            </p>
            <ChevronDownIcon className='cursor-pointer h-6 w-6 rounded-full text-secondary' />
          </div>
        </ProfileDropDown>
      </div>
      <Drawer
        drawerViewer={sidebarViewer}
        drawerCloserFunc={sidebarDialogCloser}
        title={`Alauddin's Academy`}
      >
        <Sidebar />
      </Drawer>
    </>
  )
}
