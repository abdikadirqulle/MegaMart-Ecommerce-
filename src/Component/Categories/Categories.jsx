import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { categories } from '../../../public/AllPhones'
import Category from './Category'

const Categories = () => {
  return (
    <div className='max-w-6xl mx-auto  mt-[127px]'>
        <div className='flex flex-col space-y-4'>
        <div className='flex relative justify-between items-center mb-10'>
                <div className='relative'>
                    <h1 className='text-[14px] font-semibold'>Shop <span className='text-primary'>From Top Categories </span></h1>
                    <div className='bg-primary w-full h-[3px] absolute top-8  rounded-full mt- '></div>
                </div>

                <div className='flex gap-1 items-center cursor-pointer'>
                    <p className='font-medium text-[16px] '>View All </p>
                    <AiOutlineRight  className='w-4 text-primary h-4'/> 
                </div>
            <div className='bg-Border w-full h-[1px]  absolute top-8 left-0 rounded-full '></div>
            </div>
        </div>

        {/* all categories */}

        <div className='flex flex-wrap md:flex-row gap-6 md:gap-9 justify-center items-center'>
          {categories.map((category,index) => (
            <Category {...category} key={index} index={index}/>
          ))}
        </div>
    </div>
  )
}

export default Categories