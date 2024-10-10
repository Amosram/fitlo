import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App