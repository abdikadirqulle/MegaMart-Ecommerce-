import React from 'react'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Cart from './Component/Header/Cart';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {open} = useSelector((store) => store.counter)

  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative">
        <div className="flex  flex-col gap-10">
          <div className="fixed  w-full z-50">
            <Header />
          </div>

          <Outlet />
        </div>

        {open ? (
          <div className="">
            <Cart />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App