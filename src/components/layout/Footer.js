export default function Footer() {
  return (
    <div className='h-full flex justify-between items-center px-8 text-xs font-semibold text-primary'>
      <p>{`${new Date().getFullYear()} @ Alauddin's Academy`}</p>
      <p>Design and Development By Nazmul Huda</p>
    </div>
  )
}
