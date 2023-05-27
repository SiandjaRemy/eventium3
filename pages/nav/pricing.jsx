import React from 'react'

const Pricing = () => {
  return (
    <div id='pricing' className='bg-gray-700 text-gray-700 flex flex-col  items-center mt-20 border py-5'>
        <div className="flex flex-col   px-40">
            <div className="flex flex-col justify-evenly items-center">
                <p className="text-gray-400 leading-loose text-2xl">Buy tickets</p>
                <p className="text-5xl text-white leading-tight">Pricing Tables</p>
                <div className="w-16 h-2 border-b border-white mb-2 mt-5"></div>
            </div>
           
        </div>
        <div className="flex justify-between mt-10 w-2/3">
            <div className="bg-white rounded-lg py-8 px-12 mx-5">
                <div>
                    <p className='text-xl text-black'>Early Bird</p>
                    <h1 className='text-violet-500 text-7xl'>CFA 40,000</h1>
                </div>
                <div className='mt-5'>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Entrance</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Coffee Break</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Launch</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Photos Allowed</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Certificate</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Workshop</p>
                    </div>
                    
                </div>
                <div className='flex justify-evenly text-center mt-8'>
                    <button className='rounded bg-green-500 py-2.5 px-16 w-full text-white'>
                        REGISTER NOW
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg py-8 px-12 mx-5">
                <div>
                    <p className='text-xl text-black'>Standard</p>
                    <h1 className='text-violet-500 text-7xl'>CFA 50,000</h1>
                </div>
                <div className='mt-5'>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Entrance</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Coffee Break</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Launch</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Photos Allowed</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Certificate</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 mr-3"></div>
                        <p className='leading-loose'>Workshop</p>
                    </div>
                    
                </div>
                <div className='flex justify-evenly text-center mt-8'>
                    <button className='rounded bg-green-500 py-2.5 px-16 w-full text-white'>
                        REGISTER NOW
                    </button>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Pricing