import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'





import Products from '../../pages/AllProducts/Products'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import EarnMoney from '../../pages/EarnMoney/EarnMoney'
import SignIn from '../../pages/Signin/SignIn'
import SignUp from '../../pages/Signup/SignUp'
import Privacy from '../../pages/Privacy policy/Privacy'
import Refund from '../../pages/Refund/Refund'
import Search from '../../pages/Search/Search'


const AllRoutes = () => {
  return (
    <div>
      <Navbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/earn' element={<EarnMoney />} />
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/refund' element={<Refund/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
      
      <Footer />
    </div>
  )
}

export default AllRoutes