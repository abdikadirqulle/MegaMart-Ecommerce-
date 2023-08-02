import React from 'react'

const Essential = ({name, image ,priceSave,index}) => {
  return (
    <div>
         <div className='flex flex-col gap-4'> 
            <div className={`bg-Background1 cursor-pointer w-[132px] h-[132px] flex items-center justify-center rounded-[16px] ${index == 0 && "border-[1px] shadow-xl border-primary border-solid"}`}>
                <img src={image} className='w-[5rem]' alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[16px] cursor-pointer font-medium text-Text'>{name}</p>
                <h1 className='text-[20]px font-semibold text-Heading'>{priceSave}</h1>
            </div>
        </div>
    </div>
  )
}

export default Essential