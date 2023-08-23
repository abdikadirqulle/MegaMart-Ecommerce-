import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { FiSearch} from "react-icons/fi"
import { TfiMenuAlt} from "react-icons/tfi"
import {AiOutlineMenu, AiOutlineUser} from"react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../../features/counter/counterSlice'

const MiddleHeader = () => {


  const {value} = useSelector((state) => state.cart)


  const dispatch = useDispatch()

  return (
    <>
      <div className="max-w-6xl mx-auto h-[90px] items-center relative py-2 px-2">
        <div className="flex lg:justify-around justify-between items-center">
          <div className="flex items-center gap-2">
            <AiOutlineMenu className="w-[40px] h-[40px] cursor-pointer text-primary hover:duration-100 hover:bg-Background3 rounded-[10px] p-[4px]" />
            <Link to="/">
              <h1
                className="text-primary font-bold text-2xl curs"
              >
                MegaMart
              </h1>
            </Link>
          </div>

          <div className=" gap-4  flex">
            <form className="relative hidden md:flex">
              <input
                type="text"
                className="bg-Background3 text-Text text-[14px] pr-8 pl-10 outline-none rounded-md h-[48px] w-[507px]"
                placeholder="Search essentials, groceries and more..."
              />
              <FiSearch className="w-[18px] h-[18px] text-primary absolute top-4 left-3 cursor-pointer" />
              <TfiMenuAlt className="w-[18px] h-[18px] text-primary absolute top-4 right-3 cursor-pointer" />
            </form>

            <div className="flex gap-2 items-center">
              <Link to="/signUp">
                <div className="flex gap-2 cursor-pointer items-center ">
                  <AiOutlineUser className="sm:w-6 sm:h-6 w-9  h-9 text-primary cursor-pointer" />
                  <h1 className="text-Text hidden lg:block font-semibold text-[16px] hover:underline">
                    Sign Up/Sign In
                  </h1>
                  <div className="border-r-2 border-solid border-[#D9D9D9] mx-2 h-4 object-center"></div>
                </div>
              </Link>

              <div
                onClick={() => dispatch(setOpen())}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className='relative'>
                  <div className='w-6 h-6 rounded-full text-White text-xl  absolute -right-2 -top-2 md:-top-4 p-2  bg-[#e64040] flex items-center justify-center'>{value ? value : 0}</div>
                <RiShoppingCartLine className="sm:w-6 sm:h-6 w-9 h-9 cursor-pointer text-primary" />
                </div>
                <h1 className="text-Text hidden lg:block font-semibold text-[16px] hover:underline">
                  Cart
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleHeader