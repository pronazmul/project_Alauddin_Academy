import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { useSearchParams, NavLink } from 'react-router-dom'
import { booleanTogollerInJsonArray } from '../utilities/helperFunctions'
import { dashBoardDSidebarLinks } from './../utilities/data'
export default function Sidebar() {
  let [searchParams] = useSearchParams()
  const redirect = searchParams.get('tab') || 'overview'
  const [sidebarLink, setSidebarLink] = useState(dashBoardDSidebarLinks)

  const sidebarTogoller = (id) => {
    const updated = booleanTogollerInJsonArray(id, 'active', sidebarLink)
    setSidebarLink(updated)
  }

  React.useEffect(() => {
    if (redirect) {
      let nastedItem = sidebarLink.find(
        (item) =>
          item.nasted &&
          item.subCategory.map((a) => a.sublink).includes(redirect) &&
          item
      )
      if (nastedItem) {
        const updated = booleanTogollerInJsonArray(
          nastedItem.id,
          'active',
          sidebarLink
        )
        setSidebarLink(updated)
      } else {
        return false
      }
    } else {
      return false
    }
  }, [])

  return (
    <div className='px-4 py-6'>
      <img
        className='h-14 mx-auto'
        src='./images/logo.png'
        alt='Dashboard Logo'
      />
      {/* Sidebar Links */}
      <div className=' mt-5 text-primaryLight'>
        {sidebarLink &&
          sidebarLink.map((item) => (
            <div key={item.id} className={`space-y-2 pl-10 py-2`}>
              {!item.nasted ? (
                <div
                  className={`flex justify-between relative capitialize font-bold hover:text-primaryLight ${
                    redirect === item.sublink && 'text-active'
                  }`}
                >
                  <NavLink to={`?tab=${item.sublink}`}>
                    <item.Icon className='absolute -left-8 h-5 w-5'></item.Icon>
                    {item.name}
                  </NavLink>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => sidebarTogoller(item.id)}
                    className={`flex justify-between relative capitialize font-bold hover:text-white focus-within:transition cursor-pointer ${
                      item.active && 'text-white'
                    }`}
                  >
                    <span>
                      <item.Icon className='absolute -left-8 h-5 w-5'></item.Icon>
                      {item.name}
                    </span>
                    <span>
                      {item.active ? (
                        <ChevronUpIcon className='h-5 w-5' />
                      ) : (
                        <ChevronDownIcon className='h-5 w-5' />
                      )}
                    </span>
                  </div>
                  {item.active &&
                    item.subCategory.map((subitem) => (
                      <NavLink
                        key={subitem.sublink}
                        to={`?tab=${subitem.sublink}`}
                        className={
                          redirect === subitem.sublink
                            ? `capitialize block text-active transition`
                            : `capitialize block hover:text-primaryLight transition`
                        }
                      >
                        {subitem.name}
                      </NavLink>
                    ))}
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
