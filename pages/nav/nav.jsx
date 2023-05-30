import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black' id='home'>
        <div className='md:flex justify-between items-center lg:px-40 py-4 lg:mx-20 px-10'>
            <div className="logo flex justify-evenly items-center text-2xl p-2 h-12 bg-white rounded">
                <img src="../../images/bickdrim logo.png" alt="" className=''/>
            </div>
            <div className="md:flex justify-evenly items-center text-2xl p-2 sm:bg-red-600 md:bg-blue-700 lg:bg-orange-500 xl:bg-slate-500 2xl:bg-white">
                <div className="link border-b border-blue-800 lg:px-5 px-3 font-semibold py-3">
                <a href='#home' className='lg:text-lg text-sm text-white'>Home</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#about' className='lg:text-lg text-sm text-white'>About</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#speaker' className='lg:text-lg text-sm text-white'>Speakers</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#agenda' className='lg:text-lg text-sm text-white'>Agenda</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#partner' className='lg:text-lg text-sm text-white'>Partner</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#pricing' className='lg:text-lg text-sm text-white'>Tickets</a>
                </div>
                <div className="link lg:px-5 px-3 font-semibold py-3">
                    <a href='#contact' className='lg:text-lg text-sm text-white'>Contact</a>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Nav