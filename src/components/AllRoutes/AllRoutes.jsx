import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../About/About'
import Contact from '../Contact/Contact'


import Home from '../Home/Home'

import Dashboard from '../../pages/dashboard/Dashboard'
import Products from '../../pages/AllProducts/Products'


const AllRoutes = () => {
  return (
    <div>
       
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
      
    </div>
  )
}

export default AllRoutes