import React from 'react'
import Products from '../../pages/AllProducts/Products'
import EarnMoney from '../../pages/EarnMoney/EarnMoney'



const Home = () => {
  return (
    <div>
        <h1>Home
          <Products></Products>
          <EarnMoney></EarnMoney>
        </h1>
    </div>
  )
}

export default Home