import React from 'react'
import {CiLocationOn ,CiDiscount1,CiDeliveryTruck} from "react-icons/ci"

const TopHeader = () => {
  return (
    <div className='bg-Background1  text-Text w-full h-[42px]'>
        <div className='flex justify-between items-center max-w-6xl mx-auto py-2'>
            <h1 className='text-Text text-[14px]'>Welcome to worldwide MegaMart!</h1>

            <div className='flex gap-2'>
                <div className='flex gap-2 items-center '>
                    <CiLocationOn className='w-6 h-6 text-primary'/>
                    <p className='text-Text text-[14px]' >Deliver to <span className='font-bold'>423651</span></p>
                </div>

                <div className='border-r border-solid border-[#D9D9D9] mx-2 h-6 object-center'></div>

                <div className='flex gap-2 items-center'>
                    <CiDeliveryTruck className='w-6 h-6 text-primary'/>
                    <p className='text-Text text-[14px]' >Track your order</p>
                </div>
               
                <div className='border-r border-solid border-[#D9D9D9] mx-2 h-6 object-center'></div>

                <div className='flex gap-2 items-center'>
                    <CiDiscount1 className='w-6 h-6 text-primary'/>
                    <p className='text-Text text-[14px]' >All Offers</p>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default TopHeader