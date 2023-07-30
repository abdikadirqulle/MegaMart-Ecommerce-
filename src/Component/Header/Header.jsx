import React from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  return (
    <div className="w-full z-50 bg-White">
      <div className="hidden lg:block">
        <TopHeader />
      </div>
      <div className="border-b border-solid  border-[#D9D9D9]">
        <MiddleHeader />
      </div>
      <div className="border-b border-solid border-[#D9D9D9]">
        <BottomHeader />
      </div>
    </div>
  );
}

export default Header