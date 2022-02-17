export default function Pagination({
  pages: p,
  currentPage,
  setCurrentPage,
  totalData,
  startAt,
  endAt,
}) {
  const pages = [...Array(p)].map((x, y) => y + 1)
  return (
    <div className='bg-primary bg-opacity-5 px-4 py-6  flex justify-between items-center'>
      <div className=''>
        <p className='text-primaryLight text-xs lg:text-sm'>
          {`Showing ${startAt ? startAt + 1 : 1} to ${endAt}
            of ${totalData.length} Entities`}
        </p>
      </div>
      <div className='flex justify-end items-center select-none'>
        <button
          className={`h-8 w-8 text-xs flex justify-center items-center relative transition duration-300 text-primaryLight  ${
            currentPage === 1
              ? 'cursor-not-allowed'
              : 'rounded-full cursor-pointer hover:text-primary hover:bg-primaryLight'
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <i className='fas fa-chevron-left' />
        </button>
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`h-8 w-8 text-xs flex justify-center items-center relative transition duration-300 text-gray-500 rounded-full cursor-pointer hover:text-primary hover:bg-primaryLight ${
              item === currentPage && 'text-primary bg-primaryLight font-bold'
            }`}
          >
            <p>{item}</p>
          </button>
        ))}
        <button
          className={`h-8 w-8 text-xs  flex justify-center items-center relative transition duration-300 text-primaryLight  ${
            currentPage === pages.length
              ? 'cursor-not-allowed'
              : 'rounded-full cursor-pointer hover:text-primary hover:bg-primaryLight'
          }`}
          onClick={() =>
            currentPage < pages.length && setCurrentPage(currentPage + 1)
          }
        >
          <i className='fas fa-chevron-right' />
        </button>
      </div>
    </div>
  )
}
