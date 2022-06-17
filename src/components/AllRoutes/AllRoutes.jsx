import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../About/About'
import Contact from '../Contact/Contact'

import Navbar from  '../Navbar/Navbar'



import Products from '../../pages/AllProducts/Products'
import { Login } from '../Authentication/Login'
import { SignUp } from '../Authentication/SignUp'


const AllRoutes = () => {
  return (
    <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/login" element={<Login/>}></Route>
               <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
      
    </div>
  )
}

export default AllRoutes