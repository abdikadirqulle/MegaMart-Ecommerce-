import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartList = () => {

    
    const {value} = useSelector((state) => state.cart)
    const data = useSelector((state) => state.cart.default)

    const dispatch = useDispatch()

      const {name, image , oldPrice ,newPrice , index, save} = data
      let objectLength = Object.keys(data).length; 
      console.log(objectLength)
      console.log(data)
  return (
    <div>
      <div className="flex flex-col space-y-4 ">
        {/* {data ? (
          <div>
            <span>{data ? name : null}</span>
          </div>
        ) : null} */}

        {data && <div>{name}</div>} 
        <div>hellow name</div>
      </div>
    </div>
  );
}

export default CartList