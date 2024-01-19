import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#FCA311]'><a href="/">RUBEN OCASIO</a></h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><a href="/" className="mx-2 sm:mx-4 hover:text-gray-600">Home</a></li>
            <li className='p-4'><a href="#about" className="mx-2 sm:mx-4 hover:text-gray-600">About</a></li>
            <li className='p-4'><a href="#projects" className="mx-2 sm:mx-4 hover:text-gray-600">Projects</a></li>
            <li className='p-4'><a href="#tech" className="mx-2 sm:mx-4 hover:text-gray-600">Technology</a></li>
            <li className='p-4'><a href="#contact" className="mx-2 sm:mx-4 hover:text-gray-600">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#FCA311] m-4'>RUBEN OCASIO</h1>
                <li className='p-4 border-b border-gray-900'><a href="/" onClick={handleNav} className="mx-2 sm:mx-4 hover:text-gray-600">Home</a></li>
                <li className='p-4 border-b border-gray-900'><a href="#about" onClick={handleNav} className="mx-2 sm:mx-4 hover:text-gray-600">About</a></li>
                <li className='p-4 border-b border-gray-900'><a href="#projects" onClick={handleNav} className="mx-2 sm:mx-4 hover:text-gray-600">Projects</a></li>
                <li className='p-4 border-b border-gray-900'><a href="#tech" onClick={handleNav} className="mx-2 sm:mx-4 hover:text-gray-600">Technology</a></li>
                <li className='p-4 border-b border-gray-900'><a href="#contact" onClick={handleNav} className="mx-2 sm:mx-4 hover:text-gray-600">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar