import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{increment ,decrement} from "../../features/counter/counterSlice"
import { setCart, setCartValue } from '../../features/cart/CartSlice'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../../context/StateContext'
import { setproductData } from '../../features/products/productSlice'

const PhonesCart = () => {

  const {setCartItems ,cartItems} = useStateContext()

    const counterSlice = useSelector((store) => store.counter.default)
    const value = useSelector((store) => store.counter.value)
    const data = useSelector((store) => store.cart.default)
    
    const dispatch = useDispatch();

    const {name, image , oldPrice ,newPrice , index, save ,id} = counterSlice

    const sendValue = () => {

      dispatch(setproductData(counterSlice))
       toast.success( value > 1
        ? `${value} Products added to the cart.`
        : `One product added to your cart.`)
      // dispatch(setCartValue(value)),
      
      //   dispatch(setCart([...data, counterSlice]))
    } 
    
    return (
      <div className="max-w-6xl mx-auto mt-[9rem] h-screen py-4 w-full">
        <div className="flex justify-between flex-col md:flex-row ">
          <div className="bg-Background1 rounded p-4 w-full h-full">
            <div className="flex justify-center items-center">
              <img src={image} className="w-[30rem]" alt="" />
            </div>
          </div>
          <div className="bg-White w-full p-2 h-full shadow">
            <div className="py-10 pl-[1rem]">
              <div className=" flex flex-col gap-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <span className="text-3xl font-mono text-Heading">
                  {newPrice}$
                </span>
                <h2 className="text-Green font-bold">{save}</h2>
              </div>
            </div>
            <div className="flex  items-center space-x-4">
              <span className="font-medium  text-xl ">Quantity:</span>
              <div className="flex  w-[12rem] justify-between items-center gap-2 p- rounded bg-Background3 shadow">
                <button
                  onClick={() => dispatch(decrement())}
                  className=" shadow px-4 text-4xl rounded-sm py-2 cursor-pointer"
                >
                  -
                </button>
              <span   className=" shadow outline-none  px-4 text-2xl bg-Border rounded-sm py-2 cursor-pointer" >{value}</span>
                <button
                  onClick={() => dispatch(increment())}
                  className=" shadow px-4 text-4xl rounded-sm py-2 cursor-pointer"
                >
                  +
                </button>
              </div>
              <div className="text-md cursor-pointer text-White font-semibold bg-[#e23c3c] rounded px-2 py-4 text-center">
                <button type='button' onClick={sendValue}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PhonesCart




