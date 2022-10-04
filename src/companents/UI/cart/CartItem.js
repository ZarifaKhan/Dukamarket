import { ListGroupItem } from "reactstrap";
import "../../../style/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/CartSlice";
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="cart__item">
      <div className="cart__item-info d-flex gap-2 cart__item">
        <img src={image01} alt="product-img" />

        {/*<div>
          <h5>Shopping Cart</h5>
  </div>*/}
        <div className="cart__product-info d-flex align-items-center gap-4 w-100 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x<span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="fa fa-light fa-plus"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="fa fa-light fa-minus"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i class="fa fa-thin fa-xmark"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
