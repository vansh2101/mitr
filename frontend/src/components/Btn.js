import React from 'react'

function Btn({icon, text, onClick}) {
  return (
    <div className='flex gap-3 py-1 px-2 rounded-md text-[#808080] text-sm font-semibold items-center duration-150 cursor-pointer hover:bg-[#353535]' onClick={onClick}>
        <div className='p-1.5 bg-[#808080] rounded-lg'>
            {icon}
        </div>
        {text}
    </div>
  )
}

export default Btn