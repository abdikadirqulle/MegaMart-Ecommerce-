import React from 'react'
import {BiChevronDown} from "react-icons/bi"
import { FiChevronDown } from 'react-icons/fi'

const BottomHeader = () => {
  const lists = [
    {
      name: <span className='text-Background3 text-[14px]  font-medium'>Groceries</span> ,
      icon: < FiChevronDown className='h-4 text-Background3  w-8'/>
    },
    {
      name: "Premium Fruits",
      icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    },
    {
      name: "Home & Kitchen",
      icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    },
    {
      name: "Fashion",
      icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    },
    {
      name: "Electronics",
      icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    },
    {
      name: "Beauty",
      icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    },
    // {
    //   name: "Home Improvement",
    //   icon: < FiChevronDown className='h-4 text-primary   w-8'/>
    // },
    {
      name: "Sports, Toys & Luggage",
      icon: < FiChevronDown className='h-4 text-primary   w-8' />
    },
  ]
  return (
   <div className='max-w-6xl px-2 h-[69px] flex items-center justify-start   mx-auto py-2'>
    <div className='flex items-center gap-2   overflow-x-scroll no-scrollbar'>

       {lists.map((list,index) => (
          <div key={index} className={`px-[14px] py-[9px] cursor-pointer bg-Background3  ${index == 0 && "bg-primary"} rounded-[18px]   flex items-center`}>
            <div className=' text-Heading flex items-center gap-1'>
              <span className='text-[14px]  font-medium'>{list.name}</span>
              {list.icon}
            </div>
          </div>
        ))}
       
    </div>
   </div>
  )
}

export default BottomHeader