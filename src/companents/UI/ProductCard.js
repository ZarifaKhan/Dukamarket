import productImg from "../../assets/images/product_01.1.webp";
import { Link } from "react-router-dom";

import soldbar from "../../assets/images/soldbar.jpg";
import "../../style/productCart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/CartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  // console.log(props.item);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img
          src={image01}
          alt="product-img"
          className="w-70px product__image"
        />
      </div>

      <div className="product__content">
        <h5 className="product__h5">
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>
        <div className="product__icon">
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
        </div>
        <div>
          <span className="product__price">${price}</span>
          <span>{/* <img src={soldbar} alt="soldbar" />*/}</span>
          {/*<div>
            <span>Sold:85</span>
            <span>Aviable:15</span>
  </div>*/}
        </div>
        <div className="addToCart">
          <button className="addToCart__btn" onClick={addToCart}>
            ADD TO CART
          </button>
        </div>
        <div>
          <button className="quick__view-btn">QUICK VEIW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
