import React from 'react'

const Category = ({name,image,index}) => {
  return (
    <div className=''>
        <div className='flex flex-col gap-4'> 
            <div className={`bg-Background1 cursor-pointer w-[132px] h-[132px] flex items-center justify-center rounded-full ${index == 0 && "border-[1px] shadow-xl border-primary border-solid"}`}>
                <img src={image} className='w-[5rem]' alt="" />
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-[16px] cursor-pointer font-medium'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Category