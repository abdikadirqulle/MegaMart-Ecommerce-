import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setEssentialData } from '../../features/essential/essentialsSlice'

const Essential = ({id, name, image ,priceSave,index, description,newPrice}) => {



  const date = {name, image ,priceSave,index ,id ,description, newPrice}

  const dispatch = useDispatch()
  
  const sendData = () => {
    dispatch(setEssentialData(date))
  }

  return (
    <div>
         <div className='flex flex-col gap-4'> 
         <Link to={`/essentialCart/${id}`} onClick={sendData}>
            <div className={`bg-Background1 cursor-pointer w-[132px] 
            h-[132px] flex items-center justify-center rounded-[16px] ${index == 0 && ""}  
            border-solid border-[1px] border-Border hover:border-primary  duration-500 ease-in-out hover:shadow-2xl`}>
                <img src={image} className='w-[5rem]' alt="essential"/>
            </div>
         </Link>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-[16px] cursor-pointer font-medium text-Text'>{name}</p>
                <h1 className='text-[20]px font-semibold text-Heading'>{priceSave}</h1>
            </div>
        </div>
    </div>
  )
}

export default Essential