import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../About/About'
import Contact from '../Contact/Contact'

import Home from '../Home/Home'


const AllRoutes = () => {
  return (
    <div>
       
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
      
    </div>
  )
}

export default AllRoutes