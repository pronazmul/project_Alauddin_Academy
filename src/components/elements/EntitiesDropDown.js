import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function EntitiesDropDown({ value, setValue }) {
  const entities = [10, 25, 50, 100]
  return (
    <div className='relative'>
      <Listbox value={value} onChange={setValue}>
        <Listbox.Button className='w-full p-2 text-sm bg-primaryLight rounded-lg shadow-sm text-secondary flex space-x-3 items-center'>
          <span className='font-bold uppercase'>show :</span>
          <span className=''>{value}</span>
          <span className=''>
            <i className='fas fa-sort-down'></i>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Listbox.Options className='w-full absolute z-10 overflow-auto top-10 text-base bg-primaryLight rounded-md shadow-lg sm:text-sm'>
            {entities.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `${
                    active
                      ? 'text-white bg-primary font-medium'
                      : 'text-gray-500'
                  }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 transition duration-300`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {item}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active
                            ? 'text-white bg-primary font-medium'
                            : 'text-gray-500'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <i className='fas fa-check' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
