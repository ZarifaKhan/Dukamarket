import { Link } from "react-router-dom";
import soldbar from "../../assets/images/soldbar.jpg";
import "../../style/sliderProductCart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/CartSlice";
import products from "../../assets/fake data/products";
import { favoriteActions } from "../WishyList/favoriteSlice";
const SliderProductCart = (props) => {
  const { id, title, image01, price } = props.item;
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

  const addToFavorite = () => {
    dispatch(
      favoriteActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__slider">
      <div className="product__slider-img">
        <img
          src={image01}
          alt="product-img"
          className="w-70px product__slider__image"
        />
      </div>
      <div className="slider__icons">
        <i class="ri-eye-line"></i>
        <span onClick={addToFavorite}>
          <i class="fa fa-thin fa-heart"></i>
        </span>
      </div>

      <div className="product__slider-content">
        <h5 className="product__slider-h5">
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>
        <div className="product__slider-icon">
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
        </div>
        <div>
          <span className="product__slider-price">${price}</span>
          <span>
            {" "}
            <img src={soldbar} alt="soldbar" className="soldbar" />
          </span>
          <div className="sold">
            <span>Sold:85</span>
            <span>Aviable:15</span>
          </div>
        </div>
        <div className="addToCart">
          <button className="addToCart__slider-btn" onClick={addToCart}>
            {products.price === 210.0 ? "OUT OF STOCK" : "ADD TO CART"}
            {/* ADD TO CART */}
          </button>
        </div>
        <div>
          {/* <button className="quick__view-btn">QUICK VEIW</button>*/}
        </div>
      </div>
    </div>
  );
};

export default SliderProductCart;
