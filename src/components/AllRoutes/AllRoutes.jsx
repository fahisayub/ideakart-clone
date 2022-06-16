import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../../pages/product/Product'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../../pages/dashboard/Dashboard'
import Products from '../../pages/AllProducts/Products'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/dashboard' element={<Dashboard/>}/>

            </Routes>
        <Footer /> 
    </div>
  )
}

export default AllRoutes