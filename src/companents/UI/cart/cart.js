import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../store/shopping-cart/cartUISlice";
import "../../../style/shopping-cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="fa fa-light fa-xmark"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item add to cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center w-100">
          <h6>
            Total<span>${totalAmount}</span>
          </h6>
          {/*<button>
            <Link>VIEW CART</Link>
  </button>*/}

          <button className="checkout">
            <Link to="/">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
