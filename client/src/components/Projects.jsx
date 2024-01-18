import React from 'react'
import One from '../assets/images/work/1.jpg'
import Two from '../assets/images/work/3.png'
import RO from '../assets/images/work/ro.png'

const Projects = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black' id='projects'>
      {/* <h2 className="text-4xl font-bold text-center mb-8 text-[#fca311]">Projects</h2> */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 GAP-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img className='w-20 mx-auto mt-[-3rem] bg-black' src={One} alt="Extrayas Pic" />
                <h2 className='text-2xl font-bold text-center py-8 '>ExtraYas Shoe Store</h2>
                <p className='text-center text-4xl font-bold'>Python</p>
                <div className='text-center font-medium '>
                  <p className='py-2 border-b mx-8 mt-8 '>Django</p>
                  <p className='py-2 border-b mx-8'>Admin Portal</p>
                  <p className='py-2 border-b mx-8'>E-Commerce</p>
              </div>
              <button className='bg-[#fca311] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://github.com/rubenocasio/ExtraYas" target='blank'>Github</a></button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white md:ml-4'>
                <img className='w-20 mx-auto mt-[-3rem] bg-black' src={RO} alt="Extrayas Pic" />
                <h2 className='text-2xl font-bold text-center py-8'>Ruben Ocasio</h2>
                <p className='text-center text-4xl font-bold'>JavaScript</p>
                <div className='text-center font-medium '>
                  <p className='py-2 border-b mx-8 mt-8'>React</p>
                  <p className='py-2 border-b mx-8'>TailWinds CSS</p>
                  <p className='py-2 border-b mx-8'>React Typed</p>
              </div>
              <button className='bg-[#fca311] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="/">Ruben Ocasio</a></button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-white md:ml-8'>
                <img className='w-20 mx-auto mt-[-3rem] bg-black' src={Two} alt="Extrayas Pic" />
                <h2 className='text-2xl font-bold text-center py-8 '>Visit HRVA</h2>
                <p className='text-center text-4xl font-bold'>WordPress</p>
                <div className='text-center font-medium '>
                  <p className='py-2 border-b mx-8 mt-8'>PHP</p>
                  <p className='py-2 border-b mx-8'>Custom Theme</p>
                  <p className='py-2 border-b mx-8'>Google Analytics</p>
              </div>
              <button className='bg-[#fca311] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> <a href="https://visithrva.com" target='blank'>Visit HRVA</a></button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img className='w-20 mx-auto mt-[-3rem] bg-black' src={One} alt="Extrayas Pic" />
                <h2 className='text-2xl font-bold text-center py-8 '>Twitter Clone</h2>
                <p className='text-center text-4xl font-bold'>React</p>
                <div className='text-center font-medium '>
                  <p className='py-2 border-b mx-8 mt-8 '>Firestore Database</p>
                  <p className='py-2 border-b mx-8'>MaterialUI - Icons</p>
                  <p className='py-2 border-b mx-8'>React Flip Move</p>
              </div>
              <button className='bg-[#fca311] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://github.com/rubenocasio/TwitterClone" target='blank'>Github</a></button>
            </div>
        </div>
    </div>
  )
}

export default Projects