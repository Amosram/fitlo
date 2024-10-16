import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className='hero  min-h-[90vh] sm:min-h-[88vh] flex items-center overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between gap-6 items-center'>
        {/* hero left */}
        <div className='font-medium text-lg md:text-xl text-slate-900 mb-2'>
          <h1 className='text-3xl sm:text-5xl font-semibold text-slate-900 mb-2'><span className='text-orange-900'>fitlo</span> is here for all kenyan students</h1>
          <h4 className='mb-1'>We provide a simple way to help students explore various courses offered at kenyan universities</h4>
          <p>All top campuses listed together in one platform</p>
          <button className='bg-slate-950 text-gray-100 py-2 px-3 rounded-2xl mt-6 text-base hover:bg-orange-900 transition-all duration-150'>Learn More</button>
        </div>

        {/* hero right */}
        <div className='relative my-14 lg:mt-0'>
          <img className='rounded-2xl shadow-2xl w-full sm:w-full  lg:w-[45vw] z-10' src={assets.hero_left_img3}/>
          <img className='absolute -top-20 sm:-top-40 w-[60vw] lg:w-[35vw]' src={assets.hero_left_img1}/>
        </div>
      </div>
    </section>
  )
}

export default Hero