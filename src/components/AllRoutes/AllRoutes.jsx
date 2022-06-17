import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../About/About'
import Contact from '../Contact/Contact'







import Product from '../../pages/product/Product'
import Dashboard from '../../pages/dashboard/Dashboard'
import Products from '../../pages/AllProducts/Products'
import Signup from '../../pages/Signup/SignUp'
import Signin from '../../pages/Signin/SignIn'
import AccountInfo from '../../pages/accountInfo/AccountInfo'
import { Container } from '@chakra-ui/react'



const AllRoutes = () => {
  return (
    
    <Container minH='500px' maxW='100%' marginBottom='50px' marginTop='20px'>
       
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/accountInfo' element={<AccountInfo/>}/>
            </Routes>
      
    </Container>
  )
}

export default AllRoutes