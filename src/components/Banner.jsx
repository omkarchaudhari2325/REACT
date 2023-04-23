import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
    <div className='max-w-[1240px] mx-auto my-[100px] text-center font-bold  mt-4 py-[100px]'>
        <div className='md:text-3xl mt-4 md:p-[24px]'>
            Learn With Us
        </div>
        <h2 className='text-white md:text-[80px] text-3xl mt-4 md:py-[24px]'>Grow with us.</h2>
        <div className='text-[20px] md:text-[40px] text-3xl text-white mt-4 md:p-[24px]'>
            Learn
            <Typed
            className='pl-2'
                    strings={[' Web Development','Digitial Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop ={true}
                    backSpeed={50}
                />
        </div>
        <button className='bg-black text-white p-3 rounded'>Get Started</button>
    </div>
      
    </div>
  )
}

export default Banner
