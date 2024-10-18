import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaUserGraduate } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa";


const QuoteComponent = () => {
  return (
    <div className='flex items-center justify-between quote-page px-4 sm:px-8 min-h-[60vh] bg-white mx-6 rounded-2xl mb-4 bg-bg-blend-hard-light py-10 lg:py-0 overflow-hidden'>
        <div className='overlay '></div>

        <div className='text-white z-10 py-10'>
            <div className='grid md:grid-cols-2 justify-between gap-4'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-semibold mb-4'>University of the Day</h1>
                    <img className='md:w-[30vw] mb-3 shadow-2xl rounded-2xl' src={assets.zetect_logo} />
                    <p className='text-xl font-medium mb-3'>Motto: Invent your future</p>
                    <p className='mb-5'>Zetech University is a leading technology and entrepreneurial university in Kenya that is committed to promoting excellence in education and research by integrating innovation and technology to impact society.</p>
                    <p className='bg-slate-900 w-fit px-4 py-2 rounded-2xl cursor-pointer hover:bg-orange-900 hover:shadow-md'>
                        <Link to='https://www.zetech.ac.ke/' target='_blank'>Learn More</Link>
                    </p>
                </div>
                
                {/* programmes offered at uiniversity of the day */}
                <div>
                    <h4 className='text-2xl text-center mb-4'>Programmes Offered</h4>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 px-6 sm:px-0'>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <FaUserGraduate className=' text-slate-900 text-4xl'/>
                            <p>Post Graduate Courses</p>
                        </div>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <FaGraduationCap className=' text-slate-900 text-4xl'/>
                            <p>Degree Courses</p>
                        </div>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <GiDiploma className=' text-slate-900 text-4xl'/>
                            <p>Diploma Courses</p>
                        </div>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <PiCertificateFill className=' text-slate-900 text-4xl'/>
                            <p>Certificate Courses</p>
                        </div>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <AiFillSafetyCertificate className=' text-slate-900 text-4xl'/>
                            <p>TVET Courses</p>
                        </div>
                        <div className='programme-card flex flex-col items-center gap-3 px-6 py-4 w-ful text-center text-white rounded-2xl'>
                            <FaCertificate className=' text-slate-900 text-4xl'/>
                            <p>Corporate Academy</p>
                        </div>
                    </div>
                </div>
            </div>
          
       
        </div>
    </div>
  )
}

export default QuoteComponent