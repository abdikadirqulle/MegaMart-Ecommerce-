import { useDispatch, useSelector } from 'react-redux';
import { setClose} from '../../../features/counter/counterSlice';
import EmptyCart from "../../../../public/empty-cart.png"
import './cart.css';
import { decremented, incremented, setRemoveEssentialCart } from '../../../features/products/productSlice';


const Cart = () => { 

    const {value} = useSelector((state) => state.cart)
    const data = useSelector((state) => state.products.product)    


    const dispatch = useDispatch();

    const totalPrice = data.map(item => item.cartPrice)

    let AllPrice = 0;

    for (let i = 0; i < totalPrice.length; i++) {
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
  
  