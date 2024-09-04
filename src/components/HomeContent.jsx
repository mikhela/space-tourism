import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeContent() {
  return (
    <div className=''>
    <div className="left-content p-8 text-white text-center -top-20 md:top-1/3 md:text-start absolute  left-1/2 -translate-x-1/2 max-w-full w-[500px]  md:left-0 md:translate-x-0 ">
      <h3 className="text-bar font-normal tracking-wide text-gray-300">SO, YOU WANT TO TRAVEL TO</h3>
      <h1 className="font-bellefair md:text-8xl mt-3 text-6xl">SPACE</h1>
      <h3 className="text-bar font-normal tracking-wide text-gray-200 text-sm md:text-lg  w-[350px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</h3>
    </div>
    <button  className="button-shadow w-56 h-56 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-0 md:top-1/2">
      <Link to='/Destination' className='font-bellefair text-gray-400 text-3xl'>EXPLORE</Link>
    </button>
  </div>
  )
}
