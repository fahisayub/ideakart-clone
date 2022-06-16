import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../../pages/Signin/SignIn'
import SignUp from '../../pages/Signup/SignUp'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        <Footer /> 
    </div>
  )
}

export default AllRoutes