import React from 'react'

export default function BlogInfo() {
  return (
    <div className='container md:px-8 pt-40 md:pt-48 pb-20'>
        <div className='grid grid-cols-12 gap-6 items-start'>
            {/* Right Side */}
            <div className='col-span-8 shadow-[0_0_8px_2px_rgba(0,0,0,25%)] h-[500px] rounded-xl p-4'>
                Right Side
            </div>
            {/* Left Side */}
            <div className='col-span-4 shadow-[0_0_8px_2px_rgba(0,0,0,25%)] h-[300px] rounded-xl p-4'>
                Left Side
            </div>
        </div>
    </div>
  )
}