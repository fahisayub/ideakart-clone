import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import { Login } from '../Authentication/Login'
import { SignUp } from '../Authentication/SignUp'
import Product from '../../pages/product/Product'
import Dashboard from '../../pages/dashboard/Dashboard'
import Products from '../../pages/AllProducts/Products'
import AccountInfo from '../../pages/accountInfo/AccountInfo'
import Notification from '../../pages/notification/Notification'
import EarnMoney from '../../pages/EarnMoney/EarnMoney'
import Search from '../../pages/Search/Search'
import Privacy from '../../pages/Privacy policy/Privacy'
import Refund from '../../pages/Refund/Refund'
import { Container } from '@chakra-ui/react'
const AllRoutes = () => {
  return (

    <Container minH='500px' maxW='100%' marginBottom='50px' marginTop='20px'>
       

            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path="/login" element={<Login/>}></Route>
              <Route path="/signUp" element={<SignUp />}></Route>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/accountInfo' element={<AccountInfo/>}/>
                <Route path='/notification' element={<Notification/>}/>
                <Route path='/earnmoney'element={<EarnMoney/>}/>
                <Route path='/search'element={<Search/>}/>
                <Route path='/privacy'element={<Privacy/>}/>
                <Route path='/refund'element={<Refund/>}/>

            </Routes>
      
    </Container>

  )
}

export default AllRoutes