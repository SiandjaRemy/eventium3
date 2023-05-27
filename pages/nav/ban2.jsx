import React from 'react'

const Ban2 = () => {
  return (
    <div id='timer' className='h-96 relative bg-violet-600 flex justify-evenly items-center mt-20'>
        <div className=' flex flex-col justify-evenly items-center'>
            <h1 className='text-5xl text-white leading-tight'>Be a part of a great event.</h1>
            <div className="w-1/2 flex flex-col justify-evenly text-center items-center">
                <div className="w-16 border-b-2 border-white mb-2 mt-5"></div>
                <p className='text-base text-white'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                <div className='flex justify-evenly text-center mt-8'>
                    <button className='rounded bg-green-500 py-2.5 px-10 text-white'>
                        HURRY UP AND REGISTER NOW
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Ban2