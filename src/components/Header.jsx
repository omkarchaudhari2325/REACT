import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-3 ">
    <div className="max-w-[1240] mx-auto flex justify-between items-center py-3">
      <div className="md:text-3xl font-semibold text-2xl">
        WsClube Tech
      </div>
      {
        toggle ? 
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-white text-xl md:hidden block" />
        :<AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-xl md:hidden block" />
      }
      <ul className=" md:flex hidden text-white gap-5 cursor-pointer">
        <li>
          Home
        </li>
        <li>
          Company
        </li>
        <li>
          Resource
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
      {/* Responsive Menu */}
      <ul className= {`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[84px]
       ${toggle ? 'left-[0]' :'left-[-100%] cursor-pointer'}
       `}>
        <li className="p-5">
          Home
        </li>
        <li className="p-5">
          Company
        </li>
        <li className="p-5">
          Resource
        </li>
        <li className="p-5">
          About
        </li>
        <li className="p-5">
          Contact
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Header
