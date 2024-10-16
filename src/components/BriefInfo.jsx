import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";


const BriefInfo = () => {
  return (
    <section className='min-h-[20vh] my-20 '>
        <div className='flex flex-col gap-10'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex items-center justify-between gap-5'>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <FaPeopleRoof className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Campus Life</h1>
                    <p className='text-sm'>The comfort of students</p>
                </div>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <TbLicense className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Acredited</h1>
                    <p className='text-sm'>CUE chattered Universities</p>
                </div>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <FaBookOpen className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Programmes</h1>
                    <p className='text-sm'>Wide range of programmes</p>
                </div>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <IoBusiness className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Institutions</h1>
                    <p className='text-sm'>Top Kenyan universities</p>
                </div>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <FaLocationCrosshairs className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Location</h1>
                    <p className='text-sm'>Conducive learning environments</p>
                </div>
                <div className='flex flex-col hover:-translate-y-1 hover:cursor-default transition-all duration-150 items-center text-center bg-white border shadow-md px-4 py-3 '>
                    <IoSchoolSharp className='text-4xl mb-2 text-orange-900'/>
                    <h1 className='font-medium mb-1'>Graduation</h1>
                    <p className='text-sm'>Incredible graduation ceremonies</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default BriefInfo