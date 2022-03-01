import { HandIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { tableAction } from '../utilities/data'
import { filterTable } from '../utilities/helperFunctions'
import SearchBox from './SearchBox'
import Pagination from './Pagination'
import EntitiesDropDown from './EntitiesDropDown'
import { AvatarByLetter } from './AvatarByLetter'
import Modal from './Modal'
import DropDownButton from './DropDownButtons'
import StudentProfile from '../sections/StudentProfile'
import EditStudent from '../sections/EditStudent'
import DeleteStudent from '../sections/DeleteStudent'

export default function DataTable({ data, columns, studentReloader }) {
  // Modal Options
  const [viewModal, setViewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [activeStudent, setActiveStudent] = useState(null)

  const modalCloser = () => {
    setViewModal(false)
    setEditModal(false)
    setDeleteModal(false)
    studentReloader()
  }
  const modalSwithcer = (type) => {
    switch (type) {
      case 'view':
        setViewModal(true)
        break
      case 'edit':
        setEditModal(true)
        break
      case 'delete':
        setDeleteModal(true)
        break
      default:
        return false
    }
  }

  // Filtering the table data
  const [search, setSearch] = useState('')
  const [entities, setEntities] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const { filteredData, pages, page, totalData, startAt } = filterTable(
    search,
    currentPage,
    entities,
    data
  )

  return (
    <>
      {viewModal && (
        <Modal show={viewModal} modalHandler={modalCloser}>
          <StudentProfile modalHandler={modalCloser} id={activeStudent} />
        </Modal>
      )}
      {editModal && (
        <Modal show={editModal} modalHandler={modalCloser}>
          <EditStudent modalHandler={modalCloser} id={activeStudent} />
        </Modal>
      )}
      {deleteModal && (
        <Modal show={deleteModal} modalHandler={modalCloser}>
          <DeleteStudent modalHandler={modalCloser} id={activeStudent} />
        </Modal>
      )}
      <div className='bg-primaryLight bg-opacity-5 px-4 py-6 grid grid-cols-6'>
        <div className='col-span-4'>
          <SearchBox
            placeholder='Search by anything...'
            value={search}
            setValue={setSearch}
          />
        </div>
        <div className='col-span-2 ml-auto'>
          <EntitiesDropDown value={entities} setValue={setEntities} />
        </div>
      </div>
      <table className=' divide-y divide-gray-200 min-w-lg overflow-y-scroll'>
        <thead className='font-black text-left text-xs uppercase tracking-wider'>
          <tr className={`grid grid-cols-7 text-center`}>
            {columns.map((column) => (
              <th className='py-6'>{column}</th>
            ))}
            <th className='py-6'>Action</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-primaryLight bg-opacity-5 '>
          {filteredData.map((student, index) => (
            <tr key={index} className={`grid grid-cols-7 text-center`}>
              {columns.map((column) =>
                column === 'avatar' ? (
                  <td className='py-4'>
                    {student[column].length ? (
                      <img
                        className='h-9 w-9 rounded-full inline-block'
                        src={student[column]}
                        alt='Data Avatar'
                      />
                    ) : (
                      <div className='h-9 w-9 mx-auto'>
                        <AvatarByLetter word={student['name']} />
                      </div>
                    )}
                  </td>
                ) : (
                  <td className='py-4'>{student[column]}</td>
                )
              )}
              <td
                className='py-4'
                onClick={() => setActiveStudent(student._id)}
              >
                <DropDownButton
                  setActionType={modalSwithcer}
                  data={tableAction}
                >
                  <HandIcon className='h-9 w-9 p-2 bg-primaryLight text-primary rounded-full' />
                </DropDownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <Pagination
          pages={pages}
          currentPage={page}
          setCurrentPage={setCurrentPage}
          totalData={totalData}
          startAt={startAt}
          endAt={filteredData.length ? filteredData.length + startAt : 0}
        />
      </div>
    </>
  )
}
