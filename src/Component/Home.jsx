import React from 'react'
import AppleWatch from "../../public/apple watch.png"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
const Home = () => {
  return (
    <div className="max-w-6xl mx-auto h-[316px] bg-[#202844]  rounded-2xl relative">
      <div className="flex justify-between items-center h-full relative overflow-hidden  rounded-2xl px-[5rem]">
        <div className=" flex flex-col space-y-2 pt-9 h-full relative">
          <h1 className="text-3xl text-White font-medium leading-[30px]">
            Best Deal Online on smart watches
          </h1>
          <h1 className="text-White text-[63px] font-bold leading-[63px]">
            SMART WEARABLE.
          </h1>
          <span className="text-White text-3xl font-medium  leading-[30px]">
            UP to 80% OFF
          </span>

          {/* <div className="w-[114px] h-2 relative">
            <div className="w-2 h-2 left-[31px] top-0 absolute bg-white rounded-full" />
            <div className="w-2 h-2 left-[46px] top-0 absolute bg-white rounded-full" />
            <div className="w-2 h-2 left-[61px] top-0 absolute bg-white rounded-full" />
            <div className="w-2 h-2 left-[76px] top-0 absolute bg-white rounded-full" />
            <div className="w-2 h-2 left-[91px] top-0 absolute bg-white rounded-full" />
            <div className="w-2 h-2 left-[106px] top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-2 left-0 top-0 absolute bg-white rounded-[7px]" />
          </div> */}
          <div className="flex gap-4 items-center absolute bottom-12 left-1 cursor-pointer text-White">
            <div className="  w-[114px] h-2 relative">
              <div className="w-2 h-2 left-[31px] top-0 absolute bg-White rounded-full" />
              <div className="w-2 h-2 left-[46px] top-0 absolute bg-White rounded-full" />
              <div className="w-2 h-2 left-[61px] top-0 absolute bg-White rounded-full" />
              <div className="w-2 h-2 left-[76px] top-0 absolute bg-White rounded-full" />
              <div className="w-2 h-2 left-[91px] top-0 absolute bg-White rounded-full" />
              <div className="w-2 h-2 left-[106px] top-0 absolute bg-White rounded-full" />
              <div className="w-6 h-2 left-0 top-0 absolute bg-White rounded-[7px]" />
            </div>
          </div>
        </div>

        {/* watch */}

        <div className="z-40">
          <img
            src={AppleWatch}
            alt="apple watch"
            className="w-[268px]  h-[270px]"
          />
        </div>

        <div className="absolute  -top-[20rem]  right-2 w-[480px] h-[480px] bg-[#2C3454]  rounded-full" />
        <div className="w-[516px] absolute -top-[21rem] -right-2 h-[516px] rounded-full border border-[#3C466B]" />

        {/* <div className="w-[148px] absolute  -bottom-[20rem]  right-2 h-[147px] bg-slate-700 rounded-full" >ff</div>
      <div className="w-[177px] absolute  -bottom-[20rem]  right-2 h-[177px] rounded-full border border-[#3C466B]" >d</div> */}
      </div>

      {/* war wareegyada relative */}

      <div
        className="bg-Background3 text-primary cursor-pointer rounded-full w-[86px] h-[86px] 
      absolute top-[110px] -left-10
      border-8 border-solid border-White items-center justify-center flex"
      >
        <AiOutlineLeft className="w-8  h-8" />
      </div>
      <div
        className="bg-Background3 text-primary cursor-pointer rounded-full w-[86px] h-[86px] 
      absolute top-[110px] -right-10
      border-8 border-solid border-White items-center justify-center flex"
      >
        <AiOutlineRight className="w-8  h-8" />
      </div>
    </div>
  );
}

export default Home