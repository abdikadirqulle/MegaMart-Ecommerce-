import React from 'react'
import Home from "../Component/Home/Home";
import SmartPhones from '../Component/smartPhones/SmartPhones'
import Categories from '../Component/Categories/Categories'
import Electronics from '../Component/electronics/Electronics'
import Essentials from '../Component/Essential/Essentials'
import Footer from '../Component/Footer/Footer';

const Hero = () => {
  return (
    <div className="">
      <div className="mt-[8rem] mx-2">
        <Home />
        <SmartPhones />
        <Categories />
        <Electronics />
        <Essentials />
        <Footer />
      </div>
    </div>
  )
}

export default Hero