import React from 'react'

function Button({name}) {
  return (
    <div className='flex justify-center'>
      <button className='bg-confirm px-14 py-3 rounded text-white'>{name}</button>
    </div>
  )
}

export default Button