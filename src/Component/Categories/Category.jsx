import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryData } from '../../features/categories/CategorySlice';


const Category = ({name,image,index,description,save,newPrice,id}) => {

    

   const data = {name,index, image ,description,newPrice,save,id}
  

  const dispatch = useDispatch()

  const sendData =() => {
    dispatch(setCategoryData(data))
  }
  return (
    <div className=''>
        <div className='flex flex-col gap-4'> 
        <Link to={`/categories/${id}`} onClick={sendData}>
            <div className={`bg-Background1 cursor-pointer w-[132px] h-[132px] flex items-center justify-center rounded-full ${index == 0 && "border-[1px] shadow-xl border-primary border-solid"}`}>
                <img src={image} className='w-[5rem]' alt=""/>
            </div>
        </Link>
            <div className='flex items-center justify-center'>
                <p className='text-[16px] cursor-pointer font-medium'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Category