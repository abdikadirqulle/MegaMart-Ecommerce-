import React from 'react'
import { useRecoilState } from 'recoil'
import { CaloryState } from "../Atom/Atom";

const CategoryCart = () => {
  const [showCategory, setShowCategory] = useRecoilState(CaloryState)

  return (
    <div className='px-4 my-[13rem]'>CategoryCart</div>
  )
}

export default CategoryCart