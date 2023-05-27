import React from 'react'
import Nav from '../nav/nav'
import Ban from '../nav/ban'
import Ban2 from '../nav/ban2'
import Pricing from '../nav/pricing'
import Footer from '../nav/footer'
import Timer from '../nav/timer'


const Main = () => {
  return (

    <div>
        <Nav />
        <Ban />
        <div className='relative'>
            <div className="flex justify-between mt-20 px-32 mx-20 gap-20" id='about'>
                <div className="left w-1/2">
                    <p className='text-gray-400 italic'>About conference</p>
                    <p className="text-5xl leading-tight">Successfully plan, create, and deliver strategic content.</p>
                    <div className="w-16 h-2 border-b border-black my-3"></div>
                    <p className="text-blue-500 leading-loose italic">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                    <p className="text-gray-400 leading-loose">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>
                <div className="right w-1/2 border bg-green-300">
                    
                </div>
            </div>

            <div className="flex justify-between mt-20 px-32 mx-20 gap-20">
                <div className="left flex w-1/2">
                    <div className="flex flex-col justify-between gap-4 w-1/2 mx-2">
                        <div className="bg-violet-600 rounded-lg px-5 py-16">
                            <div className='w-16 h-16 bg-gray-400 py-1'>
                                <img src="" alt="" className=''/>
                            </div>
                            <div className='py-1'>
                                <p className='text-2xl text-white'>Marketing</p>
                            </div>
                            <div className='py-1'>
                                <p className='text-white'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit ametorci.</p>
                            </div>
                        </div>
                        <div className="bg-violet-600 rounded-lg px-5 py-16">
                            <div className='w-16 h-16 bg-gray-400 py-1'>
                                <img src="" alt="" className=''/>
                            </div>
                            <div className='py-1'>
                                <p className='text-2xl text-white'>Financing</p>
                            </div>
                            <div className='py-1'>
                                <p className='text-white'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-4 w-1/2 mx-2">
                        <div className="bg-violet-600 rounded-lg px-5 py-16 flex flex-col grow">
                            <div className='w-16 h-16 bg-gray-400 py-1'>
                                <img src="" alt="" className=''/>
                            </div>
                            <div className='py-1'>
                                <p className='text-2xl text-white'>Business Growth</p>
                            </div>
                            <div className='py-1'>
                                <p className='text-white'>Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus.</p>
                            </div>
                        </div>
                        
                        <div className="bg-violet-600 rounded-lg px-5 py-16">
                            <div className='w-16 h-16 bg-gray-400 py-1'>
                                <img src="" alt="" className=''/>
                            </div>
                            <div className='py-1'>
                                <p className='text-2xl text-white'>Business Strategy</p>
                            </div>
                            <div className='py-1'>
                                <p className='text-white'>Morbi purus libero, faucibus adipiscing, commodo gravida id, est.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="right w-1/2 flex flex-col justify-evenly">
                    <div>
                    <p className="text-5xl leading-tight">Workshops</p>
                    <div className="w-16 h-2 border-b border-black mb-2"></div>
                    <p className="text-gray-400 leading-loose">Phasellus hendrerit. Pellentesque aliquet nibh ne c urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo.</p>
                    <p className="text-gray-400 leading-loose">Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                    <p className='text-violet-700'><a href="">and much more ...</a></p>
                    </div>
                    
                </div>
            </div>

            <div className="flex justify-between mt-20 px-32 mx-20 gap-6">
                <div className="flex flex-col w-1/3">
                    <div className="flex justify-between items-center border-b border-black p-2">
                        <h1 className='text-2xl'>Where?</h1>
                        <div className="bg-gray-300 w-16 h-16"></div>
                    </div>
                    <div className="flex flex-col text-gray-400  mt-3">
                        <h1 className='text-2xl'>USA, California</h1>
                        <h1 className='text-2xl'>Brookwood Ave, San Jose</h1>
                    <p><a href="" className='text-violet-700'>view map</a></p>
                    </div>   
                </div>                 
                <div className="flex flex-col w-1/3">
                    <div className="flex justify-between items-center border-b border-black p-2">
                        <h1 className='text-2xl'>When?</h1>
                        <div className="bg-gray-300 w-16 h-16"></div>
                    </div>
                    <div className="flex flex-col text-gray-400  mt-3">
                        <h1 className='text-2xl'>Friday to Sunday</h1>
                        <h1 className='text-2xl'>13 april to 15 april 2018</h1>
                    <p><a href="" className='text-violet-700'>view agendas</a></p>
                    </div>   
                </div>                 
                <div className="flex flex-col w-1/3">
                    <div className="flex justify-between items-center border-b border-black p-2">
                        <h1 className='text-2xl'>Who?</h1>
                        <div className="bg-gray-300 w-16 h-16"></div>
                    </div>
                    <div className="flex flex-col text-gray-400  mt-3">
                        <h1 className='text-2xl'>3 days / 15 talks</h1>
                        <h1 className='text-2xl'>20 speakers / 6 workshops</h1>
                    <p><a href="" className='text-violet-700'>view speakers</a></p>
                    </div>   
                </div>        
                         
            </div>

            <div className="flex flex-col mt-32 px-32 mx-20" id='speaker'>
                <div className="flex flex-col justify-evenly items-center">
                    <p className="text-gray-400 leading-loose text-2xl">Speaker style three</p>
                    <p className="text-5xl leading-tight">Who's speaking?</p>
                    <div className="w-16 h-2 border-b border-black mb-2 mt-5"></div>
                </div>
                <div className="text-gray-400">
                    <p>Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 px-32 mx-20">
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                        <img src="../../images/sp1.jpg" alt="" className='rounded-l-lg h-full' />
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Daniel Robert</p>
                            <p className='text-xl italic text-purple-700'>CEO, Founder at GBC</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                       <img src="../../images/sp2.jpg" alt=""  className='rounded-l-lg h-full'/>
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Katie Stricker</p>
                            <p className='text-xl italic text-purple-700'>Brand Manager</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                        <img src="../../images/sp3.jpg" alt="" className='rounded-l-lg h-full' />
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Jack Peterson</p>
                            <p className='text-xl italic text-purple-700'>Head Engineering</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                        <img src="../../images/sp4.jpg" alt="" className='rounded-l-lg h-full' />
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Daniel Robert</p>
                            <p className='text-xl italic text-purple-700'>CEO, Founder at GBC</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                        <img src="../../images/sp5.jpg" alt="" className='rounded-l-lg h-full' />
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Daniel Robert</p>
                            <p className='text-xl italic text-purple-700'>CEO, Founder at GBC</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex border">
                    <div className="image rounded-l-lg w-1/2">
                        <img src="../../images/sp6.jpg" alt="" className='rounded-l-lg h-full' />
                    </div>
                    <div className="flex flex-col px-5 py-8 w-1/2">
                        <div className="top">
                            <p className='text-2xl'>Daniel Robert</p>
                            <p className='text-xl italic text-purple-700'>CEO, Founder at GBC</p>
                        </div>
                        <div className="middle mt-3">
                            <p className='text-gray-500 text-xl'>Sed egestas, ante et vulput ate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                            <div className="p-2 bg-gray-400 w-8 h-8"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Ban2 />

            <div className="flex flex-col mt-32 px-32 mx-20" id='agenda'>
                <div className="flex flex-col justify-evenly items-center">
                    <p className="text-gray-400 leading-loose text-2xl">Agenda</p>
                    <p className="text-5xl leading-tight">Course сhedule</p>
                    <div className="w-16 h-2 border-b border-black mb-2 mt-5"></div>
                </div>
                <div className="text-gray-400 text-center px-24">
                    <p className='text-lg'>Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.</p>
                </div>
            </div>

            <div className="flex flex-col mt-32 px-32 mx-20">
                <div className="flex justify-center gap-1">
                    <div className="border-x border-black border-t px-6 py-3 rounded-t">
                        <p className='text-xl'>Week 1 (july 1 - 7)</p>
                    </div>
                    <div className="border-x border-black border-t px-6 py-3 bg-violet-800 text-white rounded-t">
                        <p className='text-xl'>Week 1 (july 1 - 7)</p>
                    </div>
                    <div className="border-x border-black border-t px-6 py-3 bg-violet-800 text-white rounded-t">
                        <p className='text-xl'>Week 1 (july 1 - 7)</p>
                    </div>
                </div>

                <div className="border border-gray-400 shadow-lg">
                    <div className="box px-20 grid grid-cols-2 gap-4 mb-20">
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center mt-16'>
                            <div className="w-16 h-16 bg-black -mt-12">
                            
                            </div>
                            <div className="pl-8 w-2/3">
                                <p className="text-green-300">10:00-11:00</p>
                                <p className="mt-2">Pellentesque aliquet nibh.</p>
                                <p className="mt-2">Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                                <p className="mt-2 italic text-violet-300">by Hubert Aguilar</p>
                            </div>
                            
                        </div>
    
                    </div>
                    <div className='flex justify-evenly text-center my-8'>
                        <button className='rounded bg-green-500 py-2.5 px-10 text-white mb-5'>
                            REGISTER NOW AND BUY TICKET
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-32 px-32 mx-20" id='partner'>
                <div className="flex flex-col justify-evenly items-center">
                    <p className="text-gray-400 leading-loose text-2xl">Our Partners</p>
                    <p className="text-5xl leading-tight">Partners and Sponsors</p>
                    <div className="w-16 h-2 border-b border-black mb-2 mt-5"></div>
                </div>
                <div className="text-gray-400 text-center px-24">
                    <p className='text-lg'>SPraesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                </div>
            </div>

            <div className="flex justify-between px-32 mx-20" >
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/1.png" alt="" className=''/>
                    </div>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/2.png" alt="" className=''/>
                    </div>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/3.png" alt="" className=''/>
                    </div>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/4.png" alt="" className=''/>
                    </div>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/5.png" alt="" className=''/>
                    </div>
                </div>
                <div className="flex justify-evenly mt-10">
                    <div className="p-5 rounded hover:border hover:border-gray-500 flex justify-evenly items-center w-44 h-w-44">
                        <img src="../../images/6.png" alt="" className=''/>
                    </div>
                </div>
                
                
            </div>

            <Pricing />
            
            <Timer />

            <div className="flex flex-col mt-32 px-32 mx-20" id='contact'>
                <div className="flex flex-col justify-evenly items-center">
                    <p className="text-gray-400 leading-loose text-2xl">Contact us</p>
                    <p className="text-5xl leading-tight">Venue and info</p>
                    <div className="w-16 h-2 border-b border-black mb-2 mt-5"></div>
                </div>
                <div className="text-gray-400 mt-10 flex justify-between gap-4">
                    <div className="w-1/3 flex flex-col items-center p-5">
                        <div className="w-16 h-16 rounded-full bg-red-200"></div>
                        <h1 className='mt-3 text-black text-xl'>Brookwood Ave San Jose, CA 95116</h1>
                    </div>
                    <div className="w-1/3 flex flex-col items-center p-5">
                        <div className="w-16 h-16 rounded-full bg-red-200"></div>
                        <h1 className='mt-3 text-black text-xl'>1-800-123-1234</h1>
                    </div>
                    <div className="w-1/3 flex flex-col items-center p-5">
                        <div className="w-16 h-16 rounded-full bg-red-200"></div>
                        <h1 className='mt-3 text-black text-xl'>gbc@mail.com</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-32 px-32 mx-20" >
                <div className="flex flex-col justify-evenly items-center">
                    <p className="text-2xl leading-tight">Get in touch</p>
                    <div className="w-16 h-2 border-b border-black mb-2 mt-2"></div>
                </div>
                <div className="text-gray-400 flex justify-between ">
                    <div className="w-1/3 flex flex-col items-center p-5 text-xl">
                        <input type="text" 
                        className='w-full border border-gray-400 rounded h-10 px-4'
                        placeholder='Your Name*'/>
                    </div>
                    <div className="w-1/3 flex flex-col items-center p-5 text-xl">
                        <input type="text" 
                        className='w-full border border-gray-400 rounded h-10 px-4'
                        placeholder='Your Email*'/>
                    </div>
                    <div className="w-1/3 flex flex-col items-center p-5 text-xl">
                        <input type="text" 
                        className='w-full border border-gray-400 rounded h-10 px-4'
                        placeholder='Interested Plan*'/>
                    </div>
                    
                </div>
                <div className='px-5 text-xl'>
                    <textarea cols="30" rows="3" 
                    placeholder='Message*' 
                    className='border border-gray-400 w-full rounded px-4 pt-2'></textarea>
                </div>
                <div className='flex justify-evenly text-center mt-8'>
                    <button className='rounded bg-green-500 py-2.5 px-10 text-white text-base hover:bg-violet-500 hover:text-white'>
                        SEND
                    </button>
                </div>
            </div>

            <Footer />


        </div>
    </div>
  )
}

export default Main