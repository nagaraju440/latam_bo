import React from 'react'

function Button({name}) {
  return (
    <div className='flex justify-center'>
      <button className='bg-confirm w-[367px] h-[55px] rounded text-white'>{name}</button>
    </div>
  )
}

export default Button