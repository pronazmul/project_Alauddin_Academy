export default function BadgeIcon({ Icon, badgeCount }) {
  return (
    <div className='relative'>
      <Icon className='cursor-pointer h-9 w-9 p-2 rounded-full text-secondary bg-gray-100 hover:bg-primaryLight hover:text-secondary' />
      <span className='absolute right-0 top-0 bg-danger rounded-full w-3 h-3 text-[3px] p-1 text-white flex justify-center items-center'>
        {badgeCount}
      </span>
    </div>
  )
}
