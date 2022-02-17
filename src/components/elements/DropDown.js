import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DropDown({ data, children }) {
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
            {data &&
              data.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      to={item.sublink}
                      className={`${
                        active ? 'bg-primary  text-white' : 'text-primary'
                      } flex rounded-md items-center w-full p-2 text-sm space-x-4`}
                    >
                      <span>
                        <item.Icon className='h-5 w-5' />
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
