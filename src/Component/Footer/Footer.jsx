import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import Apple from "../../../public/apple store.png"
import PlayStore from "../../../public/playstore.png"
import FooterDetailsList from './FooterDetailsList'


const Footer = () => {

  const d = new Date();
  let data = d.getFullYear();


  return (
    <div className="bg-primary w-full text-White relative overflow-hidden h-[592px]">
      <div className="max-w-6xl relative mx-auto py-12 z-40 h-full">
        <div className="flex items-start gap-14 ">
          <div className="flex flex-col gap-6">
            {/* logo */}
            <h1 className="font-bold text-[2rem]">MegaMart</h1>
            {/* contact */}
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-medium text-White">Contact Us</p>
              {/* whatsapp  */}
              <div className="flex items-start gap-2 ">
                <AiOutlineWhatsApp className="w-[21px] h-[21px]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-normal">Whats App</p>
                  <span className="text-[16px] font-normal">
                    +1 234-567-8902
                  </span>
                </div>
              </div>
              {/* phone us */}
              <div className="flex items-start gap-2 ">
                <FiPhoneCall className="w-[21px] h-[21px]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-normal">Phone Us</p>
                  <span className="text-[16px] font-normal">
                    +1 234-567-8902
                  </span>
                </div>
              </div>
            </div>

            {/* links */}
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-[20px]">Download App</h1>

              <div className=" flex items-center gap-4">
                {/* appleStore */}
                <div className="w-44 cursor-pointer">
                  <img src={Apple} alt="" />
                </div>
                {/* playStore */}
                <div className="w-48 cursor-pointer">
                  <img src={PlayStore} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* details */}
          <FooterDetailsList />
        </div>

        {/* last footer */}
        <div className="absolute bottom-2 left-0 border-t border-solid   border-[#05ABF3] text-center bg- w-full h-10 ">
          <div className="py-2">
            <p className="text-[18px] font-light ">
              © {data} All rights reserved. Reliance Retail Ltd.
            </p>
          </div>
        </div>
      </div>

      {/* warwareegyada */}
      <div className="w-[467.08px] h-[467.08px] absolute -top-[9rem] -right-[9rem] rounded-full border border-[#05ABF3]" >f</div>
      <div className="w-[434.49px] h-[434.49px] absolute -top-[8rem] -right-[8rem] bg-[#0C9BDA] rounded-full" >s</div>
    </div>
  );
}

export default Footer