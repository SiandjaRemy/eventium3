import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black' id='home'>
        <div className='flex justify-between items-center px-40 py-5 mx-20'>
            <div className="logo flex justify-evenly items-center text-2xl p-2 h-12 bg-white rounded">
                <img src="../../images/bickdrim logo.png" alt="" className=''/>
            </div>
            <div className="logo flex justify-evenly items-center text-2xl p-2">
                <div className="link border-b border-blue-800 px-5 py-3">
                <a href='#home' className='text-lg text-white'>Home</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#about' className='text-lg text-white'>About</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#speaker' className='text-lg text-white'>Speakers</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#agenda' className='text-lg text-white'>Agenda</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#partner' className='text-lg text-white'>Partner</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#pricing' className='text-lg text-white'>Tickets</a>
                </div>
                <div className="link px-5 py-3">
                    <a href='#contact' className='text-lg text-white'>Contact</a>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Nav