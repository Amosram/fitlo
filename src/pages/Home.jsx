import React, { useContext } from 'react'
import { FitloContext } from '../context/FitloContext'
import Hero from '../components/Hero';
import BriefInfo from '../components/BriefInfo';
import TopSchools from '../components/TopSchools';
import QuoteComponent from '../components/QuoteComponent';
import TopNews from '../components/TopNews';

const Home = () => {
    const {useDocumentTitle} = useContext(FitloContext);
    useDocumentTitle("Kenya Universities");
  return (
    <div>
      <Hero/>
      <BriefInfo/>
      <hr/>
      <TopSchools/>
      <QuoteComponent/>
      <TopNews/>
    </div>
  )
}

export default Home