import React from 'react'

const PhonesList = ({name, image , oldPrice ,newPrice , save}) => {
  return (
    <div className='flex'>
      <div className="w-[227px] h-[295px] border-[1px] border-Border border-solid  rounded-[16px]">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default PhonesList