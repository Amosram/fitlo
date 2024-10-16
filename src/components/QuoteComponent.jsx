import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const QuoteComponent = () => {
  return (
    <div className='flex items-center justify-between quote-page -z-10 px-4 sm:px-8 min-h-[60vh] bg-white mx-6 rounded-2xl mb-4 bg-bg-blend-hard-light py-10 lg:py-0 overflow-hidden'>
        <div className='overlay -z-10'></div>

        <div className='text-white flex flex-col lg:flex-row justify-between gap-4 mr-4'>
            <div className='max-w-[700px]'>
                <h1 className='text-4xl sm:text-5xl font-semibold mb-2'>Quote of the day</h1>
                <p className='text-lg text-gray-100'>
                    <RiDoubleQuotesL/>
                    Education is the passport to the future, for tomorrow belongs to those who prepare for it today
                    <RiDoubleQuotesR/>
                </p>

                <div className='mt-3'>
                    <h2 className='font-medium text-xl mb-2'>Meaning of the quote</h2>
                    <p>
                    This quote by Malcom X emphasizes the essential role of education in shaping our future and highlights that proactive learning and preparation are crucial for success. It serves as a reminder that investing in our education is not just about acquiring knowledge; it's about equipping ourselves to seize future opportunities and navigate challenges effectively.
                    </p>
                </div>
            </div>

            <form className='w-full '>
                <h3 className='mb-3 mt-4 lg:mt-0 text-xl'>Get more quotes</h3>
                <div className='w-full sm:max-w-[50%] lg:w-full bg-white flex justify-between'>
                    <input type="text" placeholder='email address' className='bg-transparent border-none outline-non px-3' />
                    <button type='submit' className='bg-orange-900 py-2 md:px-3'>Subscribe</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default QuoteComponent