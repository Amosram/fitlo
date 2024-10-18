import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { FitloContext } from '../context/FitloContext';

const TopNews = () => {
    const [mainNews, setMainNews] = useState([]);
    const {news} = useContext(FitloContext);

    useEffect(() => {
        setMainNews(news.slice(0, 3));
    }, [])

  return (
    <section className='bg-gray-50 py-12 min-h-[50vh] *:first-letter:'>
        {/* News title */}
        <div className='text-center mb-12'>
            <div className='flex items-center justify-center text-nowrap  gap-2 mb-2'>
                <p className='w-16 h-[2px] bg-orange-900'></p>
                <div></div>
                <h1 className='text-slate-900 text-3xl font-medium'>Latest News</h1>
                <p className='w-16 h-[2px] bg-orange-900'></p>
            </div>
            <p className='text-slate-700 text-base'>Catch up with top stories from the education sector </p>
        </div>
       

        {/* news container */}
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    mainNews.map((item, index) => (
                        <NewsCard key={index} id={item._id} title={item.title} brief_description={item.brief_description} titleBar={item.titleBar} image={item.image}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default TopNews