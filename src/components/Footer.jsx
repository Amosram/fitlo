import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='min-h-[20vh] bg-slate-900 flex flex-col items-center justify-center gap-3 text-gray-300'>
        <h1 className='text-3xl sm:text-4xl footer-logo font-semibold'>fitlo.com</h1>
        <p>&copy;{date} fitlo All Rights Reserved</p>
        <p className='flex gap-2 text-xs text-gray-400'>
            Designed and Developed by
            <Link to='https://amosram.github.io/amosram-dev/' target='_blank' className='underline text-gray-200'>Amosram</Link>
        </p> 
    </div>
  )
}

export default Footer