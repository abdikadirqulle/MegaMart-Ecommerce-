import React from 'react'
import { useRecoilState } from 'recoil'
import { CaloryState } from "../Atom/Atom";

const CategoryCart = () => {
  const [showCategory, setShowCategory] = useRecoilState(CaloryState)
  // const categoriesdef = useSelector((store) => store.catagories.default)
 
  const {index, image ,name ,description} = showCategory
  return (
    <div className="max-w-6xl mx-auto mt-[9rem] h-screen py-4 w-full">
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="bg-Background1 rounded p-4 w-full h-full">
          <div className="flex justify-center items-center">
            <img src={image} className="w-[40rem]" alt="" />
          </div>
        </div>
        <div className="bg-White w-full p-2 h-full shadow">
          <div className="py-10 px-[1rem]">
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold text-2xl">{name}</h1>
              <h2 className="text-Light font-medium">{description}</h2>
              <span className="text-3xl font-mono text-Heading">$40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCart