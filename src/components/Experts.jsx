import React from 'react'
import laptop from "../assets/laptop.jpg"
const Experts = () => {
  return (
    <div className='max-w-[1240px] my-10 mx-auto p-2 md:grid grid-cols-2'>
      <div className=' col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt="" className='inline' />
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
      <h1 className='text-[#00df9a] font-bold my-2'>Learn from Expert</h1>
      <p className='my-2 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quo cumque repellendus omnis dolorem delectus neque modi. Quae, est! Repellendus eos, ex fugit natus numquam perspiciatis suscipit deleniti itaque corrupti repudiandae accusantium atque veniam?</p>
      <button className='bg-black text-white p-3 rounded-lg w-[30%]'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
