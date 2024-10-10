import React, { useContext } from 'react'
import { KnivatContext } from '../context/KnivatContext'
import Hero from '../components/Hero';
import BriefInfo from '../components/BriefInfo';

const Home = () => {
    const {useDocumentTitle} = useContext(KnivatContext);
    useDocumentTitle("Kenya Universities");
  return (
    <div>
      <Hero/>
      <BriefInfo/>
    </div>
  )
}

export default Home