import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#fca911] p-2'>Hi, I'm a</p>
            <div className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                <p className='md:text-5xl sm:text-4xl font-bold'>Full Stack Developer</p>
                <Typed strings={['Python', 'JavaScript', 'C#', 'Java' ]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <button className='bg-[#fca911] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Know More</button>
        </div>
    </div>
  )
}

export default Hero