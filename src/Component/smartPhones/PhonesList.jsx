import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { phonesState } from '../Atom/Atom';
import { data } from 'autoprefixer';
import { useDispatch, useSelector } from 'react-redux';
import { setcounters } from '../../features/counter/counterSlice';

const PhonesList = ({name, image , oldPrice ,newPrice , index, save}) => {

  const id = index;
  const data = { name, image, oldPrice, newPrice, index, save };

  const counterSlice = useSelector((store) => store.counter.default)
  const dispatch = useDispatch()

  const sendData = () => {
    dispatch(setcounters(data))
  };
  return (
    <div className="flex">
      <Link to={`/phones/${id}`} onClick={sendData}>
        <div
          className={`w-[227px] relative h-[295px] border-[1px] border-Border overflow-hidden ${
            index == 1 && "border-primary shadow-2xl"
          } border-solid  bg-Background1 rounded-[16px]`}
        >
          {/* image */}
          <div className="flex justify-center items-center cursor-pointer pt-6">
            <img src={image} className="w-[8rem]" alt="" />
          </div>

          {/* circle */}
          <div className="w-[52px] h-[53px] bg-primary text-White rounded-bl-[16px] flex items-center justify-center rounded-tr-[16px] absolute top-0 right-0">
            <h1 className="text-[14px] text-center font-medium">56% OFF</h1>
          </div>

          <div className="absolute bg-White text-Heading cursor-pointer w-[230px] overflow-hidden bottom-0 h-[107px]">
            <div className="flex flex-col pl-2  py-2">
              <h1 className="text-[16px] font-semibold">{name}</h1>
              <div className="flex gap-2 ">
                <span className="text-[16px] font-bold text-Heading">
                  {newPrice}
                </span>
                <span className="text-[1rem] font-normal line-through	">
                  {oldPrice}
                </span>
              </div>
              <div className="bg-Border w-[201px] h-[1px] my-2"></div>
              <h2 className="text-[16px] font-medium  text-Green">{save}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 

export default PhonesList