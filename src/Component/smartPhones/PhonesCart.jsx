import React from 'react'
import { phonesState } from '../Atom/Atom'
import { useRecoilState } from 'recoil'

const PhonesCart = () => {
    const [showPhones, setShowPhones] = useRecoilState(phonesState)

    const {name, image , oldPrice ,newPrice , index, save} = showPhones
    return (
    <div className="max-w-6xl mx-auto mt-[9rem] h-screen py-4 w-full">
    <div className="flex justify-between flex-col md:flex-row ">
      <div className="bg-Background1 rounded p-4 w-full h-full">
        <div className="flex justify-center items-center">
          <img src={image} className="w-[30rem]" alt="" />
        </div>
      </div>
      <div className="bg-White w-full p-2 h-full shadow">
        <div className='py-10 pl-[1rem]'>
          <div className=' flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <span className='text-3xl font-mono text-Heading'>{newPrice}</span>
            <h2 className='text-Green font-bold'>{save}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PhonesCart




