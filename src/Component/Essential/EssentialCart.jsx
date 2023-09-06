import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/cart/CartSlice'
import { setproductData } from '../../features/products/productSlice'

const EssentialCart = () => {
  
  const {product} = useSelector(state => state.essentials)
  const {value} = useSelector(state => state.cart)

  const { name, image, priceSave, index, id, newPrice ,description} = product;

  const dispatch = useDispatch()

  const sendData = () => {
    dispatch(setproductData(product))
  }

    return (
      <>
      <section className="product-details mt-[6rem]">
        <div className="container">
          <div className="product-details-container">
            <div className="product-left">
              <div className="product-visualls">
                <div className="main-img-container ">
                  <img
                  src={image}
                  alt="Pop-up Toaster, white, 45cm  "
                    className="main-img"
                  />
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="devider"></div>
              <div className="item-ids">
                <div className="item-title">{name}</div>
                <div className="item-code">Item Code</div>
              </div>
              <div className="product-right-details">
                <div className="item-desc">{description}</div>
                <div className="item-mid">
                  <span className="item-mid-title">Quantity:</span>
                  <div className="quantity">
                    <button 
                    onClick={() => dispatch(decrement())}
                     className="minus qnt-changer">
                      <span>&#8722;</span>
                    </button>
                    <div className="item-qty">{value}</div>
                    <button className="plus qnt-changer" 
                    onClick={() => dispatch(increment())} >
                      <span>&#43;</span>
                    </button>
                  </div>
                  <div className="item-price">
                    {value == 0 ? newPrice + ".00$" : (
                      Number(newPrice * value).toFixed(2) + "$"
                    )}
                  </div>
                </div>
                <div className="item-footer">
                  <button
                    className="add-to-cart-btn"
                    onClick={sendData}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="buy-now-btn"
                    onClick={() => {
                      // handleBuyNow(product);
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
    
}

export default EssentialCart  
