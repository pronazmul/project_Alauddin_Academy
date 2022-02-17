import React from 'react'
export function AvatarByLetter({ word = 'Avatar' }) {
  return (
    <div className='h-full w-full rounded-full bg-secondaryLight text-primary text-sm uppercase flex items-center justify-center font-bold'>
      {word.split('')[0]}
    </div>
  )
}
