import React, {useContext, useEffect, useState} from 'react'
import { FitloContext } from '../context/FitloContext';
import InstitutionCard from './InstitutionCard';

const TopSchools = () => {
    const [topSchools, setTopSchools] = useState([]);
    const {institutions} = useContext(FitloContext);

    useEffect(() => {
        setTopSchools(institutions.slice(0, 8));
    }, [])

  return (
    <section className='py-4 pb-20'>
        <div className='my-6'>
            <h1 className='text-xl md:text-3xl font-medium border shadow-sm px-3 py-1 rounded-2xl w-fit text-orange-900 mb-2'>Top Kenyan Universities</h1>
            <p className='text-slate-800'>Boasting a splendid quality education throughout Africa</p>
        </div>
        {/* Displaying the institution */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 gap-y-6 md:gap-y-8'>
            {
                topSchools.map((item, index) => (
                    <InstitutionCard 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        type={item.type} 
                        images={item.images} 
                        rating={item.rating}
                        county={item.county}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default TopSchools