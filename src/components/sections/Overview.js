export default function Overview() {
  return (
    <div className='p-4'>
      <div className='bg-primary rounded pl-6 pr-12 py-8 flex justify-between'>
        <div className=''>
          <h2 className='text-2xl text-secondaryLight '>Welcome Back !</h2>
          <p className='text-secondaryLight mt-1'>Alauddin's Academy</p>
          <div className='mt-7 flex space-x-6 items-center'>
            <img
              className='h-20'
              src='./images/avatar.png'
              alt='Admin profie'
            />
            <div className='text-secondaryLight'>
              <p className='text-lg font-semibold'>Mr Nuhidul Islam Alauddin</p>
              <p>English Teacher</p>
            </div>
          </div>
        </div>
        <img
          className='h-48 sm:block hidden'
          src='./images/overview.svg'
          alt='Overview'
        />
      </div>
    </div>
  )
}
