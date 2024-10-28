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
    <section className='bg-white py-12 min-h-[50vh] *:first-letter:'>
        {/* News title */}
        <div className='mb-12'>
            <div className='gap-2 mb-2'>
                <h1 className='border shadow-sm px-3 py-1 rounded-2xl w-fit text-orange-900 text-3xl font-medium relative'>Latest News</h1>
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