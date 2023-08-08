import React from 'react'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Cart from './Component/Header/Cart';
import { useRecoilState } from 'recoil';
import cart from "./Component/Atom/Atom"

const App = () => {
  const [showCart ,setShowCart] = useRecoilState(cart)
  return (
    <>
      <div className="relative">
        <div className="flex  flex-col gap-10">

          <div className="fixed  w-full z-50">
            <Header />
          </div>

          <Outlet />
        </div>

        {showCart ? (
          <div className="w-[16rem] rounded h-full bg-Background3 text-Heading p-4 absolute z-50 top-0 right-0">
          <Cart />
           </div>
        ) : null}
        
      </div>
    </>
  );
}

export default App