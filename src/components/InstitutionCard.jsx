import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const InstitutionCard = ({id, name, type, images, rating, county}) => {
  return (
    <div className='bg-white rounded-xl md:rounded-2xl shadow-md pb-2 cursor-pointer'>
        <Link className='text-gray-700 cursor-pointer' to={`/institution/${id}`}>
            <div className='overflow-hidden mb-3 rounded-2xl'>
                <img className='hover:scale-105 transition ease-in-out  rounded-xl md:rounded-2xl' src={images[0]} alt=""/>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold px-2'>{type}</p>
              <p className='flex text-sm font-semibold items-center gap-2 pr-2'>
                <FaStar className='text-orange-900 text-xs'/>
                {rating}
              </p>
            </div>
            <p className='pt-1 pb-1 text-sm px-2 font-medium'>{name}</p>
            <p className='flex items-center gap-1 text-sm px-2'>
              <FaLocationDot className='text-xs text-slate-600'/>
              {county} County
            </p> 
        </Link>
    </div>
  )
}

export default InstitutionCard