import React from 'react'
import Header from '../Component/Header/Header'
import Home from '../Component/Home/Home'
import SmartPhones from '../Component/smartPhones/SmartPhones'
import Categories from '../Component/Categories/Categories'
import Electronics from '../Component/electronics/Electronics'
import Essentials from '../Component/Essential/Essentials'

const Hero = () => {
  return (
    <div className="">
      
      <div className="mt-[14rem] mx-2">
        <Home />
        <SmartPhones />
        <Categories />
        <Electronics />
        <Essentials />
      </div>
    </div>
  )
}

export default Hero