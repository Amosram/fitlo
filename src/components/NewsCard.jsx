import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({id, title, brief_description, image, titleBar}) => {
  return (
    <Link className='text-slate-900 cursor-pointer border pb-2 shadow-md rounded-2xl bg-orange-100' to={`/newsInfo/${id}`}>
        <div className='relative'>
            <img src={image} className='mb-2 rounded-2xl' />
            <h3 className='text-orange-900 text-bold mb-2 pl-2 hover:underline'>{title}</h3>
            <p className='absolute top-2 left-2 bg-slate-900 px-4 py-1 text-white text-sm rounded-2xl'>{titleBar}</p>
            <p className='text-sm pl-2'>{brief_description}</p>
        </div>
    </Link>
  )
}

export default NewsCard