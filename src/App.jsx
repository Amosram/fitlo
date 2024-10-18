import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import InstitutionInfo from './pages/InstitutionInfo'
import NewsInfo from './pages/NewsInfo'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/institution:institutionId' element={<InstitutionInfo/>} />
        <Route path='news:newsId' element={<NewsInfo/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App