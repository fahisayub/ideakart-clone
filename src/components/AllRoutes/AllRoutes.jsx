import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { Login } from '../Authentication/Login'
import { SignUp } from '../Authentication/SignUp'
import Product from '../../pages/product/Product'
import Dashboard from '../../pages/dashboard/Dashboard'
import Products from '../../pages/AllProducts/Products'

import AccountInfo from '../../pages/accountInfo/AccountInfo'
import { Container } from '@chakra-ui/react'




const AllRoutes = () => {
  return (

    <Container minH='500px' maxW='100%' marginBottom='50px' marginTop='20px'>
       

            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/login" element={<Login/>}></Route>
               <Route path="/signUp" element={<SignUp />}></Route>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/accountInfo' element={<AccountInfo/>}/>

            </Routes>
      
    </Container>
  )
}

export default AllRoutes