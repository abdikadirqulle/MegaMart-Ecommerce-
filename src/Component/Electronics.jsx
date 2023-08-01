import { AiOutlineRight } from 'react-icons/ai'
import Electrons from './electronics/Electrons';
const Electronics = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-[127px]">
      <div className="flex relative flex-col space-y-4">
        <div className="flex relative justify-between items-center mb-10">
          <div className="relative">
            <h1 className="text-[14px] font-semibold">
              Top <span className="text-primary">Electronics Brands</span>
            </h1>
            <div className="bg-primary w-full h-[3px] absolute top-8  rounded-full mt- "></div>
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <p className="font-medium text-[16px] ">View All </p>
            <AiOutlineRight className="w-4 text-primary h-4" />
          </div>
          <div className="bg-Border w-full h-[1px]  absolute top-8 left-0 rounded-full "></div>
        </div>

        {/* lists of electronics */}

        <div className="">
          <Electrons />
        </div>

        <div className="flex gap-4 items-center absolute -bottom-8 left-1/2 cursor-pointer text-White">
          <div className="  w-[114px] h-2 relative">
            <div className="w-2 h-2 left-[31px] top-0 absolute bg-Line rounded-full" />
            <div className="w-2 h-2 left-[46px] top-0 absolute bg-Line rounded-full" />
            <div className="w-2 h-2 left-[61px] top-0 absolute bg-Line rounded-full" />
            <div className="w-2 h-2 left-[76px] top-0 absolute bg-Line rounded-full" />
            <div className="w-2 h-2 left-[91px] top-0 absolute bg-Line rounded-full" />
            <div className="w-2 h-2 left-[106px] top-0 absolute bg-Line rounded-full" />
            <div className="w-6 h-2 left-0 top-0 absolute bg-primary rounded-[7px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electronics