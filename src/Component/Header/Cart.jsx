import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import cart from '../../../Atom';

const Cart = () => { 
    const [showCart ,setShowCart] = useRecoilState(cart)

  return (
    <div className="relative ">
      <div className="text-Heading w-[15rem]  h-screen fixed">
        <AiOutlineClose
          className="w-8 h-8 cursor-pointer "
          onClick={() => setShowCart(false)}
        />
      </div>
    </div>
  );
}

export default Cart