import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setClose} from '../../features/counter/counterSlice';
import CartList from './cartPage/CartList';
import EmptyCart from "../../../public/empty-cart.png"
import './cartPage/cart.css';
import { Link } from 'react-router-dom';
import { useStateContext } from "../../context/StateContext";
// import { increment, decrement, setDeleteCart, setCart, setCartValue } from '../../features/cart/CartSlice';
import { decremented, incremented, setRemoveEssentialCart } from '../../features/products/productSlice';

const Cart = () => { 

  const {
    toggleCart,
    cartItem,
    // totalPrice,
    updateCartItemQty,
    handleCartItemRemove,
  } = useStateContext();

    const {value} = useSelector((state) => state.cart)
    const data = useSelector((state) => state.products.product)    // const {saveData} = useSelector((state) => state.cart)


    const dispatch = useDispatch();

    const totalPrice = data.map(item => item.cartPrice)

    let AllPrice = 0;
// iterate over each item in the array
for (let i = 0; i < totalPrice.length; i++ ) {
  AllPrice += totalPrice[i];
}



let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


    const handelDelete = (item) => {
      dispatch(setRemoveEssentialCart(item))
    }
  return (
    <>
      <>
        <div className="opac-bg">
          <div className="slide-cart-container">
            {data.length > 0 ? (
              <>
                <div className="cart-header">
                  <div className="slide-cart-title">
                    <h3>
                      Your Shopping Cart (
                      {data.length === 1
                        ? `one item`
                        : `${data.length} items`}
                      )
                    </h3>
                  </div>
                  <div
                    className="cart-close"
                    onClick={() => {
                      dispatch(setClose())
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="rgba(0,0,0,1)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cart-body">
                  {data.map((item, i) => (
                    <div key={i} className="cart-item">
                      <div className="cart-item-left">
                        <img
                          src={item.image}
                          alt="product img"
                          className="cart-item-img"
                          layout="fill"
                        />
                      </div>
                      <div className="cart-item-mid">
                        <h4 className="cart-item-title">{item?.name}</h4>
                        <span className="cart-item-code text-Text">
                          Item ID
                        </span>
                        <div className="gnt-changer-container">
                          <div
                            className="cart-qnt-changer qnt-minus"
                            onClick={() => {
                              dispatch(decremented(item))
                            }}
                          >
                            <span>&#8722;</span>
                          </div>
                          <div className="cart-qnt">{item?.cartQuantity}</div>
                          <div
                            className="cart-qnt-changer qnt-plus"
                              onClick={() => dispatch(incremented(item))}
                          >
                            <span>&#43;</span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item-right">
                        <div className="cart-item-price">{`${USDollar.format(item?.cartPrice)}`}</div>
                        <div
                          className="cart-item-remove"
                          onClick={() => handelDelete(item)}
                        >
                          <span>&#10006;</span>
                        </div>
                      </div>
                    </div>
                   ))} 
                </div>
                <div className="cart-footer">
                  <div className="cart-footer-title">Subtotal</div>
                  <div className="subtotal-container">
                    <span className="subtotal">{`${USDollar.format(AllPrice)}`}</span>
                    <div 
                    onClick={()=> {dispatch(setClose())}} 
                    className="add-to-cart-btn">
                      <button >
                        Go to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="cart-header">
                  <div className="slide-cart-title">
                    <h2 className='font-bold text-xl '>
                      Your Shopping Cart (
                      {data.length === 1
                        ? `one item`
                        : `${data.length} items`}
                      )
                    </h2>
                  </div>
                  <div
                    className="cart-close cursor-pointer w-8 h-8"
                    onClick={() => dispatch(setClose())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="rgba(0,0,0,1)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cart-empty">
                  <img
                    src={EmptyCart}
                    alt="Empty Cart"
                    width="150px"
                    height="150px"
                  />
                  <div>Your cart is empty</div>
                  <br />
                  <button
                    className="checkout"
                    onClick={() => dispatch(setClose())}
                  >
                    Keep Browsing
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
  }
  
  export default Cart
  
  









































//  <div className="relative w-full">
//       <div className="fixed w-[30em] pl-4 px-5 pt-4 flex flex-col gap-">
//         <div className="flex justify-between  font-bold">
//           <span className="font-bold text-xl">
//             Your Shopping Cart ({value} items)
//           </span>
//           <AiOutlineClose
//             className="w-6 h-6 cursor-pointer "
//             onClick={() => dispatch(setClose())}
//           />
//         </div>

//         {/* body */}
//         <div className="border-dashed mt-4 h-[28rem] bg- border-b-[2px] ">
//          <CartList />
//         </div>

//         {/* bottom */}
//         <div className="flex flex-col p-2 gap-2 w-full">
//           <h1 className="text-2xl font-medium text-Text">Subtotal</h1>
//           <div className="flex justify-between items-center">
//             <span className="font-semibold text-3xl">395$</span>
//             <button
//               className="p-4 border-[2px] border-Heading bg-Background2  text-Heading
//              hover:text-White hover:bg-Heading duration-100 ease-in-out text-md font-semibold"
//             >
//               Go to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>


// 