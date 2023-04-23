import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-[#2699fb] p-4' >
      <div className="max-w-[1240px] md:flex justify-between py-[30px]">
        <div className=' mx-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T. Skills ?</h1>
            <span className='text-white'>
                Sign up to our newsletter and stay up to data
            </span>
        </div>
        <div className='m-2 '>
        <input type="text" className='p-2 mr-2 mb-2 text-slate-800 sm:w-full rounded-sm' placeholder='Email'/>
        <button className='bg-black text-white p-3 rounded-lg '>Get Started</button>
        <br />
        <p className='text-white'>
            We care about the protection of your data .Read the <br /> Privacy Policy
        </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
