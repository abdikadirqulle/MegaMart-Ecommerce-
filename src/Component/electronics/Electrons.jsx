// electronics images
import AppleLogo from "../../../public/electronics/Apple_logo.png"
import RealMeLOgo from "../../../public/electronics/Realme_logo.png"
import RealmePHone from "../../../public/electronics/RealMe.png"
import XiaomiLogo from "../../../public/electronics/Xiaomi_logo_.png"
import XiaomiPhone from "../../../public/electronics/Xiaomi-phone.png"
import ApplePhone from "../../../public/iphone 12 pro max.png"
import { AiFillApple } from "react-icons/ai"


const Electrons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {/* Iphone */}
      <div className="w-[389px] h-[207px] rounded-[16px] cursor-pointer relative overflow-hidden bg-[#313131]">
        <div className="flex gap-[1rem] p-4 text-White z-50">
          <div className="z-40 flex flex-col space-y-4 ">
            <div className="w-[99px] h-[33px] rounded-[8px] bg-[#494949] flex items-center justify-center">
              <h1 className="text-[14px] px-[20px] py-[10px] font-light">
                IPHONE
              </h1>
            </div>
            <AiFillApple className="text-Heading bg-White rounded-[16px] w-[62px] h-[62px]" />
            <h2 className="text-[20px] font-semibold">UP to 50% OFF</h2>
          </div>
          <div className="z-40">
            <img src={ApplePhone} className="w-[10rem]" alt="" />
          </div>
        </div>
        {/* rectangles */}
        <div className="w-[226px] h-[226px] bg-[#404040] rounded-full z-10 absolute -top-[4rem] -right-[4rem]" />
        <div className="w-[246px] h-[246px] rounded-full z-10 border border-[#414141] absolute -top-[4.6rem] -right-[4.6rem]" />
      </div>

      {/* RealMe */}
      <div className="w-[389px] h-[207px] rounded-[16px] cursor-pointer relative overflow-hidden bg-[#FFF3CC]">
        <div className="flex gap-[5rem] p-4 text-Heading z-40">
          <div className="z-40 flex flex-col space-y-4 ">
            <div className="w-[99px] h-[33px] rounded-[8px] bg-[#F6DE8D] flex items-center justify-center">
              <h1 className="text-[14px] px-[20px] py-[10px] font-light">
                README
              </h1>
            </div>
            <div className="w-[114px]">
              <img src={RealMeLOgo} alt="" className="" />
            </div>
            <h2 className="text-[20px] font-semibold">UP to 50% OFF</h2>
          </div>
          <div className="z-40 ">
            <img src={RealmePHone} className="w-[7rem]" alt="" />
          </div>
        </div>
        {/* rectangles */}
        <div className="w-[226px] h-[226px]  bg-[#F6DE8D] rounded-full absolute -top-[4rem] -right-[4rem]" />
        <div className="w-[246px] h-[246px] rounded-full border border-[#F6DE8D] absolute -top-[4.6rem] -right-[4.6rem]" />
      </div>

      {/* xiaomi */}
      <div className="w-[389px] h-[207px] cursor-pointer rounded-[16px] relative overflow-hidden bg-[#FFECDF]">
        <div className="flex gap-[1rem] p-4 text-Heading z-40">
          <div className="z-40 flex flex-col space-y-4 ">
            <div className="w-[99px] h-[33px] rounded-[8px] bg-[#FFD1B0] flex items-center justify-center">
              <h1 className="text-[14px] px-[20px] py-[10px] font-light">
                XIAOMI
              </h1>
            </div>
            <div className="w-[114px]">
              <img src={XiaomiLogo} alt="" className="w-[67px]"/>
            </div>
            <h2 className="text-[20px] font-semibold">UP to 50% OFF</h2>
          </div>
          <div className="z-40 ">
            <img src={XiaomiPhone} className="w-[11rem]" alt="" />
          </div>
        </div>
        {/* rectangles */}
        <div className="w-[226px] h-[226px] bg-[#FFD1B0] rounded-full absolute -top-[4rem] -right-[4rem]" />
        <div className="w-[246px] h-[246px] rounded-full border border-[#FFD1B0] absolute -top-[4.6rem] -right-[4.6rem]" />
      </div>
    </div>
  );
}

export default Electrons