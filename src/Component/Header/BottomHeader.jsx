import React from 'react'
import {BiChevronDown} from "react-icons/bi"
import { FiChevronDown } from 'react-icons/fi'

const BottomHeader = () => {
  return (
   <div className='max-w-6xl px-2 h-[69px] flex items-center justify-center   mx-auto py-2'>
    <div className='flex items-center gap-2   overflow-x-scroll no-scrollbar'>

      <div className='px-[14px] py-[9px] cursor-pointer bg-primary rounded-[18px] h-[] w-[] text-Background3 flex items-center gap-1'>
        <span className='text-Background3 text-[14px]  font-medium'>Groceries</span>
        <FiChevronDown className='h-4  b w-8' />
      </div>

      <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Premium Fruits</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div>


      <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Home & Kitchen</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div> 
        </div>

      <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Fashion</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div>


      <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Electronics</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div>


      <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Beauty</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div>

      {/* <div className='px-[14px] py-[9px] cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Home Improvement</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div> */}

      <div className='p-2 cursor-pointer bg-Background3 rounded-[18px]   flex items-center'>
        <div className=' text-Heading flex items-center gap-1'>
        <span className=' text-[14px]  font-medium'>Sports, Toys & Luggage</span>
        <FiChevronDown className='h-4 text-primary  b w-8' />
        </div>
      </div>

    </div>
   </div>
  )
}

export default BottomHeader