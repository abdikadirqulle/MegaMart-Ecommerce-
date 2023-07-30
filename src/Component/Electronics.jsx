import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const Electronics = () => {
  return (
    <div className='max-w-6xl mx-auto  mt-[127px]'>
    <div className='flex flex-col space-y-4'>
    <div className='flex relative justify-between items-center mb-10'>
            <div className='relative'>
                <h1 className='text-[14px] font-semibold'>Top <span className='text-primary'>Electronics Brands</span></h1>
                <div className='bg-primary w-full h-[3px] absolute top-8  rounded-full mt- '></div>
            </div>

            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='font-medium text-[16px] '>View All </p>
                <AiOutlineRight  className='w-4 text-primary h-4'/> 
            </div>
        <div className='bg-Border w-full h-[1px]  absolute top-8 left-0 rounded-full '></div>
        </div>
    </div>
</div>
  )
}

export default Electronics