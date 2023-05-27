import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 mt-20' id='footer'>
        <div className="flex flex-col mt-32 px-32 mx-20">
            
            <div className="text-gray-400 mt-10 flex justify-between gap-4">
                <div className="w-1/3 flex flex-col p-5">
                    <div className="flex flex-col">
                        <h1 className='text-white text-2xl'>Connect with us</h1>
                        <p className='text-xl mt-2'>Get the latest updates.</p>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div className="w-12 h-12 rounded-full bg-red-200"></div>
                        <div className="w-12 h-12 rounded-full bg-red-200"></div>
                        <div className="w-12 h-12 rounded-full bg-red-200"></div>
                        <div className="w-12 h-12 rounded-full bg-red-200"></div>
                        <div className="w-12 h-12 rounded-full bg-red-200"></div>
                    </div>
                </div>

                <div className="w-1/3 flex flex-col p-5">
                    <div className="flex flex-col">
                        <h1 className='text-white text-2xl'>Join the Newsletter</h1>
                        <p className='text-xl mt-2'>Creativity happens everywhere.</p>
                    </div>
                    <div className="flex flex-col text-xl mt-5">
                        <input type="text" 
                        className='w-full border border-gray-400 rounded h-12 px-4'
                        placeholder='Enter your email ...'/>
                    </div>
                    <div className="flex text-xl mt-5">
                        <button className='bg-green-500 rounded text-white py-3 px-6 hover:bg-white hover:text-violet-500'>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                <div className="w-1/3 flex flex-col p-5">
                    <div className="flex flex-col">
                        <h1 className='text-white text-2xl'>What is Business Conference</h1>
                        <p className='text-xl mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit.</p>
                    </div>
                    
                </div>

                
            </div>
            <div className="border-b border-gray-500 mt-20 w-full"></div>

            <div className="flex justify-evenly items-center mt-10 mb-10">
                <p className='text-white text-xl'>© Copyright Bickdrim Academy</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Footer