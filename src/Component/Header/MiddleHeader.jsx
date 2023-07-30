import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import {FiAlertCircle, FiSearch} from "react-icons/fi"
import {AiOutlineMenu, AiOutlineUser} from"react-icons/ai"

const MiddleHeader = () => {
  return (
    <div className='max-w-6xl mx-auto h-[90px] items-center  py-2 px-2'>
        <div className='flex lg:justify-around justify-between items-center'>
            <div className='flex items-center gap-2'>
                <AiOutlineMenu className='w-[40px] h-[40px] cursor-pointer text-primary hover:duration-100 hover:bg-Background3 rounded-[10px] p-[4px]'/>
                <h1 className='text-primary font-bold text-2xl curs'>MegaMart</h1>
            </div>

            <div className=' gap-4  flex'>
            <form className='relative hidden md:flex'>
                <input type="text" className='bg-Background3 text-Text text-[14px] pr-8 pl-10 outline-none rounded-md h-[48px] w-[507px]'  placeholder='Search essentials, groceries and more...' />
                <FiSearch className='w-[18px] h-[18px] text-primary absolute top-4 left-3 cursor-pointer'/>
                <FiAlertCircle className='w-[18px] h-[18px] text-primary absolute top-4 right-3 cursor-pointer'/>
            </form>

            <div className='flex gap-2 items-center'>
                <div className='flex gap-2 cursor-pointer items-center '>
                    <AiOutlineUser className="w-6 h-6 text-primary hover:bg-Background3 hover:rounded-full hover:duration-100  cursor-pointer" />
                    <h1 className='text-Text hidden lg:block font-semibold text-[16px] hover:underline'>Sign Up/Sign In</h1>
                    <div className='border-r-2 border-solid border-[#D9D9D9] mx-2 h-4 object-center'></div>
                    
                </div>

                <div className='flex items-center gap-2 cursor-pointer'>
                    <CiShoppingCart className='w-6 h-6 cursor-pointer text-primary' />
                    <h1 className='text-Text hidden lg:block font-semibold text-[16px] hover:underline'>Cart</h1>
                </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default MiddleHeader