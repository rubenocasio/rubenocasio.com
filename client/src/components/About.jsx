import React from 'react'
import Me from '../assets/images/me.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='about'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={Me} alt='/' className='w-[500px] mx-auto my-4 rounded-xl' />
          <div className='flex flex-col justify-center px-4'>
            <h1 className='text-[#fca311] font-bold uppercase'>Ruben Ocasio</h1>
            <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Full Stack Developer</p>
            <p>I am deeply passionate about usability and user experience, driven by a strong desire to create engaging and impactful digital experiences. My technical expertise is grounded in a diverse set of programming languages, frameworks, libraries, and tools, enabling me to bring innovative ideas to life.</p>
            <button className='bg-[#fca911] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-black'><a href="#projects" className="mx-2 sm:mx-4 hover:text-gray-600">See More</a></button>
          </div>
      </div>
    </div>
  )
}

export default About