import React from 'react'

const FooterDetailsList = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row duration-500 gap-8">
        <div className="relative">
          <h1>Most Popular Categories</h1>
          <div className="w-full h-[3px] bg-Border absolute top-9 left-0"></div>

          <ul className="mt-10 list-disc text-[16px] font-light space-y-4">
            <li className=''>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care </li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits </li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        <div className="relative">
          <h1>Customer Services</h1>
          <div className="w-full h-[3px] bg-Border absolute top-9  left-0"></div>

          <ul className='mt-10 list-disc px-2 text-[16px] font-normal space-y-4'>
            <li className=''>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy </li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterDetailsList