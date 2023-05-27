import React from 'react'

const Ban = () => {
  return (
    <div className='h-96 relative bg-violet-600 flex justify-evenly items-center'>
        <div className='w-1/3 flex flex-col justify-evenly text-center'>
            <h1 className='text-6xl text-white leading-tight'>Digital Economy Conference 2018</h1>
            <h1 className='text-2xl text-white '>13-15 April 2018, San Francisco</h1>
            <div className='flex justify-evenly text-center mt-8'>
                <button className='rounded bg-green-500 py-2.5 px-10 text-white hover:bg-white hover:text-violet-500'>
                    BUY TICKET
                </button>
            </div>
        </div>
    </div>
  )
}

export default Ban